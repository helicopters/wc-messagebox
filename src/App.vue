<style>
  body{
    margin:0;
    padding:0;
  }
  .popup{
    background: red;
  }

</style>
<template>
  <div id="app">
  	<button @click="alert">Alert</button>
    <button @click="alert2">Alert2</button>
    <button @click="confirm">Confirm</button>
    <button @click="confirm2">Confirm2</button>
    <button @click="toast">Toast</button>
    <button @click="prompt">Prompt</button>
    
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>
    <p>scroll</p>

    <p>scroll</p>
    <p>scroll</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    data () {
      return {
        show: false
      }
    },
    methods: {
      alert () {
        this.$alert('欢迎使用 wc-messagebox', {
          title: '提示',
          btn: {
            text: '确定'
          }
        })
        .then(()=>{
          this.$toast('你点击了确定');
        })
      },
      alert2 () {
        this.$alert('欢迎使用 wc-messagebox', {
          btn: {
            text: '我变颜色了',
            style: {
              'color': 'red'
            }
          }
        })
        .then(()=>{
          this.$toast('你点击了确定');
        })
      },

      confirm () {
        this.$confirm('欢迎使用 wc-messagebox', {
          title: '提示',
          yes: {
            text: '新按钮'
          }
        })
          .then(()=>{
            this.$toast('你点击了确定');
          })
          .catch(()=>{
            this.$toast('你点击了取消');
          })
      },
      confirm2 () {
        this.$confirm('欢迎使用 wc-messagebox')
          .then(()=>{
            this.$toast('你点击了确定');
          })
          .catch(()=>{
            this.$toast('你点击了取消');
          })
      },
      toast () {
        this.$toast('恭喜您, 登录成功!', 2000);
      },
      prompt () {
        this.$prompt('hello world', {
            title: '日了狗了',
            placeholder: '到底有没有日狗'
        })
          .then(v => {
            // console.log(v)
            this.$toast('你的答案是:' + v);
          })
      }
    }
  }
</script>