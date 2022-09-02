/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/publisher.js":
/*!*************************************!*\
  !*** ./src/js/helpers/publisher.js ***!
  \*************************************/
/***/ ((module) => {

var events = {};
var subscriberId = -1;
module.exports = {
  publish: function publish(e, data) {
    if (!events[e]) {
      return false;
    }

    var subsribers = events[e];
    subsribers.forEach(function (subsriber) {
      subsriber.callback(e, data);
    });
    return true;
  },
  subscribe: function subscribe(e, callback) {
    if (!events[e]) {
      events[e] = [];
    }

    subscriberId += 1;
    var token = subscriberId.toString();
    events[e].push({
      token: token,
      callback: callback
    });
    return token;
  },
  unsubscribe: function unsubscribe(token) {
    var found = Object.keys(events).some(function (event) {
      return events[event].some(function (subsriber, index) {
        var isEqual = subsriber.token === token.toString();

        if (isEqual) {
          events[event].splice(index, 1);
        }

        return isEqual;
      });
    });
    return found ? token : null;
  }
};

/***/ }),

/***/ "./src/js/posts/banner-filter.js":
/*!***************************************!*\
  !*** ./src/js/posts/banner-filter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./src/js/posts/filter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var publisher = __webpack_require__(/*! ../helpers/publisher */ "./src/js/helpers/publisher.js");
/**
 * Class Filter.
 */


var BannerFilter = /*#__PURE__*/function (_Filter) {
  _inherits(BannerFilter, _Filter);

  var _super = _createSuper(BannerFilter);

  /**
   * Contructor.
   */
  function BannerFilter() {
    var _this;

    _classCallCheck(this, BannerFilter);

    _this = _super.call(this);
    _this.numberResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-number-results');
    return _this;
  } // 2. events


  _createClass(BannerFilter, [{
    key: "events",
    value: function events() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet').on('change', this.optionChanged.bind(this));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-frontpage-filter').on('click', this.redirect.bind(this));
    }
  }, {
    key: "init",
    value: function init() {
      publisher.subscribe('activitiesUpdated', this.updateResults.bind(this));
    }
  }, {
    key: "updateResults",
    value: function updateResults(e, data) {
      this.numberResults.text(data.count.toString());
    }
  }, {
    key: "capitalize",
    value: function capitalize(s) {
      var words = s.split('_');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(words, function (i, word) {
        words[i] = word[0].toUpperCase() + word.substring(1);
      });
      return words.join(' ');
    }
  }, {
    key: "updateBannerFilter",
    value: function updateBannerFilter(response) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet').each(function (index, item) {
        var category = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('name');
        category = category.substring(category.indexOf('_') + 1);
        var selectedIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).prop('selectedIndex');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).empty();
        var filter = category.substring(category.indexOf('_') + 1);

        if (this.filter === undefined || this.filter !== category || this.filter === category && jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).val() == "") {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).append("<option value=\"\">".concat(this.capitalize(category), "</option>"));
          jquery__WEBPACK_IMPORTED_MODULE_0___default().each(response[filter], function (key, value) {
            if (value['count'] !== 0 || category === this.filter) {
              var title = value['title'];
              var slug = value['slug'];

              if (category === 'difficulty') {
                title = title.substr(0, title.length - 1) + ' ' + title.substr(-1);
              }

              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).append("<option value=\"".concat(slug, "\">").concat(title, " (").concat(value['count'], ")</option>"));
            }
          }.bind(this));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).selectric('refresh');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(category)).prop('selectedIndex', selectedIndex).selectric('refresh');
        }
      }.bind(this));
    } // Event Handler

  }, {
    key: "optionChanged",
    value: function optionChanged(e) {
      this.filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data('name');
      this.filter = this.filter.substring(this.filter.indexOf('_') + 1);
      var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_type select option:selected').val();
      var length = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_length select').val();
      var difficulty = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_difficulty_level select').val();
      this.resetFilterFields();

      if (type) {
        this.filterFields['type'].push(type);
      }

      if (length) {
        this.filterFields['length'].push(length);
      }

      if (difficulty) {
        this.filterFields['difficulty'].push(difficulty);
      }

      this.filterActivities(this.updateBannerFilter.bind(this));
    }
  }, {
    key: "redirect",
    value: function redirect() {
      var queryString = [];
      var url = '/activity-types';
      var actType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_type select').val();
      var actLength = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_length select').val();
      var actDifficulty = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_difficulty_level select').val();

      if (actType === '' || actType == null) {
        url = '/activities';
      } else {
        url += '/' + actType;
      }

      if (actLength !== '' && actLength != null) {
        queryString.push('fvo_length=' + encodeURIComponent(actLength));
      }

      if (actDifficulty !== '' && actDifficulty != null) {
        queryString.push('fvo_difficulty=' + encodeURIComponent(actDifficulty));
      }

      if (queryString.length > 0) {
        url += '?' + queryString.join("&");
      }

      window.location = url;
    }
  }]);

  return BannerFilter;
}(_filter__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerFilter);

/***/ }),

/***/ "./src/js/posts/filter.js":
/*!********************************!*\
  !*** ./src/js/posts/filter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var publisher = __webpack_require__(/*! ../helpers/publisher */ "./src/js/helpers/publisher.js");
/**
 * Class Filter.
 */


var Filter = /*#__PURE__*/function () {
  /**
   * Contructor.
   */
  function Filter() {
    var _siteConfig$restUrl, _siteConfig, _siteConfig$ajax_nonc, _siteConfig2;

    _classCallCheck(this, Filter);

    this.restUrl = (_siteConfig$restUrl = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.restUrl) !== null && _siteConfig$restUrl !== void 0 ? _siteConfig$restUrl : '';
    this.ajaxNonce = (_siteConfig$ajax_nonc = (_siteConfig2 = siteConfig) === null || _siteConfig2 === void 0 ? void 0 : _siteConfig2.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '';
    this.isOptionsProcessing = false;
    this.isActivitiesProcessing = false;
    this.resetFilterFields();
    this.events();
    this.init();
  }

  _createClass(Filter, [{
    key: "resetFilterFields",
    value: function resetFilterFields() {
      this.filterFields = {
        type: [],
        length: [],
        difficulty: []
      };
    }
  }, {
    key: "events",
    value: function events() {
      throw new Error('Implementation required.');
    }
  }, {
    key: "init",
    value: function init() {
      throw new Error('Implementation required');
    }
  }, {
    key: "addSpinner",
    value: function addSpinner() {}
  }, {
    key: "removeSpinner",
    value: function removeSpinner() {}
  }, {
    key: "getData",
    value: function getData() {
      var data = {};

      for (var key in this.filterFields) {
        if (this.filterFields[key].length !== 0) {
          data[key] = this.filterFields[key];
        }
      }

      return data;
    }
  }, {
    key: "filterActivities",
    value: function filterActivities(callback) {
      var _this = this;

      if (this.isOptionsProcessing || this.isActivitiesProcessing) {
        return null;
      }

      var data = this.getData();
      data['_wpnonce'] = this.ajaxNonce;
      this.isOptionsProcessing = true;
      this.isActivitiesProcessing = true;
      this.addSpinner();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        type: 'get',
        url: this.restUrl + 'filter',
        data: data,
        success: function success(response) {
          callback(response);
          _this.isOptionsProcessing = false;

          _this.removeSpinner();
        },
        error: function error(response) {
          console.log(response);
          _this.isOptionsProcessing = false;

          _this.removeSpinner();
        }
      });
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        type: 'get',
        url: this.restUrl + 'activities',
        data: data,
        success: function success(response) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.load-more-content-wrap').html(response.innerHTML);
          publisher.publish('activitiesUpdated', {
            count: response.postCount
          });
          _this.isActivitiesProcessing = false;

          _this.removeSpinner();
        },
        error: function error(response) {
          console.log(response);
          _this.isActivitiesProcessing = false;

          _this.removeSpinner();
        }
      });
    }
  }]);

  return Filter;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/sass/page.scss":
/*!****************************!*\
  !*** ./src/sass/page.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

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
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/page.scss */ "./src/sass/page.scss");
/* harmony import */ var _posts_banner_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/banner-filter */ "./src/js/posts/banner-filter.js");
// Styles


new _posts_banner_filter__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=page.js.map