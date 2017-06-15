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