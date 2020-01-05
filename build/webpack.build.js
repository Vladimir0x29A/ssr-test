const merge = require('webpack-merge');
const base = require('./webpack.base');

const build = merge(base, {
  mode: 'production',
});

module.exports = new Promise(resolve => {
  resolve(build);
});
