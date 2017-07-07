<style scoped lang="less">
    .v-enter{
        opacity: 0;
        .wc-popup{
            transform: translate3d(-50%, -50%, 0) scale(1.185);
        }
    }
    .v-enter-active, .v-leave-active{
        transition: all .4s;
        .wc-popup{
            transition: all .4s;
        }
    }
    .v-leave-active{
        opacity: 0;
    }    
</style>
<template>
    <transition>
        <div v-if="show" class="wc">
            <div class="wc-popup wc-popup-in">
                <div class="wc-popup-inner">
                    <div class="wc-popup-title" v-if="title">{{title}}</div>
                    <div class="wc-popup-text">{{content}}</div>
                    <div class="wc-popup-input">
                        <input type="text" autofocus="" :placeholder="placeholder" v-model="value" ref="input">
                    </div>                    
                </div>
                <div class="wc-popup-buttons">
                    <span class="wc-popup-button" :style="yes.style" @click="success">{{yes.text}}</span>
                    <span class="wc-popup-button" :style="no.style" @click="cancel">{{no.text}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import pageChange from '../../mixins'
    import preventPageScroll from 'wc-utils/prevent-page-scroll'
    export default {
        mixins: [pageChange],
        data () {
            return {
                show: false,
                title: '提示',
                content: '',
                placeholder: '长的帅',
                value: '',
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
        mounted () {
            setTimeout(()=>{
                this.$refs.input.focus();
                document.querySelector('.wc-popup-input input').focus();
                // alert(document.querySelector('.wc-popup-input input'))
            },400)
            preventPageScroll.prevent();
        },
        methods: {
            success () {
                this.show = false;
                preventPageScroll.recover();
            },
            cancel () {
                this.show = false;
                preventPageScroll.recover();
            }
        }
    }
</script>