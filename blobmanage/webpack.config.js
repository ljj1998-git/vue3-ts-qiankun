const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebpackPlugin({
    template:'./public/index.html',
    filename:'index.html'
})

module.exports = {
    mode:'development',
    entry:{
        main:'./main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist')
    },
    plugins:[HtmlPlugin]
}