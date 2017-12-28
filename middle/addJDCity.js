const cityModel = require('../model/city');

function addJDCity(data) {
    return new Promise((resolve, reject) => {
        cityModel.create(data, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = addJDCity;