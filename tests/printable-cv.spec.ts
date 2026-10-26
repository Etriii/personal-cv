import { expect, test } from '@playwright/test'

test('Home and About provide a CV preview with a working native print button', async ({ page }) => {
  await page.addInitScript(() => {
    const state = window as Window & { cvPrintCalls: number }
    state.cvPrintCalls = 0
    window.print = () => { state.cvPrintCalls++ }
  })
  await page.goto('/')
  await page.getByRole('link', { name: 'Print CV', exact: true }).click()
  await expect(page).toHaveURL('/cv')
  await expect(page).toHaveTitle(/^Printable CV/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Alex, Jr. A. Aparece')
  await expect(page.locator('#main-content')).toBeFocused()
  await page.getByRole('button', { name: 'Print / Save as PDF' }).click()
  await expect.poll(() => page.evaluate(() => (window as Window & { cvPrintCalls: number }).cvPrintCalls)).toBe(1)
  await page.getByRole('link', { name: 'Back to About' }).click()
  await expect(page.locator('body')).not.toHaveClass(/cv-document-open/)
  await page.emulateMedia({ media: 'print' })
  await expect(page.getByRole('banner')).toBeVisible()
  await expect(page.locator('body')).not.toHaveCSS('page', 'cv-document')
  await page.emulateMedia({ media: 'screen' })
  await page.getByRole('link', { name: 'Print CV', exact: true }).click()
  await expect(page).toHaveURL('/cv')
  await expect(page.locator('body')).toHaveClass(/cv-document-open/)
})

test('CV preview fits mobile and desktop and prints without website chrome', async ({ page }, testInfo) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/cv')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const size = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }))
    expect(size.content).toBeLessThanOrEqual(size.viewport)
    await expect(page.locator('.cv-sheet')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    if (width === 1440) {
      await page.screenshot({ path: testInfo.outputPath('cv-preview-desktop.png'), fullPage: true, animations: 'disabled' })
    }
  }
  await page.reload()
  await expect(page).toHaveTitle(/^Printable CV/)
  await expect(page.locator('.cv-sheet')).toBeVisible()
  await page.emulateMedia({ media: 'print' })
  await expect(page.getByRole('banner')).toBeHidden()
  await expect(page.getByRole('contentinfo')).toBeHidden()
  await expect(page.locator('.cv-toolbar')).toBeHidden()
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(page.locator('.cv-sheet')).toHaveCSS('color', 'rgb(23, 36, 47)')
  await expect(page.getByRole('link', { name: 'alexarnaizapece@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:alexarnaizapece@gmail.com')
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0)
})

test('CV exports as one A4 PDF page', async ({ page }, testInfo) => {
  await page.goto('/cv')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.evaluate(() => document.fonts.ready)
  const pdf = await page.pdf({
    path: testInfo.outputPath('alex-aparece-cv.pdf'),
    format: 'A4',
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    printBackground: false,
  })
  expect(pdf.subarray(0, 5).toString()).toBe('%PDF-')
  expect(pdf.toString('latin1').match(/\/Type\s*\/Page\b/g)?.length).toBe(1)
})
