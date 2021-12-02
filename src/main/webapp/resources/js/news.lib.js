// ES6 Proxy
(function(){function l(){function n(a){return a?"object"===typeof a||"function"===typeof a:!1}var p=null;var g=function(a,b){function f(){}if(!n(a)||!n(b))throw new TypeError("Cannot create proxy with a non-object as target or handler");p=function(){f=function(a){throw new TypeError("Cannot perform '"+a+"' on a proxy that has been revoked");}};var e=b;b={get:null,set:null,apply:null,construct:null};for(var k in e){if(!(k in b))throw new TypeError("Proxy polyfill does not support trap '"+k+"'");b[k]=e[k]}"function"===
typeof e&&(b.apply=e.apply.bind(e));var c=this,g=!1,q=!1;"function"===typeof a?(c=function(){var h=this&&this.constructor===c,d=Array.prototype.slice.call(arguments);f(h?"construct":"apply");return h&&b.construct?b.construct.call(this,a,d):!h&&b.apply?b.apply(a,this,d):h?(d.unshift(a),new (a.bind.apply(a,d))):a.apply(this,d)},g=!0):a instanceof Array&&(c=[],q=!0);var r=b.get?function(a){f("get");return b.get(this,a,c)}:function(a){f("get");return this[a]},v=b.set?function(a,d){f("set");b.set(this,
a,d,c)}:function(a,b){f("set");this[a]=b},t={};Object.getOwnPropertyNames(a).forEach(function(b){if(!((g||q)&&b in c)){var d={enumerable:!!Object.getOwnPropertyDescriptor(a,b).enumerable,get:r.bind(a,b),set:v.bind(a,b)};Object.defineProperty(c,b,d);t[b]=!0}});e=!0;Object.setPrototypeOf?Object.setPrototypeOf(c,Object.getPrototypeOf(a)):c.__proto__?c.__proto__=a.__proto__:e=!1;if(b.get||!e)for(var m in a)t[m]||Object.defineProperty(c,m,{get:r.bind(a,m)});Object.seal(a);Object.seal(c);return c};g.revocable=
function(a,b){return{proxy:new g(a,b),revoke:p}};return g};var u="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!==typeof navigator&&"ReactNative"===navigator.product?global:self;u.Proxy||(u.Proxy=l(),u.Proxy.revocable=u.Proxy.revocable);})()

// ES6 Promise
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],u(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,t._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(f){return void i(n.promise,f)}r(n.promise,o)}else(1===e._state?r:i)(n.promise,e._value)})):e._deferreds.push(n)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if(n instanceof t)return e._state=3,e._value=n,void f(e);if("function"==typeof o)return void u(function(e,n){return function(){e.apply(n,arguments)}}(o,n),e)}e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}function i(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){e._handled||t._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,i(n,e))})}catch(o){if(t)return;t=!0,i(n,o)}}var c=setTimeout;t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,t,r)),r},t.prototype["finally"]=e,t.all=function(e){return new t(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(n){n(e)})},t.reject=function(e){return new t(function(n,t){t(e)})},t.race=function(e){return new t(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},t._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},t._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=t});

/** 
 * @overview
 * News Library<br/>
 * Core 모듈은 추후에 추가할 예정<br/>
 * <h3>Browser Support</h3>
 * IE9+, Safari6+
 *
 * @author Jinho Park
 * @version 0.1.0
 * @example
 * <body>
 *   <div id="counter"></div>
 * </body>
 * <script>
 *   var model = new News.Lib.Model({
 *     state: {
 *       count: 0,
 *     },
 *     actions: {
 *       increment: function (state, payload) {
 *         if (!payload) payload = 1;
 *         state.count += payload;
 *         return state;
 *       },
 *       decrement: function (state, payload) {
 *         if (!payload) payload = 1;
 *         state.count -= payload;
 *         return state;
 *     }
 *     }
 *   });
 *   var counter = new News.Lib.View({
 *     model: model,
 *     container: $('#counter'),
 *     render: function () {
 *       var self = this,
 *           html = '';
 *       html += '<div><span>count = ' + self.model.state.count + '</span></div>';
 *       html += '<button id="inc">increment</button>';
 *       html += '<button id="dec">decrement</button>';
 * 
 *       self.container.html(html);
 *       $('#inc').off().on('click', function (evt) {
 *         self.model.dispatch('increment');
 *       });
 *       $('#dec').off().on('click', function (evt) {
 *         self.model.dispatch('decrement');
 *       });
 *     }
 *   });
 *   $(document).ready(function () {
 *     counter.render();
 *   });
 * </script>
 */

/**
 * @namespace News
 */
var News = {};
News.version = '0.1.0';

/**
 * JS built-in 객체를 위한 함수형 프로그래밍 헬퍼 모음<br/>
 * 반응형 Model - View Class<br/>
 * 기타 Class 모음<br/>
 * jQuery 의존성 없음.
 * 
 * @module News.Lib
 */
News.Lib = (function () {
	
	var debug = false;
	
	var __assign = (this && this.__assign) || function () {
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
					t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	
	var __equals = function (a, b) {
		if (a === b) return true;
		if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
		if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
		if (a === null || a === undefined || b === null || b === undefined) return false;
		if (a.prototype !== b.prototype) return false;
		var keys = Object.keys(a);
		if (keys.length !== Object.keys(b).length) return false;
		return keys.every(function (k) { return __equals(a[k], b[k]); });
	};

	function Lib () {}
	
	Lib.enableDebugMode = function () {
		debug = true;
	};
	
	Lib.disableDebugMode = function () {
		debug = false;
	};

	/**
	 * ES6 Object.assign 구현체.<br/>
	 * 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용됨.<br/>
	 * 타겟 오브젝트가 반환됨.
	 * 
	 * @function assign
	 * @param { object } target 타켓 오브젝트
	 * @param { ...object } source 하나 이상의 소스 오브젝트
	 * @return { object } 타겟 오브젝트=
	 * @example
	 * var _ = News.Lib;
	 * var obj = { a: 1, b: 2 };
	 * _.assign(obj, { b: 3, c: 4 }) // { a: 1, b: 3, c: 4 }
	 * @see {@link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign|Object.assign() [MDN]}
	 */
	Lib.assign = __assign;

	/**
	 * 두 값을 비교하여 같으면 true, 다르면 false를 반환한다.
	 * 
	 * @function equals
	 * @param { any } left 비교값 1
	 * @param { any } right 비교값 2
	 * @return { boolean }
	 */
	Lib.equals = __equals;

	/**
	 * Types
	 */

	/**
	 * parameter가 null, undefined, 0, false, {}, []이면 true를, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isEmpty
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isEmpty = function (val) {
		return val == null  || val == 'null' || val == undefined || val == 'undefined' || val === 0 || !val || !(Object.keys(val) || val).length;
	};
	
	/**
	 * parameter가 array-like 이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isArrayLike
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isArrayLike = function (val) {
		var length = val == null ? void 0 : val.length;
		return typeof length === 'number' && length >= 0;
	};

	/**
	 * parameter가 bool 타입이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isBoolean
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isBoolean = function (val) {
		return typeof val === 'boolean';
	};

	/**
	 * parameter가 function 타입이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isFunction
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isFunction = function (val) {
		return typeof val === 'function';
	};

	/**
	 * parameter가 null, undefined 이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isNull
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isNull = function (val) {
		return val == undefined || val == null;
	};

	/**
	 * parameter가 number 타입이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isNumber
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isNumber = function (val) {
		return typeof val === 'number';
	};

	/**
	 * parameter가 NaN 이면 ture, 그렇지 않으면 false를 반환한다.<br/>
	 * NaN은 자신과 등가하지 않은 유일한 수이다.
	 * 
	 * @function isNaN
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isNaN = function (val) {
		return Lib.isNumber(val) && val != +val;
	};

	/**
	 * parameter가 object 타입이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isObject
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isObject = function (val) {
		return val === Object(val);
	};

	/**
	 * parameter가 string 타입이면 ture, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function isString
	 * @param { any } val
	 * @return { boolean }
	 */
	Lib.isString = function (val) {
		return typeof val === 'string';
	};

	/**
	 * Arrays
	 */

	/**
	 * 기본 루프 함수<br>
	 * 사용 가능하면 Array.prototype.forEach를 사용한다.
	 * 
	 * @function each
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소를 실행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @example
	 * var _ = News.Lib;
	 * _.each([1, 2, 3], function(val, key, list) {
	 *   console.log(val, key, list);
	 * });
	 * // 1 0 [1, 2, 3]
	 * // 2 1 [1, 2, 3]
	 * // 3 2 [1, 2, 3]
	 */
	Lib.each = function (obj, fn, context) {
		if (Array.prototype.forEach && Array.prototype.forEach === obj.forEach) {
			obj.forEach(fn, context);
		} else if (Lib.isArrayLike(obj)) {
			for (var i = 0, len = obj.length; i < len; i++) {
				fn.call(context, obj[i], i, obj);
			}
		} else {
			for (var i = 0, keys = Lib.keys(obj), len = keys.length; i < len; i++) {
				var key = keys[i];
				fn.call(context, obj[i], i, obj);
			}
		}
	};

	/**
	 * 컬렉션의 각 요소에 함수를 적용한 결과를 반환한다.
	 * 
	 * @function map
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소를 실행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var list = _.map([1, 2, 3], function(val, key, list) {
	 *   return val * 2;
	 * });
	 * console.log(list)  // [2, 4, 6]
	 */
	Lib.map = function (obj, fn, context) {
		var result = [];
		if (Lib.isNull(obj)) return result;
		Lib.each(obj, function (value, index, list) {
			result.push(fn.call(context, value, index, list));
		});
		return result;
	};

	/**
	 * 컬렉션의 각 요소에 대해 테스트의 결과가 true인 모든 요소를 반환한다.
	 * 
	 * @function filter
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var list = _.filter([1, 2, 3, 4, 5], function(val, key, list) {
	 *   return val % 2 === 0;
	 * });
	 * console.log(list)  // [2, 4]
	 */
	Lib.filter = function (obj, fn, context) {
		var result = [];
		if (Lib.isNull(obj)) return result;
		Lib.each(obj, function (value, index, list) {
			if (fn.call(context, value, index, list)) result.push(value);
		});
		return result;
	};

	/**
	 * 컬렉션의 각 요소에 대해 테스트의 결과가 false인 모든 요소를 반환한다.
	 * 
	 * @function reject
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var list = _.reject([1, 2, 3, 4, 5], function(val, key, list) {
	 *   return val % 2 === 0;
	 * });
	 * console.log(list)  // [1, 3, 5]
	 */
	Lib.reject = function (obj, fn, context) {
		var result = [];
		if (Lib.isNull(obj)) return result;
		Lib.each(obj, function (value, index, list) {
			if (!fn.call(context, value, index, list)) result.push(value);
		});
		return result;
	};

	/**
	 * 컬렉션의 요소 중 하나 이상이 테스트를 통과하면 true를, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function some
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { boolean }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.some([1, 2, 3, 4, 5], function(val, key, list) {
	 *   return val % 2 === 0;
	 * });
	 * console.log(result)  // true
	 */
	Lib.some = function (obj, fn, context) {
		var result = false;
		if (Lib.isNull(obj)) return result;
		Lib.each(obj, function (value, index, list) {
			if (result || (result = fn.call(context, value, index, list))) return;
		});
		return !!result;
	};

	/**
	 * 컬렉션의 모든 요소가 테스트를 통과하면 true를, 그렇지 않으면 false를 반환한다.
	 * 
	 * @function every
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { boolean }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.every([1, 2, 3, 4, 5], function(val, key, list) {
	 *   return val % 2 === 0;
	 * });
	 * console.log(result)  // false
	 */
	Lib.every = function (obj, fn, context) {
		var result = true;
		if (Lib.isNull(obj)) return result;
		Lib.each(obj, function (value, index, list) {
			if (fn.call(context, value, index, list)) result = false;
		});
		return result;
	};

	/**
	 * 컬렉션의 각 요소에 대해 테스트를 통과한 처음 요소를 반환한다.
	 * 
	 * @function find
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { any }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.find([1, 2, 3, 4, 5], function(val, key, list) {
	 *   return val % 2 === 0;
	 * });
	 * console.log(result)  // 2
	 */
	Lib.find = function (obj, fn, context) {
		var result;
		if (Lib.isNull(obj)) return result;
		Lib.some(obj, function (value, index, list) {
			if (fn.call(context, value, index, list)) {
				result = value;
				return true;
			}
		});
		return result;
	};

	/**
	 * 컬렉션의 각 요소들에 함수를 적용하여 단일 값을 반환한다.
	 * 
	 * @function reduce
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { function } fn 각 요소에 trust-test를 진행할 함수
	 * @param { any? } memo 첫 번째 인수로 사용되는 값
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { any }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.reduce([1, 2, 3, 4, 5], function(sum, val) {
	 *   return sum += val;
	 * }, 0);
	 * console.log(result)  // 15
	 */
	Lib.reduce = function (obj, fn, memo, context) {
		var initial = arguments.length > 2;
		if (Lib.isNull(obj)) return [];
		Lib.each(obj, function (value, index, list) {
			if (initial) {
				memo = fn.call(context, memo, value, index, list);
			} else {
				memo = value;
				initial = false;
			}
		});
		return memo;
	};

	/**
	 * 컬렉션의 첫번째 요소를 반환한다.
	 * 
	 * @function first
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @return { any }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.first([1, 2, 3, 4, 5]);
	 * console.log(result)  // 1
	 */
	Lib.first = function (obj) {
		if (obj == null ) return void 0;
		return obj[0];
	};
	
	/**
	 * 컬렉션의 첫번째 요소를 제외한 나머지 요소를 반환한다.
	 * 
	 * @function rest
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.rest([1, 2, 3, 4, 5]);
	 * console.log(result)  // [2, 3, 4, 5]
	 */
	Lib.rest = function (obj) {
		return Array.prototype.slice.call(obj, 1)
	};
	
	/**
	 * Array-like를 Array로 반환한다.
	 * 
	 * @function toArray
	 * @param { array-like } obj Array-like 객체
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.toArray({ 0: 1, 1: 2, 2: 3, length: 3 });
	 * console.log(result)  // [1, 2, 3]
	 */
	Lib.toArray = function (obj) {
		if (!obj) return [];
		return Lib.map(obj, function (val) {
			return val;
		});
	};

	/**
	 * 컬렉션의 요소의 순서를 무작위로 섞은 새로운 컬렉션을 반환한다.
	 * 
	 * @function shuffle
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	 * console.log(result)  // [2, 5, 10, 6, 7, 8, 4, 3, 1, 9]
	 */
	Lib.shuffle = function (obj) {
		var shuffled = [];
		var rand;
		var idx = 0;
		
		for (var i = 0, len = obj.length; i < len; i++) {
			rand = Math.floor(Math.random() * idx++);
			shuffled[idx - 1] = shuffled[rand];
			shuffled[rand] = obj[i];
		}
		return shuffled;
	};

	/**
	 * 컬렉션의 요소에서 선택한 프로퍼티를 가져온다.
	 * 
	 * @function pluck
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { string } key 요소에서 선택할 프로퍼티
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.pluck([{ a: 'foo', b: 1 }, { a: 'bar', b: 2 }, { a: 'baz', b: 3 }], 'a');
	 * console.log(result)  // ['foo', 'bar', 'baz']
	 */
	Lib.pluck = function (obj, key) {
		return Lib.map(obj, function (val) {
			return val[key];
		});
	};

	/**
	 * 컬렉션의 각 요소들 중 attr의 keu:value를 가지는 요소들만 반환
	 * 
	 * @function where
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { string } key 요소에서 선택할 프로퍼티
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.where([{ a: 'foo', b: 1 }, { a: 'bar', b: 2 }, { a: 'baz', b: 3 }], { a: 'bar' });
	 * console.log(result)  // [{ a: 'bar', b: 2 }]
	 */
	Lib.where = function (obj, attrs) {
		if(Lib.isEmpty(attrs)) return [];
		return Lib.filter(obj, function (value) {
			for (var key in attrs) {
				if (Lib.has(attrs, key) && attrs[key] === value[key]) return true;
			}
			return false;
		});
	};

	/**
	 * 컬렉션의 값들을 정렬한다.
	 * 
	 * @function sortBy
	 * @param { (array|array-like) } obj Array 또는 Array-like 객체
	 * @param { (string|function) } value 정렬할 기준
	 * @param { string } [direction=asc] 정렬 순서
	 * @param { any? } context fn을 실행할 때 this로 사용하는 값
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.sortBy([{ a: 'foo', b: 1 }, { a: 'bar', b: 2 }, { a: 'baz', b: 3 }], 'a');
	 * console.log(result)  // [{ a: 'bar', b: 2 }, { a: 'baz', b: 3 }, { a: 'foo', b: 1 }]
	 */
	Lib.sortBy = function (obj, value, direction, context) {
		direction = direction || 'asc';
		var lessOrEqual  = function (x, y) {
			if (direction !== 'asc') return x > y;
			return x <= y;
		};
		var comparator = function (left, right) {
			if (lessOrEqual(left.compVal, right.compVal)) return -1;
			if (lessOrEqual(right.compVal, left.compVal)) return 1;
			return 0;
		};
		var fn = Lib.isFunction(value) ? value : function (obj) { return obj[value] };
		return Lib.pluck(
			Lib.map(obj, function (val, idx, list) {
				return {
					value: val,
					compVal: val[value]
				};
			}).sort(comparator),
			'value'
		);
	};

	Lib.groupBy = function () {

	};

	/**
	 * Objects
	 */

	/**
	 * 객체가 주어진 속성을 가지고 있는지 확인한다.
	 * 
	 * @function has
	 * @param { object } obj 속성을 확인할 객체
	 * @param { string } key 확인할 속성
	 * @return { boolean }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.has({ a: 'foo', b: 1 }, 'a');
	 * console.log(result)  // true
	 */
	Lib.has = function (obj, key) {
		return hasOwnProperty.call(obj, key);
	};

	/**
	 * 객체가 가지고 있는 속성명을 반환한다.
	 * 
	 * @function keys
	 * @param { object } obj 객체
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.keys({ a: 'foo', b: 1 });
	 * console.log(result)  // ["a", "b"]
	 */
	Lib.keys = Object.keys || function (obj) {
		if (!Lib.isObject(obj)) return [];
		var keys = [];
		for (var key in obj) {
			if (Lib.has(obj, key)) keys.push(key);
		}
		return keys;
	};

	/**
	 * 객체가 가지고 있는 속성값을 반환한다.
	 * 
	 * @function values
	 * @param { object } obj 객체
	 * @return { array }
	 * @example
	 * var _ = News.Lib;
	 * var result = _.values({ a: 'foo', b: 1 });
	 * console.log(result)  // ["foo", 1]
	 */
	Lib.values = Object.values || function (obj) {
		if (!Lib.isObject(obj)) return null;
		var values = [];
		for (var key in obj) {
			if (Lib.has(obj, key)) values.push(obj[key]);
		}
		return values;
	};

	/**
	 * Functions
	 */

	/**
	 * 몇번을 호출하던지 최대 한번만 실행하는 함수를 반환한다.
	 * 
	 * @function once
	 * @param { function } fn 실행할 함수
	 * @return { function }
	 * @example
	 * var _ = News.Lib;
	 * var foo = function (a) { console.log(a) };
	 * var bar = _.once(foo);
	 * bar(1) // 1
	 * bar(1) // 반응없음
	 */
	Lib.once = function (fn) {
		var called = false;
		return function (/* arguments */) {
			if (called) return;
			called = true;
			return fn.apply(this, Lib.toArray(arguments));
		}
	};

	/**
	 * 지정된 시간 이내에 연속으로 호출되면 트리거 되지 않는 함수를 반환한다.
	 * 
	 * @function debounce
	 * @param { function } fn 실행할 함수
	 * @param { function } ms 밀리초
	 * @return { function }
	 * @example
	 * var _ = News.Lib;
	 * window.addEventListener(
	 *   'click',
	 *   Lua.debounce(function(evt) {
	 *     console.log(123);
	 *   }, 1000)
	 * );
	 */
	Lib.debounce = function (fn, ms) {
		if (!ms) ms = 0;
		var timeoutId;
		return function () {
			clearTimeout(timeoutId);
			var args = Lib.toArray(arguments);
			timeoutId = setTimeout(function () {
				fn.apply(this, args)
			}, ms);
		};
	};

	/**
	 * 지정된 시간 내에 1번만 트리거 되는 함수를 반환한다.
	 * 
	 * @function throttle
	 * @param { function } fn 실행할 함수
	 * @param { function } wait 밀리초
	 * @return { function }
	 * @example
	 * var _ = News.Lib;
	 * window.addEventListener(
	 *   'click',
	 *   _.throttle(function(evt) {
	 *     console.log(123);
	 *   }, 1000)
	 * );
	 */
	Lib.throttle = function (fn, wait) {
		var inThrottle, lastFn, lastTime;

		return function (/* arguments */) {
			var self = this;
			var args = Lib.toArray(arguments);

			if (!inThrottle) {
				fn.apply(self, args);
				lastTime = new Date().getTime();
				inThrottle = true;
			} else {
				clearTimeout(lastFn);
				lastFn = setTimeout(function () {
					if (new Date().getTime() - lastTime >= wait) {
						fn.apply(self, args);
						lastTime = new Date().getTime();
					}
				}, wait - (new Date().getTime() - lastTime));
			}
		};
	};

	/**
	 * arguments에 multiple result 속성을 추가해서 반환한다.<br/>
	 * pipe 함수용이다.
	 * 
	 * @function mr
	 * @param { ...any } arguments 모든 입력값들
	 * @return { arguments }
	 */
	Lib.mr = function (/* arguments */) {
		arguments.mr = true;
		return arguments;
	};

	/**
	 * arguments로 받은 함수들을 순차적으로 실행한다.<br/>
	 * 방향은 왼쪽 -> 오른쪽<br/>
	 * 첫 번째 인자는 함수가 아니다.<br/>
	 * 왼쪽 함수의 출력 값은 오른쪽 함수의 입력 값으로 들어간다.<br/>
	 * mr함수와 함께 사용 시 다수의 파라미터를 받을 수 있다.
	 * 
	 * @function pipe
	 * @param { ...function } fns 체이닝할 함수들
	 * @return { any? }
	 * @example 
	 * var _ = News.Lib;
	 * var result = _.pipe(
	 *   1,
	 *   function (a) { return a + 2 },
	 *   function (b) { return b * 3 }
	 * );
	 * console.log(result); // 9
	 * @example 
	 * var _ = News.Lib;
	 * var result = _.pipe(
	 *   _.mr(1, 2, 3),
	 *   function (a, b, c) { return _.mr(a + b + c, 2) },
	 *   function (d, e) { return d * e },
	 * );
	 * console.log(result); // 12
	 */
	Lib.pipe = function (/* arguments */) {
		var args = Lib.toArray(arguments),
			seed = Lib.first(args),
			fns = Lib.rest(args);
		if (Lib.isFunction(seed)) seed = seed()
		return Lib.reduce(fns, function (value, fn) {
			if (value.mr) return fn.apply(null, value);
			return fn(value);
		}, seed);
	};

	/**
	 * pipe함수의 비동기 버전<br/>
	 * arguments로 받은 함수들을 순차적으로 실행한다.<br/>
	 * 방향은 왼쪽 -> 오른쪽<br/>
	 * 첫 번째 인자는 함수가 아니다.<br/>
	 * 마지막 함수를 제외하고 나머지 함수들은 첫번째 파라미터로 next 함수를 받아야한다.<br/>
	 * 비동기 로직 종료시 next 함수를 실행해야 한다.
	 * 
	 * @function async
	 * @param { ...function } fns 체이닝할 함수들
	 * @return { any? }
	 * @example
	 * var _ = News.Lib;
	 * _.async(
	 *   function (next) {
	 *     setTimeout(function () { console.log('1'); next(); }, 500);
	 *   },
	 *   function (next) {
	 *     setTimeout(function () { console.log('2'); next(); }, 300);
	 *   },
	 *   function (next) {
	 *     setTimeout(function () { console.log('3'); }, 100); }
	 * );
	 * // 1
	 * // 2
	 * // 3
	 */
	Lib.async = function (/* arguments */) {
		var args = Lib.toArray(arguments),
			seed = Lib.first(args),
			seedFn = Lib.isFunction(seed) ? seed : function (next) { next(seed) };
			fns = [seedFn].concat(Lib.rest(args)),
			len = fns.length,
			curr = 0;
		var next = function (/* arguments */) {
			var params = Lib.toArray(arguments),
				idx = curr++;
			if (idx >= len) return;
			return fns[idx].apply(null, [next].concat(params));
		};
		next();
	};

	/*
		var fibonacci2 = Lib.memoize(function (n) {
			return n < 2 ? n : fibonacci2(n - 1) + fibonacci2(n - 2)
		});
	*/
	/**
	 * 함수의 결과를 메모리에 저장해두고 재사용할 수 있게 한다.
	 * 
	 * @function memoize
	 * @param { function } fn 메모이제이션할 함수
	 * @param { function } hasher 키 생성 해시 함수
	 * @return { any? }
	 * @example
	 * // memoization 안되는 피보나치 함수
	 * var fibonacci = function (n) {
	 *   return n < 2 ? n : fibonacci2(n - 1) + fibonacci2(n - 2)
	 * });
	 * fibonacci(50) // 많이 느리다...
	 * @example
	 * // memoization 되는 피보나치 함수
	 * var _ = News.Lib;
	 * var fibonacci = _.memoize(function (n) {
	 *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
	 *  });
	 * fibonacci(50)
	 */
	Lib.memoize = function (fn, hasher) {
		var memo = {};
		hasher || (hasher = Lib.identity);
		return function (/* arguments */) {
			var key = hasher.apply(this, arguments);
			return memo.hasOwnProperty(key) ? memo[key] : (memo[key] = fn.apply(this, arguments));
		};
	};

	Lib.curry = function () {

	};

	/**
	 * Utility
	 */

	/**
	 * 입력값과 동일한 값을 반환하는 함수<br/>
	 * f(x) = x<br/>
	 * 
	 * @function identity
	 * @param { any } value 메모이제이션할 함수
	 * @return { any } value
	 */
	Lib.identity = function (value) {
		return value;
	};

	/**
	 * 문자열의 길이보다 자리수가 클 경우 문자열의 왼쪽에 특정 문자열을 채운다.
	 * 
	 * @function lpad
	 * @param { string } obj 문자열
	 * @param { string } char 채울 문자
	 * @param { number } digit 원하는 결과 문자열의 자리수
	 * @return { string }
	 * @example
	 * var _ = News.Lib;
	 * _.lpad('123', '0', '5') // '00123'
	 */
	Lib.lpad = function (obj, char, digit) {
		if (!Lib.isString(obj) || obj.length >= digit) return obj;
		if (char.length > 1) char = char[0];
		var str = obj;
		for (var i = 0, len = digit - obj.length; i < len; i++) {
			str = char + str;
		}
		return str;
	};

	/**
	 * 문자열의 길이보다 자리수가 클 경우 문자열의 오른쪽에 특정 문자열을 채운다.
	 * 
	 * @function rpad
	 * @param { string } obj 문자열
	 * @param { string } char 채울 문자
	 * @param { number } digit 원하는 결과 문자열의 자리수
	 * @return { string }
	 * var _ = News.Lib;
	 * _.rpad('001212-1', '*', '14') // '001212-1******'
	 */
	Lib.rpad = function (obj, char, digit) {
		if (!Lib.isString(obj) || obj.length >= digit) return obj;
		if (char.length > 1) char = char[0];
		var str = obj;
		for (var i = 0, len = digit - obj.length; i < len; i++) {
			str = str + char;
		}
		return str;
	};

	/**
	 * Classes
	 */

	/**
	 * Reactive Model & View
	 */

	/**
	 * 반응형 Model Class<br/>
	 * state를 가지고 있다.<br/>
	 * 인자로 받은 action들을 dispatch해서 state를 변경할 수 있다.<br/>
	 * state가 변경이 되면 모델이 등록된 View의 render 메소드를 호출한다.
	 * 
	 * @class Model
	 * @memberof News.Lib
	 * @see {@link http://datanews.sbs.co.kr/lab/uiTest/sample8/news.html|demo}
	 * @example
	 * var model = new News.Lib.Model({
	 *   state: {
	 *     count: 0,
	 *   },
	 *   actions: {
	 *     increment: function (state, payload) {
	 *       if (!payload) payload = 1;
	 *       state.count += payload;
	 *       return state;
	 *     },
	 *     decrement: function (state, payload) {
	 *       if (!payload) payload = 1;
	 *       state.count -= payload;
	 *       return state;
	 *     }
	 *   }
	 * });
	 */
	Lib.Model = (function () {
		function Model (props) {
			var self  = this;
			
			self.status = 'resting';
			self.subscribers = [];

			self.actions = {};
			if(props.hasOwnProperty('actions')) {
				self.actions = props.actions;
			}

			self.state = new Proxy((props.state || {}), {
				set: function (state, key, value) {
					if (Lib.equals(state[key], value)) return true;
					if(self.status !== 'mutation') {
						console.warn('You should use a mutation to set', key);
					}
					if (debug){
						console.log('[stateChange]', key, ':', state[key], '->', value);
					}
					state[key] = value;
					self.publish(self.state);
					
					return true;
				}
			});
		}

		/**
		 * 상태 변경 시 실행할 View 인스턴스의 render 메소드를 등록한다.
		 * 
		 * @method subscribe
		 * @param { function } callback View 인스턴스의 render 메소드
		 * @memberof News.Lib.Model#
		 */
		Model.prototype.subscribe = function (callback) {
			var self = this;
			return self.subscribers.push(callback);
		};
		
		/**
		 * 상태 변경 감지 시 render 메소드를 트리거링한다.
		 * 
		 * @method publish
		 * @param { any? } payload
		 * @memberof News.Lib.Model#
		 */
		Model.prototype.publish = function (payload) {
			var self = this;
			var subscribers = self.subscribers;
			for (var i = 0, len = subscribers.length; i < len; i++) {
				var callback = subscribers[i];
				callback(payload);
			}
		};
		
		/**
		 * 상태를 변경할 수 있는 action을 호출한다.
		 * 
		 * @method dispatch
		 * @param { string } type
		 * @param { any? } payload
		 * @memberof News.Lib.Model#
		 */
		Model.prototype.dispatch = function (type, payload) {
			var self = this;
			if (debug) {
				console.log('[Action] ' + type);
			}
			if (typeof self.actions[type] !== 'function') {
				console.error('Action ' + type + ' doesn\'t exist.');
				return false;
			}
			self.status = 'mutation';
			var newState = self.actions[type](Lib.assign({}, self.state), payload);
			self.state = Lib.assign(self.state, newState);
			self.status = 'resting';
			return true;
		};
		return Model;
	}());

	/**
	 * 반응형 View Class<br/>
	 * model을 property로 가지고 있다.<br/>
	 * model의 state가 변경이 되면 render 메소드를 호출된다.
	 * 
	 * @class View
	 * @see {@link http://datanews.sbs.co.kr/lab/uiTest/sample8/news.html|demo}
	 * @example
	 * <body>
	 *   <div id="counter"></div>
	 * </body>
	 * <script>
	 * var counter = new News.Lib.View({
	 *   model: model,
	 *   container: $('#counter'),
	 *   render: function () {
	 *     var self = this,
	 *         html = '';
	 *     html += '<div><span>count = ' + self.model.state.count + '</span></div>';
	 *     html += '<button id="inc">increment</button>';
	 *     html += '<button id="dec">decrement</button>';
	 * 
	 *     self.container.html(html);
	 *     $('#inc').off().on('click', function (evt) {
	 *       self.model.dispatch('increment');
	 *     });
	 *     $('#dec').off().on('click', function (evt) {
	 *       self.model.dispatch('decrement');
	 *     });
	 *   }
	 * });
	 * $(document).ready(function () {
	 *   counter.render();
	 * });
	 * </script>
	 */
	Lib.View = (function () {
		function View (props) {
			if (!props) props = {};
			var self = this;
			self = Lib.assign(self, props);

			self.rendering;
			self.render = self.render || function () {};

			self.model = self.model || new Lib.Model({});
			if (props.model instanceof Lib.Model) {
				self.connect(props.model)
			}

			if (!Lib.isEmpty(props.models)) {
				var rendering;
				for (modelId in props.models) {
					var model = props.models[modelId];
					if (model instanceof Lib.Model) {
						self.connect(model);
					}
				}
			}
		}

		View.prototype.connect = function (model) {
			var self = this;
			model.subscribe(function () {
				if (self.rendering) clearTimeout(self.rendering);
				self.rendering = setTimeout(function () {
					self.render();
				}, 35);
			});
		}

		return View;
	}());

	/**
	 * 옵저버 패턴의 이벤트 허브 Class
	 * 
	 * @class EventHub
	 * @memberof News.Lib
	 * @example
	 * var _ = News.Lib;
	 * var handler = function (data) { console.log(data) }
	 * var hub = new _.EventHub();
	 * var increment = 0
	 * 
	 * hub.on('message', handler);
	 * hub.on('message', function () { console.log('Message event fired') });
	 * hub.on('increment', function () { console.log(++ncrement) });
	 * 
	 * hub.emit('message', 'hello world');
	 * // hello world
	 * // Message event fired
	 * 
	 * hub.emit('message', { hello: 'world' });
	 * // {hello: "world"}
	 * // Message event fired
	 * 
	 * hub.emit('increment');
	 * // 1
	 */
	Lib.EventHub = (function () {
		
		function EventHub () {
			/**
			 * 등록된 이벤트 목록
			 * 
			 * @member { object } hub The name of the person.
			 * @memberof News.Lib.EventHub#
			 */
			this.hub = {}
		}

		/**
		 * 이벤트 리스너를 등록한다.
		 * 
		 * @method on
		 * @memberof News.Lib.EventHub#
		 * @public
		 * @param { string } event 이벤트 이름
		 * @param { function } handler 이벤트 트리거 시 실행할 함수
		 */
		EventHub.prototype.on = function (event, handler) {
			var self = this;
			if (!self.hub[event]) self.hub[event] = [];
			self.hub[event].push(handler);
			return self;
		};

		/**
		 * 이벤트에 등록된 모든 함수를 호출한다.
		 * 
		 * @method emit
		 * @memberof News.Lib.EventHub#
		 * @public
		 * @param { string } event 이벤트 이름
		 * @param { any? } payload 등록된 함수에서 사용할 파라미터
		 */
		EventHub.prototype.emit = function (event, payload) {
			var self = this,
				events = self.hub[event];
			if (!events) return;
			if (debug) console.log(event);
			for (var i = 0, len = events.length; i < len; i++) {
				var handler = events[i];
				handler(payload);
			}
		};

		/**
		 * 이벤트에 등록된 모든 함수를 제거한다.
		 * 
		 * @method off
		 * @memberof News.Lib.EventHub#
		 * @public
		 * @param { string } event 이벤트 이름
		 */
		EventHub.prototype.off = function (event) {
			var self = this
			self.hub[event] = null;
			return self;
		};

		return EventHub;
	}());

	/**
	 * 브라우저 스토리지 Wrapper Class
	 * 
	 * @class Storage
	 * @memberof News.Lib
	 */
	Lib.Storage = (function () {
		/**
		 * @member { (localStorage|sessionStorage) } db 브라우저 로컬/세션 스토리지
		 * @memberof News.Lib.Storage#
		 */
		function Storage (type) {
			if (!sessionStorage || !localStorage) return;
			this.db = type === 'local' ? localStorage : sessionStorage;
		}

		/**
		 * 새로운 key-value쌍을 생성한다.<br/>
		 * 생성이 완료되면 true를 반환한다.<br/>
		 * 이미 값이 존재하면 value를 저장하지 않고 false를 반환한다.
		 * 
		 * @method insert
		 * @memberof News.Lib.Storage#
		 * @param { string } key
		 * @param { any } value
		 * @return { boolean }
		 * @example
		 * var _ = News.Lib;
		 * var db = new _.Storage()
		 * db.insert('a', 1); // true
		 * db.get('a') // 1
		 * 
		 * db.insert('a', 2); // false
		 * db.get('a') // 1
		 */
		Storage.prototype.insert = function(key, value) {
			var self = this;
			if (Lib.isEmpty(self.get(key))) {
				self.db.setItem(key, JSON.stringify(value));
				return true;
			}
			return false;
		};

		/**
		 * 기존에 존재하는 key 값을 새로운 value로 갱신한다.<br/>
		 * 생성이 완료되면 true를 반환한다.<br/>
		 * 이미 생성된 값이 없으면 value를 저장하지 않고 false를 반환한다.
		 * 
		 * @method update
		 * @memberof News.Lib.Storage#
		 * @param { string } key
		 * @param { any } value
		 * @param { function? } fn 저장되어 있던 값을 인자로 받는 함수
		 * @return { boolean }
		 * @example
		 * var _ = News.Lib;
		 * var db = new _.Storage()
		 * db.update('b', 1); // false
		 * db.insert('b', 1); // true
		 * console.log(db.get('b')) // 1
		 * 
		 * db.update('b', 2); // true
		 * console.log(db.get('b')) // 2
		 * 
		 * db.update('b', 3, function (prev, val) {
		 *   console.log(prev); // 2
		 *   console.log(val); // 3
		 *   return prev + val;
		 * });
		 * console.log(db.get('b')) // 5
		 */
		Storage.prototype.update = function (key, val, fn) {
			var self = this;
			var prev = self.db.getItem(key);
			if (Lib.isEmpty(prev)) return false;
			if (fn) {
				self.db.setItem(key, JSON.stringify(fn(JSON.parse(prev), val)));
				return true;
			}
			self.db.setItem(key, JSON.stringify(val));
			return true;
		};

		/**
		 * 기존에 존재하는 key 값을 삭제한다.<br/>
		 * true를 반환한다.
		 * 
		 * @method delete
		 * @memberof News.Lib.Storage#
		 * @param { string } key
		 * @return { boolean } true
		 * @example
		 * var _ = News.Lib;
		 * var db = new _.Storage()
		 * db.insert('c', 1); // true
		 * console.log(db.get('c')) // 1
		 * 
		 * db.remove('c'); // true
		 * console.log(db.get('c')) // null
		 */
		Storage.prototype.remove = function (key) {
			var self = this;
			self.db.setItem(key, null);
			return true;
		};

		/**
		 * 값이 있으면 update, 없으면 create를 실행한다.
		 * 
		 * @method upsert
		 * @param { string } key
		 * @param { any } value
		 * @param { function? } fn 저장되어 있던 값을 인자로 받는 함수
		 * @return { boolean } true
		 * @memberof News.Lib.Storage#
		 */
		Storage.prototype.upsert = function (key, val, fn) {
			var self = this;
			var prev = self.db.getItem(key);
			if (Lib.isEmpty(prev)) {
				return self.insert(key, val);
			}
			return self.update(key, val, fn);
		};

		/**
		 * key를 가지는 데이터를 조회한다.
		 * 
		 * @method get
		 * @memberof News.Lib.Storage#
		 */
		Storage.prototype.get = function (key) {
			var self = this;
			return JSON.parse(self.db.getItem(key));
		};

		return Storage;
	}());

	Lib.UserAgent = (function () {

	}());

	return Lib;
}());

/**
 * @module Core
 */
News.Core = (function () {
	var lib = News.Lib;

	function Core () {}
	
	Core.resizeImage = function (img, size) {
		var regex = /\.(png|jpe?g|gif|svg|PNG|JP?G|GIF|SVG)$/,
		test = img.match(regex);
		if(!test) return img;
		return img.replace(regex, ['_', size, test[0]].join(''));
	};
	
	Core.nvl = function (obj, substitute) {
		return lib.isEmpty(obj) ? substitute : obj;
	};

	return Core;
}());