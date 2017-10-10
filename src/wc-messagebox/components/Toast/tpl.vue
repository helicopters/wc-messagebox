<style scoped lang="less">
	.wc-fade-enter {
	  opacity: 0
	}
	.wc-fade-enter-active, .wc-fade-leave-active {
	  transition: opacity .4s
	}
	.wc-fade-leave-active {
		opacity: 0;
	}

</style>
<template>
	<transition name="wc-fade">
		<div class="wc-toast" v-if="show" :style="style">
			<div class="wc-toast-message">
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
				duration: 1500,
				style: {}
			}
		}
	}
</script>