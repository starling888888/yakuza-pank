import { test, expect, devices } from '@playwright/test';

test.describe('レスポンシブデザインのテスト', () => {
  test('スマートフォン表示でナビゲーションのトグルボタンが表示される', async ({ page }) => {
    // iPhone 13 Proのビューポートを使用
    await page.setViewportSize(devices['iPhone 13 Pro'].viewport);

    // 1. ルートページにアクセス
    await page.goto('/');

    // 2. ナビゲーションのトグルボタンが表示されていることを確認
    const toggleButton = page.getByRole('button', { name: 'メニューを開閉' });
    await expect(toggleButton).toBeVisible();

    // 3. サイトナビゲーションが最初は表示されていないことを確認
    const siteNav = page.getByRole('navigation', { name: 'サイトナビゲーション' });
    await expect(siteNav).not.toBeVisible();

    // 4. トグルボタンをクリック
    await toggleButton.click();

    // 5. サイトナビゲーションが表示されることを確認
    await expect(siteNav).toBeVisible();

    // 6. 再度トグルボタンをクリック
    await toggleButton.click();

    // 7. サイトナビゲーションが非表示になることを確認
    await expect(siteNav).not.toBeVisible();
  });
});
