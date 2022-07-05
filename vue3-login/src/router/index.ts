import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
];
/**
 * 此处和 Vue2/3中的配置有所不同,base是放在createWebHistory函数中传入
 * 否则RouterOptions类型会报错，不存在base
 * 原写法:
 * const router = createRouter({
    history: createWebHistory(),
    base: window.__POWERED_BY_QIANKUN__ ? `/vue3_login` : "/",
    routes,
  });
 */
console.log(qiankunWindow.__POWERED_BY_QIANKUN__);

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue3_login" : "/"
  ),
  routes,
});

export default router;
