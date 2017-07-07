<style scoped lang="less">
    .v-enter{
        opacity: 0;
        .wc-messagebox-popup{
            transform: translate3d(-50%, -50%, 0) scale(1.185);
        }
    }
    .v-enter-active, .v-leave-active{
        transition: all .4s;
        .wc-messagebox-popup{
            transition: all .4s;
        }
    }
    .v-leave-active{
        opacity: 0;
    }    
</style>
<template>
    <transition>
        <div v-if="show" class="wc-messagebox">
            <div class="wc-messagebox-popup wc-messagebox-popup-in">
                <div class="wc-messagebox-popup-inner">
                    <div class="wc-messagebox-popup-title" v-if="title">{{title}}</div>
                    <div class="wc-messagebox-popup-text">{{content}}</div>
                </div>
                <div class="wc-messagebox-popup-buttons">
                    <span class="wc-messagebox-popup-button wc-messagebox-popup-button-bold" :style="btn.style" @click="success">
                        {{btn.text}}
                    </span>
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
                btn: {
                    text: '确定',
                    style: {}
                }
            }
        },
        mounted () {
            preventPageScroll.prevent();
        },
        methods: {
            success () {
                this.show = false;
                preventPageScroll.recover();
            }
        }
    }
</script>