// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import BeeUI from "@bee-ui/components";
import "@bee-ui/theme-chalk/index.scss";
import Preview from "./preview/index.vue";
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
// import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(BeeUI);
    app.component("Preview", Preview);
    // app.use(hljsVuePlugin)
  },
} satisfies Theme;
