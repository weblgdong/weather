const {json2Url} = require('../utils');
const config = require('../config');
const getCapital = require('../schedule/common/getWeather');

const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/weather");

db.connection.on('error', err => {
    console.log(err)
});

db.connection.on('open', function () {
    console.log('连接成功')
});

const cityModel = require('../model/city');
const setSubscribe = require('../middle/setSubscribe');

cityModel.find({parentid: '0'}, function (err, data) {
    let items = data[Symbol.iterator]();
    nextPus(items);
});


function nextPus(items) {
    let item = items.next();
    if (!item.done) {
        let value = item.value;
        getCapital(value).then((response) => {
            let res = JSON.parse(response);
            if (res.msg === config.msg) {
                let _data = res.result.result;

                let op = {
                    citycode: _data.citycode,
                    city: _data.city,
                    cityid: _data.cityid,
                    parentid: value.parentid,
                    parentCity: value.city
                };
                setSubscribe(op).then(res => {
                    setTimeout(function () {
                        nextPus(items);
                    },2000)
                })
            }
        });
    } else {
        console.log('done')
    }
}