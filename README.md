# slet demo

## 目录结构

```
 tree . -L 3
.
├── app.js
├── bin
│   └── www
├── controllers
│   ├── base.js
│   ├── index.js
│   └── users.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 10 files
```

所有的功能一模一样

和express唯一的差异就是把routes目录换成了controller模板。

## BaseController

```js
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

```
## Controller写法

index.js

```js
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

```

users.js

```js
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

```

