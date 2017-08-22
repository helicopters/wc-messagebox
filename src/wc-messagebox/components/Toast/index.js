import Vue from 'vue'
import ToastComponent from './tpl'

let instance;

// toast 是否存在的标记位
let showing = false;

// init constructor
let ToastConstructor = Vue.extend(ToastComponent);

// init toast instance
let initInstance = ()=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

// 显示
let Toast = (content, duration=1500)=>{
    // 如果没有显示, 则不显示
    if (!showing) {

        showing = true;
        initInstance();
        instance.show = true;
        instance.content = content;
        instance.duration = duration;

        // 在指定 duration 之后干掉 toast
        setTimeout(()=>{
            showing = false;
            instance.show = false;  
        }, instance.duration);
    }
}
export default {
    install (Vue) {
        Vue.prototype.$toast = Toast;
    }
};