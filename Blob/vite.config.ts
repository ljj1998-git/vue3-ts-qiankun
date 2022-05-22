import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { getPlugins } from "./src/plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...getPlugins()],
});
