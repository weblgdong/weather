const findCurrentWeather = require('../common/findCurrentWeather');

module.exports = {
  async _finCurrentWeather(ctx){
    let request = ctx.request
    let req_query = request.query
    console.log(req_query)
    let data = await findCurrentWeather(req_query);
    ctx.body = data;
  }
}