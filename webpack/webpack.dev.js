const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devServer: {
    hot: true,
    open: true
  },
  experiments: {
    lazyCompilation: true
  },
  devtool: 'inline-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
});
