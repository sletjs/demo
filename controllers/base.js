'use strict';

const Slet = require('slet')

module.exports = class MyViewController extends Slet.BaseController {
  constructor (app, ctx, next) {
    super(app, ctx, next)
  }

  compile (tpl, data) {
    const vt = require('pug')
    let self = this
    
    return new Promise(function(resolve, reject){
      let html = vt.renderFile(self.getTplPath(tpl), data)
      resolve(html)
    })
  }
}
