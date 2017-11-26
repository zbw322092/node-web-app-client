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
        test: /\.css$/i,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader", options: { sourceMap: true } }
          ]
        }))
      },
      {
        test: /\.less$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader", options: { sourceMap: true }},
            { 
              loader: "postcss-loader", 
              options: {
                sourceMap: true,
                "config": {
                  path: paths.postConfig
                }
              } 
            },
            { loader: "less-loader", options: { sourceMap: true }}
          ]
        })),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              fallback: 'file-loader',
              context: paths.src,
              name: `[path][name]-[hash:8].[ext]`
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader', 
          { 
            loader: 'ts-loader', 
            options: { 
              configFile: paths.tsconfigFile, 
              logInfoToStdOut: true 
            } 
          }
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