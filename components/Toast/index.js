import Vue from 'vue'
import ToastComponent from './ToastComponent'
import merge from '../../utils/merge'

let instance, duration;

let showing = false;

const DEFAULT_DURATION =  1500;

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

    duration = options.duration || DEFAULT_DURATION;
    options.content = content;
    merge(instance.$data, options);

    // 如果正在显示, 不响应点击
    if (!showing) {
        showing = true;
        instance.showToast = true;

        setTimeout(()=>{
            showing = false;
            instance.showToast = false;  
        }, duration);

    }
}

export default Toast;