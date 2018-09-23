const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入，在内存中自动生成ｉｎｄｅｘ页面的插件

//　创建插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src/index.html'), //源文件
    filename: 'index.html' //生成的内存中的首页的名称
})

// 向外暴露一个打包的配置对象
module.exports = {
    mode: "development", //development, production
    // 在webpack4.x版本中，有一个很大的特性，就是约定大于配置，默认的打包入口路径为src/index.js
    plugins: [
        htmlPlugin
    ]
}

