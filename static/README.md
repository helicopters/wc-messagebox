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
import 'wc-messagebox/dist/messagebox.css'
Vue.use(Alert, {})...
Vue.use(Confirm, {}) ...
```

## Usage
```javascript
this.$alert(text, options)

this.$toast(text, options)

this.$confirm(text, options)
options:{
	title: '' // 标题
	yes: // 确定按钮的文本
	no: // 取消按钮的文本
	style: {
		yes: {
			color: // 确定按钮的文本颜色
			class: // 期望应用在 确定按钮上面的 class, 给了一个默认的 popup-button-delete
		}
	}
}

```

## Introduction
1. 返回的是一个Promise, 所以可以 这样调用
```javascript
this
	.$confirm(text)
	.then(success)
	.catch(fail)
```