import Vue from 'vue'
import Alert from './components/Alert'
import Confirm from './components/Confirm'
import Toast from './components/Toast'

import './css/plugin.css';

export default {
	install (Vue) {
		Vue.prototype.$alert = Alert;
		Vue.prototype.$confirm = Confirm;
		Vue.prototype.$toast = Toast;
	}
}