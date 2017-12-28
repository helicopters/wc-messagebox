<style>
	
</style>
<template>
	
	
	<div class="container" v-wc-mask>
		
		<div class="inner" v-wc-popup>
			
			<header>你好 {{w.foo}}</header>

			<div class="content">
				大家好 {{w.bar}}
			</div>

			<div class="footer" v-wc-then>
				按钮 {{w.fb}}
			</div>

		</div>



	</div>



</template>
<script>
	export default {
		props: ['w']
	}
</script>