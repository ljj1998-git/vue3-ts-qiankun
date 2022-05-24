import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'

export const getPlugins = () => {
  return [
    Pages({
      dirs: [{ dir: "src/views", baseRoute: "" }],
      importMode: "async",
    }),
    WindiCSS(),
    Layouts({
      // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),
    Components(),
    viteMockServe({
			// prodEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
		}),
  ];
};
