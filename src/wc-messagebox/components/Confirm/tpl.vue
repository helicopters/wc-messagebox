<template>
    <transition name="wc">
        <div v-if="show" class="wc">
            <div class="wc-popup wc-popup-in">
                <div class="wc-popup-inner">
                    <div class="wc-popup-title" v-if="title">{{title}}</div>
                    <div class="wc-popup-text">{{content}}</div>
                </div>
                <div class="wc-popup-buttons">
                    <span class="wc-popup-button" :style="yesStyle" @click="success">{{yes.text}}</span>
                    <span class="wc-popup-button" :style="noStyle" @click="cancel">{{no.text}}</span>
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
                style: {},
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
        computed: {
            yesStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.yes.style);
            },
            noStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.no.style);
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