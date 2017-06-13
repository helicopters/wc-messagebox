<template>
  <div id="app">
  	<button @click="alert">Alert</button>
    <button @click="alert2">Alert2</button>
    <button @click="confirm">Confirm</button>
    <button @click="confirm2">Confirm2</button>
    <button @click="toast">Toast</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    methods: {
      alert () {
        this.$alert('欢迎使用 wc-messagebox', {
          title: '你好呀',
          btn: {
            text: '定制按钮文本和颜色',
            // style: {
            //   'color': 'red'
            // }
          }
        })
        .then(()=>{
          this.$toast('你点击了确定');
        })
      },
      alert2 () {
        this.$alert('欢迎使用 wc-messagebox', {
          btn: {
            text: '我依旧是原来的值',
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
      }
    }
  }
</script>