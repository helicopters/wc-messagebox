// 绑定长按事件
export default (ele, cb) => {
    // 长按时间
    let duration = 500;
    let timer = null;
    
    ele.addEventListener('touchstart', function(){
        timer = setTimeout(function(){
            cb();
        }, duration);
    }, false);

    ele.addEventListener('touchend', function(){
        clearTimeout(timer);
    }, false);

    ele.addEventListener('touchmove', function(){
        clearTimeout(timer);
    }, false);
}