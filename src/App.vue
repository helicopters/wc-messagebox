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
	export default {
		name: 'App',
		component: {
			Alert
		},
		methods: {
			alert () {
				this.$alert('你好')
			},
			wxAlert () {
				this.$alert({
					component: {
						Alert,

					},
					content: '你好',
					btnText: '我日啊'
				})
			}
		}
	}
</script>