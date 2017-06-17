<style scoped lang="less">
    .v-enter{
        opacity: 0;
        .popup{
            transform: translate3d(-50%, -50%, 0) scale(1.185);
        }
    }
    .v-enter-active, .v-leave-active{
        transition: all .4s;
        .popup{
            transition: all .4s;
        }
    }
    .v-leave-active{
        opacity: 0;
    }     
</style>
<template>
    <transition>
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
    </transition>
</template>
<script>
    import pageChange from '../../mixins'
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