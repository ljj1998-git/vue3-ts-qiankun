import { AppRouteRecordRaw } from '../types';
import { DEFAULT_LAYOUT } from '@/router/constants';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/vue3_system',
  name: 'vue3_system',
  component: DEFAULT_LAYOUT,
  // meta: {},
  children: [
    {
      path: 'demo1',
      name: 'demo1',
      component: () => import('@/views/App/demo/index.vue'),
    },
    {
        path: ':demo2',
        name: 'demo2',
        component: () => import('@/views/App/demo/index.vue'),
    },
  ],
};

export default DASHBOARD;
