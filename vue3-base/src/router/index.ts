import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import actions from "../utils/actions.js";

const routes: RouteRecordRaw[] = [];
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

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.afterEach((to, from, next) => {
  setTimeout(() => {
    actions.setGlobalState({ token: "ljj2" });
  }, 3000);

  console.log(55);
});

export default router;
