/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);
//↑確認環境 node.js環境下的root會是global / bowser環境下的root會是self也會是window


$.fn[_module.ModuleName] = function () {
	var _this = this;

	// ModuleName = lbx_lnop
	var module = void 0; //arguments = ["func",{}]
	var args = Array.prototype.slice.call(arguments, 0); //slice提取從第0個位置開始的所有字符 arguments是陣列的一個特殊方式 無須明確參數即可取得這個值
	var method = args[0]; //args[0] = "func"
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	//提取從args的第1個位置開始的所有字符 而它的長度是否有小於等於0 如果是 則輸入undefined 如果不是就提取args從第1個位置到陣列長度的位置
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		// method = "func"  options = "{}" uesReturn = isReturnMethod
		var $this = $(_this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'ntb_hfck';
var ModuleDefaults = {
	touch: true, // 是否開啟左右滑動
	txtoverflow: true // M版title超過兩行顯示...
};
var ModuleReturns = [];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	}

	_createClass(Module, [{
		key: "init",
		value: function init() {
			!!this.option.txtoverflow && this.txtoverflow();
			this.methods();
			return this;
		}
	}, {
		key: "methods",
		value: function methods() {
			var element = $(".ctn"),
			    panel = element.find(".panel"),
			    panelMax = panel.length,
			    panelNext = null,
			    dragState = false,
			    dragStartX = 0,
			    dragDate = null,
			    moveNum = 0;

			function move(num) {
				if (num === 'right' && moveNum !== 0) {
					moveNum += 90;
					$('.ctn').animate({ left: moveNum + '%' });
				} else if (num === 'left' && moveNum > -180) {
					moveNum -= 90;
					$('.ctn').animate({ left: moveNum + '%' });
					$('.ctn').css('margin-left', '20px');
				}
				//moveNum 為要調整的 left 值
				if (moveNum === 0) {
					$('.ctn').css('margin-left', '0px');
				}
				panelNext = null;
			}

			if (this.option.touch) {
				panel.on("mousedown touchstart", function (e) {
					if (e.type == "touchstart") {
						e.preventDefault();
					}
					if (!dragState && panelNext == null && panelMax > 1) {
						dragStartX = e.type == "mousedown" ? e.pageX : e.originalEvent.changedTouches[0].pageX;
						dragState = true;
						dragDate = new Date();
					}retu;
				});

				panel.on("mouseup touchend mouseleave", function (e) {

					if (dragState) {
						var passDate = new Date() - dragDate;
						var endX = e.type == "mouseup" || e.type == "mouseleave" ? e.pageX : e.originalEvent.changedTouches[0].pageX;
						if (e.type == "touchend" && passDate > 120 && endX != dragStartX) {
							panelNext = endX > dragStartX ? 'right' : 'left';
							move(panelNext);
						} else {
							if (endX == dragStartX) {
								$(this).find('a').off();
								window.open($(this).find('a').attr('href'));
							}
						}
					} else {
						$(this).find('a').off();
					}
					dragState = false;
				});
			}
			return this;
		}
	}, {
		key: "txtoverflow",
		value: function txtoverflow() {
			$('.panel').each(function () {
				var txt = $(this).find('.card_title').text();

				var Blength = function Blength(txt) {
					var arr = txt.match(/[^\x00-\xff]/ig);
					return arr == null ? txt.length : txt.length + arr.length;
				};

				var txtlength = Blength(txt);

				if (txtlength > 52) {
					$(this).find('.card_title').css('display', '-webkit-box');
				}
			});
		}
	}]);

	return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);