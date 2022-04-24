import { defineConfig ,loadEnv } from 'vite'
import createVitePlugins  from './config/vite/plugins'
import qiankun from 'vite-plugin-qiankun';
const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {

    }
  },
})
