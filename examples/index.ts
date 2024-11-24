import { createApp } from "vue";
import App from "./app.vue";
import BeeUI from '@bee-ui/components'

const app = createApp(App);
app.use(BeeUI)
app.mount("#app");
