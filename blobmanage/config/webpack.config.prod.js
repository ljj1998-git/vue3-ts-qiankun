const { resolvePath, baseConfig } = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new cssMinimizerWebpackPlugin()],
  },
});
