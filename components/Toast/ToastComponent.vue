<style scoped lang="less">
	.toast-container {
		line-height: 17px;
		position: fixed;
		z-index: 9999;
		bottom: 50px;
		left: 50%;
		-webkit-transition: opacity .3s;
		transition: opacity .3s;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		opacity: .9;
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
</style>
<template>
	<div class="toast-container" v-show="showToast">

		<div class="toast-message">
			<!-- <img src="../../assets/right.png" alt="" v-if="showImg"> -->
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
				content: ''
			}
		}
	}
</script>