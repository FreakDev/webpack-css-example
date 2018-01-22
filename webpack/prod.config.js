const path = require('path')

const baseConfig = require('./config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = Object.assign({}, baseConfig, {
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].bundle.min.js',
        path: path.join(__dirname, '../build'),
        publicPath: '/build'
    },

    plugins: [
        ...baseConfig["plugins"],
        new UglifyJsPlugin({
            uglifyOptions: { warnings: false }
        })
    ]
    
})