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


	</div>



</template>
<script>

	import wxAlert from '../wechat-messagebox/Alert'
	import wxConfirm from '../wechat-messagebox/Confirm'



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

		}
	}
</script>