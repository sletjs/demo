'use strict'

const Slet = require('slet')

const app = new Slet({
  root: __dirname,
  debug: true,
  auto: false,
  views:{
    path: '/views', 
    extension: 'jade'
  }
})

app.start(4000) 
