'use strict';

module.exports = {
  entry: './index.web.js',
  output: {
    filename: 'bundle.js',
    path: './web',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [ 'react-native' ],
          plugins: [ 'react-native-css-class' ],
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native/lib/deepDiffer': 'react-native-theme/lib/deepDiffer.js',
      'react-native': 'react-native-web',
    }
  }
};
