import Vue from 'vue'
import AlertComponent from './tpl'
import merge from 'lodash/merge'

let instance;

let globalConfig = {};

let AlertConstructor = Vue.extend(AlertComponent);

let initInstance = ()=>{
    instance = new AlertConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Alert = (content, options = {}) => {
    initInstance();        

    options.content = content;
    // 将全局的 Alert 配置 合并到默认值中
    merge(instance.$data, globalConfig);
    // 将单个 Alert instance 的配置合并到默认值中
    merge(instance.$data, options);
    

    return new Promise((resolve, reject)=>{
        instance.show = true;

        // fix 弹窗出来之后依旧键盘没有回收
        let inputs = Array.prototype.slice.call(document.querySelectorAll('input'));

        inputs.forEach((input)=>{
            input.blur();
        });

        let success = instance.success;

        instance.success = () => {
            success();
            resolve('ok');
        }
    });
}
export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$alert = Alert;
    }
};