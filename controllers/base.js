'use strict';

const Slet = require('slet')

module.exports = class MyViewController extends Slet.BaseController {
  compile (tpl, data) {
    const vt = require('pug')
    let self = this
    
    return new Promise(function(resolve, reject){
      let html = vt.render(self.getTplPath(tpl), data)
      resolve(html)
    })
  }
}
