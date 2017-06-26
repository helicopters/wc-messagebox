import Vue from 'vue'
import App from './App'

import {Alert, Confirm, Toast, Prompt} from './wc-messagebox'

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Prompt);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});