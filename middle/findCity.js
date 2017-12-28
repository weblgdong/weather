/**
 * 查找城市
 */

const subscribeCity = require('../model/subscribeCity');

/*
function findCity(data) {
    return new Promise((resolve, reject) => {
        subscribeCity.find(data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
*/

async function findCity(data) {
    let nodes = await subscribeCity.findOne(data).exec();
    return nodes;
}

module.exports = findCity;