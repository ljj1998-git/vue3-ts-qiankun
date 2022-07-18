import type { RouteRecordNormalized } from 'vue-router';

export interface AppState {
  isLogin: Boolean; // true/登陆 false/注册
  systems: Array<any>;

  theme: string;
  colorWeak: boolean;
  menu: boolean;
  hideMenu: boolean;
  menuCollapse: boolean;
  footer: boolean;
  themeColor: string;
  menuWidth: number;
  globalSettings: boolean;
  device: string;
  tabBar: boolean;
  menuFromServer: boolean;
  serverMenu: RouteRecordNormalized[];
  [key: string]: unknown;
}
