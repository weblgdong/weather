const subscribeModel = require('../../model/subscribeCity');

async function findSubscribeCity(data) {
    return await subscribeModel.find(data).exec();
}


module.exports = findSubscribeCity;
