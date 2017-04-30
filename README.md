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