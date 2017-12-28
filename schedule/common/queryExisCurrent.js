const currentWeatherModel = require('../../model/currentWeather');

function queryExisCurrent(item) {
    let {city, cityid} = item;
    let options = {city, cityid};
    return new Promise(((resolve, reject) => {
        currentWeatherModel.findOne(options, function (err, response) {
            if (err) {
                reject(options);
            } else {
                resolve(response);
            }
        })
    }))
}

module.exports = queryExisCurrent;

