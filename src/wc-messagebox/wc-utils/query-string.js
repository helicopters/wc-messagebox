// 将对象转换为 queryString 的形式
export default obj => {
    let str = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = JSON.stringify(obj[key])
        }
    }
    for (let key in obj) {
        str = str + '&' + key + '=' + obj[key];
    }
    return '?' + str.slice(1);	
}
