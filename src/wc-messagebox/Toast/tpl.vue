<style scoped lang="less">
.wc-toast {
    position: fixed;
    z-index: 999999;
    line-height: 17px;
}

.wc-toast--default {
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 80px;	
}
.wc-toast--center {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.wc-toast--top {
	top: 80px;
	left: 50%;
	transform: translate(-50%, -50%);
}
.wc-toast-message {
    font-size: 14px;
    padding: 12px 16px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    background: #323232;
    opacity: .9;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    img {
    	margin-bottom: 8px;
    }
    .wc-toast__text {
    	
    }
}
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
		<div class="wc-toast" v-if="show" :class="{'wc-toast--center': location == 'center', 'wc-toast--default': location == '', 'wc-toast--top': location == 'top'}">
			<div class="wc-toast-message" :style="toastStyle">
				<img :src="path" alt="" :style="imgStyle" v-if="path">
				<div class="wc-toast__text" :style="textStyle">{{content}}</div>
			</div>
		</div>
	</transition>
</template>
<script>
    import pageChange from '../mixins'
	export default {
        mixins: [pageChange],
		data () {
			return {
				show: false,
				content: '',
				duration: 1500,
				location: '',
				toastStyle: {},
				imgStyle: {},
				textStyle: {},
				path: '',
			}
		}
	}
</script>