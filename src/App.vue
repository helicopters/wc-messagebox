<style>
  body{
    margin:0;
    padding:0;
  }

button{
    position: relative;
    display: inline-block;

    padding: 6px 12px;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: #333;
    text-align: center;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    color: #fff;
    background-color: #007aff;
    border: 1px solid #007aff;
}
  

</style>
<template>
  <div id="app">
    <button @click="alert">Alert</button>
    <button @click="alert2">Alert2</button>
    <button @click="alert3">自定义 Alert </button>
    <button @click="confirm">Confirm</button>
    <button @click="confirm2">Confirm2</button>
    <button @click="toast">Toast</button>

    <button @click="toastFn">Toast 图文混合模式</button>

  </div>
</template>
<script>
  

  import NewAlert from './NewAlert'




  export default {
    name: 'app',
    data () {
      return {
        show: false
      }
    },
    methods: {
      alert () {
        this.$alert('欢迎使用 wc-messagebox')
      },
      alert2 () {
        this.$alert({
          title: '这人间哭什么',
          content:' 怕不能遇见你',
          btnText: '哦'
        })
      },

      alert3 () {
        this.$alert({
          component: {
            NewAlert
          },
          foo: '我是标题',
          bar: '我是内容',
          fb: '我是按钮'
        })
      },




      confirm () {
        this.$confirm('欢迎使用 wc-messagebox', {
          title: '提示',
          style: {
            'font-size': '12px'
          },
          yes: {
            text: '新按钮',
            style: {
              'font-size': '16px'
            }
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
        this.$toast('登录成功');
      },

      fn (text, path) {
        this.$toast(text, {
          path: path,
          location: 'center',
          toastStyle: {
            height: '100px',
            width: '100px'
          },
          imgStyle: {
            width: '40px',
            marginBottom: '15px'
          },
        })
      },
      toastFn () {

          this.fn('收藏成功', '/static/yes.png');




      }

    }
  }
</script>