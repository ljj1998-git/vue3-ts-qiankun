import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import actions from "./utils/actions.js";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
  QiankunLifeCycle,
} from "vite-plugin-qiankun/dist/helper";

const app = createApp(App);

/**
 * 乾坤配置
 */
function render(props: QiankunProps) {
  console.log(props);

  const { container } = props;
  const mount: Element | "#app" = container
    ? (container.querySelector("#app") as Element)
    : "#app";
  app.use(router).mount(mount);
}

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log("mount");
    actions.setActions(props); //注入actions实例
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {},
} as QiankunLifeCycle);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app.use(router).mount("#app");
}
