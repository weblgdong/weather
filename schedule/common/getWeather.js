const request = require('request');
const iconv = require('iconv-lite');
const config = require('../../config');
const {json2Url} = require('../../utils');

function getWeather(city) {
    let params = {
        city: encodeURI(city.city),
        cityid: city.cityid,
        citycode: city.citycode,
        appkey: config.appkey
    };
    let url = config.weatherUrl + json2Url(params);
    return new Promise((resolve, reject) => {
        request({
            url,
            encoding: null
        }, (err, response, body) => {
            if (err) {
                reject(err)
            } else {
                let result = iconv.decode(body, 'utf-8');
                resolve(result);
            }

        })
    })

}

module.exports = getWeather;