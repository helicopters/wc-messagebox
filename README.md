## wc-messagebox
* 基于 vue 2.x 开发的弹窗插件
* 包含 Alert, Confirm, Toast
* 支持用户自定义 Alert, Confirm 组件.
* iOS样式来源: ([MUI](http://dev.dcloud.net.cn/mui/))


## 说明
* 新版和旧版在参数传递上面有所区别. 如果是因为升级出现问题可以尝试回退到旧版, 详见旧版文档.
* 本次更新的目的: 支持用户自定义弹窗样式, 以及 以非内置的方式实现支持多套样式 (iOS, Android, 微信)


## 效果
![效果](https://ooo.0o0.ooo/2017/07/08/595fc5a93517b.gif)


## Install
```shell
npm i wc-messagebox --save
```

## Quick Start
```javascript
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert, {})
Vue.use(Confirm, {})
Vue.use(Toast, duration)

import Directive from 'wc-messagebox'
Vue.use(Directive)

```


## Usage
```javascript
// alert
this.$alert('这里是内容')  // 如果传递一个字符串给 this.$alert, 则 标题默认为 '提示', 按钮默认为 '确定'

如果参数为对象, 则可接受如下配置选项:
title: '这里是标题',
content: '这里是内容',
btnText: '这里是按钮',
component: Component // 用于用户自定义组件. 

比如:
this.$alert({
  title: '我是标题',
  content: '我是内容'
})


// confirm
this.$confirm('这里是内容');

如果参数为对象, 则可接受如下配置选项:
title: '这里是标题',
content: '这里是内容',
yesStyle: {}, // 设置左边按钮样式
yesText: '',  // 左边按钮文本,
noStyle: {},  // 设置右边按钮样式,
noText: '',   // 设置右边按钮文本
component: Component // 可不设置, 适用于用户自定义组件.

比如:
this.$confirm({
  title: '我是标题',
  content: '我是内容'
})

// toast
this.$toast(text, {
    durtaion: 200,
    location: 'bottom|center|top' // 如果不传递, 默认在中间
});

// toast 的图文混合模式
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
  }
})
```


## 用户自定义弹窗样式
> 经常一些情况下, iOS的弹窗样式可能满足不了你. 比如你需要微信的弹窗样式.
更一些时候, 可能用户需要自定义弹窗样式, 比如设计师给出了一套符合项目的弹窗样式. 

模仿 wx-messagebox 即可.




