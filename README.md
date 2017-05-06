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

3. Alert, Confirm 不支持多个 content 的情况, 类似于这样
	this.$alert(1,2,3) 所以这个玩意, 可以改, 但是暂时不改.

4. 我本想让alert可以像原生的 alert 一样, 在多个连续调用的时候可以依次展开
   但是最后发现还是不可以, 这个玩意我研究了三个小时, 没有找到合适的方法.
5. 我看了很多弹窗都会提及到一个 层级的问题, 但是目前没有发现我的存在这个问题撒。
   因为我的弹窗, 只要第二个出现, 第一个会自动消失, 不存在同时存在多个弹窗的情况.(单例)

2017.5.5 更新
1. 现在是这么一种情况, 弹窗出现-点击返回,会回到上一个页面, 但是我希望是
   弹窗出现-点击返回-弹窗消失
   这种方式的话, 就需要弹窗出现的时候, 加一个 hash 在页面上面, 引入 hash 又会出现问题
   比如一个页面 alert 一下, comfirm 一下, 此时再返回, 实际上是会回到 alert 写入的 hash 中
   所以暂时没有一种好的办法, 去解决这个问题. 

2. 我们现在的样式引入, 是通过 import 'wc-messagebox/style.css' 引入的, 但是这种方式, 会污染
   项目中自己写的样式, 所以, 我决定把样式内联.













