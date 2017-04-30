<template>
  <div id="app">
  	<button @click="test">点击</button>
  	<!-- <hello/> -->
  </div>
</template>
<script>
  import Vue from 'vue'

    	// document.body.appendChild(instance.$el);

    	// Vue.component('hello', AlertConstructor)


  export default {
    name: 'app',
    mounted () {
    },
    methods: {
    	test () {
    		this.$confirm('你好丫你好丫你好丫你好丫你好丫你好丫你好丫你好丫你好丫',{
          // title:'',
          // btnText: "我擦碰",
          // container: '#app'
        })
    	}
    }
  }
</script>