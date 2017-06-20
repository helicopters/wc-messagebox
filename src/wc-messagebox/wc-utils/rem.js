var isAndroid = window.navigator.appVersion.match(/android/gi);
var isiOS = window.navigator.appVersion.match(/iphone/gi);
// 首先获取 devicePixelRatio 的值
var devicePixelRatio = parseInt(window.devicePixelRatio);
// Android 设备下面始终为 1
if (isAndroid) {
    devicePixelRatio = 1;
}
// 此时动态设置 meta 标签
var meta = document.createElement('meta')
meta.name = 'viewport';
var initialScale = 'initial-scale=' + (1 / devicePixelRatio).toFixed(2);
var maximumScale = 'maximum-scale=' + (1 / devicePixelRatio).toFixed(2);
var minimumScale = 'minimum-scale=' + (1 / devicePixelRatio).toFixed(2);
meta.content = initialScale + ',' + maximumScale + ',' + minimumScale;
// 绑定 meta 标签
document.head.appendChild(meta);
// 响应式设置 root(font-size) 的值
var baseLayoutWidth = 750;
var baseRootFontSize = 100 * devicePixelRatio;
var radio = baseLayoutWidth / baseRootFontSize;

function setRootFontSize() {
    // 获取当前设备的 visual viewport width
    var curDocumentWidth = document.documentElement.clientWidth;
    if (curDocumentWidth / devicePixelRatio > 500) {
        // 设置根节点的 font-size
        document.documentElement.style.fontSize = (500 / radio).toFixed(2) + 'px';
        document.documentElement.style.width = '500px';
        document.documentElement.style.marginLeft = 'auto';
        document.documentElement.style.marginRight = 'auto';
    } else {
        // 设置根节点的 font-size
        document.documentElement.style.fontSize = (curDocumentWidth / radio).toFixed(2) + 'px';
    }
}
setRootFontSize();
window.onresize = setRootFontSize;
// for font-size 设置
document.documentElement.setAttribute('data-dpr', devicePixelRatio);