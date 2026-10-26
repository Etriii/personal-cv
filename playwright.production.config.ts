import { defineConfig } from '@playwright/test'
import localConfig from './playwright.config'

export default defineConfig({
  ...localConfig,
  outputDir: './test-results/live',
  use: {
    ...localConfig.use,
    baseURL: 'https://personal-cv-two-lime.vercel.app',
  },
  webServer: undefined,
})
