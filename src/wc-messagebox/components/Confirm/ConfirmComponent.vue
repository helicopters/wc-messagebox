<style scoped lang="less">
.popup {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    display: none;
    overflow: hidden;
    width: 270px;
    -webkit-transition-property: -webkit-transform, opacity;
    transition-property: transform, opacity;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
    transform: translate3d(-50%, -50%, 0) scale(1.185);
    text-align: center;
    opacity: 0;
    color: #000;
    border-radius: 13px;
}
.popup.popup-in {
    display: block;
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
}
.popup.popup-out {
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0;
}
.popup-inner {
    position: relative;
    padding: 15px;
    border-radius: 13px 13px 0 0;
    background: rgba(255, 255, 255, .95);
}
.popup-inner:after {
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
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    background-color: rgba(0, 0, 0, .2);
}
.popup-title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.popup-title + .popup-text {
    font-family: inherit;
    font-size: 14px;
    margin: 5px 0 0;
}
.popup-buttons {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 44px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.popup-button {
    font-size: 17px;
    line-height: 44px;
    position: relative;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    background: rgba(255, 255, 255, .95);
    -webkit-box-flex: 1;
}
.popup-button:after {
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
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    background-color: rgba(0, 0, 0, .2);
}
.popup-button:first-child {
    border-radius: 0 0 0 13px;
}
.popup-button:first-child:last-child {
    border-radius: 0 0 13px 13px;
}
.popup-button:last-child {
    border-radius: 0 0 13px 0;
}
.popup-button:last-child:after {
    display: none;
}
.popup-backdrop {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    opacity: 0;
    background: rgba(0, 0, 0, .4);
}
.popup-backdrop.active {
    opacity: 1;
}    
</style>
<template>
    <div v-if="show">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
                <div class="popup-text">{{content}}</div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button" :style="yes.style" @click="success">{{yes.text}}</span>
                <span class="popup-button" :style="no.style" @click="cancel">{{no.text}}</span>
            </div>
        </div>
        <div class="popup-backdrop active" style="display: block;"></div>
    </div>
</template>
<script>
    import pageChange from '../../mixins'
    export default {
        mixins: [pageChange],
        data () {
            return {
                show: true,
                title: '',
                content: '',
                yes: {
                    text: '确定',
                    style: {}
                },
                no: {
                    text: '取消',
                    style: {}
                }
            }
        },
        methods: {
            success () {
                this.show = false;
            },
            cancel () {
                this.show = false;
            }
        }
    }
</script>