/*
 * @Author: jianxi_lin
 * @Date: 2018-05-08 17:53:23
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-21 15:37:14
 */
var  express = require('express')
var   Nuxt = require('nuxt').Nuxt
var Builder = require('nuxt').Builder


//原版node中间层，保留了原版的所有文件
//var rest = require('./middleware/rest');
//var controller = require('./controller');

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8096

app.set('port', port)


// Import API Routes
//app.use(rest.restify())
//app.use(controller())

//改版node中间层
app.use(require("./controns/home.js"));
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
