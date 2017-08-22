import Vue from 'vue'
import ConfirmComponent from './tpl'
import merge from 'lodash/merge'


let instance;

let globalConfig = {};

let ConfirmConstructor = Vue.extend(ConfirmComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Confirm = (content, options={}) => {
    initInstance();

    options.content = content;

    // 将全局的 confirm 配置 合并到默认值中
    merge(instance.$data, globalConfig);
    // 将单个 confirm instance 的配置合并到默认值中
    merge(instance.$data, options);

    return new Promise((resolve, reject)=>{
        instance.show = true;

        // fix 弹窗出来之后依旧键盘没有回收
        let inputs = Array.prototype.slice.call(document.querySelectorAll('input'));

        inputs.forEach((input)=>{
            input.blur();
        });

        let success = instance.success;
        let cancel = instance.cancel;
        // event
        instance.success = () => {
            success();
            resolve('ok');
        }
        instance.cancel = () => {
            cancel();
            reject('cancel');
        }
    });

}
export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$confirm = Confirm;
    }
};