<style scoped lang="less">
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}	
</style>
<template>
	<transition name="fade">
		<div class="wc-messagebox-toast" v-if="show">
			<div class="wc-messagebox-toast-message">
				{{content}}
			</div>
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
				content: '',
				duration: 1500
			}
		}
	}
</script>