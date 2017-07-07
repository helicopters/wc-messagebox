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
                    <span class="wc-messagebox-popup-button" :style="yes.style" @click="success">{{yes.text}}</span>
                    <span class="wc-messagebox-popup-button" :style="no.style" @click="cancel">{{no.text}}</span>
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