const defaultConfig = require( './webpack/config' )
const fs = require('fs')
const path = require('path')

const knownEnv = ['dev', 'prod', 'test', 'test.bro', 'debug']

module.exports = function (env, params) {

    if (env === undefined) 
        env = 'prod'

    if (knownEnv.indexOf(env) === -1) 
        throw new Error('Invalid environment')

    var configFile = path.resolve(__dirname, 'webpack/' + env + '.config.js')
    try {
        var fstats = fs.statSync(configFile)
    } catch (e) {
        throw new Error('Invalid config file or environment')
    }
    if (!fstats.isFile())
        throw new Error('Invalid config file or environment')    

    var envConfig = require( configFile )
    return Object.assign(defaultConfig, envConfig)
}