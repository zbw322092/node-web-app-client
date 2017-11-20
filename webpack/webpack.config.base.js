const path = require('path');
const paths = require('../config/paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(process.cwd(), './app/index.tsx')
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
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './plugins/index.template.ejs'),
      inject: 'body'
    })
  ]
};