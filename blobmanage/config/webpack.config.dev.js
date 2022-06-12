const { resolvePath, baseConfig } = require("./webpack.config.base");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "../dist",
    host: "127.0.0.1",
    port: 8000,
    hot: true,
    open: true,
  },
});
