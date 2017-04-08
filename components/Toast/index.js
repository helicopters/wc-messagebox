import Vue from 'vue'
import ToastComponent from './ToastComponent'

let instance, duration;

const DEFAULT_DURATION =  1500;

let ToastConstructor = Vue.extend(ToastComponent);

let initInstance = ()=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let showing = false;

let Toast = (content, options={})=>{
    if (!instance) {
        initInstance();
    }

    duration = options.duration || DEFAULT_DURATION;
    options.content = content;
    for (var key in instance.$data) {
        instance.$data[key] = options[key] ? options[key] : instance.$data[key]
    }
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