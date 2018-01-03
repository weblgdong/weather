/**
 * 更新所有订阅天气
 */
const config = require('../config');

// 查询天气
const getWeather = require('./getWeather');

// 查询是否需要更新
const queryExisCurrent = require('./queryExisCurrent');

// 更新天气
const pushCurrentWeather = require('./pushCurrentWeather');
const upCurrentWeather = require('./upCurrentWeather');

function updateCurrentWeather(items) {
    let item = items.next();
    if (!item.done) {
        getWeather(item.value).then((weather) => {
            let data = JSON.parse(weather);
            let status = (data.msg === config.msg);
            if (status) {
                let _data = data.result.result;
                // 列表
                queryExisCurrent(_data).then((exist) => {
                    console.log(_data.city, _data.weather, _data.templow + '-' + _data.temphigh);
                    if (exist) {
                        // console.log(_data.city, '有');
                        upCurrentWeather(_data).then((res) => {
                            updateCurrentWeather(items)
                        })
                    } else {
                        // console.log(_data.city);
                        pushCurrentWeather(_data).then((res) => {
                            updateCurrentWeather(items)
                        })
                    }
                });

            }
        });
    } else {
        console.log('更新完成')
    }
}

module.exports = updateCurrentWeather;