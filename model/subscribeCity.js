const mongoose = require('mongoose');
const subscribeSchema = new mongoose.Schema({
    citycode: String,
    city: String,
    cityid: String,
    parentid: String,
    parentCity: {
        type: String,
        default: ''
    }
});

const subscribeModel = mongoose.model('subscribeCity', subscribeSchema);

module.exports = subscribeModel;