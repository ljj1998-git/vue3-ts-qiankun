import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
  QiankunLifeCycle,
} from "vite-plugin-qiankun/dist/helper";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  useRouter,
} from "vue-router";

/**
 * 乾坤配置
 */

function render(props: QiankunProps) {
  const app = createApp(App);
  const { container } = props;
  const mount: Element | "#app1" = container
    ? (container.querySelector("#app1") as Element)
    : "#app1";
  app.use(router).mount(mount);
  // app.use(router).mount(mount);
  // app.mount(mount);
}

renderWithQiankun({
  mount(props: QiankunProps) {
    render(props);
  },
  bootstrap(props) {
    // console.log("bootstrap");
  },
  unmount(props) {
  },
} as QiankunLifeCycle);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  const app = createApp(App);
  app.use(router).mount("#app1");
}
