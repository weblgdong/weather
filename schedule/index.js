const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/weather");
const nodeSchedule = require('node-schedule');

db.connection.on('error', err => {
    console.log(err)
});

db.connection.on('open', function () {
    console.log('连接成功')
});

// 所有订阅城市列表
const queryCityList = require('../common/queryCityList');

const updateWeather = require('../common/updateWeather')
const updateCurrentWeather = require('../common/updateCurrentWeather')


async function schedule() {
    let cityList = await queryCityList();
    let items = cityList[Symbol.iterator]();
    let currentItems = cityList[Symbol.iterator]();
    updateWeather(items);
    updateCurrentWeather(currentItems);
}


const rule = new nodeSchedule.RecurrenceRule();
rule.hour = [4,10,18,21];

rule.minute = 2;

const j = nodeSchedule.scheduleJob(rule, function(){
    console.log('开始任务-----------------');
    schedule();
});




