import Vue from 'vue'
import App from './App'


import {Alert, Confirm, Toast} from './wc-messagebox'


Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast)

var vm = Vue.extend({
	template: '<App/>'
})


new vm({
    el: '#app',
    template: '<App/>',
    components: {App}
})



