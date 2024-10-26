import * as path from "path";
import { defineConfig } from "rspress/config";
import pluginSitemap from "rspress-plugin-sitemap";
import katex from 'rspress-plugin-katex';

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "GZ::CTF",
  lang: "en",
  icon: "/favicon.webp",
  plugins: [
    katex(),
    pluginSitemap({
      domain: "https://docs.ctf.gzti.me",
    }),
  ],
  markdown: {
    checkDeadLinks: true,
  },
  ssg: {
    strict: true,
  },
  locales: [
    {
      lang: "zh",
      label: "简体中文",
      description: "GZ::CTF 使用文档",
    },
    {
      lang: "en",
      label: "English",
      description: "Docs for GZ::CTF Project",
    },
    {
      lang: "ja",
      label: "日本語",
      description: "GZ::CTF プロジェクトのドキュメント",
    }
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/GZTimeWalker/GZCTF",
      },
      {
        icon: "discord",
        mode: "link",
        content: "https://discord.gg/dV9A6ZjVhC",
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: false,
    footer: {
      message: "© 2022 - present By GZTimeWalker. All Rights Reserved.",
    },
    hideNavbar: "auto",
    locales: [
      {
        lang: "zh",
        label: "简体中文",
        outlineTitle: "目录",
        prevPageText: "上一页",
        nextPageText: "下一页",
        searchPlaceholderText: "搜索文档",
        searchNoResultsText: "没有找到有关内容",
        searchSuggestedQueryText: "建议更换不同的关键字后重试",
      },
      {
        lang: "en",
        label: "English",
        outlineTitle: "Table of Contents",
        prevPageText: "Previous",
        nextPageText: "Next",
        searchPlaceholderText: "Search Docs",
        searchNoResultsText: "No results for",
        searchSuggestedQueryText: "Please try again with a different keyword",
      },
      {
        lang: "ja",
        label: "日本語",
        outlineTitle: "目次",
        prevPageText: "前へ",
        nextPageText: "次へ",
        searchPlaceholderText: "ドキュメントを検索",
        searchNoResultsText: "関連する結果がありません",
      }
    ],
  },
});
