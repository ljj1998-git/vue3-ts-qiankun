import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
