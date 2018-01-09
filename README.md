## wc-messagebox
* 基于 vue 2.x 开发的弹窗插件
* 包含 Alert, Confirm, Toast
* 仿照 iOS 原生UI(样式来源: [MUI](http://dev.dcloud.net.cn/mui/))
* 支持用户自定义 Alert, Confirm 组件.


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
import Directive from 'wc-messagebox'

Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, duration)
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
this.$alert({
  title: '我是标题',
  content: '我是内容'
})

// toast
this.$toast(text, {
    durtaion: 200,
    location: 'center|top ' // 如果不传递, 默认在底部, 如果传递, 就必须要有值
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

* 起初, 我是想着内置 iOS, Android, 微信三套弹窗样式. 这样带来的缺点就是文件会比较大, 而且经常性的
一个项目只要一种样式即可. 再者, 即使我内置了三套样式, 用户可能也是需要其他的样式. 颇有点千人千面的感觉. 

* 所以我对代码做了一些修改, 修改之后的结果, 能够达到: 允许用户自定义弹窗; 这样用户就可以随意的定义自己
需要的弹窗样式, 而不必从头到尾再完整实现一套弹窗逻辑. 

* wc-messagebox 这个插件, 内置了一套 iOS 的弹窗样式. 并且我在 src/wc-messagbox/wx 里面存放了
微信的弹窗样式. 用户可以通过 自定义弹窗样式 来使用它. wc-messagebox 以后可以充当成一个插槽一样的存在.
支持任意的弹窗样式使用它. 


## 自定义弹窗的步骤
1. 首先, 你要引入一些 directives
```sheel
import D from 'wc-messagebox'
Vue.use(D)
```
这些指令, 主要是用来标记取消, 确定按钮. 以及辅助实现弹窗动画效果. 

2. 其次, 你要新建一份 User.vue, 用来容纳你所自定义的弹窗代码. demo:

3. 你要在你的弹窗中的 mask, 以及弹窗, 和确定, 取消按钮上面添加 directives;

4. 使用... 未完待续, 今天太困. 

















