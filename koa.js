const Koa = require('koa');
var views = require('koa-views');
const pug = require('pug')

const app = new Koa();

app.use(views(__dirname + '/views', {
extension: 'pug'
}));
// response
app.use(ctx => {
    return ctx.render('index', { title: 'Express' })
  // ctx.body = 'Hello Koa';
});

module.exports = app