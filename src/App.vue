<style>
  
</style>
<template>
	
	<div class="container">
		
		<button @click="alert">
			Alert
		</button>

		<button @click="confirm">
			Confirm
		</button>


		<button @click="wxAlert">
			wxAlert
		</button>

		<button @click="wxConfirm">
			wxConfirm
		</button>


		<button @click="toast">
			toast
		</button>



	</div>



</template>
<script>

	import wxAlert from '../wechat-messagebox/Alert'
	import wxConfirm from '../wechat-messagebox/Confirm'
	import D from './wc-messagebox'
	import Vue from 'vue'
	Vue.use(D)



	export default {
		name: 'App',

		components: {
			wxAlert,
			wxConfirm
		},

		methods: {
			alert () {
				this.$alert('你好')
			},
			wxAlert () {
				this.$alert({
					title:'微信',
					content: '你好',
					component: wxAlert
				})
			},
			confirm () {
				this.$confirm('大家好')
			},
			wxConfirm () {
				this.$confirm({
					title: '微信 2',
					content: '啥玩意',
					component: wxConfirm
				})
			},
			toast () {
				this.$toast('十里寒塘路', {
					location: ''
				})
			}

		}
	}
</script>