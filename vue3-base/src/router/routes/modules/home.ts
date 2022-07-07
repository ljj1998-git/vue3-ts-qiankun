import { RouteRecordRaw } from 'vue-router';
import { DEFAULT_LAYOUT } from '@/router/constants';

const DASHBOARD: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [

  ],
};

export default DASHBOARD;
