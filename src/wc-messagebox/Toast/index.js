import Vue from 'vue'
import ToastComponent from './tpl'
import merge from 'lodash/merge'

let instance;
let globalConfig = {};
let showing = false;
let ToastConstructor = Vue.extend(ToastComponent);

/* 初始化 instance, 并且 append 到页面里面 */
let initInstance = (bottom)=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Toast = (content, options={})=>{
    /* 如果当前已经在显示的话, 不响应*/
    if (!showing) {
        showing = true;
        initInstance();
        /* 设置显示内容 */
        instance.content = content;
        merge(instance.$data, globalConfig);
        merge(instance.$data, options);

        /* 显示 */
        instance.show = true;
        setTimeout(()=>{
            showing = false;
            instance.show = false;  
        }, instance.duration);
    }
}
export default {
    install (Vue, config={}) {
        globalConfig = config;
        Vue.prototype.$toast = Toast;
    }
};