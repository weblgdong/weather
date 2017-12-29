/**
 * 添加所有到天气列表
 */
const config = require('../config');

// 查询天气
const getWeather = require('./getWeather');

// 查询是否需要更新
const queryExist = require('./queryExist');

// 更新天气
const pushWeather = require('./pushWeather');

function updateWeather(items) {
    let item = items.next();
    if (!item.done) {
        getWeather(item.value).then((weather) => {
            let data = JSON.parse(weather);
            let status = (data.msg === config.msg);
            if (status) {
                let _data = data.result.result;
                // 列表
                queryExist(_data).then((exist) => {
                    if (exist) {
                        console.log(_data.city, '有');
                        updateWeather(items)
                    } else {
                        console.log(_data.city);
                        pushWeather(_data).then((res) => {
                            updateWeather(items)
                        })
                    }
                });

            }
        });
    } else {
        console.log('更新完成')
    }
}

module.exports = updateWeather;