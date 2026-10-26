import { expect, test } from '@playwright/test'
import { projects } from '../src/pages/projects/data/projects'

test('complete archive labels side projects and only links available public sources', async ({ page }) => {
  expect(projects.length).toBeGreaterThan(3)
  expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length)
  await page.goto('/projects')
  await expect(page.getByRole('article')).toHaveCount(projects.length)
  await expect(page.getByText(`${projects.length} projects`, { exact: true })).toBeVisible()

  for (const project of projects) {
    const card = page.getByRole('article').filter({
      has: page.getByRole('heading', { level: 2, name: project.title, exact: true }),
    })
    await expect(card).toHaveCount(1)
    await expect(card.getByText('Side project', { exact: true })).toHaveCount(project.isSideProject ? 1 : 0)
    const link = card.getByRole('link', { name: /View repository/ })
    if (project.repositoryUrl) {
      await expect(link).toHaveAttribute('href', project.repositoryUrl)
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      await expect(card.getByText('Source not publicly linked', { exact: true })).toHaveCount(0)
    } else {
      await expect(link).toHaveCount(0)
      await expect(card.getByText('Source not publicly linked', { exact: true })).toBeVisible()
    }
  }

  await expect(page.locator('.project-index').nth(9)).toHaveText('10')
  await expect(page.locator('.project-index').last()).toHaveText(String(projects.length).padStart(2, '0'))
})
