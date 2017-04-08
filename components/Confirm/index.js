import Vue from 'vue'
import ConfirmComponent from './ConfirmComponent'

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
    for (var key in instance.$data) {
        instance.$data[key] = options[key] ? options[key] : instance.$data[key]
    }

    return new Promise((resolve, reject)=>{
        instance.showConfirm = true;
        let success = instance.success;
        let cancel = instance.cancel;
        instance.success = () => {
            success();
            resolve();
        }
        instance.cancel = () => {
            cancel();
            reject();
        }
    });

}
export default Confirm;

// let $vm;

// export default (text, options = {}) => {

//     let title = options.title || '提示'
//     let success = options.success || function() {};
//     let cancel = options.cancel || function() {};

//     let Confirm = Vue.extend(ConfirmComponent);
//     if (!$vm) {
//         $vm = new Confirm({
//             el: document.createElement('div'),
//             data() {
//                 return {
//                     text: text,
//                     show: true,
//                     title: title
//                 }
//             },
//             methods: {
//                 success() {
//                     $vm.show = false;
//                     success.apply(this);
//                 },
//                 cancel() {
//                     $vm.show = false;
//                     cancel.apply(this);
//                 }

//             }
//         });
//         document.body.appendChild($vm.$el);
//     } else {
//         $vm.show = true;
//     }
// }