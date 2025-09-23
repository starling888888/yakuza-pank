# フェーズ1: クイックスタートガイド

このガイドは、本プロジェクトの開発環境をセットアップし、ローカルで起動するための手順を説明する。

## 1. 前提条件

- [Node.js](https://nodejs.org/) (v18以降)
- [pnpm](https://pnpm.io/installation)

## 2. セットアップ手順

### ステップ1: リポジトリのクローンと移動

```bash
# このブランチをクローンする
git clone --branch 001-trpg-web-markdown <repository_url>
cd yakuza-pank
```

### ステップ2: 依存関係のインストール

プロジェクトルートで以下のコマンドを実行し、pnpmを使用して依存関係をインストールする。

```bash
pnpm install
```

### ステップ3: 開発サーバーの起動

以下のコマンドを実行して、Astroの開発サーバーを起動する。

```bash
pnpm dev
```

起動に成功すると、ターミナルにローカルサーバーのアドレス（例: `http://localhost:4321`）が表示される。
ブラウザでこのアドレスにアクセスすると、サイトが表示される。
ファイル（`.astro`, `.mdx`, `.tsx`など）を編集すると、自動的にブラウザがリロードされる。

## 3. 主要なスクリプト

- `pnpm dev`: 開発サーバーを起動する。
- `pnpm build`: 本番用の静的ファイルを `dist/` ディレクトリにビルドする。
- `pnpm preview`: ビルドされた本番用ファイルをローカルでプレビューする。
- `pnpm format`: Biomeでプロジェクト全体のフォーマットを実行する。
- `pnpm lint`: Biomeでプロジェクト全体のLintチェックを実行する。
- `pnpm check`: BiomeでフォーマットとLintのチェックを同時に実行する。

## 4. ツールと拡張機能

- **VS Code拡張機能**:
  - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
