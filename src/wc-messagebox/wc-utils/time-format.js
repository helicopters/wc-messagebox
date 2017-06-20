// timeFormat(timestamp) => 
// {
//     year: 2017,
//     month: 6,
//     day: 19,
//     hour: 15,
//     minute: 02
//     second: 08
// }
export default (timeStamp, supplyZero = true) => {
	// 如果时间戳长度为 10 位, 表示以 s 为单位
    if (timeStamp.toString().length === 10) {
        timeStamp = timeStamp * 1000;
    }
    if (timeStamp.toString().length !== 13) {
        throw new Error('Error timeStamp');
    }
    function _supplyZero(val) {
        return val < 10 ? ('0' + val) : val;
    }
    let date = new Date(timeStamp);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: supplyZero ? _supplyZero(date.getHours()) : date.getHours(),
        minute: supplyZero ? _supplyZero(date.getMinutes()) : date.getMinutes(),
        second: supplyZero ? _supplyZero(date.getSeconds()) : date.getSeconds()
    }
}