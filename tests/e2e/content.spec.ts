import { test, expect } from '@playwright/test';

test.describe('Content Page', () => {
  test('should display Callout components on sample rulebook page', async ({ page }) => {
    await page.goto('./rulebook/sample');

    // Check if the info callout is visible
    const infoCallout = page.locator('div.bg-blue-100');
    await expect(infoCallout).toBeVisible();
    await expect(infoCallout).toContainText('これは情報メッセージです。');

    // Check if the warning callout is visible
    const warningCallout = page.locator('div.bg-yellow-100');
    await expect(warningCallout).toBeVisible();
    await expect(warningCallout).toContainText('これは警告メッセージです。');

    // Check if the error callout is visible
    const errorCallout = page.locator('div.bg-red-100');
    await expect(errorCallout).toBeVisible();
    await expect(errorCallout).toContainText('これはエラーメッセージです。');
  });
});
