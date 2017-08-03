<template>
	<div v-if="show" class="wc-toast" :class="{ show: currentShow }">
		<div class="wc-toast-message">
			{{content}}
		</div>
	</div>
</template>
<script>
    import pageChange from '../../mixins'
	export default {
        mixins: [pageChange],
		data () {
			return {
				show: false,
				content: '',
				duration: 1500,
				currentShow: false,
			}
		},
		watch: {
            show (val, oldval) {
                if( val ){
                    setTimeout(()=>{
                        this.currentShow = true;
                    }, 10);
                }
            }
        }
	}
</script>