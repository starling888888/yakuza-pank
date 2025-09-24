<!--
SYNC IMPACT REPORT
- Version: [NONE] -> v0.1.0
- Changed Principles: All placeholders replaced with initial principles.
- Added Sections: Governance rules defined.
- Deleted Sections: None.
- Templates Requiring Update:
  - ⚠ Pending: .specify/templates/plan-template.md (to align with new principles)
  - ⚠ Pending: .specify/templates/spec-template.md (to reflect static-site constraints)
  - ⚠ Pending: .specify/templates/tasks-template.md (to include tasks like visual regression testing)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Determine the original project ratification date.
-->
# yakuza-pank Constitution

## Core Principles

### I. 必要最小限の製品 (MVP)
すべての機能は、ユーザーに価値を提供する最小限の形で実装されなければならない。静的サイトとして、これはコアコンテンツとナビゲーションを意味する。
**Rationale**: 過剰なエンジニアリングを避け、迅速なデプロイとフィードバックループを確保する。

### II. 静的サイト優先アーキテクチャ
動的なサーバーサイド処理を避け、可能な限り静的アセット（HTML, CSS, JS, 画像）としてビルドされなければならない。APIとの通信はクライアントサイドで行う。
**Rationale**: パフォーマンス、セキュリティ、スケーラビリティ、およびデプロイの単純さを最大化する。

### III. 包括的なテスト
単体テスト、およびPlaywrightやCypressを用いたE2Eテストによって、すべてのユーザーフローがテストされなければならない。重要なUIコンポーネントには視覚的リグレッションテストを導入する。
**Rationale**: 品質の維持と、リファクタリングや機能追加に対する信頼性を確保する。

### IV. コンポーネントベース設計
UIは再利用可能で独立したコンポーネントとして構築されなければならない。各コンポーネントは独自のスタイルとロジックを持つべきである。
**Rationale**: 開発効率、一貫性、保守性を向上させる。

### V. 自動化されたデプロイメント
`main`ブランチへのすべてのマージは、自動化されたビルド、テスト、および静的ホスティング環境へのデプロイをトリガーしなければならない。
**Rationale**: ヒューマンエラーを削減し、継続的なデリバリーを実現する。

## Governance

この憲法は、プロジェクトにおける他のすべての開発プラクティスやガイドラインに優先します。憲法の修正には、影響分析、チームの合意、および関連ドキュメント（テンプレートファイルなど）の更新計画が必要です。すべてのプルリクエストとレビューは、この憲法の原則への準拠を検証しなければなりません。

**Version**: v0.1.0 | **Ratified**: TODO(RATIFICATION_DATE): プロジェクト開始日を特定できませんでした。 | **Last Amended**: 2025-09-22
