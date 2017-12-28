exports.json2Url = function (json) {
    let url = '?';
    for (let item in json) {
        if (item !== '') {
            url += `${item}=${json[item]}&`
        }
    }
    return url.replace(/&$/, '');
};
