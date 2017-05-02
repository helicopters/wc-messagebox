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
4. 发现了一个严重bug, 如果存在多个连续的弹窗的时候, 只会弹最后一个,
  这样肯定不行, 必须要改, 给一个队列出来, 今晚改掉. 2017.5.2号.