const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/weather");

const getJDCity = require('../middle/getJDCity');
const addJDCity = require('../middle/addJDCity');
const config = require('../config');

db.connection.on('error', function (err) {
    console.log('err:' + err)
});

db.connection.on('open', function () {
    console.log('数据连接成功')
});

getJDCity().then(function (response) {
    let result = JSON.parse(response);
    if (config.msg === result.msg) {
        result = result.result;
        if (result.msg === 'ok') {
            let data = result.result;
            let map = data[Symbol.iterator]();
            addCityList(map);
        }
    }
});

function addCityList(map) {
    let item = map.next();
    if (item.done === false) {
        addJDCity(item.value).then((res) => {
            console.log(res);
            addCityList(map);
        })
    } else {
        console.log(item)
    }
}