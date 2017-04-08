<template>
    <div v-show="showAlert">
    	<div class="popup popup-in" style="display: block;">
    		<div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
    			<div class="popup-text">{{content}}</div>
    		</div>
    		<div class="popup-buttons">
    			<span class="popup-button popup-button-bold" @touchend="success">
                    {{btnText}}
                </span>
    		</div>
    	</div>
    	<div class="popup-backdrop active" style="display: block;"></div>
    </div>
</template>
<script>
	export default {
        data () {
            return {
                showAlert: true,
                title: '提示',
                content: '',
                btnText: '确定'
            }
        },
        methods: {
            success () {
                this.showAlert = false;
            }
        }
    }
</script>