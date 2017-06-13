<style lang="less" scoped>
	.toast-container {
		position: fixed;
		z-index: 9999;
		line-height: 17px;
		-webkit-transition: opacity .3s;
		transition: opacity .3s;
		opacity: .9;
	}
	.toast-message {
		font-size: 14px;
		padding: 15px 20px;
		text-align: center;
		color: #fff;
		border-radius: 6px;
		background-color: #323232;
		img {
			height: .5rem;
			width: .5rem;
			margin:0 auto;
			display: block;
			margin-bottom: 12px;
		}
	}
	.bottom{
		left: 50%;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		bottom: 50px;			
	}
	.center{
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);		
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}

</style>
<template>
	<transition name="fade" @after-leave="afterLeave">
		<div class="toast-container" :class="position" v-show="show">
			<div class="toast-message">
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
				position: 'bottom'
			}
		},
		methods: {
			afterLeave () {
				this.show = false;
			}
		}
	}
</script>