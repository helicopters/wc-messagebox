import Vue from 'vue'
import ToastComponent from './ToastComponent'
import merge from '../../utils/merge'

const DEFAULT_DURATION =  1500;

let instance;

let globalConfig;

let showing = false;

let ToastConstructor = Vue.extend(ToastComponent);

let initInstance = ()=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Toast = (content, options={})=>{
    if (!instance) {
        initInstance();
    }
    
    options.content = content;

    merge(instance.$data, globalConfig);

    merge(instance.$data, options);

    // 如果正在显示, 不响应点击
    if (!showing) {
        showing = true;
        instance.show = true;

        // 这里没有算动画的执行时间, 只是添加了动画效果, 并且是默认具有动画效果
        setTimeout(()=>{
            showing = false;
            instance.show = false;  
        }, globalConfig.duration || DEFAULT_DURATION);

    }
}
export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$toast = Toast;
    }
};