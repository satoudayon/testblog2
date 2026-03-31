---
title: "GitHub Pagesへ自動デプロイする流れ"
description: "pushを起点にGitHub Actionsが走り、Astroの静的ファイルをPagesへ公開する仕組みのサンプル説明です。"
pubDate: 2026-03-28
tags:
  - GitHub Actions
  - Deploy
  - CI/CD
---

# GitHub Pagesへ自動デプロイする流れ

このプロジェクトでは、`main` ブランチへのpushをきっかけにワークフローが動きます。

1. ソースコードをチェックアウトする
2. Node.jsと依存関係をセットアップする
3. `npm run build` でAstroをビルドする
4. `dist` をGitHub Pagesへデプロイする

Markdown記事を追加するだけでサイト更新までつながるので、Jamstackの基本的な運用を学ぶ題材として扱いやすいです。
