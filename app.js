'use strict'

const Slet = require('slet')
const serve = require('koa-static')

const app = new Slet({
  root: __dirname,
  debug: true,
  auto: false,
  views:{
    path: 'views', 
    extension: 'pug'
  }
})

app.use(serve('public'))

// server.listen(4005)
module.exports = app
