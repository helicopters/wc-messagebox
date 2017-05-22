import Vue from 'vue'
import ConfirmComponent from './ConfirmComponent'
import merge from '../../utils/merge'

let instance;

let globalConfig = {};

let _initData = {};

let ConfirmConstructor = Vue.extend(ConfirmComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    _initData = Object.assign({}, instance.$data);
    document.body.appendChild(instance.$el);
}

let Confirm = (content, options={}) => {
    if (!instance) {
        initInstance();
    }

    // 恢复默认设置
    merge(instance.$data, _initData);

    options.content = content;

    // 将全局的 confirm 配置 合并到默认值中
    merge(instance.$data, globalConfig);
    // 将单个 confirm instance 的配置合并到默认值中
    merge(instance.$data, options);

    return new Promise((resolve, reject)=>{
        instance.show = true;
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