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

  // import Hello from './Hello'
  export default {
    name: 'app',
    mounted () {
    },
    methods: {
    	test () {
    		this.$toast('你好丫你好丫你好丫你好丫你好丫你好丫你好丫你好丫你好丫',{
          // component: Hello
          // title:'',
          // btnText: "我擦碰",
          // container: '#app'
        })
        // .then(()=>{
        //   alert('你好')
        // })
    	}
    }
  }
</script>