const router = require('koa-router')()
const controller = require('./../controllers/weather')

module.exports = router
    .get('/',controller._finCurrentWeather);
    