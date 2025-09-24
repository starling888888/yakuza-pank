import { test, expect } from '@playwright/test';

test.describe('基本的なレイアウトの視覚的リグレッションテスト', () => {
  test('ヘッダーとフッターが正しく表示される', async ({ page }) => {
    await page.goto('/');

    // ヘッダーのスクリーンショットを撮影
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header.png');

    // フッターのスクリーンショットを撮影
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png');
  });
});
