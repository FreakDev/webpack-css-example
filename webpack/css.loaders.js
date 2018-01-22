const autoprefixer = require('autoprefixer')
const path = require('path')

const loaders = {
  css: {
    loader: 'css-loader',
    options: {
      localIdentName: '[local]---[hash:base64:5]',
      modules: true
    }
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins: (loader) => [
        autoprefixer({
          browsers: ['last 2 versions']
        })
      ]
    }
  },
  sass: {
    loader: 'sass-loader',
    options: {
      indentedSyntax: true,
      includePaths: [path.resolve(__dirname, '../src')]
    }
  }
}

module.exports = loaders