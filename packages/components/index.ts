import * as components from "./components";
import type { App } from "vue";

export default {
  install(app: App) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
