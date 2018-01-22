const path = require('path')

const prodConfig = require('./prod.config')

var devPlugins = prodConfig.plugins.slice(0, prodConfig.plugins.length - 1)

var config = Object.assign({}, prodConfig, {
    devtool: 'source-map',
    output: Object.assign({}, prodConfig.output, {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
    }),
    plugins: devPlugins
})

module.exports = config