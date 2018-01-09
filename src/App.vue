<style>
  
</style>
<template>
	
	<div class="container">
		
		<button @click="alert">
			Alert
		</button>

		<button @click="wxAlert">
			微信 Alert
		</button>	


	</div>



</template>
<script>
	import Alert from './wc-messagebox/wx/Alert'

	import UserAlert from './UserAlert'
	export default {
		name: 'App',
		component: {
			Alert,
			UserAlert
		},
		methods: {
			alert () {
				this.$alert('你好')
			},
			wxAlert () {
				this.$alert({
					component: UserAlert,
					content: '你好',
					btnText: '我日啊'
				});

				this.$alert('微信样式')

			}
		}
	}
</script>