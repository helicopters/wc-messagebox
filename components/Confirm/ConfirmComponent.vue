<template>
    <div v-show="showConfirm">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
                <div class="popup-text">{{content}}</div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button popup-button-bold" @click="success">{{yes}}</span>
                <span class="popup-button popup-button-bold" @click="cancel">{{no}}</span>
            </div>
        </div>
        <div class="popup-backdrop active" style="display: block;"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                showConfirm: true,
                title: '提示',
                content: '',
                yes: '确定',
                no: '取消'
            }
        },
        methods: {
            success () {
                this.showConfirm = false;
            },
            cancel () {
                this.showConfirm = false;
            }
        }
    }
</script>