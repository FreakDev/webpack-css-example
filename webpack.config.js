const defaultConfig = require( './webpack/config' )
const fs = require('fs')
const path = require('path')

module.exports = function (env, params) {
    var configFile = path.resolve(__dirname, 'webpack/' + env + '.config.js')
    var fstats = fs.statSync(configFile)
    if (!fstats.isFile())
        throw new Error('Invalid config file or environment')

    var envConfig = require( configFile )
    return Object.assign(defaultConfig, envConfig)
}