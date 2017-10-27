var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiRoot: '"//devapi.fccn.cc/Api"',
  apiMall: '"//marketapidev.fccn.cc/api/market"'
})
