const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: 'india.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My website',
      template:'./template/client.html'
    }),
    new CleanWebpackPlugin(),
  ],
};