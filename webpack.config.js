var path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader' ]
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
