import { createRouter, createWebHistory } from 'vue-router';
import { appRoutes } from './routes/index';

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
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
  ],
});

export default router;
