<template>
  <div id="app">
  	<button @click="alert">Alert</button>
    <button @click="confirm">Confirm</button>
    <button @click="toast">Toast</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    methods: {
      alert () {
        this.$alert('欢迎使用 wc-messagebox', 'hello')
          .then(()=>{
            this.$toast('你点击了确定');
          })
      },
      confirm () {
        this.$confirm('欢迎使用 wc-messagebox')
          .then(()=>{
            this.$toast('你点击了确定');
          })
          .catch(()=>{
            this.$toast('你点击了取消');
          })
      },
      toast () {
        this.$toast('欢迎使用 wc-messagebox');
      }
    }
  }
</script>