const request = require('request');
const iconv = require('iconv-lite');
const config = require('../config');
const {json2Url} = require('../utils');

function getJDCity() {
    let params = {
        appkey: config.appkey
    };
    let url = config.cityUrl + json2Url(params);
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

module.exports = getJDCity;