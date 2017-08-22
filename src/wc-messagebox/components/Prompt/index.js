import Vue from 'vue'
import PromptComponent from './tpl'
import merge from 'lodash/merge'


let instance;

let globalConfig = {};

let ConfirmConstructor = Vue.extend(PromptComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Prompt = (content, options={}) => {
    initInstance();

    options.content = content;

    // 将全局的 Prompt 配置 合并到默认值中
    merge(instance.$data, globalConfig);
    // 将单个 Prompt instance 的配置合并到默认值中
    merge(instance.$data, options);

    return new Promise((resolve, reject)=>{
        instance.show = true;

        let success = instance.success;
        let cancel = instance.cancel;
        // event
        instance.success = () => {
            success();
            resolve(instance.value);
        }
        instance.cancel = () => {
            cancel();
            reject(instance.value);
        }
    });

}
export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$prompt = Prompt;
    }
};