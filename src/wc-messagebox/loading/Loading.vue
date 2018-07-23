<style lang="less">
@import './loading.less';
.wc-loading-wrapper {
    position: fixed;
    z-index: 99999;
    width: 91px;
    min-height: 91px;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.wc-loading__loading-wrapper {
	position: absolute;
	top: 38%;
	left: 50%;
}
.wc-loading__text {
	font-size: 14px;
	color: white;
	position: absolute;
	bottom: 10px;
	text-align: center;
	width: 100%;
}
.wc-loading__mask {
	position: fixed;
	top:0;
	right: 0;
	left: 0;
	bottom: 0;
}
</style>
<template>

	<div class="wc-loading-container"  v-if="show">
		<div class="wc-loading__mask"></div>
		<div class="wc-loading-wrapper">
			<div class="wc-loading__loading-wrapper">
				<div class="loading_leaf loading_leaf_0"></div>
				<div class="loading_leaf loading_leaf_1"></div>
				<div class="loading_leaf loading_leaf_2"></div>
				<div class="loading_leaf loading_leaf_3"></div>
				<div class="loading_leaf loading_leaf_4"></div>
				<div class="loading_leaf loading_leaf_5"></div>
				<div class="loading_leaf loading_leaf_6"></div>
				<div class="loading_leaf loading_leaf_7"></div>
				<div class="loading_leaf loading_leaf_8"></div>
				<div class="loading_leaf loading_leaf_9"></div>
				<div class="loading_leaf loading_leaf_10"></div>
				<div class="loading_leaf loading_leaf_11"></div>	
			</div>
			<div class="wc-loading__text">
				{{text}}
			</div>
			
		</div>		
	</div>

</template>
<script>
	export default {
		name: 'Loading',
		data () {
			return {
				show: false,
				text: ''
			}
		}
	}
</script>