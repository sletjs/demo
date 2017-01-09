'use strict'

const Slet = require('slet')

module.exports = class MyUserController extends Slet.BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)

    this.path = '/users/'
  }
  
  get (req, res) { 
    res.send('respond with a resource');
  }
}
