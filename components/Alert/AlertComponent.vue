<template>
    <div v-show="show">
    	<div class="popup popup-in" style="display: block;">
    		<div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
    			<div class="popup-text">{{content}}</div>
    		</div>
    		<div class="popup-buttons">
    			<span class="popup-button popup-button-bold" @click="success">
                    {{btnText}}
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
                btnText: '确定'
            }
        },
        methods: {
            success () {
                this.show = false;
            }
        }
    }
</script>