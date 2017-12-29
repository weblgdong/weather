/**
 *  添加订阅天气
 */
const weatherModel = require('../model/currentWeather');

function pushCurrentWeather(data) {
    return new Promise((resolve, reject) => {
        weatherModel.create(data, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        })
    })
}

module.exports = pushCurrentWeather;