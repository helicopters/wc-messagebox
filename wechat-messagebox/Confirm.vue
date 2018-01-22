<style scoped>
.weui-mask {
  position: fixed;
  z-index: 999998;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.weui-dialog {
  position: absolute;
  z-index: 999999;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.weui-dialog__hd {
  padding: 1.3em 1.6em 0.5em;
}
.weui-dialog__hd.with-no-content {
  padding: 1.7em 1.6em;
}
.weui-dialog__title {
  font-weight: 400;
  font-size: 18px;
}
.weui-dialog__bd {
  padding: 0 1.6em 0.8em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  color: #999999;
}
.weui-dialog__bd:first-child {
  padding: 2.7em 20px 1.7em;
  color: #353535;
}
.weui-dialog__ft {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.weui-dialog__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D5D5D6;
  color: #D5D5D6;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.weui-dialog__btn {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
          flex: 1;
  color: #3CC51F;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}
.weui-dialog__btn:active {
  background-color: #EEEEEE;
}
.weui-dialog__btn:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #D5D5D6;
  color: #D5D5D6;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
}
.weui-dialog__btn:first-child:after {
  display: none;
}	

.weui-dialog__btn_default {
  color: #353535;
}


</style>
<template>
    <div class="wx-confirm">
        <div class="weui-mask" style="" v-wc-mask></div>
        <div class="weui-dialog" style="" v-wc-popup>
            <div class="weui-dialog__hd">
            	<strong class="weui-dialog__title">{{w.title || "操作提示"}}</strong>
            </div>
            <div class="weui-dialog__bd">
                <p style="text-align: center;">{{w.content}}</p>
            </div>
            <div class="weui-dialog__ft">
            	<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-wc-catch :style="w.noStyle">{{w.noText || "取消"}}</a> 
            	<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-wc-then :style="w.yesStyle">{{w.yesText || "确定"}}</a>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
		props: ['w']
	}
</script>