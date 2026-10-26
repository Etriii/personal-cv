import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', title: 'Home', heading: 'Alex, Jr.' },
  { path: '/about', title: 'About', heading: 'Curious by nature.' },
  { path: '/skills', title: 'Skills', heading: 'The tools behind the work.' },
  { path: '/projects', title: 'Projects', heading: 'Ideas, made into software.' },
  { path: '/experience', title: 'Experience', heading: 'Growing through real work.' },
  { path: '/achievements', title: 'Achievements', heading: 'Room for what comes next.' },
  { path: '/contact', title: 'Contact', heading: 'Good software starts with a conversation.' },
]

for (const route of routes) {
  test(`${route.title}: direct visit, reload, content, and active navigation`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(route.path)
    expect(response?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(route.heading)
    await expect(page).toHaveTitle(`${route.title} | Alex, Jr. A. Aparece — Fullstack Developer`)
    await expect(page.getByRole('navigation').getByRole('link', { name: route.title, exact: true })).toHaveAttribute('aria-current', 'page')
    await page.reload()
    await expect(page.getByRole('heading', { level: 1 })).toContainText(route.heading)
    expect(errors).toEqual([])
  })
}

test('portrait resolves and has a stable fallback when unavailable', async ({ page }) => {
  await page.goto('/')
  const portrait = page.getByRole('img', { name: /Portrait of Alex/ })
  await expect(portrait).toBeVisible()
  await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true)
  await page.route('**/assets/profile-*.png', (route) => route.abort())
  await page.reload()
  await expect(page.getByRole('img', { name: /portrait unavailable/ })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('mobile navigation supports keyboard, Escape, route focus, and current-route selection', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: /Menu/ })
  const navigation = page.getByRole('navigation')
  await expect(navigation).toBeHidden()
  await menu.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: /Close/ })).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Tab')
  await expect(navigation.getByRole('link', { name: 'Home', exact: true })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await menu.press('Enter')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')
  await expect(menu).toBeFocused()
  await expect(navigation).toBeHidden()
  await menu.press('Enter')
  await navigation.getByRole('link', { name: 'Projects' }).click()
  await expect(page).toHaveURL('/projects')
  await expect(navigation).toBeHidden()
  await expect(page.locator('#main-content')).toBeFocused()
  await expect(page.getByRole('status')).toHaveText('Projects page')
  await menu.click()
  await page.setViewportSize({ width: 1024, height: 800 })
  await expect(navigation).toBeVisible()
  await page.setViewportSize({ width: 360, height: 800 })
  await expect(navigation).toBeHidden()
})

test('skip link, route transitions, and browser history preserve usable focus', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
  await page.getByRole('link', { name: 'Explore my work' }).click()
  await expect(page).toHaveURL('/projects')
  await expect(page.locator('#main-content')).toBeFocused()
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Good software')
  await page.goBack()
  await expect(page).toHaveTitle(/^Projects/)
  await expect(page.locator('#main-content')).toBeFocused()
  await page.goForward()
  await expect(page).toHaveTitle(/^Contact/)
  await expect(page.locator('#main-content')).toBeFocused()
})

test('contact actions and external links have real, safe destinations', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.getByRole('link', { name: /alexarnaizapece@gmail.com/ })).toHaveAttribute('href', 'mailto:alexarnaizapece@gmail.com')
  await expect(page.getByRole('link', { name: /09633127462/ })).toHaveAttribute('href', 'tel:+639633127462')
  for (const route of routes) {
    await page.goto(route.path)
    for (const link of await page.locator('a[target="_blank"]').all()) {
      await expect(link).toHaveAttribute('href', /^https:\/\//)
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  }
  await page.goto('/projects')
  await expect(page.getByRole('article')).toHaveCount(3)
  await expect(page.getByText('Screenshot coming soon', { exact: true })).toHaveCount(3)
  await expect(page.getByRole('link', { name: /View repository/ })).toHaveCount(3)
})

test('unknown paths offer a working home recovery link', async ({ page }) => {
  await page.goto('/this-page-does-not-exist/nested')
  await expect(page).toHaveTitle(/^Page not found/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A small detour.')
  await page.getByRole('link', { name: 'Return home' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Alex, Jr.')
})

for (const width of [360, 768, 1024, 1440]) {
  test(`all routes fit a ${width}px viewport`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 1000 })
    for (const route of routes) {
      await page.goto(route.path)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }))
      expect(dimensions.content, route.path).toBeLessThanOrEqual(dimensions.viewport)
      if (route.path === '/') {
        await page.getByRole('img', { name: /Portrait of Alex/ }).evaluate((image: HTMLImageElement) => image.decode())
        await page.screenshot({ path: testInfo.outputPath(`home-${width}.png`), fullPage: true, animations: 'disabled' })
      }
      if (route.path === '/projects' && [360, 1440].includes(width)) {
        await page.screenshot({ path: testInfo.outputPath(`projects-${width}.png`), fullPage: true, animations: 'disabled' })
      }
    }
  })
}

test('reduced motion disables page animation without hiding content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  expect(await page.locator('.page-enter').evaluate((element) => getComputedStyle(element).animationName)).toBe('none')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.getByRole('link', { name: 'Explore my work' }).click()
  await expect(page.getByRole('article')).toHaveCount(3)
  expect(await page.locator('.project-card').first().evaluate((element) => getComputedStyle(element).transitionDuration)).toBe('0s')
})

test('normal motion uses a short page entrance and leaves content visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  expect(await page.locator('.page-enter').evaluate((element) => getComputedStyle(element).animationName)).toBe('page-entry')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
