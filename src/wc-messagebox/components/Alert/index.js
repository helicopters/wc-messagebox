import Vue from 'vue'
import AlertComponent from './AlertComponent'
import merge from '../../utils/merge'

let instance;

let globalConfig;

let AlertConstructor = Vue.extend(AlertComponent);

let initInstance = ()=>{
    instance = new AlertConstructor({
        el: document.createElement('div'),
        replace: true
    });
    document.body.appendChild(instance.$el);
}

let Alert = (content, options={}) =>{
    if (!instance) {
    	initInstance();   
    }
    options.content = content;

    merge(instance.$data, globalConfig);

    merge(instance.$data, options);
    return new Promise((resolve, reject)=>{
    	instance.show = true;
    	let success = instance.success;
    	instance.success = () => {
    		success();
    		resolve();
    	}
    });
    
}

export default {
    install (Vue, options={}) {
        globalConfig = options;
        Vue.prototype.$alert = Alert;
    }
};