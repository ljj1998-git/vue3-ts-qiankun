import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
// import router from "./router";
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

function render(props: QiankunProps, router) {
  console.log(props, 666666666);
  const app = createApp(App);
  const { container } = props;
  const mount: Element | "#app" = container
    ? (container.querySelector("#app") as Element)
    : "#app";
  if (router) {
    app.use(router).mount(mount);

    setTimeout(() => {
      const a = useRouter();
      a.push({
        path: "/vue3_system/demo2",
      });
    }, 5000);

    // if (first) {
    //   location.reload();
    //   first = false;
    // }
  } else {
    app.mount(mount);
  }

  // app.use(router).mount(mount);
  // app.mount(mount);
}

renderWithQiankun({
  mount(props: QiankunProps) {
    props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态

      const { res } = state;
      console.log(res[0], 555555555);

      // const routes = res[0].rotues.map((item) => {
      //   return {
      //     path: item.path,
      //     name: item.name,
      //     component: () => import("./views/home/index.vue"),
      //   };
      // });
      // console.log(routes);

      const routes: RouteRecordRaw[] = [
        {
          path: "/",
          name: "home",
          component: () => import("./views/home/index.vue"),
        },
        {
          path: "/demo2",
          name: "demo",
          component: () => import("./views/demo/index.vue"),
        },
      ];
      const router = createRouter({
        history: createWebHistory("/"),
        routes,
      });
      render(props, router);
    });
    render(props, []);
  },
  bootstrap(props) {
    // console.log("bootstrap");
  },
  unmount(props) {},
} as QiankunLifeCycle);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app.use(router).mount("#app");
}
