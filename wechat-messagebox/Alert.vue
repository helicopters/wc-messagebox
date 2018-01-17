<style scoped lang="less">
.wx-alert__mask {
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
.wx-alert__popup {
    position: absolute;
    z-index: 999999;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
}


.wx-dialog__hd {
    padding: 1.3em 1.6em 0.5em;
}
.wx-dialog__title {
    font-weight: 400;
    font-size: 18px;    
}

.wx-dialog__bd {
    padding: 0 1.6em 0.8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999999; 
}
.wx-dialog__ft {
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: flex;  
}
.wx-dialog__btn {
    display: block;
    flex: 1;
    color: #3CC51F;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative; 
}

.wx-dialog__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D5D5D6;
  color: #D5D5D6;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

</style>
<template>
    <div class="wx-alert__mask" v-wc-mask>
        <div class="wx-alert__popup" v-wc-popup>
            <div class="wx-dialog__hd">
                <strong class="wx-dialog__title">{{w.title || "操作提示"}}</strong>
            </div> 
            <div class="wx-dialog__bd">{{w.content}}</div> 
            <div class="wx-dialog__ft" :style="w.style">
                <a href="javascript:;" class="wx-dialog__btn wx-dialog__btn_primary" v-wc-then>{{w.btnText || "确定"}}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['w']
    }
</script>