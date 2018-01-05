const currentWeatherModel = require('../model/currentWeather');

async function findCurrentWeather(params) {
    let option ={};
    if(params){
        option = params
    }
    return await currentWeatherModel.find(option).exec()
}

module.exports = findCurrentWeather;