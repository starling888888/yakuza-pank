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
        title: "サンプルページ",
        path: "/rulebook/sample",
      },
      {
        title: "ゲームルール",
        path: "/rulebook/game-rules",
      },
    ],
  },
];
