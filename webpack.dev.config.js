const path = require("path");
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

const webpackBaseConf = require('./webpack.base.config')

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack4",
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    // contentBase: ''
  } 
})