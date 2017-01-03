'use strict'

const BaseController = require('./base')

module.exports = class MyController extends BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)

    this.path = '/'
  }
  
  get (req, res) { 
    return res.render('index', { title: 'Express' })
  }
}
