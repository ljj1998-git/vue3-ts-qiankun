import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
const useDevMode = true;
const createVitePlugins = () => {
  return [
    vue(), // eslint-disable-next-line no-undef
    qiankun("hxapp", { useDevMode }),
  ];
};

export default createVitePlugins;
