<template>
    <div v-show="show">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner" :style="contentStyle">
                <div class="popup-title" v-if="title">{{title}}</div>
                <div class="popup-text">{{content}}</div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button" :style="btn.style" @click="success">
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
                title: '',  // 默认无标题
                content: '',
                contentStyle: {
                },
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