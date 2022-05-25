import { createRouter, createWebHistory } from 'vue-router';
// 自动读取pages目录下的页面，不需要自己再写routes
import generatedRoutes from 'virtual:generated-pages';
// layout
import { setupLayouts } from 'virtual:generated-layouts';

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
});

export default router;
