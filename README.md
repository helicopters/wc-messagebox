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

this.$toast(text, options)

this.$confirm(text, options)

参数说明
options:{
	title: '' // 标题
	yes:      // 确定按钮的文本
	no:       // 取消按钮的文本
	style: {
		yes: {
			color: // 确定按钮的文本颜色
			class: // 期望应用在 确定按钮上面的 class(自行定义)
		}
	}
}

```

## Others
1. 返回的是一个Promise, 所以支持方法链调用
```javascript
this
	.$confirm(text)
	.then(success)
	.catch(fail)
```