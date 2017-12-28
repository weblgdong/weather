const request = require('request');
const iconv = require('iconv-lite');
const config = require('../config');
const {json2Url} = require('../utils');

async function getJDWeather(city) {
    let params = {
        city: encodeURI(city.city),
        cityid: city.cityid,
        citycode: city.citycode,
        appkey: config.appkey
    };
    let url = config.weatherUrl + json2Url(params);
    request({
        url,
        encoding: null
    }, (err, response, body) => {
        let result = iconv.decode(body, 'utf-8');
        new Promise.resolve(result)
    })
}

