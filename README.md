## wc-messagebox
* 基于 vue 2.x 开发的弹窗插件
* 包含 Alert, Confirm, Toast
* 支持用户自定义 Alert, Confirm 组件.
* iOS样式来源: ([MUI](http://dev.dcloud.net.cn/mui/))


## 说明
* 新版和旧版在参数传递上面有所区别. 如果是因为升级出现问题可以尝试回退到旧版, 详见旧版文档.

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
```


## Usage
```javascript
// alert
this.$alert('这里是内容')  // 如果传递一个字符串给 this.$alert, 则 标题默认为 '提示', 按钮默认为 '确定'

如果参数为对象, 则可接受如下配置选项:
title: '这里是标题',
content: '这里是内容',
btnText: '这里是按钮',
component: Component // 用于用户自行指明 Alert 组件

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
  content: '我是内容',
  yesText: '你好'
})

// toast
this.$toast(text, {
    durtaion: 200,
    location: 'bottom|center|top' // 默认在中间
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
此时如何操作?

1. 引入下面语句
```
import D from 'wc-messagebox';
Vue.use(D);
```

2. 将根目录下面的 wechat-messagebox 拷贝到本地.

3. 引入 wechat-messagebox
```
import wxAlert from 'yourpath/wechat-messagebox/Alert'
import wxConfirm from 'yourpath/wechat-messagebox/Confirm'
```

4. 配置
```
Vue.use(Alert, {
  component: wxAlert
});

Vue.use(Confirm, {
  component: wxConfirm
})
```
























