import Vue from 'vue'
import App from './App'

import {Alert, Confirm, Toast, Loading} from './wc-messagebox'

Vue.use(Alert);

Vue.use(Confirm);
Vue.use(Toast);

Vue.use(Loading)


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});