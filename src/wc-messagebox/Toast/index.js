import Vue from 'vue'
import ToastComponent from './tpl'
import merge from 'lodash/merge'


let instance;

let globalConfig = {};
// toast 是否存在的标记位
let showing = false;

// init constructor
let ToastConstructor = Vue.extend(ToastComponent);

// init toast instance
let initInstance = (bottom)=>{
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);

}

// 显示
let Toast = (content, options={})=>{

    // 如果没有显示, 则不显示
    if (!showing) {

        showing = true;
        
        initInstance();
        
        instance.content = content;
        // instance.duration = duration;
        // instance.style = style;

        merge(instance.$data, globalConfig);
        merge(instance.$data, options);

        instance.show = true;
        // 在指定 duration 之后干掉 toast
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