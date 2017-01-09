'use strict'

const BaseController = require('./base')

module.exports = class MyController extends BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)
    // this.global_filter = ['registerBaseAlias']
    this.path = '/'
  }
  
  get (req, res) { 
      // return {}
    // return res.json({})
      res.render('index', { title: 'Express' })
  }
}
