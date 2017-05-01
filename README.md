## wc-messagebox
* 基于 vue 2.0 开发的插件
* 包含 Alert, Confirm, Toast
* 仿照 iOS 原生UI(使用 MUI 样式)

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
```

## Usage
```javascript
this.$alert(text, options)
options = {
	title: '',
	content: '',
	contentStyle: {},
	btn: {
		text: '',
		style: {
			'backgroun-color': 'red',
			'font-size': '20px',
			'color': 'blue'
		}
	}
}

this.$confirm(text, options)

this.$toast(text, options)

```

## Others
1. 返回的是一个Promise, 所以支持方法链调用
```javascript
this
	.$confirm(text)
	.then(success)
	.catch(fail)
```

## 问题
1. 考虑, 如果项目中存在一个弹窗, 但是样式和你所给定的弹窗完全不一样, 只是想要走弹窗的逻辑
	这个时候该如何操作
A: 不让当前的 messagebox 承担这么复杂的事情, 只让它支持一个默认的弹窗的显示就ok