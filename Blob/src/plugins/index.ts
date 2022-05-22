import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";

export const getPlugins = () => {
  return [
    Pages({
      dirs: [{ dir: "src/views", baseRoute: "" }],
      importMode: "async",
    }),
    WindiCSS(),
  ];
};
