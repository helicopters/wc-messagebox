## wc-messagebox
* 基于 vue 2.0 开发的弹窗插件
* 包含 Alert, Confirm, Toast
* 仿照 iOS 原生UI(样式来源: [MUI](http://dev.dcloud.net.cn/mui/))

## Install
```shell
npm i wc-messagebox --save
```

## Quick Start
```javascript
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'

Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, options)
```

## Usage
```javascript
// alert
this.$alert(text, options)
options = {
	title: '',  // 默认标题为 '提示'
	btn: {
		text: '',
		style: {
		}
	}
}

// confirm
this.$confirm(content, options)
options = {
    title: '', 
    yes: {
        text: '确定',
        style: {}
    },
    no: {
        text: '取消',
        style: {}
    }
}

// toast
this.$toast(content, duration);

// prompt
this.$prompt(content, options)
options = {
    title: '',
    placeholder: '', 
    yes: {
        text: '确定',
        style: {}
    },
    no: {
        text: '取消',
        style: {}
    }
}
```

## 说明
* Alert, Confirm 返回的是一个Promise, 允许定义点击弹窗之后的操作
```javascript
    this.$confirm(text)
        .then(success)
        .catch(fail)
```
* 默认的, Alert 弹窗的按钮文本, 是加粗的, 可以通过 btn.style 入口修改按钮样式.

* iOS setTimeout 之后设置 focus, 不可行.
