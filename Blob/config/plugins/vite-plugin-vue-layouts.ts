import Layouts from 'vite-plugin-vue-layouts';

export const AutoImportLayouts = () => Layouts({
  // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
  layoutsDirs: 'src/layouts',
  defaultLayout: 'default',
});
