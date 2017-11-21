const path = require('path');
const paths = require('../../config/paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    loaders: [
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
    new HtmlWebpackPlugin({
      template: paths.defaultTemplate,
      inject: 'body'
    })
  ]
};