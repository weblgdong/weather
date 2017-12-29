// 1.获取订阅城市列表
const findSubscribeCity = require('./findSubscribeCity');

async function queryCityList() {
    return await findSubscribeCity({});
}

module.exports = queryCityList;