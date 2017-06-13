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

this.$confirm(content, options)
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
this.$toast(content, options);
options = {
	position: 'bottom' // 'bottom' | 'center',
	duration: '1500'
}
或者
this.$toast(content, duration);

```

## Others
Alert, Confirm 返回的是一个Promise
```javascript
this.$confirm(text).then(success).catch(fail)
```
