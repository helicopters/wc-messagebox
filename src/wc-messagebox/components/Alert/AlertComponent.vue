<template>
    <div v-if="show">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
                <div class="popup-text">{{content}}</div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button popup-button-bold" :style="btn.style" @click="success">
                    {{btn.text}}
                </span>
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
                title: '提示',
                content: '',
                btn: {
                    text: '确定',
                    // 设置样式
                    style: {}
                }
            }
        },
        methods: {
            success () {
                this.show = false;
            }
        }
    }
</script>