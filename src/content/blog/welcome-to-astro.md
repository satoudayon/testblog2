---
title: "Astro学習ブログをはじめる"
description: "このブログの構成と、Markdownを追加するだけで記事が増える仕組みを確認するためのサンプル記事です。"
pubDate: 2026-03-29
tags:
  - Astro
  - Markdown
  - GitHub Pages
---

# Astro学習ブログをはじめる

このブログは、`src/content/blog` にMarkdownファイルを追加してGitHubへpushすると、GitHub Actionsが自動でビルドとデプロイを行う構成です。

## 記事を追加する場所

新しい記事は次のフォルダに追加します。

```text
src/content/blog/
```

ファイル名がURLのslugになります。たとえば `my-first-post.md` を作ると、`/posts/my-first-post/` で公開されます。

## Frontmatterの例

```md
---
title: "記事タイトル"
description: "一覧ページに表示する短い説明"
pubDate: 2026-03-29
tags:
  - Astro
  - Study
---
```

このあとGitHubにpushすると、GitHub Pages上のブログに反映されます。
