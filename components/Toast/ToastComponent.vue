<style scoped lang="less">
	.toast-container {
		position: fixed;

		z-index: 9999;
		line-height: 17px;
		-webkit-transition: opacity .3s;
		transition: opacity .3s;
		opacity: .9;
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

	.toast-message {
		font-size: 14px;
		padding: 10px 25px;
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
	.save{
		display: block;
		margin-bottom: 20px;
		font-size: 40px;
	}
</style>
<template>
	<div class="toast-container" :class="position"v-show="showToast">
		<div class="toast-message">
			<i class="iconfont save" v-if="withImg">&#xe7bc;</i>
			{{content}}
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			// showToast: true
			return {
				showToast: true,
				content: '',
				position: 'bottom',
				withImg: false
			}
		}
	}
</script>