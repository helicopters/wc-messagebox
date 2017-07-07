import Vue from 'vue'
import ToastComponent from './tpl'
import merge from 'wc-utils/merge'

// 创建实例
let instance;

let globalConfig;

// 设置默认的显示状态
let showing = false;

// 创建组件构造函数
let ToastConstructor = Vue.extend(ToastComponent);

// 创建 instance 并且挂载元素到页面上
let initInstance = ()=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}
// Toast 具体调用方式
let Toast = (content, options={})=>{
    // 如果存在 instance, 则使用 instance
    if (!instance) {
        initInstance();
    }
    instance.content = content;
    // 合并全局配置
    merge(instance.$data, globalConfig);
    // 用来支持当 this.$toast(content, duration) 的调用方式
    if (typeof options !== 'object') {
        instance.duration = options;
    } else {
        // 合并单个调用配置
        merge(instance.$data, options);
    }
    // 如果当前正在显示, 则不显示
    if (!showing) {
        // 显示 toast
        showing = true;
        instance.show = true;
        // 指定时间之后自动消失
        setTimeout(()=>{
            showing = false;
            instance.show = false;  
        }, instance.duration);
    }
}
export default {
    install (Vue, options={}) {
        // 获取全局配置
        globalConfig = options;
        Vue.prototype.$toast = Toast;
    }
};