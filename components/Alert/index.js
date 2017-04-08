import Vue from 'vue'
import AlertComponent from './AlertComponent'
import merge from '../../utils/merge'

let instance;

let AlertConstructor = Vue.extend(AlertComponent);

let initInstance = ()=>{
    instance = new AlertConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Alert = (content, options={}) =>{

    if (!instance) {
    	initInstance();   
    }

    options.content = content;

    merge(instance.$data, options);
    // for (var key in instance.$data) {
    // 	instance.$data[key] = options[key] ? options[key] : instance.$data[key]
    // }

    return new Promise((resolve, reject)=>{
    	instance.showAlert = true;
    	let success = instance.success;
    	instance.success = () => {
    		success();
    		resolve();
    	}
    });
    
}

export default Alert;