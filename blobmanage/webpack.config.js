const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    entry: {
        main: './main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        //指定服务器自动打包哪个文件夹下的文件(旧版使用contentBase,新版使用 static !!!)
        static: './dist',
    },
    plugins: [HtmlPlugin]
}