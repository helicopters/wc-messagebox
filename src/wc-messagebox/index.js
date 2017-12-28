import Vue from 'vue'
import Alert from './alert'
import Confirm from './confirm'
import Toast from './toast'

import wcThen from './directives/wc-then'
import wcCatch from './directives/wc-catch'
import wcMask from './directives/wc-mask'
import wcPopup from './directives/wc-popup'

import './transition.css'

export default {
	install (Vue) {
		Vue.directive('wcThen', wcThen);
		Vue.directive('wcCatch', wcCatch);
		Vue.directive('wcMask', wcMask);
		Vue.directive('wcPopup', wcPopup);
	}
}

export{
	Alert,
	Confirm,
	Toast
}