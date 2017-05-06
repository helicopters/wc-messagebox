import Vue from 'vue'
import ToastComponent from './ToastComponent'
import merge from '../../utils/merge'

// 实例
let instance;

// 全局配置: 从 Vue.use() 里面传递过来的配置
let globalConfig;

// 默认的显示状态
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

// 每次 this.$toast() 调用
let Toast = (content, options={})=>{
    // 如果存在 instance 则不创建
    if (!instance) {
        initInstance();
    }
    // 拿到 this.$toast() 给的 content
    options.content = content;

    // 取到全局的配置选项
    merge(instance.$data, globalConfig);

    // 取到调用的时候的配置选项
    merge(instance.$data, options);

    // 如果当前正在显示, 则不显示
    if (!showing) {
        // 显示 toast
        showing = true;
        instance.show = true;

        // 指定时间之后自动消失
        setTimeout(()=>{
            showing = false;
            instance.show = false;  
        }, globalConfig.duration || 1500);

    }
}
export default {
    install (Vue, options={}) {
        // 获取全局配置
        globalConfig = options;
        Vue.prototype.$toast = Toast;
    }
};