import { defineStore } from "pinia";
import { Notification } from "@arco-design/web-vue";
import type { NotificationReturn } from "@arco-design/web-vue/es/notification/interface";
import type { RouteRecordNormalized } from "vue-router";
// import { getMenuList } from '@/api/user';
import { AppState } from "./types";

const useAppStore = defineStore("app", {
  state: (): AppState => ({
    //全局通用模块
    isLogin: true, // 登录页 true为登录 false为注册
    systems: [], //顶部 系统下拉框数据
    menus:[], //菜单

    //首页通用模块
    menuCollapse: true, // 控制侧边栏是否收缩

    theme: "light",
    colorWeak: false,
    menu: true,
    hideMenu: false,
    footer: true,
    themeColor: "#165DFF",
    menuWidth: 220,
    globalSettings: false,
    device: "desktop",
    tabBar: false,
    menuFromServer: false,
    serverMenu: [],
  }),

  getters: {
    appDevice(state: AppState) {
      return state.device;
    },
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },
    // Change theme color
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = "dark";
        document.body.setAttribute("arco-theme", "dark");
      } else {
        this.theme = "light";
        document.body.removeAttribute("arco-theme");
      }
    },
  },
  persist: {
    enabled: true,
    encryptionKey: 'ljj66',
    storage: sessionStorage,
  }
});

export default useAppStore;
