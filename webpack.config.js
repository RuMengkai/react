var webpack = require('webpack')
var config = {
  entry: './entry.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude:/node_modules/, loader: 'jsx-loader'},
      {test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by rumengkai')
  ]
}
module.exports = config;