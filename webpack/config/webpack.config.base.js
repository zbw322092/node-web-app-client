const path = require('path');
const paths = require('../../config/paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(process.cwd(), './src/index.tsx')
  },
  output: {
    path: paths.public,
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader", options: { sourceMap: true }},
            { loader: "less-loader", options: { sourceMap: true }}
          ]
        })),
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader', 
          { loader: 'ts-loader', options: { configFile: paths.tsconfigFile, logInfoToStdOut: true } }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true
    }),
    new CleanWebpackPlugin(
      [paths.public], {
        verbose: true
      }
    ),
    new HtmlWebpackPlugin({
      template: paths.defaultTemplate,
      inject: 'body'
    })
  ]
};