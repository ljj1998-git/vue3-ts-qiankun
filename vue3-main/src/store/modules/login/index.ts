import { defineStore } from "pinia";
import { Notification } from "@arco-design/web-vue";
import type { NotificationReturn } from "@arco-design/web-vue/es/notification/interface";
import { AppState } from "./types";

const useAppStore = defineStore("app", {
  state: (): AppState => ({
    isLogin: true,
    systems: [],
  }),
  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },
  },
});

export default useAppStore;
