import Vue from 'vue'
import ConfirmContainer from './tpl'
import iOSConfirm from '../iOS/Confirm'
import merge from 'lodash/merge'

let instance;
let globalConfig = {};
let ConfirmConstructor = Vue.extend(ConfirmContainer);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}
let Confirm = (options) => {
    // Confirm(1)
    initInstance();  

    /*
        如果 options 是一个字符串, 说明用户的调用方式是这样:
        this.$Confirm('content'); 
        字符串作为内容传递

        如果 options 是一个对象, 说明用户调用的方式是这样:
        this.$Confirm({
            title: xxx // 这里的 title 是由用户确定的, 不是我们自己定的. 
        });

        用户可以全局配置, 全局配置优先级 < 单次调用的配置. 用户可以配置什么?
        包括 title, 按钮文本

        用户如果想要指定使用的组件, options 必须传递对象, 并且对象必须要有 components 属性. 


    */

    /* 支持 this.$Confirm(string) 的调用方式 */
    if (typeof options === 'string') {
        options = {
            content: options
        }
    }


    // 将全局的 Confirm 配置 合并到默认值中
    merge(instance.$data.w, globalConfig);
    // 将单个 Confirm instance 的配置合并到默认值中
    merge(instance.$data.w, options);

    return new Promise((resolve, reject)=>{

        instance.show = true;
        /* 
            最终传递进来的 components 是一个对象, 通过 instance.$data.components 可以访问到
            components 长这样:
            {
                Foo: Foo 
            }
            要把 key 值赋值给 instance.$data 里面的 activeView, 作为 <component :is="activeView">
            的参数
            要向 components 里面注入组件 Foo
        */

        /* 如果用户指定了 components */

        let userComponent = instance.$data.w.component;

        if (userComponent) {
            for (let key in userComponent) {
                instance.$options.components[key] = userComponent[key];
            }
            /* 设置当前的 activeView */
            instance.activeView = Object.keys(userComponent)[0];
        } else {
            instance.$options.components['iOS'] = iOSConfirm;
            instance.activeView = 'iOS';            
        }

        /*fix 弹窗出来之后依旧键盘没有回收*/
        let inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
        inputs.forEach((input)=>{
            input.blur();
        });

        /* 对 success 函数包裹一层 */
        let success = instance.success;
        let fail    = instance.fail;
        
        instance.success = () => {
            success();
            resolve('success');
        }

        instance.fail = () => {
            fail();
            reject('fail');
        }

    });
}
export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$confirm = Confirm;
    }
};