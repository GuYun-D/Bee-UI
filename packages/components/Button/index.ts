import { App } from "vue";
import Button from "./src/Button.vue";
export * from './src/button'

Button.install = (app: App) => {
  app.component(Button.name, Button);
};
export const BeeButton = Button;

export default BeeButton;
