import { defineConfig } from 'vite';
import { createVitePlugins } from './config/plugins/index';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    },
  },
});
