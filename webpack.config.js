require ('babel-polyfill');
require('fetch-ponyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'fetch-ponyfill',
    './src-en/js/main.js',
    './src-en/style/index.scss',
    './src-en/assets/logo.svg',
    './src-en/assets/autosmall.jpg',
    './src-en/assets/autolarge.jpg'
  ],
  output: {
    path: path.resolve(__dirname, 'dist-en'),
    filename: 'main.bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist-en'),
    compress: true,
    port: 9000,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false}
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ['svg-inline-loader',
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
    }),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: './src-en/index.html',
    })
  ]
};
