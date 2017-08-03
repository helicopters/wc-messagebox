<template>
    <transition>
        <div v-if="show" class="wc">
            <div class="wc-popup wc-popup-in">
                <div class="wc-popup-inner">
                    <div class="wc-popup-title" v-if="title">{{title}}</div>
                    <div class="wc-popup-text">{{content}}</div>
                </div>
                <div class="wc-popup-buttons">
                    <span class="wc-popup-button wc-popup-button-bold" :style="btn.style" @click="success">
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