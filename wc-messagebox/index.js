module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// fix 路由切换时弹窗不消失的 bug
/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function mounted() {
    var _this = this;

    var listener = function listener() {
      _this.show = false;
    };
    window.addEventListener('hashchange', listener);
    window.addEventListener('popstate', listener);
    window.addEventListener('pagehide', listener);
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
	在实际使用中有时 就是不想要标题, 如果按照以前的方式, 那么
	需要传入: title: ' ', 这样不舒服
	所以增加一个判断: 只要用户配置存在某个字段且不等于 undefined, 那么就使用
	用户提供的字段值
*/
var isExists = function isExists(val) {
	if (typeof val !== 'undefined') {
		return true;
	}
	return false;
};

/* harmony default export */ __webpack_exports__["a"] = (function (src, target) {
	for (var key in target) {
		src[key] = isExists(target[key]) ? target[key] : src[key];
	}
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertComponent__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AlertComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_merge__ = __webpack_require__(2);




var instance = void 0;

var globalConfig = {};

var AlertConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__AlertComponent___default.a);

var initInstance = function initInstance() {
    instance = new AlertConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var Alert = function Alert(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!instance) {
        initInstance();
    }

    options.content = content;
    // 将全局的 Alert 配置 合并到默认值中
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, globalConfig);
    // 将单个 Alert instance 的配置合并到默认值中
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, options);

    return new Promise(function (resolve, reject) {
        instance.show = true;
        var success = instance.success;

        instance.success = function () {
            success();
            resolve('ok');
        };
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        globalConfig = options;
        Vue.prototype.$alert = Alert;
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfirmComponent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfirmComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ConfirmComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_merge__ = __webpack_require__(2);




var instance = void 0;

var globalConfig = {};

var ConfirmConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__ConfirmComponent___default.a);

var initInstance = function initInstance() {
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var Confirm = function Confirm(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!instance) {
        initInstance();
    }
    options.content = content;

    // 将全局的 confirm 配置 合并到默认值中
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, globalConfig);
    // 将单个 confirm instance 的配置合并到默认值中
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, options);

    return new Promise(function (resolve, reject) {
        instance.show = true;
        var success = instance.success;
        var cancel = instance.cancel;
        // event
        instance.success = function () {
            success();
            resolve('ok');
        };
        instance.cancel = function () {
            cancel();
            reject('cancel');
        };
    });
};
/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        globalConfig = options;
        Vue.prototype.$confirm = Confirm;
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToastComponent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToastComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ToastComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_merge__ = __webpack_require__(2);




// 实例
var instance = void 0;

// 全局配置: 从 Vue.use() 里面传递过来的配置
var globalConfig = void 0;

// 默认的显示状态
var showing = false;

// 创建组件构造函数
var ToastConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__ToastComponent___default.a);

// 创建 instance 并且挂载元素到页面上
var initInstance = function initInstance() {
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

// 每次 this.$toast() 调用
var Toast = function Toast(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 如果存在 instance 则不创建
    if (!instance) {
        initInstance();
    }
    // 拿到 this.$toast() 给的 content
    options.content = content;

    // 取到全局的配置选项
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, globalConfig);

    // 取到调用的时候的配置选项
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, options);

    // 如果当前正在显示, 则不显示
    if (!showing) {
        // 显示 toast
        showing = true;
        instance.show = true;

        // 指定时间之后自动消失
        setTimeout(function () {
            showing = false;
            instance.show = false;
        }, globalConfig.duration || 1500);
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // 获取全局配置
        globalConfig = options;
        Vue.prototype.$toast = Toast;
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
    data: function data() {
        return {
            show: true,
            title: '', // 默认无标题
            content: '',
            contentStyle: {},
            btn: {
                text: '确定',
                // 设置样式
                style: {}
            }
        };
    },

    methods: {
        success: function success() {
            this.show = false;
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
    data: function data() {
        return {
            show: true,
            title: '',
            content: '',
            contentStyle: {},
            yes: {
                text: '确定',
                style: {}
            },
            no: {
                text: '取消',
                style: {}
            }
        };
    },

    methods: {
        success: function success() {
            this.show = false;
        },
        cancel: function cancel() {
            this.show = false;
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
	data: function data() {
		return {
			show: false,
			content: '',
			position: 'bottom'
		};
	},

	methods: {
		afterLeave: function afterLeave() {
			this.show = false;
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Alert__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Confirm__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Toast__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Alert__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Confirm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Toast__["a"]; });







/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  "data-v-36613b10",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-a298f2f0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-17fb017a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    },
    on: {
      "after-leave": _vm.afterLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "toast-container",
    class: _vm.position
  }, [_c('div', {
    staticClass: "toast-message"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.content) + "\n\t\t")])])])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }]
  }, [_c('div', {
    staticClass: "popup popup-in",
    staticStyle: {
      "display": "block"
    }
  }, [_c('div', {
    staticClass: "popup-inner",
    style: (_vm.contentStyle)
  }, [(_vm.title) ? _c('div', {
    staticClass: "popup-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "popup-text"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('div', {
    staticClass: "popup-buttons"
  }, [_c('span', {
    staticClass: "popup-button",
    style: (_vm.btn.style),
    on: {
      "click": _vm.success
    }
  }, [_vm._v("\n                " + _vm._s(_vm.btn.text) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "popup-backdrop active",
    staticStyle: {
      "display": "block"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }]
  }, [_c('div', {
    staticClass: "popup popup-in",
    staticStyle: {
      "display": "block"
    }
  }, [_c('div', {
    staticClass: "popup-inner",
    style: (_vm.contentStyle)
  }, [(_vm.title) ? _c('div', {
    staticClass: "popup-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "popup-text"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('div', {
    staticClass: "popup-buttons"
  }, [_c('span', {
    staticClass: "popup-button",
    style: (_vm.yes.style),
    on: {
      "click": _vm.success
    }
  }, [_vm._v(_vm._s(_vm.yes.text))]), _vm._v(" "), _c('span', {
    staticClass: "popup-button",
    style: (_vm.no.style),
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.no.text))])])]), _vm._v(" "), _c('div', {
    staticClass: "popup-backdrop active",
    staticStyle: {
      "display": "block"
    }
  })])
},staticRenderFns: []}

/***/ })
/******/ ]);