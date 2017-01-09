'use strict';

const Slet = require('slet')
var cons = require('consolidate');

module.exports = class MyViewController extends Slet.BaseController {
    constructor(app, ctx, next) {
      super(app, ctx, next)
    }

    compile(tpl, data) {

      let self = this

      return new Promise(function(resolve, reject) {
          cons.pug(self.getTplPath (tpl), data, function(err, html) {
              if (err) reject(err);
              // console.log("html" + html);
              resolve(html)
          })
        })
      }
    }