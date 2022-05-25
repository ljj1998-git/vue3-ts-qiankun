import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ConfigPagesPlugin } from './vite-plugin-pages';
import { ConfigWindicssPlugin } from './vite-plugin-windicss';
import { AutoImportLayouts } from './vite-plugin-vue-layouts';
import { AutoImportComponents } from './unplugin-vue-components';
import { ConfigMockPlugin } from './vite-plugin-mock';

export const createVitePlugins = () => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // 自动生成路由
    ConfigPagesPlugin(),
    // WindiCSS
    ConfigWindicssPlugin(),
    // 自动引入layouts布局
    AutoImportLayouts(),
    // 自动引入组件
    AutoImportComponents(),
    // mock
    ConfigMockPlugin(),
  ];

  return vitePlugins;
};
