var src = './src';
var dest = './www';
var webpack = require('webpack');

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js'
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        },
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDOM': 'react-dom'
        'ReactCanvas': 'react-canvas'
        'ReactStateAnimation': 'react-state-animation'
      })
    ]
  },
};
