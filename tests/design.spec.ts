import { expect, test } from '@playwright/test'
import { projects } from '../src/pages/projects/data/projects'

function luminance(color: string) {
  const channels = color.startsWith('#')
    ? [1, 3, 5].map((offset) => parseInt(color.slice(offset, offset + 2), 16))
    : color.match(/[\d.]+/g)!.slice(0, 3).map(Number)
  const linear = channels.map((channel) => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return linear[0]! * 0.2126 + linear[1]! * 0.7152 + linear[2]! * 0.0722
}

function contrast(first: string, second: string) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a)
  return (values[0]! + 0.05) / (values[1]! + 0.05)
}

for (const colorScheme of ['light', 'dark'] as const) {
  test(`dark palette stays readable with a ${colorScheme} system preference`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const palette = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement)
      const color = (name: string) => style.getPropertyValue(name).trim()
      return {
        scheme: style.colorScheme,
        background: color('--color-background'),
        surface: color('--color-surface'),
        soft: color('--color-soft'),
        ink: color('--color-ink'),
        muted: color('--color-muted'),
        accent: color('--color-accent'),
        buttonText: color('--button-foreground'),
      }
    })
    expect(palette.scheme).toBe('dark')
    expect(luminance(palette.background)).toBeLessThan(0.02)
    for (const background of [palette.background, palette.surface, palette.soft]) {
      expect(contrast(palette.ink, background)).toBeGreaterThanOrEqual(4.5)
      expect(contrast(palette.muted, background)).toBeGreaterThanOrEqual(4.5)
      expect(contrast(palette.accent, background)).toBeGreaterThanOrEqual(4.5)
    }
    expect(contrast(palette.buttonText, palette.accent)).toBeGreaterThanOrEqual(4.5)
  })
}

test('initial home scroll reveals stop when reduced motion is enabled', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 600 })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  const detail = page.locator('.home-detail').first()
  await detail.scrollIntoViewIfNeeded()
  await expect.poll(() => detail.evaluate((element) => element.getAnimations().filter((animation) => animation.playState === 'running').length)).toBeGreaterThan(0)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === 'running').length)).toBe(0)
  await expect(detail).toBeVisible()
  await page.goto('/projects')
  await expect(page.getByRole('article')).toHaveCount(projects.length)
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0)
})

test('content and route navigation work without reveal browser APIs', async ({ page }) => {
  await page.addInitScript(() => {
    Reflect.deleteProperty(window, 'IntersectionObserver')
    Reflect.deleteProperty(Element.prototype, 'animate')
  })
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/projects')
  await expect(page.getByRole('article')).toHaveCount(projects.length)
  await expect(page.getByRole('article').first()).toBeVisible()
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click()
  await expect(page.locator('#main-content')).toBeFocused()
  await expect(page.getByRole('link', { name: /alexarnaizapece@gmail.com/ })).toBeVisible()
  expect(errors).toEqual([])
})
