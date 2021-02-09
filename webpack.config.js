var CopyWebpackPlugin = require('copy-webpack-plugin');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
var path = require('path');
var PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

var merge = require('webpack-merge').merge;
var common = merge([
  {
    mode: 'development',
    entry: {
      'js/main.js': ['./source/js/block-focus.js', './source/js/form.js', './source/js/local-storage-data.js', './source/js/focus-trap.js', './source/js/popup.js', './source/js/scroll-block.js', './source/js/tab.js', './source/js/utils.js'],
      'js/vendor.js': ['inputmask'],
      'css/style.css': ['./source/sass/style.scss'],
    },
    output: {
      filename: '[name]',
      path: PATHS.build,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{from: './source/img', to: 'img'}]
      }),
      new CopyWebpackPlugin({
        patterns: [{from: './source/fonts', to: 'fonts'}]
      })
    ],
  },
]);

module.exports = function() {
  return merge([
      common,
    sass(),
    ]);
};

