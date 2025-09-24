
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321/yakuza-pank/',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4321/yakuza-pank/',
  },
  testDir: 'tests/',
  testMatch: ['**/e2e/**/*.spec.ts', '**/visual/**/*.spec.ts'],
});
