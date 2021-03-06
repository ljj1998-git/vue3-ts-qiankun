import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

import actions from "../utils/actions.js";
actions.onGlobalStateChange((state, prev) => {
  console.log("拿到路由", state);
});

const routes: RouteRecordRaw[] = [
  {
    path: "/demo1",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/demo2",
    name: "demo",
    component: () => import("../views/demo/index.vue"),
  },
];
/**
 * 此处和 Vue2/3中的配置有所不同,base是放在createWebHistory函数中传入
 * 否则RouterOptions类型会报错，不存在base
 * 原写法:
 * const router = createRouter({
    history: createWebHistory(),
    base: window.__POWERED_BY_QIANKUN__ ? `/vue3_system` : "/",
    routes,
  });
 */

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue3_system" : "/"
  ),
  routes,
});

export default router;
