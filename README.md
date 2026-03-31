# Astro Markdown Blog Starter

Astroで学習しやすい最小構成のブログです。`src/content/blog` にMarkdownファイルを追加してGitHubへpushすると、GitHub Actionsがビルドし、GitHub Pagesへデプロイされる前提で作っています。

## できること

- 記事一覧ページ: `/`
- 記事詳細ページ: `/posts/[slug]/`
- Markdown管理: `src/content/blog/*.md`
- 自動デプロイ: `.github/workflows/deploy.yml`

## セットアップ

```sh
npm install
npm run dev
```

ローカル起動後は `http://localhost:4321` で確認できます。

## 記事の追加方法

`src/content/blog` に `.md` ファイルを追加します。

```md
---
title: "記事タイトル"
description: "一覧用の短い説明"
pubDate: 2026-03-29
tags:
  - Astro
  - Blog
---

# 見出し

本文を書きます。
```

ファイル名がそのままslugになります。たとえば `astro-notes.md` は `/posts/astro-notes/` として公開されます。

## GitHub Pagesで公開する手順

1. このリポジトリをGitHubへpushする
2. GitHubの `Settings > Pages` を開く
3. `Build and deployment` の `Source` は `GitHub Actions` を選ぶ
4. デフォルトブランチを `main` にしてpushする

以後は `main` へのpushごとに `deploy.yml` が動き、サイトが更新されます。

## 補足

- `astro.config.mjs` はGitHub Actions上でリポジトリ名から `base` を切り替えるため、プロジェクトページでも動かしやすい設定です
- `yourname.github.io` 形式のユーザーサイトでは `/` 配下、通常のリポジトリページでは `/<repository>/` 配下で公開されます
