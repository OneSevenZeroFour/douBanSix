var webpack = require("webpack");
module.exports = {
  devtool: "source-map",/*调试工具*/
  entry: './index.js',
  output: {
    //输出后的文件名
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(jpg|png|gif|jpeg)$/,
      loader: 'url-loader'
    }, {
      test: /\.(ttf|woff|eot|svg)$/,
      loader: 'file-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
    /*  options: {
        presets: ['env']
      },*/
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  //vue2.0加上这一句
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  //插件压缩bundle.js
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  //   //new HtmlWebpackPlugin({template: './src/index.html'})
  // ],
  //启用 Watch模式,webpack 可以监听文件变化，当它们修改后会重新编译
  watch: true,
  //配置server 用webpack-dev-server来启动
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 9000
  }
}