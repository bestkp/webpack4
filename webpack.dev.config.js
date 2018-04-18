const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const webpackBaseConf = require("./webpack.base.config");

module.exports = merge(webpackBaseConf, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack4",
      filename: "index.html",
      template: path.join(__dirname, "./index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
