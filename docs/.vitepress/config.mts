import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../docs-dist',
  title: "Bee-UI",
  description: "回复v单据黄齑淡饭好看锯齿刀深V都是借口v和金卡会尽快吃得好SKV觉得凯撒还能看出DHV进度款",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button/", activeMatch: '/components/button/index.md' },
    ],
    lastUpdatedText: "更新时间",


    // sidebar: {
    //   "/components/": [
    //     {
    //       text: "基本",
    //       items: [{ text: "button 按钮", link: "/components/button/" }],
    //     },
    //   ],
    // },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
