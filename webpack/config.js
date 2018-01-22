const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssLoaders = require('./css.loaders')


const config = {
    entry: {
      app: ['babel-polyfill', './src/index'],
      styles: ['./src/stylesheets/base']
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.sass$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [cssLoaders.css, cssLoaders.postcss, cssLoaders.sass]
          })
        }
      ]
    },
  
    plugins: [new ExtractTextPlugin('[name].css')],
  
    resolve: {
      extensions: ['.js', '.sass'],
      modules: [path.join(__dirname, '../src'), 'node_modules']
    }
  }
  
  module.exports = config
  