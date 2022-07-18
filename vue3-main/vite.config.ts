import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/store": path.resolve(__dirname, "./src/store"),
    },
  },
  server: {
    proxy: {
      "/vue3_main": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vue3_main/, "vue3_main"),
      },
    },
  },
});
