/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/responsive-tab.js":
/*!*********************************************!*\
  !*** ./src/js/components/responsive-tab.js ***!
  \*********************************************/
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



var ResponsiveTabs = /*#__PURE__*/function () {
  function ResponsiveTabs() {
    _classCallCheck(this, ResponsiveTabs);

    this.events();
  }

  _createClass(ResponsiveTabs, [{
    key: "events",
    value: function events() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-accordion', this.switchAccordion.bind(this));
    }
  }, {
    key: "switchAccordion",
    value: function switchAccordion(e) {
      e.preventDefault();
      var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget),
          $tab = jquery__WEBPACK_IMPORTED_MODULE_0___default()($this.attr('data-target'));
      /*just open/toggle*/

      if ($tab.is(':hidden')) {// $tab.parent().children('.accordion-active').slideToggle("slow", function(){
        //     $(this).removeClass('accordion-active');
        //     $(this).prev().removeClass('active');
        //     $tab.parent( '.tc-sngl-trip' ).removeClass( 'active' );
        //     $tab.parent( '.shortcode-accordion' ).removeClass( 'active' );
        // });
      }

      $tab.slideToggle("slow", function () {
        if ($tab.is(':hidden')) {
          $tab.prev().removeClass('active');
          $tab.removeClass('accordion-active');
          $tab.parent('.tc-sngl-trip').removeClass('active');
          $tab.parent('.shortcode-accordion').removeClass('active');
        } else {
          $tab.prev().addClass('active');
          $tab.addClass('accordion-active');
          $tab.parent('.tc-sngl-trip').addClass('active');
          $tab.parent('.shortcode-accordion').addClass('active');
        }
      });
    }
  }]);

  return ResponsiveTabs;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveTabs);

/***/ }),

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

/***/ "./src/js/posts/loadmore.js":
/*!**********************************!*\
  !*** ./src/js/posts/loadmore.js ***!
  \**********************************/
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
 * Class Loadmore.
 */


var LoadMore = /*#__PURE__*/function () {
  /**
   * Contructor.
   */
  function LoadMore(filter) {
    var _siteConfig$restUrl, _siteConfig, _siteConfig$ajax_nonc, _siteConfig2;

    _classCallCheck(this, LoadMore);

    this.restUrl = (_siteConfig$restUrl = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.restUrl) !== null && _siteConfig$restUrl !== void 0 ? _siteConfig$restUrl : '';
    this.ajaxNonce = (_siteConfig$ajax_nonc = (_siteConfig2 = siteConfig) === null || _siteConfig2 === void 0 ? void 0 : _siteConfig2.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '';
    this.numberResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-number-results');
    this.loadMoreBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#load-more');
    this.loadingTextEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-text');
    this.isRequestProcessing = false;
    this.filter = filter;
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0 // 1.0 means set isIntersecting to true when element comes in 100% view.

    };
    this.init();
    publisher.subscribe('activitiesUpdated', this.init.bind(this));
  }

  _createClass(LoadMore, [{
    key: "init",
    value: function init(e, data) {
      var _this = this;

      if (data) {
        this.numberResults.text(data.count.toString());
      }

      this.loadMoreBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#load-more');

      if (!this.loadMoreBtn.length) {
        return;
      }

      this.totalPagesCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#post-pagination').data('max-pages');

      if (!this.totalPagesCount) {
        this.totalPagesCount = 0;
        this.removeLoadMoreIfOnLastPage(0);
      }
      /**
       * Add the IntersectionObserver api, and listen to the load more intersection status.
       * so that intersectionObserverCallback gets called if the element intersection status changes.
       *
       * @type {IntersectionObserver}
       */


      var observer = new IntersectionObserver(function (entries) {
        return _this.intersectionObserverCallback(entries);
      }, this.options);
      observer.observe(this.loadMoreBtn[0]);
    }
    /**
     * Gets called on initial render with status 'isIntersecting' as false and then
     * everytime element intersection status changes.
     *
     * @param {array} entries No of elements under observation.
     *
     */

  }, {
    key: "intersectionObserverCallback",
    value: function intersectionObserverCallback(entries) {
      var _this2 = this;

      // array of observing elements
      // The logic is apply for each entry ( in this case it's just one loadmore button )
      entries.forEach(function (entry) {
        // If load more button in view.
        if (entry !== null && entry !== void 0 && entry.isIntersecting) {
          _this2.handleLoadMorePosts();
        }
      });
    }
    /**
     * Load more posts.
     *
     * 1.Make an ajax request, by incrementing the page no. by one on each request.
     * 2.Append new/more posts to the existing content.
     * 3.If the response is 0 ( which means no more posts available ), remove the load-more button from DOM.
     * Once the load-more button gets removed, the IntersectionObserverAPI callback will not be triggered, which means
     * there will be no further ajax request since there won't be any more posts available.
     *
     * @return null
     */

  }, {
    key: "handleLoadMorePosts",
    value: function handleLoadMorePosts() {
      var _this3 = this;

      // Get page no from data attribute of load-more button.
      var page = this.loadMoreBtn.data('page');

      if (!page || this.isRequestProcessing) {
        return null;
      }

      var nextPage = parseInt(page) + 1; // Increment page count by one.

      this.isRequestProcessing = true;
      this.loadMoreBtn.addClass('is-loading');
      var data = this.filter.getData();
      data['page'] = page;
      data['_wpnonce'] = this.ajaxNonce;
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        type: 'get',
        url: this.restUrl + 'loadmore',
        // beforeSend: function ( xhr ) {
        // 	xhr.setRequestHeader( 'X-WP-Nonce', this.ajaxNonce )
        // },
        data: data,
        success: function success(response) {
          _this3.loadMoreBtn.data('page', nextPage);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#load-more-content').append(response);

          _this3.removeLoadMoreIfOnLastPage(nextPage);

          _this3.loadMoreBtn.removeClass('is-loading');

          _this3.isRequestProcessing = false;
        },
        error: function error(response) {
          console.log(response);

          _this3.loadMoreBtn.removeClass('is-loading');

          _this3.isRequestProcessing = false;
        }
      });
    }
    /**
     * Remove Load more Button If on last page.
     *
     * @param {int} nextPage New Page.
     */

  }, {
    key: "removeLoadMoreIfOnLastPage",
    value: function removeLoadMoreIfOnLastPage(nextPage) {
      if (nextPage + 1 > this.totalPagesCount) {
        this.loadMoreBtn.remove();
      }
    }
  }]);

  return LoadMore;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMore);

/***/ }),

/***/ "./src/js/posts/page-filter.js":
/*!*************************************!*\
  !*** ./src/js/posts/page-filter.js ***!
  \*************************************/
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

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * Class Filter.
 */

var PageFilter = /*#__PURE__*/function (_Filter) {
  _inherits(PageFilter, _Filter);

  var _super = _createSuper(PageFilter);

  /**
   * Contructor.
   */
  function PageFilter() {
    var _this;

    _classCallCheck(this, PageFilter);

    _this = _super.call(this);
    _this.filterControl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-filter-wrap');
    _this.sidebarFilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-filter .facetwp-facet');
    return _this;
  }

  _createClass(PageFilter, [{
    key: "events",
    value: function events() {
      // mobile filter button
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.btn-activity-filter', this.toggleFilterControl.bind(this)); // checkbox button clicked

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change', '.facetwp-checkbox', this.chkChanged.bind(this));
    }
  }, {
    key: "init",
    value: function init() {
      var pathname = window.location.pathname.split('/');
      this.slug = pathname[pathname.length - 2];
    }
  }, {
    key: "addSpinner",
    value: function addSpinner() {
      this.sidebarFilter.addClass('is-loading');
    }
  }, {
    key: "removeSpinner",
    value: function removeSpinner() {
      if (!this.isOptionsProcessing && !this.isActivitiesProcessing) {
        this.sidebarFilter.removeClass('is-loading');
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      var data = _get(_getPrototypeOf(PageFilter.prototype), "getData", this).call(this);

      if (this.slug.length) {
        data['slug'] = this.slug;
      }

      return data;
    }
  }, {
    key: "getParameterByName",
    value: function getParameterByName(name) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  }, {
    key: "updateFilterControl",
    value: function updateFilterControl(response) {
      var _this2 = this;

      delete response.count;

      var _loop = function _loop(key) {
        response[key].forEach(function (item) {
          var chk = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".facetwp-checkbox[data-value='" + item.slug + "']");
          var chkIn = chk.children('input').eq(0);

          if (_this2.filterKey != key) {
            chk.children('.facetwp-counter').html("(" + item.count + ")");
          }

          if ('difficulty' === key) {
            if (!item.count) {
              chk.css('display', 'none');
            } else {
              chk.removeAttr('style');
            }
          }

          if (!item.count) {
            if (_this2.filterKey != key) {
              chk.addClass('disabled');
              chkIn.addClass('disabled');
              chkIn.prop('disabled', true);
            }

            return;
          }

          chk.removeClass('disabled');
          chkIn.removeClass('disabled');
          chkIn.prop('disabled', false);
        });
      };

      for (var key in response) {
        _loop(key);
      }
    } // Event Handlers

  }, {
    key: "chkChanged",
    value: function chkChanged(e) {
      var currentTarget = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      var filter = currentTarget.parent().data('name').substr(9);
      var chkIn = currentTarget.children('input');

      if (chkIn.attr('checked') === 'checked') {
        chkIn.removeAttr('checked');
        var index = this.filterFields[filter].indexOf(currentTarget.data('value'));

        if (index > -1) {
          this.filterFields[filter].splice(index, 1);
        }
      } else {
        chkIn.attr('checked', 'checked');
        this.filterFields[filter].push(currentTarget.data('value'));
      }

      this.filterActivities(this.updateFilterControl.bind(this)).then(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
          scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.activity-search').offset().top
        }, 500);
      });
    }
  }, {
    key: "toggleFilterControl",
    value: function toggleFilterControl(e) {
      if (this.filterControl.is(':hidden')) {
        this.filterControl.attr('style', 'display:none');
        this.filterControl.removeClass('normal-hidden-sm-down');
        this.filterControl.slideDown('slow');
      } else {
        this.filterControl.slideUp('fast', function () {
          console.log('animation done');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebar').addClass('normal-hidden-sm-down');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebar').removeAttr('style');
        });
      }
    }
  }]);

  return PageFilter;
}(_filter__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFilter);

/***/ }),

/***/ "./src/sass/archive-activity.scss":
/*!****************************************!*\
  !*** ./src/sass/archive-activity.scss ***!
  \****************************************/
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
/*!************************************!*\
  !*** ./src/js/archive-activity.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_archive_activity_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/archive-activity.scss */ "./src/sass/archive-activity.scss");
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/loadmore */ "./src/js/posts/loadmore.js");
/* harmony import */ var _posts_page_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/page-filter */ "./src/js/posts/page-filter.js");
/* harmony import */ var _components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/responsive-tab */ "./src/js/components/responsive-tab.js");
// Styles




new _posts_loadmore__WEBPACK_IMPORTED_MODULE_1__["default"](new _posts_page_filter__WEBPACK_IMPORTED_MODULE_2__["default"]());
new _components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=archive-activity.js.map