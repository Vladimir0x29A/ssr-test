const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
});

module.exports = new Promise(resolve => resolve(buildWebpackConfig));
