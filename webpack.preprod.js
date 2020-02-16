const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [    
    new OptimizeCSSAssetsPlugin({}),
  ],
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    writeToDisk: true
  },
  performance: {
    hints: false
  }
});