# タスク: TRPGルールブック公開サイト

**入力**: `/specs/001-trpg-web-markdown/`からの設計ドキュメント
**前提条件**: plan.md, research.md, data-model.md

## フェーズ3.1: セットアップ
- [X] T001 `npm create astro@latest` を使用して、Astroプロジェクトを初期化する（ReactとTailwind CSSのインテグレーションを含む）。
- [X] T002 `npm install --save-dev @biomejs/biome` を実行し、Biomeをプロジェクトに導入する。
- [X] T003 `biome.json` をプロジェクトルートに作成し、リンターとフォーマッターを設定する。
- [X] T004 `package.json` の `scripts` に `lint`, `format`, `check` コマンドを追加する。

## フェーズ3.2: テストファースト (TDD)
**重要**: これらのテストは、いかなる実装の前に書かれ、失敗しなければなりません。
- [X] T005 [P] `tests/e2e/navigation.spec.ts` を作成し、主要ページ（ホームページ、サンプルルールページ）間の基本的なナビゲーションをテストするE2Eテストを記述する。
- [X] T006 [P] `tests/e2e/responsive.spec.ts` を作成し、スマートフォン表示時にナビゲーションのトグルボタンが表示され、クリックでメニューが開閉することをテストするE2Eテストを記述する。
- [X] T007 [P] `tests/visual/layout.spec.ts` を作成し、ヘッダーとフッターの基本的な視覚的リグレッションテストを記述する。

## フェーズ3.3: コア実装
- [X] T008 `src/site-config.ts` を作成し、サイトタイトルとコピーライト情報を定義する。
- [X] T009 `src/navigation.ts` を作成し、静的なサイトナビゲーションの構造を定義する。
- [X] T010 [P] `src/components/Header.astro` を作成し、サイトタイトルとナビゲーションコンポーネントを表示する。
- [X] T011 [P] `src/components/Footer.astro` を作成し、コピーライト情報を表示する。
- [X] T012 [P] `src/components/SiteNav.tsx` を作成し、ナビゲーション項目を動的に表示し、モバイル用のトグル機能を持つReactコンポーネントを実装する。
- [X] T013 `src/layouts/MainLayout.astro` を作成し、ヘッダー、フッター、メインコンテンツ領域を含む基本ページレイアウトを定義する。
- [X] T014 `src/pages/index.astro` を作成し、`MainLayout` を使用したホームページを実装する。

## フェーズ3.4: コンテンツ統合
- [X] T015 `src/content/config.ts` を作成し、`rulebook` という名前のContent Collectionを定義する。スキーマには `title`, `description`, `pubDate`, `showToc` を含める。
- [X] T016 `src/pages/rulebook/[...slug].astro` を作成し、`rulebook`コレクションのコンテンツを動的にレンダリングするページを実装する。
- [X] T017 [P] `src/components/TableOfContents.tsx` を作成し、現在のページの見出しから目次を生成するReactコンポーネントを実装する。
- [X] T018 `[...slug].astro` ページに、フロントマターの `showToc` フラグに基づいて `TableOfContents` の表示を制御するロジックを追加する。
- [X] T018.1 `src/content/rulebook/sample.md` を作成し、`TableOfContents` が正しく表示されることを確認する。
- [X] T019 [P] `src/components/Callout.tsx` のような、MDX内で使用するサンプルReactコンポーネントを作成する。
- [X] T020 `src/content/rulebook/sample.mdx` を作成し、`Callout`コンポーネントを埋め込んで表示できることを確認する。

## フェーズ3.5: 仕上げ
- [ ] T021 [P] `tests/unit/navigation.spec.ts` を作成し、ナビゲーションデータ構造に関する単体テストを記述する。
- [ ] T022 `astro.config.mjs` を更新し、GitHub Pagesへのデプロイに必要な `site` と `base` の設定を追加する。
- [ ] T023 `.github/workflows/deploy.yml` を作成し、`main`ブランチへのプッシュ時に自動でビルドとGitHub Pagesへのデプロイを行うGitHub Actionsワークフローを定義する。
- [ ] T024 `README.md` を更新し、プロジェクトの概要とセットアップ手順を記述する。

## 依存関係
- 実装 (T008以降) の前にテスト (T005-T007) が存在すること。
- `MainLayout` (T013) は `Header` (T010), `Footer` (T011) に依存する。
- コンテンツ表示 (T016) は Content Collection の設定 (T015) に依存する。

## 並列実行の例
```
# 以下のテスト作成タスクは並列で実行可能です:
タスク: T005, T006, T007

# 以下のコンポーネント作成タスクは並列で実行可能です:
タスク: T010, T011, T012
```