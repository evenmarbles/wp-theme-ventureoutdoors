/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./src/js/gutenberg/api/colors.js":
/*!****************************************!*\
  !*** ./src/js/gutenberg/api/colors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var colors = [{
  name: "primary",
  color: "#ff7240"
}, {
  name: "secondary",
  color: "#8b9a64"
}, {
  name: "quarternary",
  color: "#1c80b2"
}, {
  name: "white",
  color: "#ffffff"
}, {
  name: "senary",
  color: "#4b5263"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);

/***/ }),

/***/ "./src/js/gutenberg/api/getcf.js":
/*!***************************************!*\
  !*** ./src/js/gutenberg/api/getcf.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCF": () => (/* binding */ getCF)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCF = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, postId, callback) {
    var _siteConfig$ajax_nonc, _siteConfig;

    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Array.isArray(name)) {
              name = name.join(',');
            }

            _context.next = 3;
            return fetch("".concat(siteConfig.restUrl, "acf?_wpnonce=").concat((_siteConfig$ajax_nonc = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '', "&id=").concat(postId, "&name=").concat(name), {
              method: 'GET',
              redirect: 'follow',
              referrer: 'no-referrer'
            }).then(function (returned) {
              if (returned.ok) return returned;
              throw new Error('Network response was not ok.');
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            callback(data.value);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCF(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/gutenberg/api/image.js":
/*!***************************************!*\
  !*** ./src/js/gutenberg/api/image.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cloudinary = /*#__PURE__*/function () {
  function Cloudinary(cloud_name, api_key, username) {
    _classCallCheck(this, Cloudinary);

    _defineProperty(this, "_ml", null);

    if (!Cloudinary.instance) {
      this.data = {};
      var mloptions = {
        cloud_name: 'ventureoutdoors',
        api_key: '118896131689196',
        username: 'astrid@ventureoutdoorsllc.com',
        button_class: 'myBtn',
        button_caption: 'Insert Images',
        default_transformations: [[{
          quality: "auto"
        }, {
          fetch_format: "auto"
        }]]
      };
      window.ml = cloudinary.createMediaLibrary(mloptions, {
        insertHandler: function insertHandler(data) {
          window.dispatchEvent(new CustomEvent('MediaSelected', {
            detail: {
              id: instance.data['uniqueId'],
              assets: data.assets
            }
          }));
        }
      });
      Cloudinary.instance = this;
    }

    return Cloudinary.instance;
  }

  _createClass(Cloudinary, [{
    key: "openMediaLibrary",
    value: function openMediaLibrary(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.data['uniqueId'] = id;
      window.ml.show(options);
    }
  }, {
    key: "closeMediaLibrary",
    value: function closeMediaLibrary() {
      window.ml.hide();
    }
  }]);

  return Cloudinary;
}();

var instance = new Cloudinary();
Object.freeze(instance);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./src/js/gutenberg/blocks/accrdn/edit.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/accrdn/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */




var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id,
      title = attributes.title;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    value: title,
    allowedFormats: [],
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'ventureoutdoors')
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The element ID', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the elements id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      setAttributes({
        id: id
      });
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/accrdn/index.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/accrdn/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/accrdn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/accrdn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: {
      type: "string"
    },
    title: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        id = _ref$attributes.id,
        title = _ref$attributes.title;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      className: 'accordion-title flush js-accordion',
      tagName: "h4",
      "data-target": "#".concat(id),
      value: title
    }), /*#__PURE__*/React.createElement("div", {
      class: "accordion-cont content",
      id: id
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/activitycard/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activitycard/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * WordPress Dependencies.
 */


var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  var filterRoute = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _siteConfig$ajax_nonc, _siteConfig;

      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(siteConfig.restUrl, "filter?_wpnonce=").concat((_siteConfig$ajax_nonc = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : ''), {
                method: 'GET',
                redirect: 'follow',
                referrer: 'no-referrer'
              }).then(function (returned) {
                if (returned.ok) return returned;
                throw new Error('Network response was not ok.');
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              data = data.types;
              setAttributes({
                typeList: data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterRoute() {
      return _ref2.apply(this, arguments);
    };
  }();

  filterRoute();
  return wp.element.createElement("div", {
    className: "vo-placeholder-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Activity Type Carousel Placeholder", "ventureoutdoors"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/activitycard/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activitycard/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/activitycard/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/activitycard", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Activity Type Carousel", 'ventureoutdoors'),
  icon: 'format-gallery',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    typeList: {
      type: "array"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var typeList = _ref.attributes.typeList;
    var cards = '';

    if (typeList !== null && typeList !== undefined) {
      cards = typeList.map(function (_ref2) {
        var title = _ref2.title,
            permalink = _ref2.permalink,
            thumbnail = _ref2.thumbnail,
            count = _ref2.count;
        return /*#__PURE__*/React.createElement("div", {
          className: "activity-slider-item side-slider-item"
        }, /*#__PURE__*/React.createElement("a", {
          href: permalink
        }, /*#__PURE__*/React.createElement("div", {
          className: "imgbttn imgbttn-wbg"
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_428,dpr_2.0/activity-types/".concat(thumbnail),
          loading: "lazy",
          alt: title,
          className: "imgbttn-img img-responsive objectfit"
        }), /*#__PURE__*/React.createElement("div", {
          className: "imgbttn-overlay"
        }, /*#__PURE__*/React.createElement("div", {
          className: "imgbttn-btn"
        }, /*#__PURE__*/React.createElement("span", {
          className: "btn-tertiary"
        }, "Explore")), /*#__PURE__*/React.createElement("div", {
          className: "imgbttn-txt activity-slide-cont"
        }, /*#__PURE__*/React.createElement("h3", {
          className: "h4 imgbttn-title flush-ends"
        }, title), /*#__PURE__*/React.createElement("div", {
          class: "activity-count"
        }, count, " ", permalink.includes('lesson') ? 'Lessons' : 'Tours'))))));
      });
    }

    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'activity-card'
    });
    return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "container-fluid hard-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row flush-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xxs-11 col-xxs-push-1 hard-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "activity-slider side-slider"
    }, cards)))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/activitygrid/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activitygrid/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * WordPress Dependencies.
 */


var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var posts = attributes.posts;
  var postId = wp.data.select('core/editor').getCurrentPostId();

  var filterRoute = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _siteConfig$ajax_nonc, _siteConfig;

      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(siteConfig.restUrl, "related?_wpnonce=").concat((_siteConfig$ajax_nonc = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '', "&id=").concat(postId), {
                method: 'GET',
                redirect: 'follow',
                referrer: 'no-referrer'
              }).then(function (returned) {
                if (returned.ok) return returned;
                throw new Error('Network response was not ok.');
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              data = data.posts;
              setAttributes({
                posts: data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterRoute() {
      return _ref2.apply(this, arguments);
    };
  }();

  filterRoute();
  return /*#__PURE__*/React.createElement("div", null, posts.map(function (post) {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-xxs-12 col-xs-6 col-sm-6 col-lg-4"
    }, /*#__PURE__*/React.createElement("a", {
      className: "sngl-activity-similar-item",
      href: post.permalink
    }, post.title));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/activitygrid/hovercard.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/blocks/activitygrid/hovercard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HoverCard = function HoverCard(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-xxs-12 col-xs-6 col-sm-6 col-lg-4"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sngl-activity-similar-item",
    href: props.permalink
  }, props.guides_choice && /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-badges"
  }, /*#__PURE__*/React.createElement("img", {
    width: "300",
    height: "300",
    className: "badge img-responsive lazyload",
    sizes: "(max-width: 300px) 100vw, 300px",
    "data-src": "https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png",
    "data-srcset": "https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png 300w, \r https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-150x150.png 150w, \r https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-37x37.png 37w",
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-similar-item-img"
  }, /*#__PURE__*/React.createElement("img", {
    width: "890",
    height: "500",
    className: "objectfit img-responsive lazyload",
    sizes: "(max-width: 890px) 100vw, 890px",
    "data-src": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/activities-thumb/".concat(props.thumbnail),
    "data-srcset": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_890/activities-thumb/".concat(props.thumbnail, " 890w, \n          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_300/activities-thumb/").concat(props.thumbnail, " 300w, \n          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_853/activities-thumb/").concat(props.thumbnail, " 853w, \n          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_768/activities-thumb/").concat(props.thumbnail, " 768w, \n          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/activities-thumb/").concat(props.thumbnail, " 49w"),
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-similar-item-cont"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-duration"
  }, props.duration), /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-cost"
  }, "from $", props.cost), /*#__PURE__*/React.createElement("h5", {
    className: "flush"
  }, props.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Location:"), " ", props.location), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Area:"), " ", props.area), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Activity Type:"), " ", props.activity_type), /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-similar-difficulty"
  }, /*#__PURE__*/React.createElement("strong", null, "Difficulty:"), /*#__PURE__*/React.createElement("img", {
    width: "75",
    height: "20",
    className: "sngl-activity-similar-difficulty__img lazyload",
    sizes: "(max-width: 75px) 100vw, 75px",
    "data-src": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/".concat(props.difficulty, ".png"),
    "data-srcset": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/".concat(props.difficulty, " 75w, \n            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/").concat(props.difficulty, " 49w"),
    alt: "",
    loading: "lazy"
  })), props.solitude && /*#__PURE__*/React.createElement("div", {
    className: "sngl-activity-similar-difficulty"
  }, /*#__PURE__*/React.createElement("strong", null, "Solitude:"), /*#__PURE__*/React.createElement("img", {
    width: "75",
    height: "20",
    className: "sngl-activity-similar-difficulty__img lazyload",
    sizes: "(max-width: 75px) 100vw, 75px",
    "data-src": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/".concat(props.solitude, ".png"),
    "data-srcset": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/".concat(props.solitude, " 75w, \n            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/").concat(props.solitude, " 49w"),
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Highlights:"), " ", props.excerpt))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverCard);

/***/ }),

/***/ "./src/js/gutenberg/blocks/activitygrid/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activitygrid/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/activitygrid/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hovercard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hovercard */ "./src/js/gutenberg/blocks/activitygrid/hovercard.js");
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/activitygrid", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Activity Grid", 'ventureoutdoors'),
  icon: 'tagcloud',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    posts: {
      type: "array",
      default: []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var posts = _ref.attributes.posts;
    return /*#__PURE__*/React.createElement("div", {
      class: "row grid eqhwrap disblock-xxs facetwp-template"
    }, posts.map(function (post) {
      return /*#__PURE__*/React.createElement(_hovercard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        permalink: post.permalink,
        title: post.title,
        guides_choice: post.guides_choice,
        thumbnail: post.thumbnail,
        duration: post.duration,
        cost: post.cost,
        location: post.location,
        area: post.area,
        activity_type: post.activity_type,
        difficulty: post.difficulty,
        solitude: post.solitude,
        excerpt: post.excerpt
      });
    }));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/activityinfo/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activityinfo/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'accordion sngl-activity-accordion'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      return setAttributes({
        id: id
      });
    }
  })))), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/accrdn']
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/activityinfo/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/activityinfo/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/activityinfo/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/activityinfo", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Activity Info", 'ventureoutdoors'),
  icon: 'info',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    id: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'accordion sngl-activity-accordion'
    });
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/banner/edit.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/banner/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'banner'
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "banner-item"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/slideshow', 'vo-blocks/banneroverlay']
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/banner/index.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/banner/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/banner/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/banner", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Banner", 'ventureoutdoors'),
  icon: 'welcome-view-site',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'banner',
      id: 'masthead'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "banner-logo-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-base_382x200.png",
      alt: "Go to Venture Outdoors' homepage.",
      className: "logo-base"
    }), /*#__PURE__*/React.createElement("img", {
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo//venture-outdoors-logo-needle_195x200.png",
      alt: "Go to Venture Outdoors' homepage.",
      className: "logo-needle"
    })), /*#__PURE__*/React.createElement("div", {
      className: "banner-item"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/banneroverlay/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/banneroverlay/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'banner-overlay valign-end disblock-xs-down'
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "banner-overlay-cont valign-middle-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner-txt text-shadow-black"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ["core/heading", "core/paragraph"]
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/banneroverlay/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/banneroverlay/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/banneroverlay/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/banneroverlay", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Banner Overlay", 'ventureoutdoors'),
  icon: 'menu',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'banner-overlay valign-end disblock-xs-down'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "banner-overlay-cont valign-middle-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "banner-txt text-shadow-black"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), /*#__PURE__*/React.createElement("img", {
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/vector-images/feather-divider.svg",
      className: "imgdivider small hidden-xs-down"
    }))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/booking/edit.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/booking/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */




var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var itemId = attributes.itemId,
      flowId = attributes.flowId,
      isPrivate = attributes.isPrivate;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is Private Instruction?', 'ventureoutdoors'),
    selected: isPrivate,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: "No",
      value: 'no'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        isPrivate: optionVal
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item ID', 'ventureoutdoors'),
    value: itemId,
    onChange: function onChange(itemId) {
      return setAttributes({
        itemId: itemId
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flow ID', 'ventureoutdoors'),
    value: flowId,
    onChange: function onChange(flowId) {
      return setAttributes({
        flowId: flowId
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vo-placeholder-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Booking Placeholder", "ventureoutdoors")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/booking/index.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/booking/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/booking/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/booking", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Booking", 'ventureoutdoors'),
  icon: 'calendar',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    itemId: {
      type: 'string',
      selector: '.itemId'
    },
    flowId: {
      type: 'string',
      selector: '.flowId'
    },
    isPrivate: {
      type: 'string',
      default: 'no'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        itemId = _ref$attributes.itemId,
        flowId = _ref$attributes.flowId,
        isPrivate = _ref$attributes.isPrivate;
    return /*#__PURE__*/React.createElement(React.Fragment, null, !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "no" && /*#__PURE__*/React.createElement("p", {
      className: "tour-dates-message"
    }, "Click on a date to book. You can also call ", /*#__PURE__*/React.createElement("a", {
      href: "tel:+1-407-267-9950"
    }, "407-267-9950"), " to book through customer service"), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "no" && /*#__PURE__*/React.createElement("script", {
      src: "https://fareharbor.com/embeds/script/calendar/ventureoutdoorsllc/items/".concat(itemId, "/?fallback=simple&flow=").concat(flowId)
    }), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "no" && /*#__PURE__*/React.createElement("div", {
      class: "col-md-12 activity-cta"
    }, /*#__PURE__*/React.createElement("img", {
      width: "500",
      height: "161",
      class: "activity-background",
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave"
    }), /*#__PURE__*/React.createElement("div", {
      class: "activity-cta-wrapper text-center"
    }, /*#__PURE__*/React.createElement("h4", null, "Don't see your dates? call us!"), /*#__PURE__*/React.createElement("a", {
      href: "tel:+1-407-267-9950",
      class: "color-primary icon-phone-android"
    }, "407-267-9950"))), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "yes" && /*#__PURE__*/React.createElement("p", {
      className: "tour-dates-message"
    }, "Private Lessons are by appointment only."), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "yes" && /*#__PURE__*/React.createElement("div", {
      className: "activity-cta bgc-quaternary "
    }, /*#__PURE__*/React.createElement("div", {
      className: "activity-cta-wrapper text-center"
    }, /*#__PURE__*/React.createElement("h4", null, "Please call to book!"), /*#__PURE__*/React.createElement("a", {
      href: "tel:+1-407-267-9950",
      className: "color-primary icon-phone-android"
    }, "407-267-9950")), /*#__PURE__*/React.createElement("img", {
      width: "500",
      height: "161",
      className: "activity-background",
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave"
    })));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/container/edit.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/container/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'container'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #333"
    }
  }, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/container/index.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/container/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/container/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/container", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container", 'ventureoutdoors'),
  icon: 'editor-code',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'container'
    });
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/customfield/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/customfield/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_getcf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/getcf */ "./src/js/gutenberg/api/getcf.js");
/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var name = attributes.name,
      value = attributes.value,
      tagName = attributes.tagName,
      searchText = attributes.searchText,
      replaceText = attributes.replaceText;
  var postId = wp.data.select('core/editor').getCurrentPostId();
  var parser = new DOMParser();

  function getCustomField(value) {
    if (Array.isArray(value)) {
      if (value.length <= 1) {
        value = {
          string: value[0]
        };
      } else {
        value = {
          array: value
        };
      }
    }

    if (typeof value === 'string') {
      value = {
        string: value
      };
    }

    setAttributes({
      value: value
    });
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function replace() {
    var searchRegExp = new RegExp(escapeRegExp(searchText), "gi");
    var replaceWith = replaceText;

    if (value && value.array) {
      value.array = value.array.map(function (v) {
        return v.replace(searchRegExp, replaceWith);
      });
      setAttributes({
        value: value
      });
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, value && value.array && /*#__PURE__*/React.createElement("ul", null, value.array.map(function (v) {
    return /*#__PURE__*/React.createElement("li", null, v);
  })), value && value.string && value.string.match(/<[^>]*>/g) && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: value.string
    }
  }), value && value.string && !value.string.match(/<[^>]*>/g) && typeof value.string === 'string' && value.string, !value && /*#__PURE__*/React.createElement("div", {
    className: "vo-placeholder-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Field Placeholder", "ventureoutdoors")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom field name', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The name of the custom field', 'ventureoutdoors'),
    value: name,
    onChange: function onChange(name) {
      setAttributes({
        name: name
      });
      (0,_api_getcf__WEBPACK_IMPORTED_MODULE_3__.getCF)(name, postId, getCustomField);
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tag name', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The name of the tag', 'ventureoutdoors'),
    value: tagName,
    onChange: function onChange(tagName) {
      setAttributes({
        tagName: tagName
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'ventureoutdoors'),
    value: searchText,
    onChange: function onChange(searchText) {
      return setAttributes({
        searchText: searchText
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace', 'ventureoutdoors'),
    value: replaceText,
    onChange: function onChange(replaceText) {
      return setAttributes({
        replaceText: replaceText
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: replace
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace', 'ventureoutdoors'))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/customfield/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/customfield/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/customfield/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */



/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/customfield", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom Field", 'ventureoutdoors'),
  icon: 'edit',
  category: "ventureoutdoors",
  attributes: {
    name: {
      type: "string"
    },
    value: {
      type: "object"
    },
    tagName: {
      type: "string"
    },
    searchText: {
      type: "string"
    },
    replaceText: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var value = _ref.attributes.value;

    if (!value) {
      return null;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, value && value.array && /*#__PURE__*/React.createElement("ul", null, value.array.map(function (v) {
      return /*#__PURE__*/React.createElement("li", null, v);
    })), value && value.string && value.string.match(/<[^>]*>/g) && /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: value.string
      }
    }), value && value.string && !value.string.match(/<[^>]*>/g) && typeof value.string === 'string' && value.string);
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/div/edit.js":
/*!*********************************************!*\
  !*** ./src/js/gutenberg/blocks/div/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The element ID', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the elements id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      setAttributes({
        id: id
      });
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/div/index.js":
/*!**********************************************!*\
  !*** ./src/js/gutenberg/blocks/div/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/div/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/div", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Div", 'ventureoutdoors'),
  icon: 'editor-code',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    id: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var id = _ref.attributes.id;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return /*#__PURE__*/React.createElement("div", _extends({}, blockProps, id ? {
      id: id
    } : ''), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/gallerybanner/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/gallerybanner/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var images = attributes.images;
  var isSourceAvailable = images && typeof images[0].src !== "undefined";
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets;
    var images = [];
    data.forEach(function (x, i) {
      images.push({
        src: x.secure_url,
        public_id: x.public_id,
        context: x.context ? x.context.custom : '',
        derived: x.derived ? x.derived : '',
        height: x.height,
        width: x.width,
        version: x.version
      });
    });
    setAttributes({
      images: images
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_3__["default"].openMediaLibrary(clientId, {
      multiple: true,
      default_transformations: [[{
        crop: "scale",
        height: 400
      }, {
        effect: "pixelate:20"
      }], [{
        crop: "scale",
        height: 400
      }, {
        quality: "auto"
      }, {
        fetch_format: "auto"
      }]]
    });
  }

  var imageHTML = [];

  if (isSourceAvailable) {
    for (var i = 0; i < images.length && i < 3; i++) {
      imageHTML.push( /*#__PURE__*/React.createElement("div", {
        style: {
          float: 'left',
          width: 33.33 + '%'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: images[i].src
      })));
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    showTooltip: true,
    icon: "update-alt",
    onClick: openML,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors")
  }))), isSourceAvailable && /*#__PURE__*/React.createElement("div", {
    style: {
      content: '',
      clear: 'both',
      display: 'table'
    }
  }, imageHTML), !isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
      icon: "format-image"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Generic Image Block", "ventureoutdoors"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add a Cloudinary image to your site.", "ventureoutdoors")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: openML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/gallerybanner/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/gallerybanner/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/gallerybanner/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Filter Activity.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/gallerybanner", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gallery Banner", 'ventureoutdoors'),
  icon: 'align-pull-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    images: {
      type: "array"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var images = _ref.attributes.images;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'sngl-activity-banner'
    });
    var imageHTML = [];

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var ws = -1;
      var hs = -1;
      var t = image.derived[0].raw_transformation;

      if (t.search('c_scale') > -1) {
        var w = -1;
        var h = -1;
        var wiStart = t.search('w_');
        var hiStart = t.search('h_');

        if (wiStart > -1 && (wiEnd = t.search(',') > -1)) {
          w = parseInt(t.substring(wiStart, wiEnd));
        }

        if (hiStart > -1) {
          var hiEnd = t.substring(hiStart).search(',') > -1 ? t.substring(hiStart).search(',') : t.substring(hiStart).search('/') > -1 ? t.substring(hiStart).search('/') : -1;

          if (hiEnd > -1) {
            h = parseInt(t.substring(hiStart + 2, hiStart + hiEnd));
          } else {
            h = parseInt(t.substring(hiStart + 2));
          }
        }

        ws = w > -1 ? w / image.width : -1;
        hs = h > -1 ? h / image.height : -1;
      }

      var width = image.width;
      var height = image.height;

      if (ws > -1 && hs > -1) {
        width = Math.ceil(image.width * ws);
        height = Math.ceil(image.height * hs);
      } else if (ws > -1 && hs === -1) {
        width = Math.ceil(image.width * ws);
        height = Math.ceil(image.height * ws);
      } else if (ws === -1 && hs > -1) {
        width = Math.ceil(image.width * hs);
        height = Math.ceil(image.height * hs);
      }

      imageHTML.push( /*#__PURE__*/React.createElement("img", {
        width: width,
        height: height,
        className: "full-width-slider-image lazyload",
        src: image.derived[0].secure_url,
        "data-src": image.derived[1].secure_url,
        alt: image.context ? image.context.alt : ''
      }));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "full-width-slider"
    }, imageHTML)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericaccrdn/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericaccrdn/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'accrdn'
  });
  var id = attributes.id,
      icon = attributes.icon,
      title = attributes.title,
      content = attributes.content;
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("span", {
    className: icon ? "icon-".concat(icon) : ''
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: className,
    value: title,
    allowedFormats: [],
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'ventureoutdoors')
  }), /*#__PURE__*/React.createElement("div", {
    className: "accrdn-cont"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, _extends({}, blockProps, {
    tagName: "p",
    className: className,
    value: content,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'ventureoutdoors')
  }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The element ID', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the elements id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      setAttributes({
        id: id
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name of the icon', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the icon', 'ventureoutdoors'),
    value: icon,
    onChange: function onChange(icon) {
      setAttributes({
        icon: icon
      });
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericaccrdn/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericaccrdn/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/genericaccrdn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/genericaccrdn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generic Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: {
      type: "string"
    },
    icon: {
      type: "string"
    },
    title: {
      type: "string"
    },
    content: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        id = _ref$attributes.id,
        icon = _ref$attributes.icon,
        title = _ref$attributes.title,
        content = _ref$attributes.content,
        className = _ref$attributes.className;
    var iconClass = icon ? "icon-".concat(icon, " ") : '';
    var blockProps1 = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: id && id.slice(-1) === '1' ? 'accrdn accrdn-first' : 'accrdn'
    });
    var blockProps2 = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save().className + (className !== null ? '-stxt accrdn-cont' : 'accrdn-cont');
    return /*#__PURE__*/React.createElement("div", blockProps1, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      className: "".concat(iconClass, "hidden-xs-down flush"),
      tagName: "h4",
      value: title
    }), /*#__PURE__*/React.createElement("h5", {
      className: "accrdn-title js-toggle-slide ".concat(iconClass, "hidden-sm-up flush"),
      "data-target": "#".concat(id)
    }, title), /*#__PURE__*/React.createElement("div", {
      className: blockProps2,
      id: id
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "p",
      value: content
    })));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericbttn/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericbttn/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/colors */ "./src/js/gutenberg/api/colors.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress Dependencies.
 */







var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var text = attributes.text,
      linkObject = attributes.linkObject,
      colorName = attributes.colorName;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLinkPickerVisible = _useState2[0],
      setIsLinkPickerVisible = _useState2[1];

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: "btn-".concat(colorName ? colorName : 'primary')
  });

  function handleTextChange(x) {
    setAttributes({
      text: x
    });
  }

  function buttonHandler() {
    setIsLinkPickerVisible(function (prev) {
      return !prev;
    });
  }

  function handleLinkChange(newLink) {
    setAttributes({
      linkObject: newLink
    });
  }

  var currentColorValue = _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (color) {
    return color.name == colorName;
  })[0].color;

  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    var _getColorObjectByColo = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByColorValue)(_api_colors__WEBPACK_IMPORTED_MODULE_0__["default"], colorCode),
        name = _getColorObjectByColo.name;

    setAttributes({
      colorName: name
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Color",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    disableCustomColors: true,
    clearable: false,
    colors: _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: currentColorValue,
    onChange: handleColorChange
  })))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, _extends({
    allowedFormats: [],
    tagName: "a"
  }, blockProps, {
    value: text,
    onChange: handleTextChange
  })), isLinkPickerVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "middle center"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
    settings: [],
    value: linkObject,
    onChange: handleLinkChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: function onClick() {
      return setIsLinkPickerVisible(false);
    },
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericbttn/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericbttn/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/genericbttn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/genericbttn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generic Button", 'ventureoutdoors'),
  icon: 'button',
  category: "ventureoutdoors",
  attributes: {
    text: {
      type: "string"
    },
    linkObject: {
      type: "object",
      default: {
        url: ""
      }
    },
    colorName: {
      type: "string",
      default: "primary"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        text = _ref$attributes.text,
        linkObject = _ref$attributes.linkObject,
        colorName = _ref$attributes.colorName;
    var rel = "";
    var target = "";

    if (linkObject.url && window.location.hostname !== new URL(linkObject.url).hostname) {
      rel = "noopener noreferrer";
      target = "_blank";
    }

    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(_objectSpread(_objectSpread({
      className: "btn-".concat(colorName ? colorName : 'primary')
    }, target && {
      target: target
    }), rel && {
      rel: rel
    }));
    return /*#__PURE__*/React.createElement("a", _extends({
      href: linkObject.url
    }, blockProps), text);
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericimg/edit.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericimg/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var src = attributes.src,
      sizes = attributes.sizes,
      isHeight100 = attributes.isHeight100,
      isWidth100 = attributes.isWidth100,
      imageSizes = attributes.imageSizes;
  var isSourceAvailable = typeof src !== "undefined";
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets[0];
    setAttributes({
      src: data.secure_url,
      context: data.context ? data.context.custom : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
      version: data.version
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_3__["default"].openMediaLibrary(clientId);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    showTooltip: true,
    icon: "update-alt",
    onClick: openML,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors")
  }))), isSourceAvailable && /*#__PURE__*/React.createElement("img", _extends({}, blockProps, {
    src: src
  })), !isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
      icon: "format-image"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Generic Image Block", "ventureoutdoors"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add a Cloudinary image to your site.", "ventureoutdoors")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: openML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors"))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Settings', 'ventureoutdoors'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom `sizes` definition', 'ventureoutdoors'),
    value: sizes,
    onChange: function onChange(sizes) {
      return setAttributes({
        sizes: sizes
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('height=100%', 'ventureoutdoors'),
    checked: isHeight100,
    onChange: function onChange() {
      setAttributes({
        isHeight100: !isHeight100
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('width=100%', 'ventureoutdoors'),
    checked: isWidth100,
    onChange: function onChange() {
      setAttributes({
        isWidth100: !isWidth100
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive Image Sizes', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The image download sizes, separeate sizes by comma', 'ventureoutdoors'),
    value: imageSizes,
    onChange: function onChange(imageSizes) {
      setAttributes({
        imageSizes: imageSizes
      });
    }
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericimg/index.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericimg/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/genericimg/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/genericimg", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generic Image", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  attributes: {
    src: {
      type: "string"
    },
    public_id: {
      type: "string"
    },
    context: {
      type: "object"
    },
    height: {
      type: "number"
    },
    width: {
      type: "number"
    },
    version: {
      type: "number"
    },
    sizes: {
      type: "string"
    },
    isHeight100: {
      type: "boolean",
      default: false
    },
    isWidth100: {
      type: "boolean",
      default: false
    },
    imageSizes: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        public_id = _ref$attributes.public_id,
        context = _ref$attributes.context,
        height = _ref$attributes.height,
        width = _ref$attributes.width,
        isHeight100 = _ref$attributes.isHeight100,
        isWidth100 = _ref$attributes.isWidth100;
    var alt = context ? context.alt : '';
    var src = "https://res.cloudinary.com/ventureoutdoors/image/upload/".concat(public_id);
    width = isWidth100 ? "100%" : width;
    height = isHeight100 ? "100%" : height;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'lazyload'
    });
    return /*#__PURE__*/React.createElement("img", _extends({}, blockProps, {
      width: width,
      height: height,
      src: src,
      alt: alt
    }));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericsection/edit.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericsection/edit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/genericsection/index.js":
/*!*********************************************************!*\
  !*** ./src/js/gutenberg/blocks/genericsection/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/genericsection/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/genericsection", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generic Section", 'ventureoutdoors'),
  icon: 'table-row-before',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/highlights/edit.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/highlights/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * WordPress Dependencies.
 */


var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var data = attributes.data;
  var postId = wp.data.select('core/editor').getCurrentPostId();
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();

  var getHeighlights = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _siteConfig$ajax_nonc, _siteConfig;

      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(siteConfig.restUrl, "highlights?_wpnonce=").concat((_siteConfig$ajax_nonc = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '', "&id=").concat(postId), {
                method: 'GET',
                redirect: 'follow',
                referrer: 'no-referrer'
              }).then(function (returned) {
                if (returned.ok) return returned;
                throw new Error('Network response was not ok.');
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              setAttributes({
                data: data.highlights
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getHeighlights() {
      return _ref2.apply(this, arguments);
    };
  }();

  getHeighlights();
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    class: "h5 flush-bottom"
  }, "Tour Highlights"), /*#__PURE__*/React.createElement("div", {
    class: "row"
  }, /*#__PURE__*/React.createElement("ul", {
    class: "check-list flush-top flush-sides col-xs-6"
  }, data ? data.map(function (highlight) {
    return /*#__PURE__*/React.createElement("li", null, highlight);
  }) : ""))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/highlights/index.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/highlights/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/highlights/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/highlights", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Highlights", 'ventureoutdoors'),
  icon: 'editor-ul',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    data: {
      type: "array",
      selector: "ul"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var data = _ref.attributes.data;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      class: "h5 flush-bottom"
    }, "Tour Highlights"), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("ul", {
      class: "check-list flush-top flush-sides col-xs-6"
    }, data.map(function (highlight) {
      return /*#__PURE__*/React.createElement("li", null, highlight);
    })))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/hoverbox/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/hoverbox/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress Dependencies.
 */







var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var title = attributes.title,
      text = attributes.text,
      permalink = attributes.permalink,
      src = attributes.src;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLinkPickerVisible = _useState2[0],
      setIsLinkPickerVisible = _useState2[1];

  var isSourceAvailable = typeof src !== "undefined";
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  function handleTextChange(x) {
    setAttributes({
      text: x
    });
  }

  function buttonHandler() {
    setIsLinkPickerVisible(function (prev) {
      return !prev;
    });
  }

  function handleLinkChange(newLink) {
    setAttributes({
      permalink: newLink
    });
  }

  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets[0];
    setAttributes({
      src: data.secure_url,
      alt: data.context && data.context.custom ? data.context.custom.alt : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_4__["default"].openMediaLibrary(clientId);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    showTooltip: true,
    icon: "update-alt",
    onClick: openML,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors")
  }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, _extends({}, blockProps, {
    tagName: "p",
    className: className,
    value: title,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'ventureoutdoors')
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    allowedFormats: [],
    tagName: "a",
    value: text,
    onChange: handleTextChange,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'ventureoutdoors')
  }), isLinkPickerVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle center"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    settings: [],
    value: permalink,
    onChange: handleLinkChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: function onClick() {
      return setIsLinkPickerVisible(false);
    },
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link")), isSourceAvailable && /*#__PURE__*/React.createElement("img", _extends({}, blockProps, {
    src: src
  })), !isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
      icon: "format-image"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Generic Image Block", "ventureoutdoors"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add a Cloudinary image to your site.", "ventureoutdoors")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: openML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/hoverbox/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/hoverbox/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/hoverbox/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * HoverBox Grid.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */



/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/hoverbox", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hoverbox", 'ventureoutdoors'),
  icon: 'code-standards',
  category: "ventureoutdoors",
  attributes: {
    title: {
      type: "string",
      selector: "p"
    },
    src: {
      type: "string"
    },
    public_id: {
      type: "string"
    },
    alt: {
      type: "string"
    },
    height: {
      type: "number"
    },
    width: {
      type: "number"
    },
    text: {
      type: "string"
    },
    permalink: {
      type: "object",
      default: {
        url: ""
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        title = _ref$attributes.title,
        public_id = _ref$attributes.public_id,
        alt = _ref$attributes.alt,
        height = _ref$attributes.height,
        width = _ref$attributes.width,
        text = _ref$attributes.text,
        permalink = _ref$attributes.permalink;
    var src = "https://res.cloudinary.com/ventureoutdoors/image/upload/".concat(public_id);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "page-activity-item imgbttn imgbttn-wbg"
    }, /*#__PURE__*/React.createElement("img", {
      className: "imgbttn-img img-responsive objectfit lazyload",
      width: width,
      height: height,
      src: src,
      alt: alt
    }), /*#__PURE__*/React.createElement("div", {
      className: "imgbttn-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "imgbttn-btn"
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn-tertiary",
      href: permalink.url
    }, text)), /*#__PURE__*/React.createElement("div", {
      className: "imgbttn-txt activity-slide-cont"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h4 imgbttn-title page-activity-title flush-top"
    }, title)))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/imgbttn/edit.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/imgbttn/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress Dependencies.
 */







var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var src = attributes.src,
      linkObject = attributes.linkObject;
  var isSourceAvailable = typeof src !== "undefined";

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLinkPickerVisible = _useState2[0],
      setIsLinkPickerVisible = _useState2[1];

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets[0];
    setAttributes({
      src: data.secure_url,
      context: data.context ? data.context.custom : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
      version: data.version
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_4__["default"].openMediaLibrary(clientId);
  }

  function buttonHandler() {
    setIsLinkPickerVisible(function (prev) {
      return !prev;
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    showTooltip: true,
    icon: "update-alt",
    onClick: openML,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors")
  }))), isSourceAvailable && /*#__PURE__*/React.createElement("img", _extends({}, blockProps, {
    src: src
  })), !isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
      icon: "format-image"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Block", "ventureoutdoors"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add a Cloudinary image to your site.", "ventureoutdoors")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: openML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors"))), isLinkPickerVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "middle center"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    settings: [],
    value: linkObject,
    onChange: function onChange(linkObject) {
      return setAttributes({
        linkObject: linkObject
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: function onClick() {
      return setIsLinkPickerVisible(false);
    },
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/imgbttn/index.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/imgbttn/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/imgbttn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/imgbttn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Button", 'ventureoutdoors'),
  icon: 'button',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    src: {
      type: "string",
      selector: "img",
      attribute: "src",
      source: "attribute"
    },
    public_id: {
      type: "string"
    },
    context: {
      type: "object"
    },
    height: {
      type: "number"
    },
    width: {
      type: "number"
    },
    version: {
      type: "number"
    },
    linkObject: {
      type: "object",
      default: {
        url: ""
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        public_id = _ref$attributes.public_id,
        context = _ref$attributes.context,
        height = _ref$attributes.height,
        width = _ref$attributes.width,
        linkObject = _ref$attributes.linkObject;
    var alt = context ? context.alt : '';
    var rel = "";
    var target = "";

    if (window.location.hostname !== new URL(linkObject.url).hostname) {
      rel = "noopener noreferrer";
      target = "_blank";
    }

    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(_objectSpread(_objectSpread({}, target && {
      target: target
    }), rel && {
      rel: rel
    }));
    return /*#__PURE__*/React.createElement("a", _extends({
      href: linkObject.url
    }, blockProps), /*#__PURE__*/React.createElement("img", {
      width: width,
      height: height,
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/".concat(public_id),
      alt: alt
    }));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/introcontent/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/introcontent/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: "intro-content"
  });
  return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/introcontent/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/introcontent/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/introcontent/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/introcontent", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Intro Conent", 'ventureoutdoors'),
  icon: 'align-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "intro-content"
    });
    return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/listitem/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/listitem/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */


var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  return /*#__PURE__*/React.createElement("li", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/listitem/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/listitem/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/listitem/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/listitem", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("List Item", 'ventureoutdoors'),
  icon: 'editor-ul',
  category: "ventureoutdoors",
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return /*#__PURE__*/React.createElement("li", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/location/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/location/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var directions = attributes.directions;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", null, "Driving Directions"), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: className,
    value: directions,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(directions) {
      return setAttributes({
        directions: directions
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Driving Directions...', 'ventureoutdoors')
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/location/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/location/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/location/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Location.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/location", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location", 'ventureoutdoors'),
  icon: 'location',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    directions: {
      type: "string",
      source: 'html',
      selector: 'p'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var directions = _ref.attributes.directions;
    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "p",
      value: directions
    });
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/masthead/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/masthead/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "masthead text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "masthead-cont valign-middle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "masthead-incont valign-middle-item"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null))), /*#__PURE__*/React.createElement("div", {
    className: "cloudinary-hero-img w-embed"
  }, /*#__PURE__*/React.createElement("img", {
    className: "masthead-img img-responsive",
    src: "https://res.cloudinary.com/ventureoutdoors/image/upload/hero-images/reviews"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/masthead/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/masthead/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/masthead/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/masthead", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Masthead", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "masthead-cont valign-middle"
    }, /*#__PURE__*/React.createElement("div", {
      className: "masthead-incont valign-middle-item"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/mobileaccrdn/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/mobileaccrdn/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'mobile-accrdn'
  });
  var id = attributes.id,
      icon = attributes.icon,
      title = attributes.title,
      content = attributes.content;
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("span", {
    className: icon ? "icon-".concat(icon) : ''
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h5",
    className: className,
    value: title,
    allowedFormats: [],
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'ventureoutdoors')
  }), /*#__PURE__*/React.createElement("div", {
    className: "mobile-accrdn-cont"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, _extends({}, blockProps, {
    tagName: "p",
    className: className,
    value: content,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'ventureoutdoors')
  }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The element ID', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the elements id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      setAttributes({
        id: id
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name of the icon', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the icon', 'ventureoutdoors'),
    value: icon,
    onChange: function onChange(icon) {
      setAttributes({
        icon: icon
      });
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/mobileaccrdn/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/mobileaccrdn/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/mobileaccrdn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/mobileaccrdn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mobile Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: {
      type: "string"
    },
    icon: {
      type: "string"
    },
    title: {
      type: "string"
    },
    content: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        id = _ref$attributes.id,
        icon = _ref$attributes.icon,
        title = _ref$attributes.title,
        content = _ref$attributes.content,
        className = _ref$attributes.className;
    var iconClass = icon ? " icon-".concat(icon) : '';
    var blockProps1 = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: id && id.slice(-1) === '1' ? 'mobile-accrdn mobile-accrdn-first' : 'mobile-accrdn'
    });
    var blockProps2 = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save().className + (className !== null ? '-stxt mobile-accrdn-cont' : 'mobile-accrdn-cont');
    return /*#__PURE__*/React.createElement("div", blockProps1, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-sm-2 hidden-xs-down"
    }, /*#__PURE__*/React.createElement("div", {
      className: iconClass
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      className: "h5 hidden-xs-down flush-top",
      tagName: "h3",
      value: title
    }), /*#__PURE__*/React.createElement("h3", {
      class: "h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush".concat(iconClass),
      "data-target": "#".concat(id)
    }, title), /*#__PURE__*/React.createElement("div", {
      className: blockProps2,
      id: id
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "p",
      value: content
    })))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/promobar/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/promobar/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */


var Edit = function Edit() {
  return /*#__PURE__*/React.createElement("div", {
    className: "promotions-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "promotions-bar-cont"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/promobar/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/promobar/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/promobar/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Promobar.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/promobar", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Promobar", 'ventureoutdoors'),
  icon: 'admin-links',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return /*#__PURE__*/React.createElement("div", {
      className: "promotions-bar-cont"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/rates/edit.js":
/*!***********************************************!*\
  !*** ./src/js/gutenberg/blocks/rates/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_getcf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/getcf */ "./src/js/gutenberg/api/getcf.js");
/**
 * WordPress Dependencies.
 */






var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var rates = attributes.rates,
      isPrivate = attributes.isPrivate,
      agent = attributes.agent;
  var postId = wp.data.select('core/editor').getCurrentPostId();

  function getCustomField(rates) {
    rates = rates.split('\r\n');
    setAttributes({
      rates: rates
    });
  }

  (0,_api_getcf__WEBPACK_IMPORTED_MODULE_4__.getCF)('rates', postId, getCustomField);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is Private?', 'ventureoutdoors'),
    selected: isPrivate,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: "No",
      value: 'no'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        isPrivate: optionVal
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Who is performing the activity?', 'ventureoutdoors'),
    selected: agent,
    options: [{
      label: 'Guide',
      value: 'guide'
    }, {
      label: "Instructor",
      value: 'instructor'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        agent: optionVal
      });
    }
  }))), /*#__PURE__*/React.createElement("ul", null, rates.map(function (rate) {
    return /*#__PURE__*/React.createElement("li", null, rate);
  })), !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(isPrivate) && isPrivate === "yes" && /*#__PURE__*/React.createElement("p", null, "Private tours are only open to your party."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "*Prices do not include gratuity for your ", agent, ".")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/rates/index.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/rates/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/rates/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/rates", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Rates", 'ventureoutdoors'),
  icon: 'money-alt',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    rates: {
      type: "array",
      default: []
    },
    isPrivate: {
      type: 'string',
      default: 'no'
    },
    agent: {
      type: 'string',
      default: 'guide'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        rates = _ref$attributes.rates,
        isPrivate = _ref$attributes.isPrivate,
        agent = _ref$attributes.agent;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, rates.map(function (rate) {
      return /*#__PURE__*/React.createElement("li", null, rate);
    })), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(isPrivate) && isPrivate === "yes" && /*#__PURE__*/React.createElement("p", null, "Private tours are only open to your party."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "*Prices do not include gratuity for your ", agent, ".")));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/rating/edit.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/rating/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "hightlighted-section"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("ul", {
    className: "list-style-none"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h4", {
    className: "flush-top montserrattlt"
  }, "Highly Rated On")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/listitem']
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/rating/index.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/rating/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/rating/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/rating", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Rating", 'ventureoutdoors'),
  icon: 'star-filled',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "hightlighted-section"
    });
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("ul", {
      className: "list-style-none"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h4", {
      className: "flush-top montserrattlt"
    }, "Highly Rated On")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/readmore/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/readmore/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'js-read-more'
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/readmore/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/readmore/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/readmore/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/readmore", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Read More", 'ventureoutdoors'),
  icon: 'ellipsis',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'js-read-more'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      className: "readmoreToggle"
    }, "Read more ..."));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/row/edit.js":
/*!*********************************************!*\
  !*** ./src/js/gutenberg/blocks/row/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'row'
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/row/index.js":
/*!**********************************************!*\
  !*** ./src/js/gutenberg/blocks/row/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/row/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Row.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/row", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row", 'ventureoutdoors'),
  icon: 'shortcode',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'row'
    });
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/secimgbg/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/secimgbg/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var src = attributes.src,
      bkgClassName = attributes.bkgClassName,
      option = attributes.option;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'sec-with-imgbg'
  });
  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets[0];
    setAttributes({
      src: data.secure_url,
      context: data.context ? data.context.custom : '',
      derived: data.derived ? data.derived : '',
      height: data.height,
      width: data.width,
      version: data.version
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_3__["default"].openMediaLibrary(clientId, {
      default_transformations: [[{
        quality: "auto"
      }, {
        fetch_format: "auto"
      }], [{
        crop: "scale",
        width: 500
      }, {
        quality: "auto"
      }, {
        fetch_format: "auto"
      }], [{
        crop: "scale",
        width: 800
      }, {
        quality: "auto"
      }, {
        fetch_format: "auto"
      }], [{
        crop: "scale",
        width: 1080
      }, {
        quality: "auto"
      }, {
        fetch_format: "auto"
      }], [{
        crop: "scale",
        width: 1600
      }, {
        quality: "auto"
      }, {
        fetch_format: "auto"
      }]]
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Settings', 'ventureoutdoors'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: openML
  }, "Choose Image")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Additional CSS class(es)', 'ventureoutdoors'),
    value: bkgClassName,
    onChange: function onChange(bkgClassName) {
      return setAttributes({
        bkgClassName: bkgClassName
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select slant background', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Controls a slant background', 'ventureoutdoors'),
    selected: option,
    options: [{
      label: 'Normal',
      value: 'normalbg'
    }, {
      label: "Slant",
      value: 'slantbg'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        optionVal: optionVal
      });
    }
  }))), /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null), /*#__PURE__*/React.createElement("img", {
    src: src,
    className: "sec-imgbg"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/secimgbg/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/secimgbg/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/secimgbg/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */






/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/secimgbg", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section with Image Background", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    src: {
      type: "string",
      default: secimgbg.fallbackimage
    },
    context: {
      type: "object"
    },
    derived: {
      type: "array"
    },
    height: {
      type: "number"
    },
    width: {
      type: "number"
    },
    version: {
      type: "number"
    },
    bkgClassName: {
      type: "string"
    },
    option: {
      type: "string",
      default: "normalbg"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        src = _ref$attributes.src,
        context = _ref$attributes.context,
        derived = _ref$attributes.derived,
        height = _ref$attributes.height,
        width = _ref$attributes.width,
        bkgClassName = _ref$attributes.bkgClassName,
        option = _ref$attributes.option;
    var alt = context ? context.alt : '';
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'sec-with-imgbg'
    });
    var slantbgClass = !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(option) && option === " slantbg" ? 'slantbg' : '';
    var className = bkgClassName ? "sec-imgbg ".concat(bkgClassName).concat(slantbgClass, " lazyload") : "sec-imgbg".concat(slantbgClass, " lazyload");
    var sizes = [500, 800, 1080, 1600];
    var thisSrc = src;
    var thisSrcset = '';

    if (derived) {
      thisSrc = derived[0].secure_url;
      derived.slice(1).forEach(function (d, index) {
        thisSrcset += "".concat(d.secure_url, " ").concat(sizes[index], "w");

        if (index !== derived.length - 2) {
          thisSrcset += ',';
        }
      });
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null), !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(option) && option === "slantbg" && /*#__PURE__*/React.createElement("div", {
      className: "sec-slantbg"
    }), /*#__PURE__*/React.createElement("img", {
      width: width,
      height: height,
      className: className,
      "data-src": thisSrc,
      "data-srcset": thisSrcset,
      alt: alt
    })));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/secsidebar/edit.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/secsidebar/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/snglactivityaccrdn']
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/secsidebar/index.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/secsidebar/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/secsidebar/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/secsidebar", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section with Floating Sidebar", 'ventureoutdoors'),
  icon: 'image-rotate-right',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/slide/edit.js":
/*!***********************************************!*\
  !*** ./src/js/gutenberg/blocks/slide/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/image */ "./src/js/gutenberg/api/image.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress Dependencies.
 */





var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var src = attributes.src;
  var isSourceAvailable = typeof src !== "undefined";
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  window.addEventListener('MediaSelected', function (e) {
    if (e.detail.id !== clientId) {
      return;
    }

    var data = e.detail.assets[0];
    setAttributes({
      src: data.secure_url,
      context: data.context ? data.context.custom : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
      version: data.version
    });
  });

  function openML() {
    _api_image__WEBPACK_IMPORTED_MODULE_3__["default"].openMediaLibrary(clientId);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    showTooltip: true,
    icon: "update-alt",
    onClick: openML,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors")
  }))), isSourceAvailable && /*#__PURE__*/React.createElement("img", _extends({}, blockProps, {
    src: src
  })), !isSourceAvailable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
      icon: "format-image"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Block", "ventureoutdoors"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add a Cloudinary background image to your slide.", "ventureoutdoors")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: openML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose Image", "ventureoutdoors"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/slide/index.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/slide/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/slide/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/slide", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slide", 'ventureoutdoors'),
  icon: 'id',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    src: {
      type: "string"
    },
    public_id: {
      type: "string"
    },
    context: {
      type: "object"
    },
    height: {
      type: "number"
    },
    width: {
      type: "number"
    },
    version: {
      type: "number"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        public_id = _ref$attributes.public_id,
        context = _ref$attributes.context,
        height = _ref$attributes.height,
        width = _ref$attributes.width;
    var alt = context ? context.alt : '';
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'lazyload'
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", _extends({
      width: width,
      height: height
    }, blockProps, {
      sizes: "100vw",
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_800/".concat(public_id),
      srcset: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_500/".concat(public_id, " 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_800/").concat(public_id, " 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_1080/").concat(public_id, " 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_1600/").concat(public_id, " 1600w"),
      "data-src": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_800/".concat(public_id),
      "data-srcset": "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_500/".concat(public_id, " 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_800/").concat(public_id, " 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_1080/").concat(public_id, " 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_1600/").concat(public_id, " 1600w"),
      alt: alt
    })));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/slideshow/edit.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/slideshow/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'banner-img hidden-xs-down'
  });
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/slide']
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/slideshow/index.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/slideshow/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/slideshow/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/slideshow", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slideshow", 'ventureoutdoors'),
  icon: 'slides',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'banner-img hidden-xs-down'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "mobile-banner-img hidden-sm-up"
    }, /*#__PURE__*/React.createElement("img", {
      src: "",
      id: "randomImage",
      alt: "#"
    })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), /*#__PURE__*/React.createElement("div", {
      class: "banner-pagination"
    }, /*#__PURE__*/React.createElement("div", {
      class: "slider-control"
    }, /*#__PURE__*/React.createElement("div", {
      class: "custom-nav"
    }), /*#__PURE__*/React.createElement("div", {
      class: "slide-counter w-clearfix"
    }, /*#__PURE__*/React.createElement("div", {
      class: "slide-count float-left"
    }, "01"), /*#__PURE__*/React.createElement("div", {
      class: "float-left"
    }, "/"), /*#__PURE__*/React.createElement("div", {
      class: "num-slides float-left"
    }, "05")), /*#__PURE__*/React.createElement("div", {
      class: "nav-arrows"
    }))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/snglactivityaccrdn/edit.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/blocks/snglactivityaccrdn/edit.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */




var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id,
      title = attributes.title,
      altTitle = attributes.altTitle,
      titlePrefix = attributes.titlePrefix,
      titleSuffix = attributes.titleSuffix,
      addPrefix = attributes.addPrefix,
      addSuffix = attributes.addSuffix;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    value: title,
    allowedFormats: [],
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'ventureoutdoors')
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The element ID', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets the elements id', 'ventureoutdoors'),
    value: id,
    onChange: function onChange(id) {
      setAttributes({
        id: id
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alternate title', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alternate title for desktop', 'ventureoutdoors'),
    value: altTitle,
    onChange: function onChange(altTitle) {
      setAttributes({
        altTitle: altTitle
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Prefix?', 'ventureoutdoors'),
    selected: addPrefix,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: "No",
      value: 'no'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        addPrefix: optionVal
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Suffix?', 'ventureoutdoors'),
    selected: addSuffix,
    options: [{
      label: 'Yes',
      value: 'yes'
    }, {
      label: "No",
      value: 'no'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        addSuffix: optionVal
      });
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/snglactivityaccrdn/index.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/blocks/snglactivityaccrdn/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/snglactivityaccrdn/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Single Activity Accordion.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/snglactivityaccrdn", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Single Activity Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: {
      type: "string"
    },
    title: {
      type: "string"
    },
    altTitle: {
      type: "string"
    },
    addPrefix: {
      type: "boolean",
      default: "no"
    },
    addSuffix: {
      type: "boolean",
      default: "no"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/socialbutton/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/socialbutton/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/colors */ "./src/js/gutenberg/api/colors.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress Dependencies.
 */







var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var icon = attributes.icon,
      title = attributes.title,
      linkObject = attributes.linkObject,
      colorName = attributes.colorName;

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLinkPickerVisible = _useState2[0],
      setIsLinkPickerVisible = _useState2[1];

  function handleTextChange(x) {
    setAttributes({
      title: x
    });
  }

  function buttonHandler() {
    setIsLinkPickerVisible(function (prev) {
      return !prev;
    });
  }

  function handleLinkChange(newLink) {
    setAttributes({
      linkObject: newLink
    });
  }

  var currentColorValue = _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (color) {
    return color.name == colorName;
  })[0].color;

  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    var _getColorObjectByColo = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByColorValue)(_api_colors__WEBPACK_IMPORTED_MODULE_0__["default"], colorCode),
        name = _getColorObjectByColo.name;

    setAttributes({
      colorName: name
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Color",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    disableCustomColors: true,
    clearable: false,
    colors: _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: currentColorValue,
    onChange: handleColorChange
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name of the icon', 'ventureoutdoors'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sets the icon', 'ventureoutdoors'),
    value: icon,
    onChange: function onChange(icon) {
      setAttributes({
        icon: icon
      });
    }
  })))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    allowedFormats: [],
    tagName: "a",
    className: "social-media-link color-".concat(colorName),
    value: title,
    onChange: handleTextChange
  }), isLinkPickerVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "middle center"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
    settings: [],
    value: linkObject,
    onChange: handleLinkChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: function onClick() {
      return setIsLinkPickerVisible(false);
    },
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/socialbutton/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/socialbutton/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/socialbutton/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */



/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/socialbutton", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social Button", 'ventureoutdoors'),
  icon: 'plus',
  category: "ventureoutdoors",
  attributes: {
    icon: {
      type: "string"
    },
    title: {
      type: "string"
    },
    linkObject: {
      type: "object",
      default: {
        url: ""
      }
    },
    colorName: {
      type: "string",
      default: "primary"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        icon = _ref$attributes.icon,
        title = _ref$attributes.title,
        linkObject = _ref$attributes.linkObject,
        colorName = _ref$attributes.colorName;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      "aria-label": title,
      href: linkObject.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "social-media-link color-".concat(colorName)
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "social-icon icon-".concat(icon)
    })));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/socialmedia/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/socialmedia/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/colors */ "./src/js/gutenberg/api/colors.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress Dependencies.
 */






var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var colorName = attributes.colorName;
  var currentColorValue = _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (color) {
    return color.name == colorName;
  })[0].color;

  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    var _getColorObjectByColo = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByColorValue)(_api_colors__WEBPACK_IMPORTED_MODULE_0__["default"], colorCode),
        name = _getColorObjectByColo.name;

    setAttributes({
      colorName: name
    });
  }

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: "h5 montserrattlt text-center color-".concat(colorName)
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Color",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    disableCustomColors: true,
    clearable: false,
    colors: _api_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: currentColorValue,
    onChange: handleColorChange
  })))), /*#__PURE__*/React.createElement("span", {
    className: "social-media"
  }, /*#__PURE__*/React.createElement("h3", blockProps, "Connect With"), /*#__PURE__*/React.createElement("div", {
    className: "social-media-cont"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ['vo-blocks/socialbutton']
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/socialmedia/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/socialmedia/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/socialmedia/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */




/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/socialmedia", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social Media", 'ventureoutdoors'),
  icon: 'share',
  category: "ventureoutdoors",
  attributes: {
    colorName: {
      type: "string",
      default: "senary"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var colorName = _ref.attributes.colorName;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "h5 montserrattlt text-center color-".concat(colorName)
    });
    return /*#__PURE__*/React.createElement("span", {
      className: "social-media"
    }, /*#__PURE__*/React.createElement("h3", blockProps, "Connect With"), /*#__PURE__*/React.createElement("div", {
      className: "social-media-cont"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/testimonial/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/testimonial/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress Dependencies.
 */



var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var content = attributes.content,
      author = attributes.author;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'flush-top'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "testimonial-content"
  }, /*#__PURE__*/React.createElement("div", {
    class: "testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    class: "testimonial-inner icon-qoute-open icon-qoute-close"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, _extends({}, blockProps, {
    tagName: "p",
    className: className,
    value: content,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial...', 'ventureoutdoors')
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: className,
    value: author,
    allowedFormats: [],
    onChange: function onChange(author) {
      return setAttributes({
        author: author
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author', 'ventureoutdoors')
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/testimonial/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/testimonial/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/testimonial/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/testimonial", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonial", 'ventureoutdoors'),
  icon: 'media-text',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    author: {
      type: 'string',
      source: 'html',
      selector: 'span'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(_ref) {
    var _ref$attributes = _ref.attributes,
        content = _ref$attributes.content,
        author = _ref$attributes.author;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'flush-top'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, _extends({}, blockProps, {
      tagName: "p",
      value: content
    })), /*#__PURE__*/React.createElement("div", {
      className: "testimonial-author"
    }, /*#__PURE__*/React.createElement("div", null, "\u2014 ", /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "span",
      value: author
    }), /*#__PURE__*/React.createElement("img", {
      src: "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/affiliates/tripadvisor_secondary.svg",
      loading: "lazy",
      height: "16",
      alt: "Hear from past guests about their experience with Venture Outdoors on TripAdvisor."
    }))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/wysiwygcntnt/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/wysiwygcntnt/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: "wysiwyg-cntnt"
  });
  return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-8 center-block wysiwyg-cntnt-text content"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/wysiwygcntnt/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/wysiwygcntnt/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/wysiwygcntnt/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/wysiwygcntnt", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wysiwyg Content", 'ventureoutdoors'),
  icon: 'embed-generic',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "wysiwyg-cntnt"
    });
    return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-lg-8 center-block wysiwyg-cntnt-text content"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/wysiwyggray/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/wysiwyggray/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress Dependencies.
 */



var Edit = function Edit() {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: "wysiwyg-gray"
  });
  return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("div", {
    class: "row"
  }, /*#__PURE__*/React.createElement("div", {
    class: "col-lg-8 center-block"
  }, /*#__PURE__*/React.createElement("div", {
    class: "wysiwyg-gray-item"
  }, /*#__PURE__*/React.createElement("div", {
    class: "wysiwyg-gray-cnt bgc-tertiary content"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/wysiwyggray/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/wysiwyggray/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/wysiwyggray/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Div.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/wysiwyggray", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wysiwyg Gray Content", 'ventureoutdoors'),
  icon: 'embed-photo',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "wysiwyg-gray"
    });
    return /*#__PURE__*/React.createElement("section", blockProps, /*#__PURE__*/React.createElement("div", {
      class: "container"
    }, /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-lg-8 center-block"
    }, /*#__PURE__*/React.createElement("div", {
      class: "wysiwyg-gray-item"
    }, /*#__PURE__*/React.createElement("div", {
      class: "wysiwyg-gray-cnt bgc-tertiary content"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)))))));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/activitydetails/index.js":
/*!****************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/activitydetails/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Activity Details.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */


/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("vo-blocks/activitydetails", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Activity Details", 'ventureoutdoors'),
  icon: 'admin-multisite',
  category: "ventureoutdoors",
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Activity Details Placeholder", "ventureoutdoors"));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/contactform/index.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/contactform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Find Activity Form.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */


/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("vo-blocks/contactform", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contact Form", 'ventureoutdoors'),
  icon: 'forms',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contact Form Placeholder", "ventureoutdoors"));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/filteractivity/index.js":
/*!***************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/filteractivity/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Filter Activity.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */


/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("vo-blocks/filteractivity", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Filter Activity", 'ventureoutdoors'),
  icon: 'align-pull-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Filter Activity Placeholder", "ventureoutdoors"));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/findactivities/index.js":
/*!***************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/findactivities/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Find Activity Form.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */


/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("vo-blocks/findactivity", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Find Activity Form", 'ventureoutdoors'),
  icon: 'search',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    }
  },
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Find Activity Form Placeholder", "ventureoutdoors"));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/footer/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/placeholders/footer/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Footer.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */

wp.blocks.registerBlockType("vo-blocks/footer", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Venture Outdoors Footer", 'ventureoutdoors'),
  icon: 'editor-indent',
  category: "ventureoutdoors",
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Placeholder", 'ventureoutdoors'));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/header/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/placeholders/header/index.js ***!
  \*******************************************************/
/***/ (() => {

wp.blocks.registerBlockType("vo-blocks/header", {
  title: "Venture Outdoors Header",
  icon: "editor-outdent",
  category: "ventureoutdoors",
  edit: function edit() {
    return wp.element.createElement("div", {
      className: "vo-placeholder-block"
    }, "Header Placeholder");
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/gutenberg/placeholders/postcontentpart/edit.js":
/*!***************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/postcontentpart/edit.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress Dependencies.
 */




var Edit = function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var blockInclude = attributes.blockInclude,
      blockId = attributes.blockId;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings', 'ventureoutdoors'),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Name', 'ventureoutdoors'),
    value: blockInclude,
    onChange: function onChange(blockInclude) {
      return setAttributes({
        blockInclude: blockInclude
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block ID', 'ventureoutdoors'),
    value: blockId,
    onChange: function onChange(blockId) {
      return setAttributes({
        blockId: blockId
      });
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "vo-placeholder-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post Content Part Placeholder", "ventureoutdoors")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/placeholders/postcontentpart/index.js":
/*!****************************************************************!*\
  !*** ./src/js/gutenberg/placeholders/postcontentpart/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/placeholders/postcontentpart/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Filter Activity.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */

/**
 * WordPress Dependencies.
 */



/**
 * Register block type.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("vo-blocks/postcontentpart", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Post Content Part", 'ventureoutdoors'),
  icon: 'editor-alignleft',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    blockInclude: {
      type: "string"
    },
    blockId: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/sass/blocks.scss":
/*!******************************!*\
  !*** ./src/sass/blocks.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/blocks.scss */ "./src/sass/blocks.scss");
/* harmony import */ var _gutenberg_blocks_accrdn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/accrdn */ "./src/js/gutenberg/blocks/accrdn/index.js");
/* harmony import */ var _gutenberg_blocks_activitycard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/blocks/activitycard */ "./src/js/gutenberg/blocks/activitycard/index.js");
/* harmony import */ var _gutenberg_blocks_activitygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/blocks/activitygrid */ "./src/js/gutenberg/blocks/activitygrid/index.js");
/* harmony import */ var _gutenberg_blocks_activityinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutenberg/blocks/activityinfo */ "./src/js/gutenberg/blocks/activityinfo/index.js");
/* harmony import */ var _gutenberg_blocks_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenberg/blocks/banner */ "./src/js/gutenberg/blocks/banner/index.js");
/* harmony import */ var _gutenberg_blocks_banneroverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gutenberg/blocks/banneroverlay */ "./src/js/gutenberg/blocks/banneroverlay/index.js");
/* harmony import */ var _gutenberg_blocks_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gutenberg/blocks/booking */ "./src/js/gutenberg/blocks/booking/index.js");
/* harmony import */ var _gutenberg_blocks_customfield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gutenberg/blocks/customfield */ "./src/js/gutenberg/blocks/customfield/index.js");
/* harmony import */ var _gutenberg_blocks_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gutenberg/blocks/container */ "./src/js/gutenberg/blocks/container/index.js");
/* harmony import */ var _gutenberg_blocks_div__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gutenberg/blocks/div */ "./src/js/gutenberg/blocks/div/index.js");
/* harmony import */ var _gutenberg_blocks_gallerybanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gutenberg/blocks/gallerybanner */ "./src/js/gutenberg/blocks/gallerybanner/index.js");
/* harmony import */ var _gutenberg_blocks_genericaccrdn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gutenberg/blocks/genericaccrdn */ "./src/js/gutenberg/blocks/genericaccrdn/index.js");
/* harmony import */ var _gutenberg_blocks_genericbttn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gutenberg/blocks/genericbttn */ "./src/js/gutenberg/blocks/genericbttn/index.js");
/* harmony import */ var _gutenberg_blocks_genericimg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gutenberg/blocks/genericimg */ "./src/js/gutenberg/blocks/genericimg/index.js");
/* harmony import */ var _gutenberg_blocks_genericsection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gutenberg/blocks/genericsection */ "./src/js/gutenberg/blocks/genericsection/index.js");
/* harmony import */ var _gutenberg_blocks_highlights__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gutenberg/blocks/highlights */ "./src/js/gutenberg/blocks/highlights/index.js");
/* harmony import */ var _gutenberg_blocks_hoverbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gutenberg/blocks/hoverbox */ "./src/js/gutenberg/blocks/hoverbox/index.js");
/* harmony import */ var _gutenberg_blocks_imgbttn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gutenberg/blocks/imgbttn */ "./src/js/gutenberg/blocks/imgbttn/index.js");
/* harmony import */ var _gutenberg_blocks_introcontent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gutenberg/blocks/introcontent */ "./src/js/gutenberg/blocks/introcontent/index.js");
/* harmony import */ var _gutenberg_blocks_listitem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gutenberg/blocks/listitem */ "./src/js/gutenberg/blocks/listitem/index.js");
/* harmony import */ var _gutenberg_blocks_location__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gutenberg/blocks/location */ "./src/js/gutenberg/blocks/location/index.js");
/* harmony import */ var _gutenberg_blocks_masthead__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gutenberg/blocks/masthead */ "./src/js/gutenberg/blocks/masthead/index.js");
/* harmony import */ var _gutenberg_blocks_mobileaccrdn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gutenberg/blocks/mobileaccrdn */ "./src/js/gutenberg/blocks/mobileaccrdn/index.js");
/* harmony import */ var _gutenberg_blocks_promobar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gutenberg/blocks/promobar */ "./src/js/gutenberg/blocks/promobar/index.js");
/* harmony import */ var _gutenberg_blocks_rates__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gutenberg/blocks/rates */ "./src/js/gutenberg/blocks/rates/index.js");
/* harmony import */ var _gutenberg_blocks_rating__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gutenberg/blocks/rating */ "./src/js/gutenberg/blocks/rating/index.js");
/* harmony import */ var _gutenberg_blocks_readmore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./gutenberg/blocks/readmore */ "./src/js/gutenberg/blocks/readmore/index.js");
/* harmony import */ var _gutenberg_blocks_row__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./gutenberg/blocks/row */ "./src/js/gutenberg/blocks/row/index.js");
/* harmony import */ var _gutenberg_blocks_secimgbg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./gutenberg/blocks/secimgbg */ "./src/js/gutenberg/blocks/secimgbg/index.js");
/* harmony import */ var _gutenberg_blocks_secsidebar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gutenberg/blocks/secsidebar */ "./src/js/gutenberg/blocks/secsidebar/index.js");
/* harmony import */ var _gutenberg_blocks_slide__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./gutenberg/blocks/slide */ "./src/js/gutenberg/blocks/slide/index.js");
/* harmony import */ var _gutenberg_blocks_slideshow__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gutenberg/blocks/slideshow */ "./src/js/gutenberg/blocks/slideshow/index.js");
/* harmony import */ var _gutenberg_blocks_snglactivityaccrdn__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./gutenberg/blocks/snglactivityaccrdn */ "./src/js/gutenberg/blocks/snglactivityaccrdn/index.js");
/* harmony import */ var _gutenberg_blocks_socialbutton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./gutenberg/blocks/socialbutton */ "./src/js/gutenberg/blocks/socialbutton/index.js");
/* harmony import */ var _gutenberg_blocks_socialmedia__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./gutenberg/blocks/socialmedia */ "./src/js/gutenberg/blocks/socialmedia/index.js");
/* harmony import */ var _gutenberg_blocks_testimonial__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./gutenberg/blocks/testimonial */ "./src/js/gutenberg/blocks/testimonial/index.js");
/* harmony import */ var _gutenberg_blocks_wysiwygcntnt__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./gutenberg/blocks/wysiwygcntnt */ "./src/js/gutenberg/blocks/wysiwygcntnt/index.js");
/* harmony import */ var _gutenberg_blocks_wysiwyggray__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./gutenberg/blocks/wysiwyggray */ "./src/js/gutenberg/blocks/wysiwyggray/index.js");
/* harmony import */ var _gutenberg_placeholders_activitydetails__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./gutenberg/placeholders/activitydetails */ "./src/js/gutenberg/placeholders/activitydetails/index.js");
/* harmony import */ var _gutenberg_placeholders_contactform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./gutenberg/placeholders/contactform */ "./src/js/gutenberg/placeholders/contactform/index.js");
/* harmony import */ var _gutenberg_placeholders_filteractivity__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./gutenberg/placeholders/filteractivity */ "./src/js/gutenberg/placeholders/filteractivity/index.js");
/* harmony import */ var _gutenberg_placeholders_findactivities__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./gutenberg/placeholders/findactivities */ "./src/js/gutenberg/placeholders/findactivities/index.js");
/* harmony import */ var _gutenberg_placeholders_footer__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./gutenberg/placeholders/footer */ "./src/js/gutenberg/placeholders/footer/index.js");
/* harmony import */ var _gutenberg_placeholders_header__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./gutenberg/placeholders/header */ "./src/js/gutenberg/placeholders/header/index.js");
/* harmony import */ var _gutenberg_placeholders_header__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_gutenberg_placeholders_header__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _gutenberg_placeholders_postcontentpart__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./gutenberg/placeholders/postcontentpart */ "./src/js/gutenberg/placeholders/postcontentpart/index.js");
 // Blocks


 // activity list

 // related activities



































 // Placeholder Blocks

 // activity details box


 // activity filter

 // activity page filter




})();

/******/ })()
;
//# sourceMappingURL=blocks.js.map