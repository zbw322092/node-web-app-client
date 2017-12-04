const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      parallel: true, // Default number of concurrent runs: os.cpus().length - 1.
      sourceMap: false,
      uglifyOptions: {
        ie8: true,
        output: {
          comments: false,
          ecma: 5,
          beautify: false,
          webkit: true
        },
        compress: {
          drop_console: true
        }
      }
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '80-90'
      }
    })
  ]

});