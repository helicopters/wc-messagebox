import Vue from 'vue'
import ConfirmComponent from './ConfirmComponent'
import merge from '../../utils/merge'

let instance;

let ConfirmConstructor = Vue.extend(ConfirmComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Confirm = (content, options={}) => {
    if (!instance) {
        initInstance();
    }
    options.content = content;
    merge(instance.$data, options);

    return new Promise((resolve, reject)=>{
        instance.showConfirm = true;
        let success = instance.success;
        let cancel = instance.cancel;
        instance.success = () => {
            success();
            resolve(true);
        }
        instance.cancel = () => {
            cancel();
            reject(false);
        }
    });

}
export default Confirm;
