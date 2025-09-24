# フェーズ1: クイックスタートガイド

このガイドは、本プロジェクトの開発環境をセットアップし、ローカルで起動するための手順を説明する。

## 1. 前提条件

- [Node.js](https://nodejs.org/) (v18以降)
- npm (Node.jsにバンドルされています)

## 2. セットアップ手順

### ステップ1: リポジトリのクローンと移動

```bash
# このブランチをクローンする
git clone --branch 001-trpg-web-markdown <repository_url>
cd yakuza-pank
```

### ステップ2: 依存関係のインストール

プロジェクトルートで以下のコマンドを実行し、npmを使用して依存関係をインストールする。

```bash
npm install
```

### ステップ3: 開発サーバーの起動

以下のコマンドを実行して、Astroの開発サーバーを起動する。

```bash
npm run dev
```

起動に成功すると、ターミナルにローカルサーバーのアドレス（例: `http://localhost:4321`）が表示される。
ブラウザでこのアドレスにアクセスすると、サイトが表示される。
ファイル（`.astro`, `.mdx`, `.tsx`など）を編集すると、自動的にブラウザがリロードされる。

## 3. 主要なスクリプト

- `npm run dev`: 開発サーバーを起動する。
- `npm run build`: 本番用の静的ファイルを `dist/` ディレクトリにビルドする。
- `npm run preview`: ビルドされた本番用ファイルをローカルでプレビューする。
- `npm run format`: Biomeでプロジェクト全体のフォーマットを実行する。
- `npm run lint`: Biomeでプロジェクト全体のLintチェックを実行する。
- `npm run check`: BiomeでフォーマットとLintのチェックを同時に実行する。

## 4. ツールと拡張機能

- **VS Code拡張機能**:
  - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
