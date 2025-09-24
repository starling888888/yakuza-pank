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
