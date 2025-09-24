
import { test, expect } from '@playwright/test';

test('基本的なナビゲーションが機能すること', async ({ page }) => {
  // 1. サンプルページに直接アクセス
  await page.goto('/rulebook/sample');

  // 2. URLが正しいことを確認
  await expect(page).toHaveURL('/rulebook/sample');

  // 3. ページの見出しが表示されていることを確認
  await expect(page.getByRole('heading', { name: 'サンプルページ' })).toBeVisible();});
