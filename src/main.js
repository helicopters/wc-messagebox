import Vue from 'vue'
import App from './App'

import {Alert, Confirm, Toast} from './wc-messagebox'

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast, {
	duration: 5000,
	style: {
		bottom:'300px',
		// background:'red'
	}
});

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});