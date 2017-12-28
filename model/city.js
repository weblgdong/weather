const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    citycode: String,
    city: String,
    cityid: String,
    parentid: String
});

const cityModel = mongoose.model('cityList', citySchema);

module.exports = cityModel;