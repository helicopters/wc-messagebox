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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
// 暂时的, 以后有更好的方法再做修改
/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function mounted() {
    var vm = this;
    window.addEventListener('hashchange', function (e) {
      console.log('trigger hashchange');
      vm.show = false;
    }, false);
    window.onpopstate = function () {
      console.log('trigger popstate');
      vm.show = false;
    };
    window.onpageshow = function () {
      console.log('trigger pageshow');
      vm.show = false;
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertComponent__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AlertComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_merge__ = __webpack_require__(2);




var instance = void 0;

var globalConfig = void 0;

var AlertConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__AlertComponent___default.a);

var initInstance = function initInstance() {
    instance = new AlertConstructor({
        el: document.createElement('div'),
        replace: true
    });
    document.body.appendChild(instance.$el);
};

var Alert = function Alert(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!instance) {
        initInstance();
    }
    options.content = content;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, globalConfig);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, options);
    return new Promise(function (resolve, reject) {
        instance.show = true;
        var success = instance.success;
        instance.success = function () {
            success();
            resolve();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfirmComponent__ = __webpack_require__(14);
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
            resolve(true);
        };
        instance.cancel = function () {
            cancel();
            reject(false);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToastComponent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToastComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ToastComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_merge__ = __webpack_require__(2);




var instance = void 0,
    duration = void 0;

var showing = false;

var DEFAULT_DURATION = 1500;

var ToastConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__ToastComponent___default.a);

var initInstance = function initInstance() {
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var Toast = function Toast(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!instance) {
        initInstance();
    }

    duration = options.duration || DEFAULT_DURATION;
    options.content = content;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_merge__["a" /* default */])(instance.$data, options);

    // 如果正在显示, 不响应点击
    if (!showing) {
        showing = true;
        instance.show = true;

        // 这里没有算动画的执行时间, 只是添加了动画效果, 并且是默认具有动画效果
        setTimeout(function () {
            showing = false;
            instance.show = false;
        }, duration);
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        Vue.prototype.$toast = Toast;
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
    data: function data() {
        return {
            show: true,
            title: '提示',
            content: '',
            btnText: '确定'
        };
    },

    methods: {
        success: function success() {
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
    data: function data() {
        return {
            show: true,
            title: '提示',
            content: '',
            yes: '确定',
            no: '取消',
            style: {
                no: {
                    color: '', // 字体颜色
                    class: '' // 按钮的 class
                },
                yes: {
                    color: '',
                    class: ''
                }
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
/* 10 */
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
			show: true,
			content: '',
			position: 'bottom',
			withImg: false
		};
	},

	methods: {
		afterLeave: function afterLeave() {
			this.show = false;
		}
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Alert__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Confirm__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_plugin_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_plugin_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_plugin_css__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Alert__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Confirm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Toast__["a"]; });









/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/linhui/Desktop/wc-pack-env/src/wc-messagebox/components/Alert/AlertComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AlertComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5171236", Component.options)
  } else {
    hotAPI.reload("data-v-a5171236", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/linhui/Desktop/wc-pack-env/src/wc-messagebox/components/Confirm/ConfirmComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ConfirmComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a12a6046", Component.options)
  } else {
    hotAPI.reload("data-v-a12a6046", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  "data-v-e1e38562",
  /* cssModules */
  null
)
Component.options.__file = "/Users/linhui/Desktop/wc-pack-env/src/wc-messagebox/components/Toast/ToastComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ToastComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1e38562", Component.options)
  } else {
    hotAPI.reload("data-v-e1e38562", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
    staticClass: "popup-inner"
  }, [(_vm.title) ? _c('div', {
    staticClass: "popup-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "popup-text"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('div', {
    staticClass: "popup-buttons"
  }, [_c('span', {
    staticClass: "popup-button",
    class: _vm.style.yes.class,
    style: ({
      'color': _vm.style.yes.color
    }),
    on: {
      "click": _vm.success
    }
  }, [_vm._v(_vm._s(_vm.yes))]), _vm._v(" "), _c('span', {
    staticClass: "popup-button popup-button-bold",
    class: _vm.style.no.class,
    style: ({
      'color': _vm.style.no.color
    }),
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.no))])])]), _vm._v(" "), _c('div', {
    staticClass: "popup-backdrop active",
    staticStyle: {
      "display": "block"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a12a6046", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
    staticClass: "popup-inner"
  }, [(_vm.title) ? _c('div', {
    staticClass: "popup-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "popup-text"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('div', {
    staticClass: "popup-buttons"
  }, [_c('span', {
    staticClass: "popup-button popup-button-bold",
    on: {
      "click": _vm.success
    }
  }, [_vm._v("\n                " + _vm._s(_vm.btnText) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "popup-backdrop active",
    staticStyle: {
      "display": "block"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5171236", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1e38562", module.exports)
  }
}

/***/ })
/******/ ]);