import { defineStore } from "pinia";
import { Notification } from "@arco-design/web-vue";
import type { NotificationReturn } from "@arco-design/web-vue/es/notification/interface";
import type { RouteRecordNormalized } from "vue-router";
// import { getMenuList } from '@/api/user';
import { AppState } from "./types";

const useAppStore = defineStore("app", {
  state: (): AppState => ({
    theme: "light",
    colorWeak: false,
    navbar: true,
    menu: true,
    hideMenu: false,
    menuCollapse: false,
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
});

export default useAppStore;
