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
    <button @click="confirm">Confirm</button>
    <button @click="confirm2">Confirm2</button>
    <button @click="toast">Toast</button>
    <button @click="prompt">Prompt</button>

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
        this.$toast('恭喜您, 登录成功!', 2000, {
          'bottom':'200px',
          // 'backgroundColor':'red',
          // 'color':'red'
        });
      },
      prompt () {
        this.$prompt('hello world', {
            title: '日了狗了',
            placeholder: '到底有没有日狗',
            style: {
              'color':'red'
            }
        })
          .then(v => {
            // console.log(v)
            this.$toast('你的答案是:' + v);
          })
      }
    }
  }
</script>