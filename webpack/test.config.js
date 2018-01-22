const path = require('path')

const baseConfig = require('./config.js')

module.exports = Object.assign({}, baseConfig, {
    entry:  {
        tests:['./tests']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '../build/tests'),
    },
    target: 'node'
});