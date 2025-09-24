# Yakuza Pank TRPG ルールブックサイト

TRPGルールブックを公開するための、パフォーマンスを重視した静的ウェブサイト。レスポンシブ対応の基本レイアウト（ヘッダー、フッター、ナビゲーション）、Markdown/MDXによるコンテンツ表示、およびReactコンポーネントの埋め込み機能を実現します。技術スタックには、静的サイト生成に最適化されたAstroフレームワークを採用しています。

## 🚀 クイックスタート

### 1. 前提条件

- [Node.js](https://nodejs.org/) (v18以降)
- npm (Node.jsにバンドルされています)

### 2. セットアップ手順

#### ステップ1: リポジトリのクローンと移動

```bash
# このブランチをクローンする
git clone --branch 001-trpg-web-markdown <repository_url> # TODO: Replace <repository_url> with actual URL
cd yakuza-pank
```

#### ステップ2: 依存関係のインストール

プロジェクトルートで以下のコマンドを実行し、npmを使用して依存関係をインストールします。

```bash
npm install
```

#### ステップ3: 開発サーバーの起動

以下のコマンドを実行して、Astroの開発サーバーを起動します。

```bash
npm run dev
```

起動に成功すると、ターミナルにローカルサーバーのアドレス（例: `http://localhost:4321`）が表示されます。ブラウザでこのアドレスにアクセスすると、サイトが表示されます。ファイルを編集すると、自動的にブラウザがリロードされます。

### 3. 主要なスクリプト

- `npm run dev`: 開発サーバーを起動する。
- `npm run build`: 本番用の静的ファイルを `dist/` ディレクトリにビルドする。
- `npm run preview`: ビルドされた本番用ファイルをローカルでプレビューする。
- `npm run format`: Biomeでプロジェクト全体のフォーマットを実行する。
- `npm run lint`: Biomeでプロジェクト全体のLintチェックを実行する。
- `npm run check`: BiomeでフォーマットとLintのチェックを同時に実行する。

## 🛠️ 開発ツールと拡張機能

- **VS Code拡張機能**:
  - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## 📄 プロジェクト構造

Astroの標準的なプロジェクト構造を採用しています。

```
src/
├── components/      # 再利用可能なUIコンポーネント (Astro, React)
├── content/         # Markdown/MDXコンテンツ (Content Collections)
├── layouts/         # ページ全体のレイアウト
├── pages/           # ルーティングとページ
├── styles/          # グローバルCSS
└── config/          # サイト設定ファイル
```