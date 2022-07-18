import { AppRouteRecordRaw } from '../types';
import { DEFAULT_LAYOUT } from '@/router/constants';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/App',
  name: 'App',
  component: DEFAULT_LAYOUT,
  // meta: {},
  children: [
    {
      path: 'userManage',
      name: 'userManage',
      component: () => import('@/views/App/userManage/index.vue'),
    },
  ],
};

export default DASHBOARD;
