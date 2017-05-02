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
Vue.use(Toast)
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
options = {
    title: '',
    content: '',
    contentStyle: {},
    yes: {
        text: '确定',
        style: {}
    },
    no: {
        text: '取消',
        style: {}
    }
}
this.$toast(text, options);
options = {
	position: 'bottom' // 'bottom' | 'center',
	duration: '1500'
}

```

## Others
1. 返回的是一个Promise, 所以支持方法链调用
```javascript
this.$confirm(text)
	.then(success)
	.catch(fail)
```

## 问题
1. Toast 当 duration 设置成 1ms 的时候, 再次点击会不响应
2. Toast 当多次触发的时候, 会出现上次 Toast 未消失的情况。
3. Alert, Confirm 不支持多个 content 的情况, 类似于这样
	this.$alert(1,2,3) 所以这个玩意, 可以改, 但是暂时不改.
	因为原生貌似是直接干掉后面的内容.
4. 我本想让alert可以像原生的 alert 一样, 在多个连续调用的时候可以依次展开
  但是最后发现还是不可以, 这个玩意我研究了三个小时, 没有找到合适的方法.
5. 我看了很多弹窗都会提及到一个 层级的问题, 但是目前没有发现我的存在这个问题撒。
  因为我的弹窗, 只要第二个出现, 第一个会自动消失, 不存在同时存在多个弹窗的情况.













