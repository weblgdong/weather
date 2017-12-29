/**
 * 更新天气列表
 */
const weatherModel = require('../model/weather');

function pushWeather(data) {
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

module.exports = pushWeather;