const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./dev.config')

const hostname = '127.0.0.1'
const port = '8080'

module.exports = Object.assign({}, baseConfig, {
    plugins: [ 
        ...baseConfig.plugins, 
        new HtmlWebpackPlugin()
    ],
    devServer: {
        host: hostname,
        port: port
    }
});
