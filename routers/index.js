const router = require('koa-router')()

const weather = require('./weather')
router.use('/weather', weather.routes(), weather.allowedMethods());

module.exports = router