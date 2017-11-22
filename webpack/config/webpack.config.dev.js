const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const paths = require('../../config/paths.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: paths.public,
    compress: true,
    historyApiFallback: true,
    host: 'me.dev.com',
    port: 9000,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});