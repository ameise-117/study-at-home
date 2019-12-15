const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/js/script',
  output: {
    path: path.resolve(__dirname, 'wp-content/themes/mytheme/js'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  devtool: 'source-map'
}
