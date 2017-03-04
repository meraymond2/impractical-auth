const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'dev');
const BUILD_DIR = path.resolve(__dirname, 'prod');

const config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundled.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;