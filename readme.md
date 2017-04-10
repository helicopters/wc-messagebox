## wc-messagebox
* 基于 vue 2.0 开发的插件
* 包含 Alert, Confirm, Toast
* 仿照 iOS 原生UI(使用 MUI 样式)

## Install
```shell
npm i wc-messagebox --save-dev
```

## Quick Start
```javascript
import MessageBox from 'wc-messagebox'
Vue.use(MessageBox)
```

## Usage
```javascript
this.$alert(text, options)
options = {
  title: ''
  ...
}
this.$toast(text, options)
this.$confirm(text, options)

```

## Introduction
1. 返回的是一个Promise, 所以可以 这样调用
> this.$confirm(text).then(success).catch(fail)
