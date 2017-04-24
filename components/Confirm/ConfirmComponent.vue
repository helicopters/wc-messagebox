<template>
    <div v-show="show">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
                <div class="popup-text">{{content}}</div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button" :class="style.yes.class" :style="{'color':style.yes.color}"  @click="success">{{yes}}</span>
                <span class="popup-button popup-button-bold" :class="style.no.class" :style="{'color':style.no.color}" @click="cancel">{{no}}</span>
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
                yes: '确定',
                no: '取消',
                style: {
                    no: {
                        color: '',  // 字体颜色
                        class: ''   // 按钮的 class
                    },
                    yes: {
                        color: '',
                        class: ''
                    }
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