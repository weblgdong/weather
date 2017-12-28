const currentWeatherModel = require('../../model/currentWeather');

function upCurrentWeather(item) {
    let {city, cityid} = item;
    let options = {city, cityid};
    item.updateTime = Date.now();
    return new Promise((resolve, reject) => {
        currentWeatherModel.update(options, item, {multi: true}, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        })
    })
}

module.exports = upCurrentWeather;