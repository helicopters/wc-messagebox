<style lang="less" scoped>

.wc-mask {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 999998;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.wc-popup {
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 270px;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
    text-align: center;
    color: #000;
    border-radius: 13px;
}
.wc-popup.wc-popup-in {
    display: block;
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
}
.wc-popup.wc-popup-out {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0;
}
.wc-popup-inner {
    position: relative;
    padding: 15px;
    border-radius: 13px 13px 0 0;
    background: rgba(255, 255, 255, .95);
}
.wc-popup-inner:after {
    position: absolute;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    transform-origin: 50% 100%;
    background-color: rgba(0, 0, 0, .2);
}
.wc-popup-title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.wc-popup-title + .wc-popup-text {
    font-family: inherit;
    font-size: 14px;
    margin: 5px 0 0;
}
.wc-popup-buttons {
    position: relative;
    display: flex;
    height: 44px;
    justify-content: center;
}
.wc-popup-button {
    font-size: 17px;
    line-height: 44px;
    position: relative;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 5px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    background: rgba(255, 255, 255, .95);
    letter-spacing: 0.5px;
    cursor: pointer;
}
.wc-popup-button:after {
    position: absolute;
    z-index: 15;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    display: block;
    width: 1px;
    height: 100%;
    content: '';
    transform: scaleX(.5);
    transform-origin: 100% 50%;
    background-color: rgba(0, 0, 0, .2);
}
.wc-popup-button:first-child {
    border-radius: 0 0 0 13px;
}
.wc-popup-button:first-child:last-child {
    border-radius: 0 0 13px 13px;
}
.wc-popup-button:last-child {
    border-radius: 0 0 13px 0;
}
.wc-popup-button-bold {
    font-weight: 600;
}
.wc-popup-button:last-child:after {
    display: none;
}
    
</style>
<template>

    <div class="wc-mask" v-wc-mask>
        <div class="wc-popup wc-popup-in" v-wc-popup>
            <div class="wc-popup-inner">
                <div class="wc-popup-title">{{w.title|| "提示"}}</div>
                <div class="wc-popup-text">{{w.content}}</div>
            </div>
            <div class="wc-popup-buttons">
                <span class="wc-popup-button" :style="w.yesStyle" v-wc-then>{{w.yesText || "确定"}}</span>
                <span class="wc-popup-button" :style="w.noStyle" v-wc-catch>{{w.noText || "取消"}}</span>
            </div>
        </div>
    </div>

</template>
<script>
	export default {
		props: ['w']
	}
</script>