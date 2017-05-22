## wc-messagebox
* 基于 vue 2.0 开发的插件
* 包含 Alert, Confirm, Toast
* 仿照 iOS 原生UI(样式来源: MUI)

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
this.$alert(text, options)
options = {
	title: '',  // 默认无标题
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
    title: '', // 默认无标题
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
Alert, Confirm 返回的是一个Promise
```javascript
this.$confirm(text).then(success).catch(fail)
```

## 问题
2017.5.5 更新
1. 现在是这么一种情况, 弹窗出现-点击返回,会回到上一个页面, 但是我希望是
   弹窗出现-点击返回-弹窗消失
   这种方式的话, 就需要弹窗出现的时候, 加一个 hash 在页面上面, 引入 hash 又会出现问题
   比如一个页面 alert 一下, comfirm 一下, 此时再返回, 实际上是会回到 alert 写入的 hash 中
   所以暂时没有一种好的办法, 去解决这个问题. 

1. Toast 当 duration 设置成 1ms 的时候, 再次点击会不响应

3. Alert, Confirm 不支持多个 content 的情况, 如
	   this.$alert(1,2,3)

4. 我本想让alert可以像原生的 alert 一样, 在多个连续调用的时候可以依次展开
   不可以
5. 我看了很多弹窗都会提及到一个 层级的问题, 但是目前没有发现我的存在这个问题撒。
   因为我的弹窗, 只要第二个出现, 第一个会自动消失, 不存在同时存在多个弹窗的情况.(单例)















