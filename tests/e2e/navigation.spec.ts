
import { test, expect } from '@playwright/test';

test('基本的なナビゲーションが機能すること', async ({ page }) => {
  // 1. ホームページにアクセス
  await page.goto('/');

  // 2. ホームページのタイトルが正しいことを確認
  await expect(page).toHaveTitle(/Yakuza Pank TRPG ルールブック/);

  // 3. ナビゲーション内の「ルールブック」リンクをクリック
  //    （将来的に作成されるナビゲーションコンポーネントを想定）
  await page.getByRole('link', { name: 'ルールブック' }).click();

  // 4. ルールブックのセクション（例: キャラクター作成）に遷移したことを確認
  //    h1に見出しが表示されていることを期待
  await expect(page.getByRole('heading', { name: 'キャラクター作成' })).toBeVisible();
});
