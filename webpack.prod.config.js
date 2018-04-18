const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.config')

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  output: {
    filename: "[name].[hash].js",
    chunkFilename: '[name].[chunkhash:6].js',
    publicPath: '/public/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "common",
          chunks: "all"
        }
      }
    },
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: path.join(__dirname, './')
    }),
    new HtmlWebpackPlugin({
      title: "webpack4",
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css",
    }),
  ],
})
