# フェーズ1: データモデル

## 1. コンテンツ構造

コンテンツはすべて `src/content/` ディレクトリ内にMarkdown（`.md`）またはMDX（`.mdx`）ファイルとして配置する。
AstroのContent Collections機能を利用して、型安全なコンテンツ管理を実現する。

### 1.1. ルールブック (rulebook)

- **パス**: `src/content/rulebook/`
- **説明**: TRPGのルールブック本体の各章やセクションを格納する。
- **例**: `src/content/rulebook/01-character-creation.mdx`, `src/content/rulebook/02-game-rules.mdx`

## 2. ページフロントマター

各Markdown/MDXファイルの先頭には、ページのメタデータを定義するフロントマターをYAML形式で記述する。

```yaml
---
title: "キャラクター作成"
description: "プレイヤーキャラクターを作成するためのルールとガイドライン。"
pubDate: "2025-09-24"
# ページ内目次を表示するかどうか (デフォルト: true)
showToc: true
---

# {frontmatter.title}

ここにMarkdownコンテンツを記述...
```

### 2.1. フロントマターのスキーマ

- **title** (`string`, 必須): ページのタイトル。h1タグやブラウザのタイトルとして使用される。
- **description** (`string`, 必須): ページの概要。SEOのメタディスクリプションとして使用される。
- **pubDate** (`string`, 必須): ページの公開日。`YYYY-MM-DD`形式。
- **showToc** (`boolean`, オプション): `false`に設定すると、そのページでページ内目次を非表示にする。デフォルトは`true`。

## 3. ナビゲーション設定

サイト全体のナビゲーション構造は、プロジェクトルートの`src/`ディレクトリにある設定ファイル（例: `src/navigation.ts`）で静的に定義する。
これにより、表示順序やネスト構造を柔軟に管理できる。

```typescript
// src/navigation.ts
export const NAVIGATION = [
  {
    title: "はじめに",
    path: "/",
  },
  {
    title: "ルールブック",
    children: [
      {
        title: "キャラクター作成",
        path: "/rulebook/character-creation",
      },
      {
        title: "ゲームルール",
        path: "/rulebook/game-rules",
      },
    ],
  },
];
```

## 4. サイト設定

サイトタイトルやコピーライト表記など、サイト全体に関わるグローバルな設定は、`src/site-config.ts`のような設定ファイルで一元管理する。

```typescript
// src/site-config.ts
export const SITE_CONFIG = {
  title: "Yakuza Pank TRPG ルールブック",
  copyright: `© ${new Date().getFullYear()} Yakuza Pank. All rights reserved.`,
};
```
