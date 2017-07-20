## wc-messagebox
* 基于 vue 2.0 开发的弹窗插件
* 包含 Alert, Confirm, Toast, Prompt
* 仿照 iOS 原生UI(样式来源: [MUI](http://dev.dcloud.net.cn/mui/))

## 效果
![效果](https://ooo.0o0.ooo/2017/07/08/595fc5a93517b.gif)


## Install
```shell
npm i wc-messagebox --save
```

## Quick Start
```javascript
import {Alert, Confirm, Prompt, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'

Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Prompt, options)
Vue.use(Toast, duration)
```

## Usage
```javascript
// alert
this.$alert(text, options)
options = {
	title: '',  // 默认标题为 '提示'
	btn: {
		text: '',
		style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
	}
}

// confirm
this.$confirm(content, options)
options = {
    title: '', 
    style: {}, // 同时应用在 yes, no 两个按钮上面的样式
    yes: {
        text: '确定',
        style: {}
    },
    no: {
        text: '取消',
        style: {}
    }
}

// toast
this.$toast(content, duration);

// prompt
this.$prompt(content, options)
options = {
    title: '',
    placeholder: '', 
    style: {}, // 同时应用在 yes, no 两个按钮上面的样式
    yes: {
        text: '确定',
        style: {}
    },
    no: {
        text: '取消',
        style: {}
    }
}
```

## Introduction
* Alert, Confirm 返回的是一个Promise, 允许定义点击弹窗之后的操作
```javascript
this.$confirm(text)
    .then(success)
    .catch(fail)
```

## Update
1. 2017.7.19 日更新: 为 Confirm 和 Prompt 新增了一个配置选项 style, 用来容纳它们所共同
拥有的属性, 并且优先级低于各自内部所定义的 style. 


## 思考
* 关于是否应该提供三个版本, 微信, 安卓, iOS 三种样式.
	为什么会有这样的想法, 因为我的确是觉得,在安卓设备里面你弹出来一个和 iOS 一样的
	弹窗, 有一点违和的感觉
	这种违和的感觉, 让我非常不爽, 所以我才想要去提供.
	但是顾虑是:
	1. 提供了之后会增加文件的大小, 包括 js 和 css 
	2. 提供了之后, 会不会适得其反, 比如说实际上用户只是想要 iOS 弹窗的效果, 对其他的方式一点
	都不考虑呢
	3. 有没有让事情变的复杂起来了, 一个简单的弹窗, 为什么还需要做这么复杂?如果你提供的三种样式都不喜欢, 用户是不是还可以自己定制呢?用户如果自己定 制, 你是不是还需要定义额外的事情呢.
	4. 那么推广, 是不是所有你所定义的组件, 都需要给定几套不一样的样式来兼容不同的组件呢
	而且这样的情况是不是符合项目的要求呢, 你这样做完之后, 是不是一点意义都没有呢


## 如何基于本项目定制化开发
有时候你可能需要弹窗的样式变成和你项目所相符合的, 但是又不想要自己写弹窗的逻辑. 可以基于本项目进行二次开发. 具体的步骤如下:
1. clone 本项目
2. npm install 安装依赖
3. html 不建议修改, 但是样式可以改成你所需要的, 弹窗的所有样式都在 src/wc-messagebox/css/style.css 中
4. npm run dev 可以在本地查看修改效果. 
