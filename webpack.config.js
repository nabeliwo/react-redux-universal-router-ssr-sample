const path = require('path')

module.exports = {
  entry: {
    client: path.resolve(__dirname, './src/client.js')
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
