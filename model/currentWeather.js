const mongoose = require('mongoose');
// 当前天气
const currentWeatherSchema = new mongoose.Schema({
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
    updateTime: {
        type: Number,
        default: Date.now()
    }
});

const currentWeatherModel = mongoose.model('currentWeather', currentWeatherSchema);

module.exports = currentWeatherModel;