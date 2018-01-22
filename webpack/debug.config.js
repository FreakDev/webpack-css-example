const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./config.js')

const hostname = '127.0.0.1'
const port = '8081'

module.exports = Object.assign({}, baseConfig, {
    entry:  {
        tests:'./tests/index'
    },
    module: {
        rules: [{
          test: /\.js$/,
          use: 'mocha-loader',
          exclude: /node_modules/,
        }]
    },    
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '../build/tests'),
        // publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        host: hostname,
        port: port
    }
});
