const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');
const paths = require('../../config/paths.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: paths.public,
    compress: true,
    historyApiFallback: true,
    port: 9000,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500
    }
  },
  plugins: [
    // new CleanWebpackPlugin(
    //   [paths.public], {
    //     verbose: true
    //   }
    // ),
    new webpack.HotModuleReplacementPlugin()
  ]
});