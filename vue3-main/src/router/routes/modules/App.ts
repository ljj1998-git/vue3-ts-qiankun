import { AppRouteRecordRaw } from '../types';
import { DEFAULT_LAYOUT } from '@/router/constants';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/App',
  name: 'App',
  component: DEFAULT_LAYOUT,
  // meta: {},
  children: [
    //菜单管理
    {
      path: 'menuManage',
      name: 'menuManage',
      component: () => import('@/views/App/menuManage/index.vue'),
    },
    //用户管理
    {
      path: 'userManage',
      name: 'userManage',
      component: () => import('@/views/App/userManage/index.vue'),
    },
  ],
};

export default DASHBOARD;
