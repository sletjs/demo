'use strict'

const BaseController = require('./base')

module.exports = class MyController extends BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)

    this.path = '/users/'
  }
  
  get (req, res) { 
    res.send('respond with a resource');
  }
}
