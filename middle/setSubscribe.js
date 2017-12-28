/**
 * 设置订阅城市
 */
const findCity = require('./findCity');
const subscribeCity = require('../model/subscribeCity');

function createCity(data, callback) {
    /* findCity(data).then((res) => {
         console.log(res);
         callback && callback();
     })
    console.log(data);
    let a = await findCity(data);
    console.log('a', a);*/
    return new Promise(((resolve, reject) => {
        subscribeCity.create(data, (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        })
    }))
}


module.exports = createCity;