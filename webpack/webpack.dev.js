const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
// var generator = require('inline-source-map');
module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../_dist'),
    compress: true,
    port: 3000,
  },
  devtool:'inline-source-map',
});