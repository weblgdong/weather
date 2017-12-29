/**
 * 查询天气是否需要更新
 */
const weatherModel = require('../model/weather');

function queryExist(item) {
    let {date, city, cityid, updatetime} = item;
    let options = {date, city, cityid, updatetime};
    return new Promise(((resolve, reject) => {
        weatherModel.findOne(options, function (err, response) {
            if (err) {
                reject(options);
            } else {
                resolve(response);
            }
        })
    }))
}

module.exports = queryExist;

