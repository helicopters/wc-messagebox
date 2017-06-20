/*
为了解决, 某些时候, 当你有一份默认配置的时候, 需要全局引用它们的时候,可以达到这种引用方式:
    _const.appid, 
    _const.appKey

而你只需要提前设置:
    windowInjector('_const', config[process.env.NODE_ENV]);

*/
export default (key, data) => {
    // 1 先在 window 对象上面创建一个字段, 
    if (window[key]) {
        throw new Error('property conflict: there already has ' + key + ' property in window');
        return;
    }
    // 附加值
    window[key] = Object.assign(window[key], data);
}