const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConf = require('./webpack.base.config')

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: path.join(__dirname, './')
    }),
  ],
})
