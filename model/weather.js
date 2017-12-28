const mongoose = require('mongoose');
// 天气列表
const weatherSchema = new mongoose.Schema({
    date: String,
    templow: String,
    temp: String,
    img: String,
    week: String,
    city: String,
    windpower: String,
    index: Object,
    cityid: String,
    pressure: String,
    temphigh: String,
    citycode: String,
    winddirect: String,
    daily: Object,
    weather: String,
    aqi: Object,
    humidity: String,
    windspeed: String,
    hourly: Object,
    updatetime: String,
    createTime: {
        type: Number,
        default: Date.now()
    }
});

const weatherModel = mongoose.model('weatherList', weatherSchema);

module.exports = weatherModel;