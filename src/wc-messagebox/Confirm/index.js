import Vue from 'vue'
import ConfirmContainer from './tpl'
import iOSConfirm from '../iOS/Confirm'
import merge from 'lodash/merge'

let instance;
let globalConfig = {};
let ConfirmConstructor = Vue.extend(ConfirmContainer);
let q = []
let isShowing = false

let Confirm = (options) => {
  if (!isShowing) {
    instance = new ConfirmConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
    isShowing = true
  } else {
    q.push(options);
    return;
  }
  /* 支持 this.$Confirm(string) 的调用方式 */
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  merge(instance.$data.w, globalConfig);
  merge(instance.$data.w, options);
  return new Promise((resolve, reject) => {
    instance.show = true;
    if (instance.$data.w.component) {
      instance.$options.components['userConfig'] = instance.$data.w.component;
      /* 设置当前的 activeView */
      instance.activeView = 'userConfig';
    } else {
      instance.$options.components['iOS'] = iOSConfirm;
      instance.activeView = 'iOS';
    }
    /*fix 弹窗出来之后依旧键盘没有回收*/
    let inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
    inputs.forEach((input) => {
      input.blur();
    });
    /* 对 success 函数包裹一层 */
    let success = instance.success;
    let fail = instance.fail;
    instance.success = () => {
      success();
      resolve('success');
      isShowing = false
      if (q.length > 0) {
        Confirm(q.shift())
      }
    }
    instance.fail = () => {
      fail();
      reject('fail');
      isShowing = false
      if (q.length > 0) {
        Confirm(q.shift())
      }
    }
  });
}
export default {
  install(Vue, options = {}) {
    globalConfig = options;
    Vue.prototype.$confirm = Confirm;
  }
};