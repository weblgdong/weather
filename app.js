const path = require('path');
const Koa = require('koa');
const config = require('./config')
const bodyParser = require('koa-bodyparser');

const routers = require('./routers/index')

const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/weather");

db.connection.on('error', err => {
    console.log(err)
});

db.connection.on('open', function () {
    console.log('连接成功')
});

const app = new Koa();
const Router = require('koa-router')

// 配置ctx.body解析中间件
app.use(bodyParser());

app.use(routers.routes()).use(routers.allowedMethods())

app.listen( config.port );