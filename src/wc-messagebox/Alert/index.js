import Vue from 'vue'
import AlertContainer from './tpl'
import iOSAlert from '../iOS/Alert'
import merge from 'lodash/merge'

let globalConfig = {}
let AlertConstructor = Vue.extend(AlertContainer)
let q = [];
let isShowing = false;
let Alert = (options) => {
  let instance
  if (!isShowing) {
    /* 创建 instance */
    instance = new AlertConstructor({
        el: document.createElement('div')
      })
      /* 追加到 DOM 元素上面 */
    document.body.appendChild(instance.$el)
    isShowing = true
  } else {
    q.push(options);
    return;
  }
  /* 用来支持 this.$alert(string) 的调用方式 */
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  /* 合并配置 */
  merge(instance.$data.w, globalConfig)
  merge(instance.$data.w, options)
  return new Promise((resolve, reject) => {
    /* 首先显示 instance, 这一步会让页面显示弹窗 */
    instance.show = true
      /* 如果用户指定了自定义的组件 */
    if (instance.$data.w.component) {
      instance.$options.components['userConfig'] = instance.$data.w.component
        /* 设置当前的 activeView */
      instance.activeView = 'userConfig'
    } else {
      instance.$options.components['iOS'] = iOSAlert
      instance.activeView = 'iOS'
    }
    /*fix 弹窗出来之后依旧键盘没有回收*/
    let inputs = Array.prototype.slice.call(document.querySelectorAll('input'))
    inputs.forEach((input) => {
        input.blur()
      })
      /* 对 success 函数包裹一层 */
    let success = instance.success
    instance.success = () => {
      success()
      resolve('ok')
      isShowing = false
      if (q.length > 0) {
        Alert(q.shift())
      }
    }
  })
}
export default {
  install(Vue, options = {}) {
    globalConfig = options
    Vue.prototype.$alert = Alert
  }
}