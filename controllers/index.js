'use strict'

const BaseController = require('./base')


module.exports = class MyController extends BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)

    this.path = '/'
  }
  
  get (req, res) { 
    // return res.json({a:1})
    return res.render('index', { title: 'Express' })

  }
}

