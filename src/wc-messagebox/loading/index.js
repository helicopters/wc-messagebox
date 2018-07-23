import Vue from 'vue'
import Loading from './Loading'
import preventPageScroll from './utils/prevent-page-scroll'
/* 构建 instance */
let instance;
/* 构建构造函数 */
let LoadingConstructor = Vue.extend(Loading);
/* 初始化 instance */
let initInstance = () => {
  instance = new LoadingConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
}
/* 是否正在显示 */
let isShowing = false;
/* 显示 loading */
let show = (text) => {
  if (!isShowing) {
    isShowing = true;
    /* 创建 instance */
    initInstance();
    /* 显示 */
    instance.show = true;
    instance.text = text ? text : '正在加载';
    /* 阻止页面滚动 */
    preventPageScroll.prevent();
  }
}
/* 隐藏 */
let hide = () => {
  instance.show = false;
  isShowing = false;
  /* 恢复页面滚动 */
  preventPageScroll.recover();
}
export default {
  install(Vue) {
    Vue.prototype.$loading = {
      show,
      hide
    }
  }
}