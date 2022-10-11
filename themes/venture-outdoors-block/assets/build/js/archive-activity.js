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

/***/ "./src/js/helpers/cloudinary-helper.js":
/*!*********************************************!*\
  !*** ./src/js/helpers/cloudinary-helper.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloudinary_url_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cloudinary/url-gen */ "./node_modules/@cloudinary/url-gen/assets/CloudinaryImage.js");
/* harmony import */ var _cloudinary_url_gen_actions_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/url-gen/actions/resize */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize.js");
/* harmony import */ var _cloudinary_url_gen_actions_delivery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloudinary/url-gen/actions/delivery */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery.js");
/* harmony import */ var _cloudinary_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cloudinary/html */ "./node_modules/@cloudinary/html/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






function isNativeLazyload() {
  return 'loading' in HTMLImageElement.prototype;
}

var CloudinaryHelper = /*#__PURE__*/function () {
  function CloudinaryHelper(cloudConfig, urlConfig) {
    _classCallCheck(this, CloudinaryHelper);

    if (!CloudinaryHelper.instance) {
      // this.cloudName = cloudConfig.cloudName
      // this.apiKey = cloudConfig.apiKey
      // this.apiSecret = cloudConfig.apiSecret
      // this.authToken = cloudConfig.authToken
      this.cloudConfig = {
        cloudName: 'ventureoutdoors'
      };
      this.urlConfig = urlConfig;
      CloudinaryHelper.instance = this;
    }

    return CloudinaryHelper.instance;
  }

  _createClass(CloudinaryHelper, [{
    key: "createImage",
    value: function createImage() {
      var imgTags = document.querySelectorAll('[data-public-id]');

      for (var i = 0; i < imgTags.length; i++) {
        var imgTag = imgTags[i];

        if (imgTag.hasAttribute('src')) {
          continue;
        }

        this.cloudinaryImage(imgTag);
      }
    }
  }, {
    key: "cloudinaryImage",
    value: function cloudinaryImage(imgTag) {
      var image = new _cloudinary_url_gen__WEBPACK_IMPORTED_MODULE_0__.CloudinaryImage(imgTag.getAttribute('data-public-id'), this.cloudConfig);
      image.delivery(_cloudinary_url_gen_actions_delivery__WEBPACK_IMPORTED_MODULE_1__.Delivery.dpr('2.0')).format('auto').quality('auto');
      var plugins = [];

      if (!isNativeLazyload() && imgTag.getAttribute('data-lazyload') === 'true') {
        plugins.push((0,_cloudinary_html__WEBPACK_IMPORTED_MODULE_2__.lazyload)());
      }

      if (imgTag.getAttribute('data-responsive') === 'true') {
        plugins.push((0,_cloudinary_html__WEBPACK_IMPORTED_MODULE_2__.responsive)());
      } else {
        image.resize((0,_cloudinary_url_gen_actions_resize__WEBPACK_IMPORTED_MODULE_3__.scale)().width('auto'));
      }

      if (
      /*!isNativeLazyload() &&*/
      imgTag.getAttribute('data-placeholder') === 'true') {
        plugins.push((0,_cloudinary_html__WEBPACK_IMPORTED_MODULE_2__.placeholder)({
          mode: 'pixelate'
        }));
      }

      new _cloudinary_html__WEBPACK_IMPORTED_MODULE_2__.HtmlImageLayer(imgTag, image, plugins, {
        sdkSemver: "Base Semver",
        sdkCode: '1',
        techVersion: '1.0.0'
      });
    }
  }]);

  return CloudinaryHelper;
}();

var instance = new CloudinaryHelper();
Object.freeze(instance);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

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
/* harmony import */ var _helpers_cloudinary_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/cloudinary-helper */ "./src/js/helpers/cloudinary-helper.js");
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

          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#load-more-content').append(JSON.parse(response));
          _helpers_cloudinary_helper__WEBPACK_IMPORTED_MODULE_1__["default"].createImage();

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

/***/ }),

/***/ "./node_modules/@cloudinary/html/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@cloudinary/html/index.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlImageLayer": () => (/* binding */ HtmlImageLayer),
/* harmony export */   "HtmlVideoLayer": () => (/* binding */ HtmlVideoLayer),
/* harmony export */   "accessibility": () => (/* binding */ accessibility),
/* harmony export */   "cancelCurrentlyRunningPlugins": () => (/* binding */ cancelCurrentlyRunningPlugins),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "lazyload": () => (/* binding */ lazyload),
/* harmony export */   "placeholder": () => (/* binding */ placeholder),
/* harmony export */   "responsive": () => (/* binding */ responsive),
/* harmony export */   "serverSideSrc": () => (/* binding */ serverSideSrc)
/* harmony export */ });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lodash_clonedeep = {exports: {}};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
}(lodash_clonedeep, lodash_clonedeep.exports));

var cloneDeep = lodash_clonedeep.exports;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * Iterate through plugins and break in cases where the response is canceled. The
 * response is canceled if component is updated or unmounted
 * @param element {HTMLImageElement|HTMLVideoElement} Html Image or Video element
 * @param pluginCloudinaryAsset {CloudinaryImage|CloudinaryVideo} The Cloudinary asset generated by base
 * @param plugins {plugins} array of plugins passed in by the user
 * @param pluginState {htmlPluginState} Holds cleanup callbacks and event subscriptions
 */
function render(element, pluginCloudinaryAsset, plugins, pluginState) {
    return __awaiter(this, void 0, void 0, function () {
        var i, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (plugins === undefined)
                        return [2 /*return*/];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < plugins.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, plugins[i](element, pluginCloudinaryAsset, pluginState)];
                case 2:
                    response = _a.sent();
                    if (response === 'canceled') {
                        return [3 /*break*/, 4];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}

var HtmlImageLayer = /** @class */ (function () {
    function HtmlImageLayer(element, userCloudinaryImage, plugins, analyticsOptions) {
        var _this = this;
        this.imgElement = element;
        this.htmlPluginState = { cleanupCallbacks: [], pluginEventSubscription: [] };
        var pluginCloudinaryImage = cloneDeep(userCloudinaryImage);
        render(element, pluginCloudinaryImage, plugins, this.htmlPluginState)
            .then(function () {
            _this.htmlPluginState.pluginEventSubscription.forEach(function (fn) { fn(); });
            _this.imgElement.setAttribute('src', pluginCloudinaryImage.toURL({
                trackedAnalytics: {
                    sdkCode: analyticsOptions.sdkCode,
                    sdkSemver: analyticsOptions.sdkSemver,
                    techVersion: analyticsOptions.techVersion,
                }
            }));
        });
    }
    /**
     * Called when component is updated and re-triggers render
     * @param userCloudinaryImage
     * @param plugins
     * @param analyticsOptions
     */
    HtmlImageLayer.prototype.update = function (userCloudinaryImage, plugins, analyticsOptions) {
        var _this = this;
        var pluginCloudinaryImage = cloneDeep(userCloudinaryImage);
        render(this.imgElement, pluginCloudinaryImage, plugins, this.htmlPluginState)
            .then(function () {
            _this.imgElement.setAttribute('src', pluginCloudinaryImage.toURL({
                trackedAnalytics: {
                    sdkCode: analyticsOptions.sdkCode,
                    sdkSemver: analyticsOptions.sdkSemver,
                    techVersion: analyticsOptions.techVersion,
                }
            }));
        });
    };
    return HtmlImageLayer;
}());

/**
 * @summary SDK
 * @memberOf SDK
 */
class QualifierValue {
    /**
     *
     * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
     */
    constructor(qualifierValue) {
        this.values = [];
        this.delimiter = ':'; // {value}{delimiter}{value}...
        if (this.hasValue(qualifierValue)) {
            this.addValue(qualifierValue);
        }
    }
    /**
     * @description Joins the provided values with the provided delimiter
     */
    toString() {
        return this.values.join(this.delimiter);
    }
    /**
     * @description Checks if the provided argument has a value
     * @param {any} v
     * @private
     * @return {boolean}
     */
    hasValue(v) {
        return typeof v !== 'undefined' && v !== null && v !== '';
    }
    /**
     * @desc Adds a value for the this qualifier instance
     * @param {any} value
     * @return {this}
     */
    addValue(value) {
        // Append value or array of values
        if (Array.isArray(value)) {
            this.values = this.values.concat(value);
        }
        else {
            this.values.push(value);
        }
        // Remove falsy values
        this.values = this.values.filter((v) => this.hasValue(v));
        return this;
    }
    /**
     * @description Sets the delimiter for this instance
     * @param delimiter
     */
    setDelimiter(delimiter) {
        this.delimiter = delimiter;
        return this;
    }
}

class UnsupportedError extends Error {
    constructor(message = 'Unsupported') {
        super(message);
    }
}
/**
 * Creates a new UnsupportedError
 * @param message
 */
function createUnsupportedError(message) {
    return new UnsupportedError(message);
}

/**
 * Returns the action's model
 */
function qualifierToJson() {
    return this._qualifierModel || { error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`) };
}

class QualifierModel {
    constructor() {
        this._qualifierModel = {};
    }
    toJson() {
        return qualifierToJson.apply(this);
    }
}

/**
 * @summary SDK
 * @memberOf SDK
 */
class Qualifier extends QualifierModel {
    constructor(key, qualifierValue) {
        super();
        this.delimiter = '_'; // {key}{delimiter}{qualifierValue}
        this.key = key;
        if (qualifierValue instanceof QualifierValue) {
            this.qualifierValue = qualifierValue;
        }
        else {
            this.qualifierValue = new QualifierValue();
            this.qualifierValue.addValue(qualifierValue);
        }
    }
    toString() {
        const { key, delimiter, qualifierValue } = this;
        return `${key}${delimiter}${qualifierValue.toString()}`;
    }
    addValue(value) {
        this.qualifierValue.addValue(value);
        return this;
    }
}

/**
 * @memberOf Qualifiers.Flag
 * @extends {SDK.Qualifier}
 * @description the FlagQualifier class
 */
class FlagQualifier extends Qualifier {
    constructor(flagType, flagValue) {
        let qualifierValue;
        if (flagValue) {
            qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(':');
        }
        else {
            qualifierValue = flagType;
        }
        super('fl', qualifierValue);
        this.flagValue = flagValue;
    }
    toString() {
        return super.toString().replace(/\./, '%2E');
    }
    getFlagValue() {
        return this.flagValue;
    }
}

/**
 * Sort a map by key
 * @private
 * @param map <string, any>
 * @Return array of map's values sorted by key
 */
function mapToSortedArray(map, flags) {
    const array = Array.from(map.entries());
    // objects from the Array.from() method above are stored in array of arrays:
    // [[qualifierKey, QualifierObj], [qualifierKey, QualifierObj]]
    // Flags is an array of FlagQualifierObj
    // We need to convert it to the same form: [flagQualifier] =>  ['fl', flagQualifier]
    flags.forEach((flag) => {
        array.push(['fl', flag]); // push ['fl', flagQualifier]
    });
    return array.sort().map((v) => v[1]);
}

/**
 * Returns the action's model
 */
function actionToJson() {
    const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
    if (actionModelIsNotEmpty) {
        return this._actionModel;
    }
    return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
}

class ActionModel {
    constructor() {
        this._actionModel = {};
    }
    toJson() {
        return actionToJson.apply(this);
    }
}

/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines the category of transformation to perform.
 */
class Action extends ActionModel {
    constructor() {
        super(...arguments);
        // We're using map, to overwrite existing keys. for example:
        // addParam(w_100).addQualifier(w_200) should result in w_200. and not w_100,w_200
        this.qualifiers = new Map();
        // Unlike regular qualifiers, there can be multiple flags in each url component /fl_1,fl_2/
        // If the falgs are added to the qualifiers map, only a single flag could exist in a component (it's a map)
        // So flags are stored separately until the very end because of that reason
        this.flags = [];
        this.delimiter = ','; // {qualifier}{delimiter}{qualifier} for example: `${'w_100'}${','}${'c_fill'}`
        this.actionTag = ''; // A custom name tag to identify this action in the future
    }
    prepareQualifiers() { }
    /**
     * @description Returns the custom name tag that was given to this action
     * @return {string}
     */
    getActionTag() {
        return this.actionTag;
    }
    /**
     * @description Sets the custom name tag for this action
     * @return {this}
     */
    setActionTag(tag) {
        this.actionTag = tag;
        return this;
    }
    /**
     * @description Calls toString() on all child qualifiers (implicitly by using .join()).
     * @return {string}
     */
    toString() {
        this.prepareQualifiers();
        return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
    }
    /**
     * @description Adds the parameter to the action.
     * @param {SDK.Qualifier} qualifier
     * @return {this}
     */
    addQualifier(qualifier) {
        // if string, find the key and value
        if (typeof qualifier === 'string') {
            const [key, value] = qualifier.toLowerCase().split('_');
            if (key === 'fl') {
                // if string qualifier is a flag, store it in the flags arrays
                this.flags.push(new FlagQualifier(value));
            }
            else {
                // if the string qualifier is not a flag, create a new qualifier from it
                this.qualifiers.set(key, new Qualifier(key, value));
            }
        }
        else {
            // if a qualifier object, insert to the qualifiers map
            this.qualifiers.set(qualifier.key, qualifier);
        }
        return this;
    }
    /**
     * @description Adds a flag to the current action.
     * @param {Qualifiers.Flag} flag
     * @return {this}
     */
    addFlag(flag) {
        if (typeof flag === 'string') {
            this.flags.push(new FlagQualifier(flag));
        }
        else {
            if (flag instanceof FlagQualifier) {
                this.flags.push(flag);
            }
        }
        return this;
    }
    addValueToQualifier(qualifierKey, qualifierValue) {
        this.qualifiers.get(qualifierKey).addValue(qualifierValue);
        return this;
    }
}

/**
 * @memberOf Qualifiers.Region
 */
class NamedRegion extends Action {
    constructor(type) {
        super();
        this.regionType = type;
    }
}

/**
 * @memberOf Qualifiers.Region
 */
class CustomRegion extends NamedRegion {
    constructor() {
        super('named');
    }
    /**
     * @description The x position in pixels.
     * @param {number} x
     */
    x(x) {
        this.addQualifier(new Qualifier('x', x));
        return this;
    }
    /**
     * @description The y position in pixels.
     * @param {number} y
     */
    y(y) {
        this.addQualifier(new Qualifier('y', y));
        return this;
    }
    /**
     * @description The width of the region in pixels.
     * @param {number} width
     */
    width(width) {
        this.addQualifier(new Qualifier('w', width));
        return this;
    }
    /**
     * @description The height of the region in pixels.
     * @param {number} height
     */
    height(height) {
        this.addQualifier(new Qualifier('h', height));
        return this;
    }
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.CustomRegion}
 */
function custom() {
    return new CustomRegion();
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.NamedRegion}
 */
function faces() {
    return new NamedRegion('faces');
}

/**
 * @description The Action class of the blur Builder.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BlurAction extends Action {
    constructor(strength) {
        super();
        this._actionModel = {};
        this._strength = strength;
        this._actionModel.actionType = 'blur';
        this._actionModel.strength = strength;
    }
    /**
     * @description Specifies the region to blur.
     * @param {NamedRegion} blurRegion
     */
    region(blurRegion) {
        this._actionModel.region = { RegionType: blurRegion.regionType };
        this._region = blurRegion;
        return this;
    }
    /**
     * @description Sets the strength of the blur effect.
     * @param {number | string} strength
     */
    strength(strength) {
        this._strength = strength;
        this._actionModel.strength = strength;
        return this;
    }
    prepareQualifiers() {
        /*
         * Blur with region is a unique object in this codebase.
         * On top of Blur being an Action with Qualifiers,
         * it also accepts a Qualifier called Region.
         *
         * This Qualifier is in itself composite of qualifiers (such as height, or width).
         * The existence of Region changes the output of Blur in non traditional ways
         * which forced this relatively ad-hoc implementation.
         *
         * Aside from all of that, all of the Qualifiers in the component should be alphabetized
         * This happens naturally in the Action class,
         * however since we're dealing with two levels of qualifiers (Blur and Region),
         * these need to be merged.
         *
         * This function will merge the Region qualifiers with Blur
         * and add all needed implicit qualifiers (like g_ocr_text).
         * We're not using the full Gravity Qualifier here to prevent the code import for such a simplistic case
         */
        const str = this._strength ? `:${this._strength}` : '';
        if ('_region' in this) {
            const qualifiers = this._region.qualifiers;
            // Copy qualifiers from the region "action" to the blur action
            qualifiers.forEach((q) => this.addQualifier(q));
            if (this._region.regionType === 'named') {
                this.addQualifier(new Qualifier('e', `blur_region${str}`));
            }
            if (this._region.regionType === 'ocr_text') {
                this.addQualifier(new Qualifier('e', `blur_region${str}`));
                this.addQualifier(new Qualifier('g', `ocr_text`));
            }
            if (this._region.regionType === 'faces') {
                this.addQualifier(new Qualifier('e', `blur_faces${str}`));
            }
        }
        else {
            this.addQualifier(new Qualifier('e', `blur${str}`));
        }
    }
    static fromJson(actionModel) {
        const { actionType, strength, region } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this(strength);
        strength && result.strength(strength);
        if (region && region.RegionType === 'faces') {
            result.region(faces());
        }
        if (region && region.RegionType === 'custom') {
            result.region(custom());
        }
        return result;
    }
}

/**
 * Flip keys and values for given object
 * @param obj
 */
function objectFlip(obj) {
    const result = {};
    Object.keys(obj).forEach((key) => {
        result[obj[key]] = key;
    });
    return result;
}

/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */
const ACTION_TYPE_TO_CROP_MODE_MAP = {
    limitFit: 'limit',
    limitFill: 'lfill',
    minimumFit: 'mfit',
    thumbnail: 'thumb',
    limitPad: 'lpad',
    minimumPad: 'mpad'
};
const ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
    colorSpace: 'cs',
    dpr: 'dpr',
    density: 'dn',
    defaultImage: 'd',
    format: 'f',
    quality: 'q'
};
const ACTION_TYPE_TO_EFFECT_MODE_MAP = {
    redEye: 'redeye',
    advancedRedEye: 'adv_redeye',
    oilPaint: 'oil_paint',
    unsharpMask: 'unsharp_mask',
    makeTransparent: 'make_transparent'
};
const ACTION_TYPE_TO_QUALITY_MODE_MAP = {
    autoBest: 'auto:best',
    autoEco: 'auto:eco',
    autoGood: 'auto:good',
    autoLow: 'auto:low',
    jpegminiHigh: 'jpegmini:1',
    jpegminiMedium: 'jpegmini:2',
    jpegminiBest: 'jpegmini:0'
};
const ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
    fullHd: 'full_hd',
    fullHdWifi: 'full_hd_wifi',
    fullHdLean: 'full_hd_lean',
    hdLean: 'hd_lean'
};
const CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
    444: "CHROMA_444",
    420: "CHROMA_420"
};
const COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
    'noCmyk': 'no_cmyk',
    'keepCmyk': 'keep_cmyk',
    'tinySrgb': 'tinysrgb',
    'srgbTrueColor': 'srgb:truecolor'
};
const CHROMA_MODEL_ENUM_TO_CHROMA_VALUE = objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
const CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
const DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
const EFFECT_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);

/**
 * @description A class that defines a simple effect of the type e_{effectName}
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class SimpleEffectAction extends Action {
    constructor(effectType, level) {
        super();
        this._actionModel = {};
        this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
        const qualifierEffect = this.createEffectQualifier(effectType, level);
        this.addQualifier(qualifierEffect);
    }
    createEffectQualifier(effectType, level) {
        let qualifierValue;
        if (level) {
            qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(':');
        }
        else {
            qualifierValue = new QualifierValue(effectType);
        }
        return new Qualifier('e', qualifierValue);
    }
    static fromJson(actionModel) {
        const { actionType, level, strength } = actionModel;
        const effectType = ACTION_TYPE_TO_EFFECT_MODE_MAP[actionType] || actionType;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        // @ts-ignore
        const result = new this(effectType, level ? level : strength);
        return result;
    }
}

/**
 * @description A base class for effects with a level, the extending class needs to implement a method that calls setLevel()
 * @extends {Actions.Effect.SimpleEffectAction}
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class LeveledEffectAction extends SimpleEffectAction {
    constructor(effectType, level) {
        super(effectType, level);
        this.LEVEL_NAME = 'level';
        this._actionModel = {};
        this.effectType = effectType;
        this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
        if (level) {
            this.setLevel(level);
        }
    }
    /**
     *
     * @description Sets the effect level for the action
     * @param {string | number} level - The strength of the effect
     * @protected
     */
    setLevel(level) {
        this._actionModel[this.LEVEL_NAME] = level;
        const qualifierEffect = this.createEffectQualifier(this.effectType, level);
        this.addQualifier(qualifierEffect);
        return this;
    }
}

/**
 * Returns RGB or Color
 * @private
 * @param color
 */
function prepareColor(color) {
    if (color) {
        return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
    }
    else {
        return color;
    }
}

/**
 * @description Vectorizes the image.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class VectorizeEffectAction extends Action {
    constructor() {
        super();
        this._actionModel = {};
        this._actionModel.actionType = 'vectorize';
    }
    /**
     * @description The number of colors. (Range: 2 to 30, Server default: 10)
     * @param {number | string} num
     * @return {this}
     */
    numOfColors(num) {
        this._actionModel.numOfColors = num;
        this._numOfColors = num;
        return this;
    }
    /**
     * @description The level of detail. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 1000). (Server default: 300)
     * @param {number | string} num
     * @return {this}
     */
    detailsLevel(num) {
        this._actionModel.detailLevel = num;
        this._detailsLevel = num;
        return this;
    }
    /**
     * @description The size of speckles to suppress. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 100, Server default: 2)
     * @param {number | string} num
     * @return {this}
     */
    despeckleLevel(num) {
        this._actionModel.despeckleLevel = num;
        this._despeckleLevel = num;
        return this;
    }
    /**
     * @description The corner threshold. Specify 100 for no smoothing (polygon corners), 0 for completely smooth corners. (Range: 0 to 100, Default: 25)
     * @param {number | string} num
     * @return {this}
     */
    cornersLevel(num) {
        this._actionModel.cornersLevel = num;
        this._cornersLevel = num;
        return this;
    }
    /**
     * @description The optimization value. Specify 100 for least optimization and the largest file. (Range: 0 to 100, Server default: 100).
     * @param {number} num
     * @return {this}
     */
    paths(num) {
        this._actionModel.paths = num;
        this._paths = num;
        return this;
    }
    prepareQualifiers() {
        let str = 'vectorize';
        if (this._numOfColors) {
            str += `:${new QualifierValue(`colors:${this._numOfColors}`).toString()}`;
        }
        if (this._detailsLevel) {
            str += `:${new QualifierValue(`detail:${this._detailsLevel}`).toString()}`;
        }
        if (this._despeckleLevel) {
            str += `:${new QualifierValue(`despeckle:${this._despeckleLevel}`).toString()}`;
        }
        if (this._paths) {
            str += `:${new QualifierValue(`paths:${this._paths}`).toString()}`;
        }
        if (this._cornersLevel) {
            str += `:${new QualifierValue(`corners:${this._cornersLevel}`).toString()}`;
        }
        this.addQualifier(new Qualifier('e', str));
    }
    static fromJson(actionModel) {
        const { actionType, paths, cornersLevel, despeckleLevel, detailLevel, numOfColors } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this();
        paths && result.paths(paths);
        cornersLevel && result.cornersLevel(cornersLevel);
        despeckleLevel && result.despeckleLevel(despeckleLevel);
        detailLevel && result.detailsLevel(detailLevel);
        numOfColors && result.numOfColors(numOfColors);
        return result;
    }
}

/**
 * @description A class that provides a built in level() method that sets the level of the effect
 * @extends {Actions.Effect.LeveledEffectAction}
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class EffectActionWithLevel extends LeveledEffectAction {
    level(value) {
        this._actionModel.level = value;
        return this.setLevel(value);
    }
}

/**
 * @description Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.
 *              You can replace colors using the xray() method.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class AssistColorBlindEffectAction extends Action {
    constructor() {
        super();
        this._actionModel = {};
        this._actionModel.actionType = 'assistColorblind';
        this.addQualifier(new Qualifier('e', new QualifierValue('assist_colorblind')));
    }
    /**
     * @description Replaces problematic colors with colors that are easier to differentiate.
     * @return {this}
     */
    xray() {
        this._actionModel.type = 'xray';
        return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', 'xray']).setDelimiter(':')));
    }
    /**
     * @description Applies stripes of the specified intensity to help people with common color blind conditions to differentiate between colors that are similar for them.
     * @param {number | string} strength The intensity of the stripes. (Range: 1 to 100, Server default: 10)
     * @return {this}
     */
    stripesStrength(strength) {
        this._actionModel.type = 'stripes';
        this._actionModel.stripesStrength = strength;
        return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', strength]).setDelimiter(':')));
    }
    static fromJson(actionModel) {
        const { actionType, type, stripesStrength } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this();
        if (type === 'xray') {
            result.xray();
        }
        if (type === 'stripes') {
            stripesStrength && result.stripesStrength(stripesStrength);
        }
        return result;
    }
}

/**
 * @description Applies a colorizing filter to the asset, use the methods in the class to adjust the filter
 * @extends EffectActionWithLevel
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class ColorizeEffectAction extends EffectActionWithLevel {
    /**
     * @description The color to use for colorization. Specify HTML name or RGB hex code. (Server default: gray)
     * @param {string} color HTML name(red, green, etc.) or RGB hex code. (Server default: gray)
     * @return {this}
     */
    color(color) {
        this._actionModel.color = color;
        return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
    }
    static fromJson(actionModel) {
        const { actionType, level, color } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this(actionType, level);
        color && result.color(color);
        return result;
    }
}

/**
 * @description The Action class of the pixelate Builder
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class Pixelate extends Action {
    constructor(squareSize) {
        super();
        this._actionModel = {};
        this._squareSize = squareSize;
        this._actionModel.actionType = 'pixelate';
        this._actionModel.squareSize = squareSize;
    }
    /**
     * @description Specifies the region to piexlate.
     * @param {NamedRegion} pixelateRegion
     */
    region(pixelateRegion) {
        this._region = pixelateRegion;
        this._actionModel.region = { RegionType: this._region.regionType };
        return this;
    }
    /**
     * @description Sets the squareSize of the pixelate effect.
     * @param {number | string} squareSize
     */
    squareSize(squareSize) {
        this._squareSize = squareSize;
        this._actionModel.squareSize = squareSize;
        return this;
    }
    prepareQualifiers() {
        /*
         * pixelate with region is a unique object in this codebase.
         * On top of pixelate being an Action with Qualifiers,
         * it also accepts a Qualifier called Region.
         *
         * This Qualifier is in itself composite of qualifiers (such as height, or width).
         * The existence of Region changes the output of pixelate in non traditional ways
         * which forced this relatively ad-hoc implementation.
         *
         * Aside from all of that, all of the Qualifiers in the component should be alphabetized
         * This happens naturally in the Action class,
         * however since we're dealing with two levels of qualifiers (pixelate and Region),
         * these need to be merged.
         *
         * This function will merge the Region qualifiers with pixelate
         * and add all needed implicit qualifiers (like g_ocr_text).
         * We're not using the full Gravity Qualifier here to prevent the code import for such a simplistic case
         */
        const str = this._squareSize ? `:${this._squareSize}` : '';
        if ('_region' in this) {
            const qualifiers = this._region.qualifiers;
            // Copy qualifiers from the region "action" to the pixelate action
            qualifiers.forEach((q) => this.addQualifier(q));
            if (this._region.regionType === 'named') {
                this.addQualifier(new Qualifier('e', `pixelate_region${str}`));
            }
            if (this._region.regionType === 'ocr_text') {
                this.addQualifier(new Qualifier('e', `pixelate_region${str}`));
                this.addQualifier(new Qualifier('g', `ocr_text`));
            }
            if (this._region.regionType === 'faces') {
                this.addQualifier(new Qualifier('e', `pixelate_faces${str}`));
            }
        }
        else {
            this.addQualifier(new Qualifier('e', `pixelate${str}`));
        }
    }
    static fromJson(actionModel) {
        const { actionType, region, squareSize } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this(squareSize);
        squareSize && result.squareSize(squareSize);
        if (region && region.RegionType === 'faces') {
            result.region(faces());
        }
        if (region && region.RegionType === 'custom') {
            result.region(custom());
        }
        return result;
    }
}

/**
 * @summary action
 * @description Applies a blurring filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 100)
 * @return {Actions.Effect.BlurAction}
 */
function blur(blurLevel) {
    return new BlurAction(blurLevel);
}
/**
 * @summary action
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function grayscale() {
    return new SimpleEffectAction('grayscale');
}
/**
 * @summary action
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} colorizeLevel The strength of the color. (Range: 0 to 100, Server default: 100)
 * @return {Actions.Effect.ColorizeEffectAction}
 */
function colorize(colorizeLevel) {
    return new ColorizeEffectAction('colorize', colorizeLevel);
}
/**
 * @summary action
 * @description
 * Vectorizes the image.
 * Notes:
 * To deliver the image as a vector image, make sure to change the format (or URL extension) to a vector format, such as SVG.</br>
 * However, you can also deliver in a raster format if you just want to get the 'vectorized' graphic effect.</br>
 * Large images are scaled down to 1000 pixels in the largest dimension before vectorization.
 *
 * @memberOf Actions.Effect
 * @return {Actions.Effect.VectorizeEffectAction}
 */
function vectorize() {
    return new VectorizeEffectAction();
}
/**
 * @summary action
 * @description
 * Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.</br>
 * You can replace colors using the xRay() method of the \Cloudinary\Transformation\AssistColorBlind class.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.AssistColorBlindEffectAction}
 */
function assistColorBlind() {
    return new AssistColorBlindEffectAction();
}
/**
 * @summary action
 * @description Applies a pixelatering filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} squareSize The squareSize in the pixelation. (Range: 1 to 2000, Server default: 100)
 * @return {Actions.Effect.Pixelate}
 */
function pixelate(squareSize) {
    return new Pixelate(squareSize);
}

/**
 * @extends SDK.Action
 * @description A class for background transformations.
 */
class BackgroundColor extends Action {
    constructor(color) {
        super();
        this.addQualifier(new Qualifier('b', new QualifierValue(color).setDelimiter('_')));
    }
}

/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */
class RawAction {
    constructor(raw) {
        this.raw = raw;
    }
    toString() {
        return this.raw;
    }
    toJson() {
        return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
    }
}

/**
 * Validates obj is an instance of IErrorObject
 * @param obj
 */
function isErrorObject(obj) {
    const errorObj = obj;
    return ('error' in errorObj) && !!errorObj.error;
}

/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Qualifiers
 */
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description * Allows specifying only either width or height so the value of the second axis remains as is, and is not
 * recalculated to maintain the aspect ratio of the original image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function ignoreInitialAspectRatio() {
    return new FlagQualifier('ignore_aspect_ratio');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Automatically use lossy compression when delivering animated GIF files.
 *
 * This flag can also be used as a conditional flag for delivering PNG files: it tells Cloudinary to deliver the
 * image in PNG format (as requested) unless there is no transparency channel - in which case deliver in JPEG
 * format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function lossy() {
    return new FlagQualifier('lossy');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function preserveTransparency() {
    return new FlagQualifier('preserve_transparency');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generates a JPG image using the progressive (interlaced) JPG format.
 *
 * This format allows the browser to quickly show a low-quality rendering of the image until the full-quality
 * image is loaded.
 *
 * @param {string} mode? The mode to determine a specific progressive outcome as follows:
 * * semi - A smart optimization of the decoding time, compression level and progressive rendering
 *          (less iterations). This is the default mode when using q_auto.
 * * steep - Delivers a preview very quickly, and in a single later phase improves the image to
 *           the required resolution.
 * * none  - Use this to deliver a non-progressive image. This is the default mode when setting
 *           a specific value for quality.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function progressive(mode) {
    return new FlagQualifier('progressive', mode);
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function regionRelative() {
    return new FlagQualifier('region_relative');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function relative() {
    return new FlagQualifier('relative');
}

/**
 * @memberOf Qualifiers.Format
 * @extends {SDK.QualifierValue}
 */
class FormatQualifier extends QualifierValue {
    constructor(val) {
        super(val);
        this.val = val;
    }
    getValue() {
        return this.val;
    }
}

/**
 * @description Qualifies the delivery of an asset.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 */
class DeliveryAction extends Action {
    /**
     * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
     * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
     * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
     * @see Visit {@link Actions.Delivery|Delivery} for an example
     */
    constructor(deliveryKey, deliveryType, modelProperty) {
        super();
        this._actionModel = {};
        let deliveryTypeValue;
        if (deliveryType instanceof FormatQualifier) {
            deliveryTypeValue = deliveryType.getValue();
        }
        else {
            deliveryTypeValue = deliveryType;
        }
        this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
        this._actionModel[modelProperty] = deliveryTypeValue;
        this.addQualifier(new Qualifier(deliveryKey, deliveryType));
    }
}

/**
 * @description Contains functions to select the mode when using a progressive format.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/transformation_reference#fl_progressive|Progressive modes}
 * @memberOf Qualifiers
 * @namespace Progressive
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {format} from "@cloudinary/url-gen/actions/delivery";
 * import {jpg} from "@cloudinary/url-gen/qualifiers/format";
 * import {steep} from "@cloudinary/url-gen/qualifiers/progressive";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(format(jpg()).progressive(steep()))
 */
class ProgressiveQualifier extends FlagQualifier {
    constructor(mode) {
        super('progressive', mode);
    }
}

/**
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryFormatAction extends DeliveryAction {
    constructor(deliveryKey, deliveryType) {
        super(deliveryKey, deliveryType, 'formatType');
    }
    /**
     * @description Uses lossy compression when delivering animated GIF files.
     * @return {this}
     */
    lossy() {
        this._actionModel.lossy = true;
        this.addFlag(lossy());
        return this;
    }
    /**
     * @description Uses progressive compression when delivering JPG file format.
     * @return {this}
     */
    progressive(mode) {
        if (mode instanceof ProgressiveQualifier) {
            this._actionModel.progressive = { mode: mode.getFlagValue() };
            this.addFlag(mode);
        }
        else {
            this._actionModel.progressive = { mode: mode };
            this.addFlag(progressive(mode));
        }
        return this;
    }
    /**
     * @description Ensures that images with a transparency channel are delivered in PNG format.
     */
    preserveTransparency() {
        this._actionModel.preserveTransparency = true;
        this.addFlag(preserveTransparency());
        return this;
    }
    static fromJson(actionModel) {
        const { formatType, lossy, progressive, preserveTransparency } = actionModel;
        let result;
        if (formatType) {
            result = new this('f', formatType);
        }
        else {
            result = new this('f');
        }
        if (progressive) {
            if (progressive.mode) {
                result.progressive(progressive.mode);
            }
            else {
                result.progressive();
            }
        }
        lossy && result.lossy();
        preserveTransparency && result.preserveTransparency();
        return result;
    }
}

/**
 * @summary SDK
 * @description - Defines how to transform an asset
 * @memberOf SDK
 */
class Transformation {
    constructor() {
        this.actions = [];
    }
    /**
     * @param {SDK.Action | string} action
     * @return {this}
     */
    addAction(action) {
        let actionToAdd;
        if (typeof action === 'string') {
            if (action.indexOf('/') >= 0) {
                throw 'addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead';
            }
            else {
                actionToAdd = new RawAction(action);
            }
        }
        else {
            actionToAdd = action;
        }
        this.actions.push(actionToAdd);
        return this;
    }
    /**
     * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
     * @param {string | SDK.Transformation} tx
     * @example
     * import {Transformation} from "@cloudinary/url-gen";
     *
     * const transformation = new Transformation();
     * transformation.addTransformation('w_100/w_200/w_300');
     * @return {this}
     */
    addTransformation(tx) {
        if (tx instanceof Transformation) {
            // Concat the new actions into the existing actions
            this.actions = this.actions.concat(tx.actions);
        }
        else {
            this.actions.push(new RawAction(tx));
        }
        return this;
    }
    /**
     * @return {string}
     */
    toString() {
        return this.actions
            .map((action) => {
            return action.toString();
        })
            .filter((a) => a)
            .join('/');
    }
    /**
     * @description Delivers an animated GIF.
     * @param {AnimatedAction} animatedAction
     * @return {this}
     */
    animated(animatedAction) {
        return this.addAction(animatedAction);
    }
    /**
     * @description Adds a border around the image.
     * @param {Border} borderAction
     * @return {this}
     */
    border(borderAction) {
        return this.addAction(borderAction);
    }
    /**
     * @description Adjusts the shape of the delivered image. </br>
     * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
     * @param {IReshape} reshapeAction
     * @return {this}
     */
    reshape(reshapeAction) {
        return this.addAction(reshapeAction);
    }
    /**
     * @description Resize the asset using provided resize action
     * @param {ResizeSimpleAction} resizeAction
     * @return {this}
     */
    resize(resizeAction) {
        return this.addAction(resizeAction);
    }
    /**
     * @desc An alias to Action Delivery.quality
     * @param {string|number} quality
     * @return {this}
     */
    quality(quality) {
        this.addAction(new DeliveryFormatAction('q', quality));
        return this;
    }
    /**
     * @desc An alias to Action Delivery.format
     * @param {string} format
     * @return {this}
     */
    format(format) {
        this.addAction(new DeliveryFormatAction('f', format));
        return this;
    }
    /**
     * @description Rounds the specified corners of an image.
     * @param roundCornersAction
     * @return {this}
     */
    roundCorners(roundCornersAction) {
        return this.addAction(roundCornersAction);
    }
    /**
     * @description Adds an overlay over the base image.
     * @param {LayerAction} overlayAction
     * @return {this}
     */
    overlay(overlayAction) {
        return this.addAction(overlayAction);
    }
    /**
     * @description Adds an underlay under the base image.
     * @param {LayerAction} underlayAction
     * @return {this}
     */
    underlay(underlayAction) {
        underlayAction.setLayerType('u');
        return this.addAction(underlayAction);
    }
    /**
     * @description Defines an new user variable.
     * @param {VariableAction} variableAction
     * @return {this}
     */
    addVariable(variableAction) {
        return this.addAction(variableAction);
    }
    /**
     * @description Specifies a condition to be met before applying a transformation.
     * @param {ConditionalAction} conditionAction
     * @return {this}
     */
    conditional(conditionAction) {
        return this.addAction(conditionAction);
    }
    /**
     * @description Applies a filter or an effect on an asset.
     * @param {SimpleEffectAction} effectAction
     * @return {this}
     */
    effect(effectAction) {
        return this.addAction(effectAction);
    }
    /**
     * @description Applies adjustment effect on an asset.
     * @param action
     * @return {this}
     */
    adjust(action) {
        return this.addAction(action);
    }
    /**
     * @description Rotates the asset by the given angle.
     * @param {RotateAction} rotateAction
     * @return {this}
     */
    rotate(rotateAction) {
        return this.addAction(rotateAction);
    }
    /**
     * @description Applies a pre-defined named transformation of the given name.
     * @param {NamedTransformation} namedTransformation
     * @return {this}
     */
    namedTransformation(namedTransformation) {
        return this.addAction(namedTransformation);
    }
    /**
     * @description Applies delivery action.
     * @param deliveryAction
     * @return {this}
     */
    delivery(deliveryAction) {
        return this.addAction(deliveryAction);
    }
    /**
     * @description Sets the color of the background.
     * @param {Qualifiers.Color} color
     * @return {this}
     */
    backgroundColor(color) {
        return this.addAction(new BackgroundColor(prepareColor(color)));
    }
    /**
     * @description Adds a layer in a Photoshop document.
     * @param action
     * @return {this}
     */
    psdTools(action) {
        return this.addAction(action);
    }
    /**
     * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
     * @param action
     * @return {this}
     */
    extract(action) {
        return this.addAction(action);
    }
    /**
     * @description Adds a flag as a separate action.
     * @param {Qualifiers.Flag | string} flagQualifier
     * @return {this}
     */
    addFlag(flagQualifier) {
        const action = new Action();
        let flagToAdd = flagQualifier;
        if (typeof flagQualifier === 'string') {
            flagToAdd = new FlagQualifier(flagQualifier);
        }
        action.addQualifier(flagToAdd);
        return this.addAction(action);
    }
    /**
     * @description Inject a custom function into the image transformation pipeline.
     * @return {this}
     */
    customFunction(customFunction) {
        return this.addAction(customFunction);
    }
    /**
     * Transcodes the video (or audio) to another format.
     * @param {Action} action
     * @return {this}
     */
    transcode(action) {
        return this.addAction(action);
    }
    /**
     * Applies the specified video edit action.
     *
     * @param {videoEditType} action
     * @return {this}
     */
    videoEdit(action) {
        return this.addAction(action);
    }
    toJson() {
        const actions = [];
        for (const action of this.actions) {
            const json = action.toJson();
            if (isErrorObject(json)) {
                // Fail early and return an IErrorObject
                return json;
            }
            actions.push(json);
        }
        return { actions };
    }
}

/**
 * @description
 * Returns a string representing the float value of the input, if the input was a number-like.
 * Examples:
 * - '1.0' -> '1.0'
 * - 1 -> '1.0'
 * - '5' -> '5.0'
 * - 'auto' -> 'auto'
 * @private
 * @param {string|number} value
 * @return {string}
 */
function toFloatAsString(value) {
    // Turn the input to string
    // The Function will return `returnValue` value if the input is not a number-like expression
    const returnValue = value.toString();
    // if the string contains letters, return the input
    if (returnValue.match(/[A-Z]/gi)) {
        return returnValue;
    }
    // If the leading digit is 0, and we have more than 1 digit, it's not a number.
    // 00, 00000, 0x15 etc.
    if (returnValue.length > 1 && returnValue[0] === '0') {
        return returnValue;
    }
    // Final sanity check, parse the number as a float and check if its NaN
    const isNumberLike = !isNaN(parseFloat(returnValue)) && returnValue.indexOf(':') === -1;
    // If it's a number-like, but the input does not contain a decimal - add it.
    if (isNumberLike && returnValue.indexOf('.') === -1) {
        return `${returnValue}.0`;
    }
    else {
        // If the input already contains a decimal, just return the value
        return returnValue;
    }
}

/**
 * @memberOf Qualifiers.AspectRatio
 * @extends {SDK.QualifierValue}
 */
class AspectRatioQualifierValue extends QualifierValue {
}

/**
 * @description Defines a resize using width and height.
 * @extends SDK.Action
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeSimpleAction extends Action {
    /**
     * @param {string} cropType
     * @param {number | string} cropWidth The required width of a transformed asset.
     * @param {number | string} cropHeight The required height of a transformed asset.
     */
    constructor(cropType, cropWidth, cropHeight) {
        super();
        this._actionModel = { dimensions: {} };
        this._actionModel.actionType = CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
        this.addQualifier(new Qualifier('c', cropType));
        cropWidth && this.width(cropWidth);
        cropHeight && this.height(cropHeight);
    }
    /**
     * @description Sets the height of the resize
     * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
     */
    height(x) {
        this._actionModel.dimensions.height = x;
        return this.addQualifier(new Qualifier('h', x));
    }
    /**
     * @description Sets the width of the resize
     * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
     */
    width(x) {
        this._actionModel.dimensions.width = x;
        return this.addQualifier(new Qualifier('w', x));
    }
    /**
     * @description Sets the aspect ratio of the asset.
     * For a list of supported types see {@link Qualifiers.AspectRatio|
      * AspectRatio values}
     * @param {AspectRatioType|number|string} ratio The new aspect ratio, specified as a percentage or ratio.
     * @return {this}
     */
    aspectRatio(ratio) {
        // toFloatAsString is used to ensure 1 turns into 1.0
        if (ratio instanceof AspectRatioQualifierValue) {
            this._actionModel.dimensions.aspectRatio = `${ratio}`;
            return this.addQualifier(new Qualifier('ar', ratio));
        }
        if (typeof ratio === 'number' || typeof ratio === 'string') {
            this._actionModel.dimensions.aspectRatio = toFloatAsString(ratio);
            return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
        }
        if (ratio instanceof FlagQualifier) {
            this._actionModel.dimensions.aspectRatio = `${ratio.qualifierValue}`;
            return this.addFlag(ratio);
        }
    }
    /**
     * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
     * @return {this}
     */
    relative() {
        this._actionModel.relative = true;
        return this.addFlag(relative());
    }
    /**
     * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
     * @return {this}
     */
    regionRelative() {
        this._actionModel.regionRelative = true;
        return this.addFlag(regionRelative());
    }
    static fromJson(actionModel) {
        const { actionType, dimensions, relative, regionRelative } = actionModel;
        const { aspectRatio, width, height } = dimensions;
        const cropMode = ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this(cropMode, width, height);
        aspectRatio && result.aspectRatio(aspectRatio === 'ignore_aspect_ratio' ? ignoreInitialAspectRatio() : aspectRatio);
        relative && result.relative();
        regionRelative && result.regionRelative();
        return result;
    }
}

/**
 * @memberOf Gravity.GravityQualifier
 * @extends {SDK.Qualifier}
 */
class GravityQualifier extends Qualifier {
    /**
     * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
     */
    constructor(value) {
        super('g', new QualifierValue(value));
    }
}

/**
 * @description The class for the autoGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class AutoGravity extends GravityQualifier {
    constructor() {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super('auto');
    }
    /**
     * @description Autofocuses on objects, allowing their priority within the algorithm to be configured.
     * @param {AutoFocus} AutoFocusObjects
     */
    autoFocus(...AutoFocusObjects) {
        this.addValue(AutoFocusObjects);
        return this;
    }
}

/**
 * @description The class for the FocusOn builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class FocusOnGravity extends GravityQualifier {
    constructor(FocusOnObjects) {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super(FocusOnObjects);
    }
    /**
     * @description Specifies the gravity to use if none of the other gravity objects are found.
     * @param {Qualifiers.Gravity.AutoGravity} val
     */
    fallbackGravity(val) {
        /*
         *  FocusOnGravity(this) is already a qualifier, with a key and a value g_{obj1}
         *  fallBackGravity also attempts to add a value, to reach the result of g_{obj1}:auto:{obj2}
         *  Since AutoGravity is a Qualifier, it also comes with its own g_ key, which needs to be removed.
         *  To solve it, we take only the value from the qualifier, instead of the whole thing
         */
        this.addValue(val.qualifierValue);
        return this;
    }
}

/**
 * @description The class for the CompassGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class CompassGravity extends GravityQualifier {
    constructor(dir) {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super(dir);
    }
}

/**
 * @description Defines the gravity based on directional values from a compass.
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/resizing_and_cropping#control_gravity|Control gravity for images}
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_resizing_and_cropping#control_gravity|Control gravity for videos}
 * @param {Qualifiers.Compass | string} direction A compass Values
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {north} from "@cloudinary/url-gen/qualifiers/compass";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(compass(north())))
 * @return {CompassGravity}
 */
function compass(direction) {
    return new CompassGravity(direction);
}
/**
 * @summary qualifier
 * @description Specifies what to focus on, for example: faces, objects, eyes, etc.
 * @param {...Qualifier.FocusOn} args One or more objects to focus on
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 * import {cat} from "@cloudinary/url-gen/qualifiers/focusOn";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(focusOn(cat())))
 * @return {FocusOnGravity}
 */
function focusOn(...args) {
    const res = [...args];
    return new FocusOnGravity(res);
}
/**
 * @summary qualifier
 * @description Automatically identifies the most interesting regions in the asset, can be qualified further by including what to focus on.
 * @memberOf Qualifiers.Gravity
 * @return {Qualifiers.Gravity.AutoGravity}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity()))
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 * import {cat} from "@cloudinary/url-gen/qualifiers/focusOn";
 * import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity().autoFocus(AutoFocus.focusOn(cat()))))
 */
function autoGravity() {
    return new AutoGravity();
}

/**
 * @memberOf Qualifiers.FocusOn
 * @extends {SDK.QualifierValue}
 */
class FocusOnValue extends QualifierValue {
    constructor(name) {
        super();
        this.name = name;
    }
    toString() {
        return this.name;
    }
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detect all text elements in an image using the {@link https://cloudinary.com/documentation/ocr_text_detection_and_extraction_addon|OCR Text Detection and Extraction add-on} and use the detected bounding box coordinates as the basis of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function ocr() {
    return new FocusOnValue('ocr_text');
}

/**
 * true if gravity starts with 'auto' or 'auto:'
 * @param gravity
 */
function isIAutoGravityString(gravity) {
    return gravity && `${gravity}`.split(':')[0] === 'auto';
}
/**
 * Validate that given val is an ICompassGravity
 * @param gravity
 */
function isCompassGravity(gravity) {
    //const gravityString = `${(typeof gravity === "string" ? gravity : gravity.qualifierValue)}`;
    const gravityValue = getGravityValue(gravity);
    return ['north', 'center', 'east', 'west', 'south', 'north_west', 'south_east', 'south_west', 'north_east'].includes(gravityValue);
}
/**
 * Get the value of given gravity
 * @param gravity
 */
function getGravityValue(gravity) {
    return `${gravity}`.replace('g_', '');
}
/**
 * Creates a compassGravity model
 * @param gravity
 */
function createCompassGravityModel(gravity) {
    return {
        compass: getGravityValue(gravity),
        gravityType: 'direction'
    };
}
/**
 * Validate that given gravity is an instance of ocr gravity
 * @param gravity
 */
function isOcrGravity(gravity) {
    return getGravityValue(gravity) === 'ocr_text';
}
/**
 * Creates an ocr gravity model
 */
function createOcrGravityModel() {
    return {
        gravityType: 'ocr'
    };
}
/**
 * Validate that given gravity is an instance of AutoGravity
 * @param gravity
 */
function isAutoGravity(gravity) {
    return `${gravity.qualifierValue}`.split(':')[0] === 'auto';
}
/**
 * Create an instance of IAutoGravityObjectModel
 * @param gravity
 */
function createIAutoFocusObject(gravity) {
    const gravityString = gravity.toString();
    const values = gravityString.split('_');
    const result = {
        object: values[0]
    };
    if (values.length > 1) {
        if (values[1] === 'avoid') {
            result.avoid = true;
        }
        else {
            result.weight = +values[1];
        }
    }
    return result;
}
/**
 * Creates an auto gravity model from given AutoGravity
 * @param gravity
 */
function createAutoGravityModel(gravity) {
    let values;
    const gravityQualifier = gravity === 'auto' ? new AutoGravity() : gravity;
    if (`${gravity}`.startsWith('auto:')) {
        values = `${gravity}`.split(':').filter((v) => v !== 'auto');
    }
    else {
        values = gravityQualifier.qualifierValue.values.filter((v) => v !== 'auto');
    }
    const autoFocus = values.map(createIAutoFocusObject);
    return {
        gravityType: 'auto',
        autoFocus
    };
}
/**
 * Create IFocusOnGravityModel from FocusOnGravity
 * @param gravity
 */
function createFocusOnGravityModel(gravity) {
    const hasAutoGravity = `${gravity}`.split(':').includes('auto');
    const values = gravity.qualifierValue.values;
    const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;
    const result = {
        gravityType: 'object',
        focusOnObjects: focusOnValues.map((v) => `${v}`)
    };
    if (hasAutoGravity) {
        // Remove the first 'auto' value by slicing it, because it's added by autoGravity()
        const autoFocusObjects = values[values.length - 1].values.slice(1);
        const autoGravityInstance = autoGravity().autoFocus(...autoFocusObjects);
        result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
    }
    return result;
}
/**
 * Creates a FocusOnGravity from given string
 * @param gravity
 */
function createFocusOnGravity(gravity) {
    const values = gravity.split(':');
    const focusOnValues = values.map((g) => new FocusOnValue(g));
    return new FocusOnGravity(focusOnValues);
}
/**
 * Create a model of given gravity
 * @param gravity
 */
function createGravityModel(gravity) {
    if (isCompassGravity(gravity)) {
        return createCompassGravityModel(gravity);
    }
    if (isOcrGravity(gravity)) {
        return createOcrGravityModel();
    }
    if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
        return createAutoGravityModel(gravity);
    }
    return createFocusOnGravityModel(typeof gravity === 'string' ? createFocusOnGravity(gravity) : gravity);
}

/**
 * @summary qualifier
 * @namespace AutoFocus
 * @memberOf Qualifiers
 * @see Visit {@link Qualifiers.Gravity|Gravity} for an example
 */
/**
 * @memberOf Qualifiers.AutoFocus
 * @extends {SDK.QualifierValue}
 * @see Visit {@link Qualifiers.Gravity|Gravity} for an example
 */
class AutoFocus extends QualifierValue {
    constructor(focusOn, weight) {
        super();
        this._weight = weight;
        this.focusOn = focusOn;
        this.shouldAvoid = false;
    }
    /**
     * @summary qualifier
     * @description Specifies the object to focus on automatically
     * Accepts an AutoFocusObject (which is just a wrapper for a FocusOn object, but with extra method: avoid, weight)
     * @param {Qualifiers.FocusOn} obj The object to focus on.
     * @param {number} weight
     */
    static focusOn(obj, weight) {
        return new AutoFocus(obj, weight);
    }
    shouldAddWeight() {
        return typeof this._weight === 'number' || typeof this._weight === 'string' || this.shouldAvoid;
    }
    /**
     * @summary qualifier
     * @desc Get the name of the of the object
     */
    getName() {
        return this.focusOn.name;
    }
    /**
     * @summary qualifier
     * @desc Get the weight for the object
     */
    getWeight() {
        if (this.shouldAvoid) {
            return 'avoid';
        }
        else {
            return this._weight;
        }
    }
    /**
     * @summary qualifier
     * @desc Return the string representation of this QualifierValue
     */
    toString() {
        // Future proofing, in case we'd like to support some custom string in the future, or if data is coming from a DB
        if (this.shouldAddWeight()) {
            return `${this.getName()}_${this.getWeight()}`;
        }
        else {
            return `${this.getName()}`;
        }
    }
    /**
     * @summary qualifier
     * @description Sets the importance level of the object within the automatic gravity algorithm
     * @param {numebr} w The focus weight for the object
     * @return {this}
     */
    weight(w) {
        this._weight = w;
        return this;
    }
    /**
     * @summary qualifier
     * @description Attempts to avoid the detected object in the image
     * @return {this}
     */
    avoid() {
        this.shouldAvoid = true;
        return this;
    }
}

/**
 * @memberOf Qualifiers.Compass
 * @extends {SDK.QualifierValue}
 */
class CompassQualifier extends QualifierValue {
    constructor(val) {
        super();
        this.val = val;
    }
    toString() {
        return this.val;
    }
}

/**
 * Validates that gravityModel is an ICompassGravityModel
 * @param gravityModel
 */
function isCompassGravityModel(gravityModel) {
    return gravityModel.gravityType === 'direction';
}
/**
 * Validates that gravityModel is an IOcrGravityModel
 * @param gravityModel
 */
function isOcrGravityModel(gravityModel) {
    return gravityModel.gravityType === 'ocr';
}
/**
 * Validates that gravityModel is an IAutoGravityModel
 * @param gravityModel
 */
function isAutoGravityModel(gravityModel) {
    return gravityModel.gravityType === 'auto';
}
/**
 * Create AutoFocus from IAutoGravityObjectModel
 * @param autoGravityObjectModel
 */
function createAutoFocusFromModel(autoGravityObjectModel) {
    const { object, weight, avoid } = autoGravityObjectModel;
    const autoFocus = new AutoFocus(new FocusOnValue(object));
    (weight || weight === 0) && autoFocus.weight(weight);
    avoid && autoFocus.avoid();
    return autoFocus;
}
/**
 * Create AutoGravity from IAutoGravityModel
 * @param gravityModel
 */
function createAutoGravityFromModel(gravityModel) {
    const autoFocusModel = gravityModel.autoFocus || [];
    const autoFocus = autoFocusModel.map(createAutoFocusFromModel);
    return autoGravity().autoFocus(...autoFocus);
}
/**
 * Create FocusOnGravity from given IFocusOnGravityModel
 * @param gravityModel
 */
function createFocusOnGravityFromModel(gravityModel) {
    const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new FocusOnValue(str));
    const result = focusOn(...focusOnObjects);
    if (gravityModel.fallbackGravity) {
        const autoGravity = createAutoGravityFromModel(gravityModel.fallbackGravity);
        result.fallbackGravity(autoGravity);
    }
    return result;
}
/**
 * Create gravity instance from given gravity model
 * @param gravityModel
 */
function createGravityFromModel(gravityModel) {
    if (isCompassGravityModel(gravityModel)) {
        return new CompassGravity(new CompassQualifier(gravityModel.compass));
    }
    if (isOcrGravityModel(gravityModel)) {
        return focusOn(ocr());
    }
    if (isAutoGravityModel(gravityModel)) {
        return createAutoGravityFromModel(gravityModel);
    }
    return createFocusOnGravityFromModel(gravityModel);
}

/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
    /**
     * @description Which part of the original image to include.
     * @param {Qualifiers.Gravity} gravity
     */
    gravity(gravity) {
        this._actionModel.gravity = createGravityModel(gravity);
        const gravityQualifier = typeof gravity === "string" ? new Qualifier('g', gravity) : gravity;
        return this.addQualifier(gravityQualifier);
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        if (actionModel.gravity) {
            result.gravity(createGravityFromModel(actionModel.gravity));
        }
        return result;
    }
}

/**
 * @description Defines the visual appearance of the background.
 * @memberOf Qualifiers.Background
 * @extends {SDK.Qualifier}
 */
class BackgroundQualifier extends Qualifier {
    constructor(backgroundValue) {
        // The qualifier key for this qualifier
        super('b');
        // Such as color (b_red)
        if (backgroundValue) {
            this.addValue(backgroundValue);
        }
    }
}

/**
 * @description A class for blurred background transformations.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BlurredBackgroundAction extends BackgroundQualifier {
    /**
     * @description Sets the intensity of the blur.
     * @param {number} value - The intensity of the blur.
     */
    intensity(value) {
        this.intensityLevel = value;
        return this;
    }
    /**
     * @description Sets the brightness of the background.
     * @param {number} value - The brightness of the background.
     */
    brightness(value) {
        this.brightnessLevel = value;
        return this;
    }
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function
     */
    toString() {
        // b_blurred:{intensity}:{brightness}
        return `
    b_blurred
    ${this.intensityLevel ? `:${this.intensityLevel}` : ''}
    ${this.brightnessLevel ? `:${this.brightnessLevel}` : ''}
    `.replace(/\s+/g, '');
    }
}
var BlurredBackgroundAction$1 = BlurredBackgroundAction;

/**
 * @description Defines the background color to use when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BaseCommonBackground extends BackgroundQualifier {
    constructor() {
        super();
        this._palette = [];
    }
    /**
     * @description Selects the strongest contrasting color to use for padding.
     * @return {this}
     */
    contrast() {
        this._contrast = true;
        return this;
    }
    /**
     * @description Defines the custom colors to use when resizing using content-aware padding.
     * @param {...string} colors One or more colors - Example: palette('green', 'red', blue')
     * @return {this}
     */
    palette(...colors) {
        this._palette = colors.map((color) => {
            return prepareColor(color);
        });
        return this;
    }
}

/**
 * @description Automatically determines the color to use for padding, if needed when resizing an asset. Selects the
 * predominant color from the border of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BackgroundAutoBorderQualifier extends BaseCommonBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:border
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}

/**
 * @description Defines the gradient fade effect to use for the background when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BaseGradientBackground extends BaseCommonBackground {
    /**
     *
     * @description Sets the number of predominant colors to use (2 or 4).
     * @param {number} num
     * @return {this}
     */
    gradientColors(num) {
        this._gradientColors = num;
        return this;
    }
    /**
     * @description Sets the direction for a background gradient fade effect.
     * @param {Qualifiers.GradientDirection | GradientDirectionType | string} direction Use one of these functions
     * provided by {@link Qualifiers.GradientDirection|GradientDirection}
     * @return {this}
     */
    gradientDirection(direction) {
        this._gradientDirection = direction;
        return this;
    }
}

/**
 * @description Specifies that the gradient fade effect, used for the background when resizing with padding, uses the
 * predominant colors in the border pixels of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseGradientBackground}
 */
class BackgroundBorderGradientQualifier extends BaseGradientBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:border_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}

/**
 * @description Specifies that the gradient fade effect, used for the background when resizing with padding, uses the
 * predominant colors in the whole of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseGradientBackground}
 */
class BackgroundPredominantGradientQualifier extends BaseGradientBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:predominant_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}

/**
 * @description Automatically determines the color to use for padding, if needed when resizing an asset. Selects the
 * predominant color from the whole image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BackgroundAutoPredominantQualifier extends BaseCommonBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:predominant
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}

/**
 * Get the value of given background
 * @param background
 */
function getBackgroundValue(background) {
    return `${background}`.replace('b_', '');
}
/**
 * Create an IAutoBackgroundModel from given background
 */
function createAutoBackgroundModel() {
    return { backgroundType: 'auto' };
}
/**
 * Create an IBlurredBackgroundModel from given background
 * @param background
 */
function createBlurredBackgroundModel(background) {
    const { intensityLevel, brightnessLevel } = background;
    const result = {
        backgroundType: 'blurred'
    };
    if (intensityLevel || intensityLevel === 0) {
        result.intensity = intensityLevel;
    }
    if (brightnessLevel || brightnessLevel === 0) {
        result.brightness = brightnessLevel;
    }
    return result;
}
/**
 * Create an IContrastPaletteBackgroundModel from given background
 * @param background
 */
function createContrastPaletteBackgroundModel(background) {
    const contrast = background._contrast;
    const palette = background._palette;
    const result = {
        backgroundType: ''
    };
    if (contrast) {
        result.contrast = true;
    }
    if (palette) {
        result.palette = palette;
    }
    return result;
}
/**
 * Create an IBorderBackgroundModel from given background
 * @param background
 */
function createBorderBackgroundModel(background) {
    return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: 'border' });
}
/**
 * Create an IBaseGradientBackgroundModel from given background
 * @param background
 */
function createBaseGradientBackgroundModel(background) {
    const gradientColors = background._gradientColors;
    const gradientDirection = `${background._gradientDirection}`;
    const result = createContrastPaletteBackgroundModel(background);
    if (gradientColors) {
        result.gradientColors = gradientColors;
    }
    if (gradientDirection) {
        result.gradientDirection = gradientDirection;
    }
    return result;
}
/**
 * Create an IBorderGradientBackgroundModel from given background
 * @param background
 */
function createBorderGradientBackgroundModel(background) {
    return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: 'borderGradient' });
}
/**
 * Create an IColorBackgroundModel from given background
 * @param background
 */
function createColorBackgroundModel(background) {
    return {
        backgroundType: 'color',
        color: getBackgroundValue(background)
    };
}
/**
 * Create an IPredominantBackgroundModel from given background
 * @param background
 */
function createPredominantBackgroundModel(background) {
    return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: 'predominant' });
}
/**
 * Create an IPredominantGradientBackgroundModel from given background
 * @param background
 */
function createPredominantGradientBackgroundModel(background) {
    return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: 'predominantGradient' });
}
/**
 * Create an IBackgroundModel from given background
 * @param background
 */
function createBackgroundModel(background) {
    if (getBackgroundValue(background) === 'auto') {
        return createAutoBackgroundModel();
    }
    if (background instanceof BlurredBackgroundAction$1) {
        return createBlurredBackgroundModel(background);
    }
    if (background instanceof BackgroundAutoBorderQualifier) {
        return createBorderBackgroundModel(background);
    }
    if (background instanceof BackgroundBorderGradientQualifier) {
        return createBorderGradientBackgroundModel(background);
    }
    if (background instanceof BackgroundAutoPredominantQualifier) {
        return createPredominantBackgroundModel(background);
    }
    if (background instanceof BackgroundPredominantGradientQualifier) {
        return createPredominantGradientBackgroundModel(background);
    }
    return createColorBackgroundModel(background);
}

/**
 * @summary qualifier
 * @description Image format svg.
 * @memberOf Qualifiers.Format
 * @return {Qualifiers.Format.FormatQualifier}
 */
function svg() { return new FormatQualifier('svg'); }
/**
 * @summary qualifier
 * @description Image format auto.
 * @memberOf Qualifiers.Format
 * @return {Qualifiers.Format.FormatQualifier}
 */
function auto$1() { return new FormatQualifier('auto'); }

/**
 * @description Defines the background color to use instead of transparent background areas or when resizing with padding.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#setting_background_color|Setting background for images} | {@link https://cloudinary.com/documentation/video_effects_and_enhancements#background_color|Setting background for videos}
 *
 * @namespace Background
 * @memberOf Qualifiers
 */
/**
 * @summary qualifier
 * @description Selects the predominant color while taking only the image border pixels into account.
 * @memberOf Qualifiers.Background
 * @return {BackgroundAutoBorderQualifier}
 */
function border() {
    return new BackgroundAutoBorderQualifier();
}
/**
 * @summary qualifier
 * @description Automatically determines the color to use for padding, if needed when resizing an asset.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#content_aware_padding|Content-aware padding}
 * @memberOf Qualifiers.Background
 * @return {Qualifiers.Background.BackgroundQualifier}
 */
function auto() {
    return new BackgroundQualifier('auto');
}
/**
 * @summary qualifier
 * @description Applies a padding gradient fade effect using the predominant colors in the border of the image.
 * @memberOf Qualifiers.Background
 * @return {BackgroundBorderGradientQualifier}
 */
function borderGradient() {
    return new BackgroundBorderGradientQualifier();
}
/**
 * @summary qualifier
 * @description Applies a padding gradient fade effect using the predominant colors in the image.
 * @memberOf Qualifiers.Background
 * @return {BackgroundPredominantGradientQualifier}
 */
function predominantGradient() {
    return new BackgroundPredominantGradientQualifier();
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account
 * @memberOf Qualifiers.Background
 * @return {BackgroundAutoPredominantQualifier}
 */
function predominant() {
    return new BackgroundAutoPredominantQualifier();
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Qualifiers.Background
 * @return {Qualifiers.Background.BackgroundQualifier}
 */
function color(colorStr) {
    return new BackgroundQualifier(prepareColor(colorStr));
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Qualifiers.Background
 * @return {BlurredBackgroundAction}
 */
function blurred() {
    return new BlurredBackgroundAction$1();
}
const Background = {
    auto: auto,
    border: border,
    borderGradient: borderGradient,
    predominantGradient: predominantGradient,
    predominant: predominant,
    color: color,
    blurred: blurred
};

/**
 * Create BackgroundQualifier from IBlurredBackgroundModel
 * @param backgroundModel
 */
function createBlurredBackground(backgroundModel) {
    const { brightness, intensity } = backgroundModel;
    const result = Background.blurred();
    if (brightness || brightness == 0) {
        result.brightness(brightness);
    }
    if (intensity || intensity == 0) {
        result.intensity(intensity);
    }
    return result;
}
/**
 * Create a gradientBackground from given model
 * @param background
 * @param backgroundModel
 */
function createGradientBackground(background, backgroundModel) {
    const { gradientColors, gradientDirection, contrast, palette } = backgroundModel;
    if (contrast) {
        background.contrast();
    }
    if (palette) {
        background.palette(...palette);
    }
    if (gradientColors) {
        background.gradientColors(+gradientColors);
    }
    if (gradientDirection) {
        background.gradientDirection(gradientDirection);
    }
    return background;
}
/**
 * Crete a background with contrast and palette from given model
 * @param background
 * @param backgroundModel
 */
function createContrastPaletteBackground(background, backgroundModel) {
    const { contrast, palette } = backgroundModel;
    if (contrast) {
        background.contrast();
    }
    if (palette) {
        background.palette(...palette);
    }
    return background;
}
/**
 * Create BackgroundQualifier from IBackgroundModel
 * @param backgroundModel
 */
function createBackgroundFromModel(backgroundModel) {
    const { backgroundType } = backgroundModel;
    switch (backgroundType) {
        case 'auto':
            return auto();
        case 'blurred':
            return createBlurredBackground(backgroundModel);
        case 'border':
            return createContrastPaletteBackground(border(), backgroundModel);
        case 'borderGradient':
            return createGradientBackground(borderGradient(), backgroundModel);
        case 'predominant':
            return createContrastPaletteBackground(predominant(), backgroundModel);
        case 'predominantGradient':
            return createGradientBackground(predominantGradient(), backgroundModel);
        default:
            return color(backgroundModel.color);
    }
}

/**
 * @description Defines an advanced resize with padding.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizePadAction extends ResizeAdvancedAction {
    /**
     * @description Sets the background.
     * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
     * transparent background areas or when resizing with padding.
     */
    background(backgroundQualifier) {
        this._actionModel.background = createBackgroundModel(backgroundQualifier);
        return this.addQualifier(backgroundQualifier);
    }
    /**
     * @description Horizontal position for custom-coordinates based padding.
     * @param {number} x The x position.
     */
    offsetX(x) {
        this._actionModel.x = x;
        return this.addQualifier(new Qualifier('x', x));
    }
    /**
     * @description Vertical position for custom-coordinates based padding
     * @param {number} y The y position.
     */
    offsetY(y) {
        this._actionModel.y = y;
        return this.addQualifier(new Qualifier('y', y));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.background && result.background(createBackgroundFromModel(actionModel.background));
        actionModel.x && result.offsetX(actionModel.x);
        actionModel.y && result.offsetY(actionModel.y);
        actionModel.zoom && result.zoom(actionModel.zoom);
        return result;
    }
}

/**
 * @description Defines a scaling resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeScaleAction extends ResizeSimpleAction {
    /**
     * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
     * distortions.
     * @return {this}
     */
    liquidRescaling() {
        return this.addQualifier(new GravityQualifier('liquid'));
    }
}

/**
 * @description Defines how to crop an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeCropAction extends ResizeAdvancedAction {
    /**
     * @description Horizontal position for custom-coordinates based cropping.
     * @param {number} x The x position.
     */
    x(x) {
        this._actionModel.x = x;
        return this.addQualifier(new Qualifier('x', x));
    }
    /**
     * @description Vertical position for custom-coordinates based cropping
     * @param {number} y The y position.
     */
    y(y) {
        this._actionModel.y = y;
        return this.addQualifier(new Qualifier('y', y));
    }
    /**
     * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
     * @param {number | string} z The zoom factor. (Default: 1.0)
     */
    zoom(z) {
        this._actionModel.zoom = z;
        return this.addQualifier(new Qualifier('z', z));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.x && result.x(actionModel.x);
        actionModel.y && result.y(actionModel.y);
        actionModel.zoom && result.zoom(actionModel.zoom);
        return result;
    }
}

/**
 * @description Defines how to crop-fill an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeFillAction extends ResizeAdvancedAction {
    /**
     * @description Absolute X position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
     * @param {number} x The x position.
     */
    x(x) {
        this._actionModel.x = x;
        return this.addQualifier(new Qualifier('x', x));
    }
    /**
     * @description Absolute Y position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
     * @param {number} y The y position.
     */
    y(y) {
        this._actionModel.y = y;
        return this.addQualifier(new Qualifier('y', y));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.x && result.x(actionModel.x);
        actionModel.y && result.y(actionModel.y);
        return result;
    }
}

/**
 * @description Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 * @see Learn more about Gravity and Focus {@link Qualifiers.Gravity| here }
 * @example
 * <caption> <h4>Scaling an image</h4> </caption>
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {scale, fit, pad, crop} from '@cloudinary/url-gen/actions/resize';
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * image.resize( scale(100, 100) );
 * // All resize actions have a similar interface.
 * // image.resize( fit(100, 100)) );
 * // image.resize( pad(100, 100)) );
 * // image.resize( crop(100, 100)) );
 * // However, Some actions have additional arguments exposed as builder methods.
 * // See the documentation for each method for more information
 *
 *
 * // Alternative syntax, using builder methods
 * image.resize(
 *  scale()
 *    .width(100)
 *    .height(100)
 * );
 * image.toString()
 *
 * @example
 * <caption> <h4>Cropping with automatic focus(Gravity)</h4> </caption>
 * import {Cloudinary} from "@cloudinary/url-gen";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * import {scale} from '@cloudinary/url-gen/actions/resize';
 * import {autoGravity} from '@cloudinary/url-gen/qualifiers/gravity';
 *
 * image.resize( crop(100, 100).gravity(autoGravity()) );
 *
 * // Alternative syntax, using builder methods
 * image.resize(
 *  scale()
 *    .width(100)
 *    .height(100)
 *    .gravity(autoGravity())
 * );
 * image.toString()
 */
/**
 * @summary action
 * @description
 * Changes the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ScaleAction}
 */
function scale(width, height) {
    return new ResizeScaleAction('scale', width, height);
}
/**
 * @summary action
 * @description Extracts a region of the given width and height out of the original image.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeCropAction}
 */
function crop(width, height) {
    return new ResizeCropAction('crop', width, height);
}
/**
 * @summary action
 * @description
 * Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeFillAction}
 */
function fill(width, height) {
    return new ResizeFillAction('fill', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizePadAction}
 */
function pad(width, height) {
    return new ResizePadAction('pad', width, height);
}

/**
 * @description Controls the quality of the delivered image or video.
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryQualityAction extends DeliveryAction {
    /**
     * @param {Qualifiers.Quality} qualityValue a Quality value
     */
    constructor(qualityValue) {
        super('q', qualityValue.toString(), 'level');
    }
    /**
     * Selet the Chroma sub sampling</br>
     * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_optimization#toggle_chroma_subsampling|Toggling chroma subsampling}
     * @param {420 | 444 | number} type The chroma sub sampling type
     */
    chromaSubSampling(type) {
        this._actionModel.chromaSubSampling = CHROMA_VALUE_TO_CHROMA_MODEL_ENUM[type];
        const qualityWithSubSampling = new QualifierValue([this._actionModel.level, type]);
        qualityWithSubSampling.setDelimiter(':');
        // We either have chroma or quantization, but not both
        return this.addQualifier(new Qualifier('q', qualityWithSubSampling));
    }
    /**
     * Controls the final quality by setting a maximum quantization percentage
     * @param {number} val
     */
    quantization(val) {
        this._actionModel.quantization = val;
        const qualityWithQuantization = new QualifierValue([this._actionModel.level, `qmax_${val}`]).setDelimiter(':');
        // We either have chroma or quantization, but not both
        return this.addQualifier(new Qualifier('q', qualityWithQuantization));
    }
    static fromJson(actionModel) {
        const { level, chromaSubSampling, quantization } = actionModel;
        const levelType = ACTION_TYPE_TO_QUALITY_MODE_MAP[level] || level;
        const result = new this(levelType);
        if (chromaSubSampling) {
            //Turn strings like 'CHROMA_420' to 420
            const chromaValue = CHROMA_MODEL_ENUM_TO_CHROMA_VALUE[chromaSubSampling.toUpperCase()];
            chromaValue && result.chromaSubSampling(+chromaValue);
        }
        quantization && result.quantization(quantization);
        return result;
    }
}

/**
 * @description Defines transformations for delivering your assets without changing the visual or audio experience for the end user.
 * @memberOf Actions
 * @namespace Delivery
 * @example
 * See the examples under every method
 */
/**
 * @summary action
 * @description Defines the format of the delivered asset.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#image_format_support|Image formats}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats|Video formats}
 *
 * @memberOf Actions.Delivery
 * @param {string} format The file format. For a list of supported format types see {@link Qualifiers.Format| format types} for
 * possible values
 * @return {Actions.Delivery.DeliveryFormat}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {format} from "@cloudinary/url-gen/actions/delivery";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  format('jpg'),
 * );
 *
 */
function format(format) {
    return new DeliveryFormatAction('f', format);
}
/**
 * @summary action
 * @description Controls the quality of the delivered image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_optimization#how_to_optimize_image_quality|Image quality}
 *  {@link https://cloudinary.com/documentation/video_optimization#how_to_optimize_video_quality|Video quality}
 * @memberOf Actions.Delivery
 * @param {QualityTypes | string | number | Qualifiers.Quality} qualityType For a list of supported quality types see
 * {@link Qualifiers.Quality| quality types} for
 * possible values.
 * @return {Actions.Delivery.DeliveryQualityAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {quality} from "@cloudinary/url-gen/actions/delivery";
 * import {quality} from "@cloudinary/url-gen/qualifiers/quantity";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  quality('auto'),
 * );
 */
function quality(qualityType) {
    return new DeliveryQualityAction(qualityType);
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Compass
 * @description North east corner (top right).
 * @return {Qualifiers.Compass.CompassQualifier} Compass
 */
function northEast() {
    return new CompassQualifier('north_east');
}

/**
 * Predefined accessibility transformations
 * @const {Object} Cloudinary.ACCESSIBILITY_MODES
 */
var ACCESSIBILITY_MODES = {
    'darkmode': colorize(70).color('black'),
    'brightmode': colorize(40).color('white'),
    'monochrome': grayscale(),
    'colorblind': assistColorBlind()
};
/**
 * Predefined vectorize placeholder transformation
 */
var VECTORIZE = new Transformation()
    .effect(vectorize())
    .delivery(quality('auto'))
    .delivery(format(svg()));
/**
 * Predefined pixelate placeholder transformation
 */
var PIXELATE = new Transformation()
    .effect(pixelate())
    .delivery(quality('auto'))
    .delivery(format(auto$1()));
/**
 * Predefined blur placeholder transformation
 */
var BLUR = new Transformation()
    .effect(blur(2000))
    .delivery(quality('auto'))
    .delivery(format(auto$1()));
/**
 * Predefined predominant color placeholder transformation
 */
var PREDOMINANT_COLOR_TRANSFORM = new Transformation()
    .resize(pad('iw_div_2').aspectRatio(1).background(Background.auto()))
    .resize(crop(1, 1).gravity(compass(northEast())))
    .resize(fill().height('ih').width('iw'))
    .delivery(quality('auto'))
    .delivery(format(auto$1()));
/**
 * Predefined placeholder image options
 */
var PLACEHOLDER_IMAGE_OPTIONS = {
    'vectorize': VECTORIZE,
    'pixelate': PIXELATE,
    'blur': BLUR,
    'predominant-color': PREDOMINANT_COLOR_TRANSFORM
};
/**
 * transparent gif
 */
var singleTransparentPixel = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
/**
 * Convert common video file extensions to mime types
 * Most other common video file extensions have an identical mime type so do not need conversion.
 */
var VIDEO_MIME_TYPES = {
    'flv': 'x-flv',
    '3gp': '3gpp',
    'mov': 'quicktime',
    'mpg': 'mpeg',
    'avi': 'x-msvideo',
    'wmv': 'x-ms-wmv',
    'ogv': 'ogg',
    'webm': 'webm',
    'mp4': 'mp4',
};

var ANALYTICS_DELIMITER = '?_a=';
var HtmlVideoLayer = /** @class */ (function () {
    function HtmlVideoLayer(element, userCloudinaryVideo, sources, plugins, videoAttributes) {
        var _this = this;
        this.mimeType = 'video';
        this.mimeSubTypes = VIDEO_MIME_TYPES;
        this.videoElement = element;
        this.originalVideo = userCloudinaryVideo;
        this.htmlPluginState = { cleanupCallbacks: [], pluginEventSubscription: [] };
        var pluginCloudinaryVideo = cloneDeep(userCloudinaryVideo);
        render(element, userCloudinaryVideo, plugins, this.htmlPluginState)
            .then(function () {
            _this.htmlPluginState.pluginEventSubscription.forEach(function (fn) { fn(); });
            _this.setVideoAttributes(videoAttributes);
            _this.handleSourceToVideo(pluginCloudinaryVideo, sources);
        });
    }
    /**
     * Handles user supplied sources or default sources
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param sources
     */
    HtmlVideoLayer.prototype.handleSourceToVideo = function (userCloudinaryVideo, sources) {
        var _this = this;
        // checks if user supplied sources
        if (sources) {
            this.generateUserSources(userCloudinaryVideo, sources);
        }
        else {
            var defaultTypes = ['webm', 'mp4', 'ogv'];
            defaultTypes.forEach(function (type) {
                _this.appendSourceTag(userCloudinaryVideo, type);
            });
        }
    };
    /**
     * Generate sources based on user input
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param sources
     */
    HtmlVideoLayer.prototype.generateUserSources = function (userCloudinaryVideo, sources) {
        var _this = this;
        sources.map(function (_a) {
            var type = _a.type, codecs = _a.codecs, transcode = _a.transcode;
            return (_this.appendSourceTag(cloneDeep(userCloudinaryVideo)
                .transcode(transcode), type, _this.buildMimeType(type, codecs)));
        });
    };
    /**
     * Appends source tag to html video element
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param type {string}
     * @param mimeType {string}
     */
    HtmlVideoLayer.prototype.appendSourceTag = function (userCloudinaryVideo, type, mimeType) {
        var source = document.createElement('source');
        var url = userCloudinaryVideo.toURL();
        // Split url to get analytics string so that we can insert the file extension (type) before it
        // To simplify this we could add a .getPublicId to CloudinaryVideo and do vid.setPublicId(vid.getPublicId+type)
        // Another option could be to add a .setExtension, which will allow to do vid.setExtension(type)
        var srcParts = url.split(ANALYTICS_DELIMITER);
        var analyticsStr = srcParts[1] ? "".concat(ANALYTICS_DELIMITER).concat(srcParts[1]) : '';
        source.src = "".concat(srcParts[0], ".").concat(type).concat(analyticsStr);
        // Ideally, we want to use the VIDEO_MIME_TYPE to detect the mime of the extension
        // For future proofing of simple formats (say .foo and mimetype of video/foo), we also fallback to the actual type
        source.type = mimeType ? mimeType : "video/".concat(VIDEO_MIME_TYPES[type] || type);
        this.videoElement.appendChild(source);
    };
    /**
     * Determines MIME type of given source type and codecs.
     * @param type - format of the video
     * @param codecs - optional information about codecs of the video
     */
    HtmlVideoLayer.prototype.buildMimeType = function (type, codecs) {
        var mimeType = "".concat(this.mimeType, "/").concat(this.mimeSubTypes[type] || type);
        if (codecs) {
            mimeType += "; codecs=" + (Array.isArray(codecs) ? codecs.join(', ') : codecs);
        }
        return mimeType;
    };
    /**
     * Iterates through the video attributes and sets to true if passed in by the user.
     * In case of poster, sets the poster.
     * @param videoAttributes {object} Supported attributes: controls, loop, muted, poster, preload, autoplay, playsinline
     */
    HtmlVideoLayer.prototype.setVideoAttributes = function (videoAttributes) {
        if (videoAttributes) {
            for (var _i = 0, _a = Object.entries(videoAttributes); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                // Boolean attributes are considered to be true if they're present on the element at all.
                // You should set value to the empty string ("") or the attribute's name.
                // See https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
                value && this.videoElement.setAttribute(key, key === 'poster' ? value : '');
            }
        }
    };
    /**
     * Called when component is updated. If our video source has changed, a video reload is triggered.
     * @param updatedCloudinaryVideo
     * @param sources
     * @param plugins
     * @param videoAttributes
     */
    HtmlVideoLayer.prototype.update = function (updatedCloudinaryVideo, sources, plugins, videoAttributes) {
        var _this = this;
        if (updatedCloudinaryVideo !== this.originalVideo) {
            var sourcesToDelete = this.videoElement.getElementsByTagName("SOURCE");
            while (sourcesToDelete[0])
                sourcesToDelete[0].parentNode.removeChild(sourcesToDelete[0]);
            render(this.videoElement, updatedCloudinaryVideo, plugins, this.htmlPluginState)
                .then(function () {
                _this.setVideoAttributes(videoAttributes);
                _this.handleSourceToVideo(updatedCloudinaryVideo, sources);
                _this.videoElement.load();
            });
        }
    };
    return HtmlVideoLayer;
}());

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

/**
 * Returns true if value is number
 * @param value
 */
function isNum(value) {
    return typeof value === "number";
}

/**
 * return true when window is defined
 */
function isBrowser() {
    return typeof window !== 'undefined';
}

/**
 * returns true if input is an image element
 * @param i
 */
function isImage(i) {
    return i instanceof HTMLImageElement;
}

/**
 * @namespace
 * @description Updates the src with the size of the parent element and triggers a resize event for
 * subsequent resizing.
 * @param steps {number | number[]} The step size in pixels or an array of image widths in pixels.
 * @return {Plugin}
 * @example <caption>NOTE: The following is in React. For further examples, see the Packages tab.</caption>
 * <AdvancedImage cldImg={img} plugins={[responsive({steps: [800, 1000, 1400]})]} />
 */
function responsive(_a) {
    var _b = _a === void 0 ? {} : _a, steps = _b.steps;
    return responsivePlugin.bind(null, steps);
}
/**
 * @description Responsive plugin
 * @param steps {number | number[]} The step size in pixels.
 * @param element {HTMLImageElement} The image element
 * @param responsiveImage {CloudinaryImage}
 * @param htmlPluginState {HtmlPluginState} holds cleanup callbacks and event subscriptions
 */
function responsivePlugin(steps, element, responsiveImage, htmlPluginState) {
    if (!isBrowser())
        return true;
    if (!isImage(element))
        return;
    return new Promise(function (resolve) {
        htmlPluginState.cleanupCallbacks.push(function () {
            window.removeEventListener("resize", resizeRef);
            resolve('canceled');
        });
        // Use a tagged generic action that can be later searched and replaced.
        responsiveImage.addAction(new Action().setActionTag('responsive'));
        // Immediately run the resize plugin, ensuring that first render gets a responsive image.
        onResize(steps, element, responsiveImage);
        var resizeRef;
        htmlPluginState.pluginEventSubscription.push(function () {
            window.addEventListener('resize', resizeRef = lodash_debounce(function () {
                onResize(steps, element, responsiveImage);
            }, 100));
        });
        resolve();
    });
}
/**
 * On resize updates image src
 * @param steps {number | number[]} The step size in pixels.
 * | number[] A set of image sizes in pixels.
 * @param element {HTMLImageElement} The image element
 * @param responsiveImage {CloudinaryImage}
 */
function onResize(steps, element, responsiveImage) {
    updateByContainerWidth(steps, element, responsiveImage);
    element.src = responsiveImage.toURL();
}
/**
 * Updates the responsiveImage by container width.
 * @param steps {number | number[]} The step size in pixels.
 * | number[] A set of image sizes in pixels.
 * @param element {HTMLImageElement} The image element
 * @param responsiveImage {CloudinaryImage}
 */
function updateByContainerWidth(steps, element, responsiveImage) {
    // Default value for responsiveImgWidth, used when no steps are passed.
    var responsiveImgWidth = element.parentElement.clientWidth;
    if (isNum(steps)) {
        var WIDTH_INTERVALS = steps;
        // We need to force the container width to be intervals of max width.
        responsiveImgWidth = Math.ceil(responsiveImgWidth / WIDTH_INTERVALS) * WIDTH_INTERVALS;
    }
    else if (Array.isArray(steps)) {
        responsiveImgWidth = steps.reduce(function (prev, curr) {
            return (Math.abs(curr - responsiveImgWidth) < Math.abs(prev - responsiveImgWidth) ? curr : prev);
        });
    }
    responsiveImage.transformation.actions.forEach(function (action, index) {
        if (action instanceof Action && action.getActionTag() === 'responsive') {
            responsiveImage.transformation.actions[index] = scale(responsiveImgWidth).setActionTag('responsive');
        }
    });
}

/**
 * @namespace
 * @description Loads an image once it is in a certain margin in the viewport. This includes vertical and horizontal scrolling.
 * @param rootMargin {string} The root element's bounding box before the intersection test is performed. Default: 0px.
 * @param threshold {number} The percentage of the image's visibility at which point the image should load. Default: 0.1 (10%).
 * @return {Plugin}
 * @example
 * <caption>
 * NOTE: The following is in React. For further examples, see the Packages tab.
 * When using the plugin make sure to add dimensions, otherwise the images will load with
 * the size of 0x0, meaning the images will be in the viewport and trigger the lazyload plugin.
 * </caption>
 * <AdvancedImage style={{width: "400px", height: "400px"}}  cldImg={img} plugins={[lazyload({rootMargin: '0px',
 * threshold: 0.25})]} />
 */
function lazyload(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.rootMargin, rootMargin = _c === void 0 ? '0px' : _c, _d = _b.threshold, threshold = _d === void 0 ? 0.1 : _d;
    return lazyloadPlugin.bind(null, rootMargin, threshold);
}
/**
 * @description lazyload plugin
 * @param rootMargin {string} The root element's bounding box before the intersection test is performed. Default: 0px.
 * @param threshold {number} The percentage of the image's visibility at which point the image should load. Default: 0.1 (10%).
 * @param element The image element.
 * @param element {HTMLImageElement} The image element.
 * @param cloudinaryImage {CloudinaryImage}
 * @param htmlPluginState {HtmlPluginState} Holds cleanup callbacks and event subscriptions.
 */
function lazyloadPlugin(rootMargin, threshold, element, cloudinaryImage, htmlPluginState) {
    if (rootMargin === void 0) { rootMargin = '0px'; }
    if (threshold === void 0) { threshold = 0.1; }
    // if SSR skip plugin
    if (!isBrowser())
        return false;
    return new Promise(function (resolve) {
        var onIntersect = function () { return (resolve()); };
        var unobserve = detectIntersection(element, onIntersect, rootMargin, threshold);
        htmlPluginState.cleanupCallbacks.push(function () {
            unobserve();
            resolve('canceled');
        });
    });
}
/**
 * Check if IntersectionObserver is supported
 * @return {boolean} true if window.IntersectionObserver is defined
 */
function isIntersectionObserverSupported() {
    // Check that 'IntersectionObserver' property is defined on window
    return window && 'IntersectionObserver' in window;
}
/**
 * Calls onIntersect() to resolve when intersection is detected, or when
 * no native lazy loading or when IntersectionObserver isn't supported.
 * @param {Element} el - the element to observe
 * @param {function} onIntersect - called when the given element is in view
 * @param rootMargin {string} The root element's bounding box before the intersection test is performed. Default: 0px.
 * @param threshold {number} The percentage of the image's visibility at which point the image should load. Default: 0.1 (10%).
 */
function detectIntersection(el, onIntersect, rootMargin, threshold) {
    try {
        if (!isIntersectionObserverSupported()) {
            // Return if there's no need or possibility to detect intersection
            onIntersect();
            return;
        }
        // Detect intersection with given element using IntersectionObserver
        var observer_1 = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    observer_1.unobserve(entry.target);
                    onIntersect();
                }
            });
        }, { rootMargin: rootMargin, threshold: threshold });
        observer_1.observe(el);
        return function () { el && observer_1.observe(el); };
    }
    catch (e) {
        onIntersect();
    }
}

/**
 * @namespace
 * @description Appends accessibility transformations to the original image.
 * @return {Plugin}
 * @example <caption>NOTE: The following is in React. For further examples, see the Packages tab.</caption>
 * <AdvancedImage cldImg={img} plugins={[accessibility()]}/>
 */
function accessibility(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode = _c === void 0 ? 'darkmode' : _c;
    return accessibilityPlugin.bind(null, mode);
}
/**
 * @description Accessibility plugin
 * @param mode {accessibilityMode} The accessibility mode to use. Possible modes: 'darkmode' | 'brightmode' | 'monochrome' | 'colorblind'. Default: 'darkmode'.
 * @param element {HTMLImageElement} The image element.
 * @param pluginCloudinaryImage {CloudinaryImage}
 * @param htmlPluginState {htmlPluginState} Holds cleanup callbacks and event subscriptions.
 */
function accessibilityPlugin(mode, element, pluginCloudinaryImage, htmlPluginState) {
    if (isBrowser()) {
        if (!isImage(element))
            return;
        return new Promise(function (resolve) {
            // resolved promise when canceled
            htmlPluginState.cleanupCallbacks.push(function () {
                resolve('canceled');
            });
            if (!ACCESSIBILITY_MODES[mode]) {
                mode = 'darkmode';
            }
            pluginCloudinaryImage.effect(ACCESSIBILITY_MODES[mode]);
            resolve();
        });
    }
    else {
        pluginCloudinaryImage.effect(ACCESSIBILITY_MODES[mode]);
        return true;
    }
}

/**
 * @namespace
 * @description Displays a placeholder image until the original image loads.
 * @param mode {PlaceholderMode} The type of placeholder image to display. Possible modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'. Default: 'vectorize'.
 * @return {Plugin}
 * @example <caption>NOTE: The following is in React. For further examples, see the Packages tab.</caption>
 * <AdvancedImage cldImg={img} plugins={[placeholder({mode: 'blur'})]} />
 */
function placeholder(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode = _c === void 0 ? 'vectorize' : _c;
    return placeholderPlugin.bind(null, mode);
}
/**
 * @description Placeholder plugin
 * @param mode {PlaceholderMode} The type of placeholder image to display. Possible modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'. Default: 'vectorize'.
 * @param element {HTMLImageElement} The image element.
 * @param pluginCloudinaryImage {CloudinaryImage}
 * @param htmlPluginState {htmlPluginState} Holds cleanup callbacks and event subscriptions.
 */
function placeholderPlugin(mode, element, pluginCloudinaryImage, htmlPluginState) {
    // @ts-ignore
    // If we're using an invalid mode, we default to vectorize
    if (!PLACEHOLDER_IMAGE_OPTIONS[mode]) {
        mode = 'vectorize';
    }
    // A placeholder mode maps to an array of transformations
    var PLACEHOLDER_ACTIONS = PLACEHOLDER_IMAGE_OPTIONS[mode].actions;
    // Before proceeding, clone the original image
    // We clone because we don't want to pollute the state of the image
    // Future renders (after the placeholder is loaded) should not load placeholder transformations
    var placeholderClonedImage = cloneDeep(pluginCloudinaryImage);
    //appends a placeholder transformation on the clone
    // @ts-ignore
    PLACEHOLDER_ACTIONS.forEach(function (transformation) {
        placeholderClonedImage.addAction(transformation);
    });
    if (!isBrowser()) {
        // in SSR, we copy the transformations of the clone to the user provided CloudinaryImage
        // We return here, since we don't have HTML elements to work with.
        pluginCloudinaryImage.transformation = placeholderClonedImage.transformation;
        return true;
    }
    // Client side rendering, if an image was not provided we don't perform any action
    if (!isImage(element))
        return;
    // For the cloned placeholder image, we remove the responsive action.
    // There's no need to load e_pixelate,w_{responsive} beacuse that image is temporary as-is
    // and it just causes another image to load.
    // This also means that the de-facto way to use responsive in SSR is WITH placeholder.
    // This also means that the user must provide dimensions for the responsive plugin on the img tag.
    placeholderClonedImage.transformation.actions.forEach(function (action, index) {
        if (action instanceof Action && action.getActionTag() === 'responsive') {
            delete placeholderClonedImage.transformation.actions[index];
        }
    });
    // Set the SRC of the imageElement to the URL of the placeholder Image
    element.src = placeholderClonedImage.toURL();
    //Fallback, if placeholder errors, load a single transparent pixel
    element.onerror = function () {
        element.src = singleTransparentPixel;
    };
    /*
     * This plugin loads two images:
     * - The first image is loaded as a placeholder
     * - The second image is loaded after the placeholder is loaded
     *
     * Placeholder image loads first. Once it loads, the promise is resolved and the
     * larger image will load. Once the larger image loads, promised and plugin is resolved.
     */
    return new Promise(function (resolve) {
        element.onload = function () {
            resolve();
        };
    }).then(function () {
        return new Promise(function (resolve) {
            htmlPluginState.cleanupCallbacks.push(function () {
                element.src = singleTransparentPixel;
                resolve('canceled');
            });
            // load image once placeholder is done loading
            var largeImage = new Image();
            largeImage.src = pluginCloudinaryImage.toURL();
            largeImage.onload = function () {
                element.src = largeImage.src;
                resolve();
            };
            // image does not load, resolve
            largeImage.onerror = function () {
                resolve();
            };
        });
    });
}

function serverSideSrc(plugins, serverCloudinaryImage) {
    var clonedServerCloudinaryImage = cloneDeep(serverCloudinaryImage);
    if (plugins) {
        for (var i = 0; i < plugins.length; i++) {
            var response = plugins[i](null, clonedServerCloudinaryImage);
            if (!response) { //lazyload
                break;
            }
        }
    }
    return clonedServerCloudinaryImage.toURL();
}

/**
 * Cancels currently running plugins. This is called from unmount or update
 * @param pluginState {HtmlPluginState} Holds cleanup callbacks and event subscriptions
 */
function cancelCurrentlyRunningPlugins(pluginState) {
    pluginState.cleanupCallbacks.forEach(function (fn) {
        fn(); // resolve each promise with 'canceled'
    });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/background/actions/BackgroundColor.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/background/actions/BackgroundColor.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundColor": () => (/* binding */ BackgroundColor)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");



/**
 * @extends SDK.Action
 * @description A class for background transformations.
 */
class BackgroundColor extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(color) {
        super();
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('b', new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_2__.QualifierValue(color).setDelimiter('_')));
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Delivery": () => (/* binding */ Delivery),
/* harmony export */   "colorSpace": () => (/* binding */ colorSpace),
/* harmony export */   "colorSpaceFromICC": () => (/* binding */ colorSpaceFromICC),
/* harmony export */   "defaultImage": () => (/* binding */ defaultImage),
/* harmony export */   "density": () => (/* binding */ density),
/* harmony export */   "dpr": () => (/* binding */ dpr),
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "quality": () => (/* binding */ quality)
/* harmony export */ });
/* harmony import */ var _delivery_DeliveryFormatAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery/DeliveryFormatAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js");
/* harmony import */ var _delivery_DeliveryQualityAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery/DeliveryQualityAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryQualityAction.js");
/* harmony import */ var _delivery_DeliveryColorSpaceFromICCAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery/DeliveryColorSpaceFromICCAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceFromICCAction.js");
/* harmony import */ var _delivery_DeliveryAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery/DeliveryAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js");
/* harmony import */ var _delivery_DeliveryColorSpaceAction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery/DeliveryColorSpaceAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceAction.js");
/* harmony import */ var _delivery_DeliveryDPRAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery/DeliveryDPRAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryDPRAction.js");
/**
 * @description Defines transformations for delivering your assets without changing the visual or audio experience for the end user.
 * @memberOf Actions
 * @namespace Delivery
 * @example
 * See the examples under every method
 */






/**
 * @summary action
 * @description Defines the format of the delivered asset.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#image_format_support|Image formats}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats|Video formats}
 *
 * @memberOf Actions.Delivery
 * @param {string} format The file format. For a list of supported format types see {@link Qualifiers.Format| format types} for
 * possible values
 * @return {Actions.Delivery.DeliveryFormat}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {format} from "@cloudinary/url-gen/actions/delivery";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  format('jpg'),
 * );
 *
 */
function format(format) {
    return new _delivery_DeliveryFormatAction_js__WEBPACK_IMPORTED_MODULE_0__.DeliveryFormatAction('f', format);
}
/**
 * @summary action
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr The DPR (Device Pixel Ratio). Any positive float value.
 * @return {Actions.Delivery.DeliveryAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {dpr} from "@cloudinary/url-gen/actions/delivery";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  dpr('2.0'),
 * );
 */
function dpr(dpr) {
    return new _delivery_DeliveryDPRAction_js__WEBPACK_IMPORTED_MODULE_1__.DeliveryDPRAction(dpr);
}
/**
 * @summary action
 * @description Controls the quality of the delivered image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_optimization#how_to_optimize_image_quality|Image quality}
 *  {@link https://cloudinary.com/documentation/video_optimization#how_to_optimize_video_quality|Video quality}
 * @memberOf Actions.Delivery
 * @param {QualityTypes | string | number | Qualifiers.Quality} qualityType For a list of supported quality types see
 * {@link Qualifiers.Quality| quality types} for
 * possible values.
 * @return {Actions.Delivery.DeliveryQualityAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {quality} from "@cloudinary/url-gen/actions/delivery";
 * import {quality} from "@cloudinary/url-gen/qualifiers/quantity";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  quality('auto'),
 * );
 */
function quality(qualityType) {
    return new _delivery_DeliveryQualityAction_js__WEBPACK_IMPORTED_MODULE_2__.DeliveryQualityAction(qualityType);
}
/**
 * @summary action
 * @description Controls the density to use when delivering an image or when converting a vector file such as a PDF or EPS
 * document to a web image delivery format.
 * @memberOf Actions.Delivery
 * @param {number | string} value The density in dpi.
 * @return {Actions.Delivery.DeliveryAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {density} from "@cloudinary/url-gen/actions/delivery";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  density(150),
 * );
 */
function density(value) {
    return new _delivery_DeliveryAction_js__WEBPACK_IMPORTED_MODULE_3__.DeliveryAction('dn', value, 'density');
}
/**
 * @summary action
 * @description Default images can be used in the case that a requested image does not exist.
 * @memberOf Actions.Delivery
 * @param {string} publicIdWithExtension Default image public ID
 * @return {Actions.Delivery.DeliveryAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {defaultImage} from "@cloudinary/url-gen/actions/delivery";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  defaultImage('sample'),
 * );
 */
function defaultImage(publicIdWithExtension) {
    return new _delivery_DeliveryAction_js__WEBPACK_IMPORTED_MODULE_3__.DeliveryAction('d', publicIdWithExtension, 'defaultImage');
}
/**
 * @summary action
 * @description Controls the color space used for the delivered image.
 * @memberOf Actions.Delivery
 * @param {string | Qualifiers.ColorSpace} mode The color space.
 * @return {Actions.Delivery.DeliveryAction}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {colorSpace} from "@cloudinary/url-gen/actions/delivery";
 * import {trueColor} from "@cloudinary/url-gen/qualifiers/colorSpace";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  colorSpace(trueColor()),
 * );
 */
function colorSpace(mode) {
    return new _delivery_DeliveryColorSpaceAction_js__WEBPACK_IMPORTED_MODULE_4__.DeliveryColorSpaceAction(mode);
}
/**
 * @summary action
 * @description Specifies the ICC profile to use for the color space.
 * The ICC file must be uploaded to your account as a raw, authenticated file.
 * @memberOf Actions.Delivery
 * @param {string} publicId The public ID (including the file extension) of the ICC profile that defines the
 * color space.
 * @return {Actions.Delivery.DeliveryColorSpaceFromICC}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {colorSpaceFromICC} from "@cloudinary/url-gen/actions/delivery";
 * import {trueColor} from "@cloudinary/url-gen/qualifiers/colorSpace";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(
 *  colorSpaceFromICC('sample.icc'),
 * );
 */
function colorSpaceFromICC(publicId) {
    return new _delivery_DeliveryColorSpaceFromICCAction_js__WEBPACK_IMPORTED_MODULE_5__.DeliveryColorSpaceFromICCAction(publicId);
}
const Delivery = {
    format,
    dpr,
    density,
    defaultImage,
    colorSpace,
    colorSpaceFromICC,
    quality
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryAction": () => (/* binding */ DeliveryAction)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _qualifiers_format_FormatQualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/format/FormatQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/format/FormatQualifier.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/internalConstants.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js");




/**
 * @description Qualifies the delivery of an asset.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 */
class DeliveryAction extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    /**
     * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
     * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
     * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
     * @see Visit {@link Actions.Delivery|Delivery} for an example
     */
    constructor(deliveryKey, deliveryType, modelProperty) {
        super();
        this._actionModel = {};
        let deliveryTypeValue;
        if (deliveryType instanceof _qualifiers_format_FormatQualifier_js__WEBPACK_IMPORTED_MODULE_1__.FormatQualifier) {
            deliveryTypeValue = deliveryType.getValue();
        }
        else {
            deliveryTypeValue = deliveryType;
        }
        this._actionModel.actionType = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_2__.DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
        this._actionModel[modelProperty] = deliveryTypeValue;
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__.Qualifier(deliveryKey, deliveryType));
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceAction.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceAction.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryColorSpaceAction": () => (/* binding */ DeliveryColorSpaceAction)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _qualifiers_colorSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../qualifiers/colorSpace.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/colorSpace.js");
/* harmony import */ var _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/internalConstants.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js");




/**
 * @description Specifies the color space to use.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryColorSpaceAction extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    /**
     * Create a new DeliveryColorSpaceAction
     * @param mode
     */
    constructor(mode) {
        super();
        this._actionModel = {};
        this._actionModel = {
            actionType: 'colorSpace',
            mode: (_internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP[mode] || mode)
        };
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('cs', _qualifiers_colorSpace_js__WEBPACK_IMPORTED_MODULE_3__.ColorSpace[mode] ? _qualifiers_colorSpace_js__WEBPACK_IMPORTED_MODULE_3__.ColorSpace[mode]() : mode));
    }
    static fromJson(actionModel) {
        const { mode } = actionModel;
        const colorSpaceMode = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP[mode] || mode;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        return new this(colorSpaceMode);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceFromICCAction.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryColorSpaceFromICCAction.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryColorSpaceFromICCAction": () => (/* binding */ DeliveryColorSpaceFromICCAction)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");



/**
 * @description Specifies the ICC profile to use for the color space.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryColorSpaceFromICCAction extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    /**
     * @param {string} publicId
     */
    constructor(publicId) {
        super();
        this._actionModel = {};
        this._actionModel.actionType = 'colorSpaceFromICC';
        this._actionModel.publicId = publicId;
        const qualifierValue = new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__.QualifierValue(['icc', publicId]).setDelimiter(':');
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('cs', qualifierValue));
    }
    static fromJson(actionModel) {
        const { publicId } = actionModel;
        return new this(publicId);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryDPRAction.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryDPRAction.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryDPRAction": () => (/* binding */ DeliveryDPRAction)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _internal_utils_toFloatAsString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/utils/toFloatAsString.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/toFloatAsString.js");



/**
 * @description Specifies the dpr.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryDPRAction extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    /**
     * Create a new DeliveryDPRAction
     * @param dprValue
     */
    constructor(dprValue) {
        super();
        this._actionModel = { actionType: 'dpr' };
        // toFloatAsString is used to ensure 1 turns into 1.0
        const dprAsFloat = (0,_internal_utils_toFloatAsString_js__WEBPACK_IMPORTED_MODULE_1__.toFloatAsString)(dprValue);
        this._actionModel.dpr = dprAsFloat;
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('dpr', dprAsFloat));
    }
    static fromJson(actionModel) {
        const { dpr } = actionModel;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        return new this(dpr);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryFormatAction": () => (/* binding */ DeliveryFormatAction)
/* harmony export */ });
/* harmony import */ var _qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/flag.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag.js");
/* harmony import */ var _DeliveryAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js");
/* harmony import */ var _qualifiers_progressive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../qualifiers/progressive.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/progressive.js");



/**
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryFormatAction extends _DeliveryAction_js__WEBPACK_IMPORTED_MODULE_0__.DeliveryAction {
    constructor(deliveryKey, deliveryType) {
        super(deliveryKey, deliveryType, 'formatType');
    }
    /**
     * @description Uses lossy compression when delivering animated GIF files.
     * @return {this}
     */
    lossy() {
        this._actionModel.lossy = true;
        this.addFlag((0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_1__.lossy)());
        return this;
    }
    /**
     * @description Uses progressive compression when delivering JPG file format.
     * @return {this}
     */
    progressive(mode) {
        if (mode instanceof _qualifiers_progressive_js__WEBPACK_IMPORTED_MODULE_2__.ProgressiveQualifier) {
            this._actionModel.progressive = { mode: mode.getFlagValue() };
            this.addFlag(mode);
        }
        else {
            this._actionModel.progressive = { mode: mode };
            this.addFlag((0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_1__.progressive)(mode));
        }
        return this;
    }
    /**
     * @description Ensures that images with a transparency channel are delivered in PNG format.
     */
    preserveTransparency() {
        this._actionModel.preserveTransparency = true;
        this.addFlag((0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_1__.preserveTransparency)());
        return this;
    }
    static fromJson(actionModel) {
        const { formatType, lossy, progressive, preserveTransparency } = actionModel;
        let result;
        if (formatType) {
            result = new this('f', formatType);
        }
        else {
            result = new this('f');
        }
        if (progressive) {
            if (progressive.mode) {
                result.progressive(progressive.mode);
            }
            else {
                result.progressive();
            }
        }
        lossy && result.lossy();
        preserveTransparency && result.preserveTransparency();
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryQualityAction.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryQualityAction.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryQualityAction": () => (/* binding */ DeliveryQualityAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _DeliveryAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js");
/* harmony import */ var _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/internalConstants.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js");




/**
 * @description Controls the quality of the delivered image or video.
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryQualityAction extends _DeliveryAction_js__WEBPACK_IMPORTED_MODULE_0__.DeliveryAction {
    /**
     * @param {Qualifiers.Quality} qualityValue a Quality value
     */
    constructor(qualityValue) {
        super('q', qualityValue.toString(), 'level');
    }
    /**
     * Selet the Chroma sub sampling</br>
     * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_optimization#toggle_chroma_subsampling|Toggling chroma subsampling}
     * @param {420 | 444 | number} type The chroma sub sampling type
     */
    chromaSubSampling(type) {
        this._actionModel.chromaSubSampling = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.CHROMA_VALUE_TO_CHROMA_MODEL_ENUM[type];
        const qualityWithSubSampling = new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_2__.QualifierValue([this._actionModel.level, type]);
        qualityWithSubSampling.setDelimiter(':');
        // We either have chroma or quantization, but not both
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__.Qualifier('q', qualityWithSubSampling));
    }
    /**
     * Controls the final quality by setting a maximum quantization percentage
     * @param {number} val
     */
    quantization(val) {
        this._actionModel.quantization = val;
        const qualityWithQuantization = new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_2__.QualifierValue([this._actionModel.level, `qmax_${val}`]).setDelimiter(':');
        // We either have chroma or quantization, but not both
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__.Qualifier('q', qualityWithQuantization));
    }
    static fromJson(actionModel) {
        const { level, chromaSubSampling, quantization } = actionModel;
        const levelType = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE_TO_QUALITY_MODE_MAP[level] || level;
        const result = new this(levelType);
        if (chromaSubSampling) {
            //Turn strings like 'CHROMA_420' to 420
            const chromaValue = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.CHROMA_MODEL_ENUM_TO_CHROMA_VALUE[chromaSubSampling.toUpperCase()];
            chromaValue && result.chromaSubSampling(+chromaValue);
        }
        quantization && result.quantization(quantization);
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resize": () => (/* binding */ Resize),
/* harmony export */   "crop": () => (/* binding */ crop),
/* harmony export */   "fill": () => (/* binding */ fill),
/* harmony export */   "fillPad": () => (/* binding */ fillPad),
/* harmony export */   "fit": () => (/* binding */ fit),
/* harmony export */   "imaggaCrop": () => (/* binding */ imaggaCrop),
/* harmony export */   "imaggaScale": () => (/* binding */ imaggaScale),
/* harmony export */   "limitFill": () => (/* binding */ limitFill),
/* harmony export */   "limitFit": () => (/* binding */ limitFit),
/* harmony export */   "limitPad": () => (/* binding */ limitPad),
/* harmony export */   "minimumFit": () => (/* binding */ minimumFit),
/* harmony export */   "minimumPad": () => (/* binding */ minimumPad),
/* harmony export */   "pad": () => (/* binding */ pad),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "thumbnail": () => (/* binding */ thumbnail)
/* harmony export */ });
/* harmony import */ var _resize_ResizePadAction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resize/ResizePadAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizePadAction.js");
/* harmony import */ var _resize_ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize/ResizeSimpleAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js");
/* harmony import */ var _resize_ResizeScaleAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize/ResizeScaleAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeScaleAction.js");
/* harmony import */ var _resize_ThumbnailAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resize/ThumbnailAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ThumbnailAction.js");
/* harmony import */ var _resize_ResizeCropAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize/ResizeCropAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeCropAction.js");
/* harmony import */ var _resize_ResizeFillAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resize/ResizeFillAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeFillAction.js");
/* harmony import */ var _resize_ResizeLimitFitAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resize/ResizeLimitFitAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFitAction.js");
/* harmony import */ var _resize_ResizeLimitFillAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resize/ResizeLimitFillAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFillAction.js");
/* harmony import */ var _resize_ResizeLimitPadAction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resize/ResizeLimitPadAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitPadAction.js");
/* harmony import */ var _resize_ResizeMinimumPadAction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resize/ResizeMinimumPadAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeMinimumPadAction.js");
/**
 * @description Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 * @see Learn more about Gravity and Focus {@link Qualifiers.Gravity| here }
 * @example
 * <caption> <h4>Scaling an image</h4> </caption>
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {scale, fit, pad, crop} from '@cloudinary/url-gen/actions/resize';
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * image.resize( scale(100, 100) );
 * // All resize actions have a similar interface.
 * // image.resize( fit(100, 100)) );
 * // image.resize( pad(100, 100)) );
 * // image.resize( crop(100, 100)) );
 * // However, Some actions have additional arguments exposed as builder methods.
 * // See the documentation for each method for more information
 *
 *
 * // Alternative syntax, using builder methods
 * image.resize(
 *  scale()
 *    .width(100)
 *    .height(100)
 * );
 * image.toString()
 *
 * @example
 * <caption> <h4>Cropping with automatic focus(Gravity)</h4> </caption>
 * import {Cloudinary} from "@cloudinary/url-gen";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * import {scale} from '@cloudinary/url-gen/actions/resize';
 * import {autoGravity} from '@cloudinary/url-gen/qualifiers/gravity';
 *
 * image.resize( crop(100, 100).gravity(autoGravity()) );
 *
 * // Alternative syntax, using builder methods
 * image.resize(
 *  scale()
 *    .width(100)
 *    .height(100)
 *    .gravity(autoGravity())
 * );
 * image.toString()
 */










/**
 * @summary action
 * @description
 * Changes the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ScaleAction}
 */
function scale(width, height) {
    return new _resize_ResizeScaleAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeScaleAction('scale', width, height);
}
/**
 * @summary action
 * @description
 * Scales your image based on automatically calculated areas of interest within each specific photo.
 *
 * For details, see the Imagga Crop and Scale {@link  https://cloudinary.com/documentation/imagga_crop_and_scale_addon#smartly_scale_images|add-on documentation}.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeSimpleAction}
 */
function imaggaScale(width, height) {
    return new _resize_ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_1__.ResizeSimpleAction('imagga_scale', width, height);
}
/**
 * @summary action
 * @description
 * Crops your image based on automatically calculated areas of interest within each specific photo.
 *
 * For details, see the Imagga Crop and Scale {@link  https://cloudinary.com/documentation/imagga_crop_and_scale_addon#smartly_crop_images|add-on documentation}.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeSimpleAction}
 */
function imaggaCrop(width, height) {
    return new _resize_ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_1__.ResizeSimpleAction('imagga_crop', width, height);
}
/**
 * @summary action
 * @description Extracts a region of the given width and height out of the original image.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeCropAction}
 */
function crop(width, height) {
    return new _resize_ResizeCropAction_js__WEBPACK_IMPORTED_MODULE_2__.ResizeCropAction('crop', width, height);
}
/**
 * @summary action
 * @description
 * Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeFillAction}
 */
function fill(width, height) {
    return new _resize_ResizeFillAction_js__WEBPACK_IMPORTED_MODULE_3__.ResizeFillAction('fill', width, height);
}
/**
 * @summary action
 * @description
 * The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeSimpleAction}
 */
function fit(width, height) {
    return new _resize_ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_1__.ResizeSimpleAction('fit', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizePadAction}
 */
function pad(width, height) {
    return new _resize_ResizePadAction_js__WEBPACK_IMPORTED_MODULE_4__.ResizePadAction('pad', width, height);
}
/**
 * @summary action
 * @description
 * Creates an asset with the exact given width and height without distorting the asset, but only if the original
 * asset is larger than the specified resolution limits.
 *
 * The asset is scaled down to fill the given width and height without distorting the asset, and then the dimension
 * that exceeds the request is cropped. If the original dimensions are both smaller than the requested size, it is
 * not resized at all.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeLimitFillAction}
 */
function limitFill(width, height) {
    return new _resize_ResizeLimitFillAction_js__WEBPACK_IMPORTED_MODULE_5__.ResizeLimitFillAction('lfill', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset so that it takes up as much space as possible within a bounding box defined by the given
 * width and height parameters, but only if the original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down, the original aspect ratio is retained and all of the original asset is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeSimpleAction}
 */
function limitFit(width, height) {
    return new _resize_ResizeLimitFitAction_js__WEBPACK_IMPORTED_MODULE_6__.ResizeLimitFitAction('limit', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizePadAction}
 */
function minimumPad(width, height) {
    return new _resize_ResizeMinimumPadAction_js__WEBPACK_IMPORTED_MODULE_7__.ResizeMinimumPadAction('mpad', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset so that it takes up as much space as possible within a bounding box defined by the given
 * width and height parameters, but only if the original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up, the original aspect ratio is retained and all of the original asset is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizeSimpleAction}
 */
function minimumFit(width, height) {
    return new _resize_ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_1__.ResizeSimpleAction('mfit', width, height);
}
/**
 * @summary action
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode, but adding padding if it is determined
 * that more of the original image needs to be included in the final image.
 *
 * Especially useful if the aspect ratio of the delivered image is considerably different from the original's
 * aspect ratio.
 *
 * Only supported in conjunction with Automatic cropping.
 *
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizePadAction}
 */
function fillPad(width, height) {
    return new _resize_ResizePadAction_js__WEBPACK_IMPORTED_MODULE_4__.ResizePadAction('fill_pad', width, height);
}
/**
 * @summary action
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ThumbResizeAction}
 */
function thumbnail(width, height) {
    return new _resize_ThumbnailAction_js__WEBPACK_IMPORTED_MODULE_8__.ThumbResizeAction('thumb', width, height);
}
/**
 * @summary action
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {Actions.Resize.ResizePadAction}
 */
function limitPad(width, height) {
    return new _resize_ResizeLimitPadAction_js__WEBPACK_IMPORTED_MODULE_9__.ResizeLimitPadAction('lpad', width, height);
}
const Resize = {
    imaggaScale,
    imaggaCrop,
    crop,
    fill,
    scale,
    minimumPad,
    fit,
    pad,
    limitFit,
    thumbnail,
    limitFill,
    minimumFit,
    limitPad,
    fillPad
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeAdvancedAction": () => (/* binding */ ResizeAdvancedAction)
/* harmony export */ });
/* harmony import */ var _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeSimpleAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _internal_models_createGravityModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/models/createGravityModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityModel.js");
/* harmony import */ var _internal_models_createGravityFromModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/models/createGravityFromModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityFromModel.js");




/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeSimpleAction {
    /**
     * @description Which part of the original image to include.
     * @param {Qualifiers.Gravity} gravity
     */
    gravity(gravity) {
        this._actionModel.gravity = (0,_internal_models_createGravityModel_js__WEBPACK_IMPORTED_MODULE_1__.createGravityModel)(gravity);
        const gravityQualifier = typeof gravity === "string" ? new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('g', gravity) : gravity;
        return this.addQualifier(gravityQualifier);
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        if (actionModel.gravity) {
            result.gravity((0,_internal_models_createGravityFromModel_js__WEBPACK_IMPORTED_MODULE_3__.createGravityFromModel)(actionModel.gravity));
        }
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeCropAction.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeCropAction.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeCropAction": () => (/* binding */ ResizeCropAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeAdvancedAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js");


/**
 * @description Defines how to crop an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeCropAction extends _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeAdvancedAction {
    /**
     * @description Horizontal position for custom-coordinates based cropping.
     * @param {number} x The x position.
     */
    x(x) {
        this._actionModel.x = x;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('x', x));
    }
    /**
     * @description Vertical position for custom-coordinates based cropping
     * @param {number} y The y position.
     */
    y(y) {
        this._actionModel.y = y;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('y', y));
    }
    /**
     * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
     * @param {number | string} z The zoom factor. (Default: 1.0)
     */
    zoom(z) {
        this._actionModel.zoom = z;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('z', z));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.x && result.x(actionModel.x);
        actionModel.y && result.y(actionModel.y);
        actionModel.zoom && result.zoom(actionModel.zoom);
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeFillAction.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeFillAction.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeFillAction": () => (/* binding */ ResizeFillAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeAdvancedAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js");


/**
 * @description Defines how to crop-fill an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeFillAction extends _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeAdvancedAction {
    /**
     * @description Absolute X position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
     * @param {number} x The x position.
     */
    x(x) {
        this._actionModel.x = x;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('x', x));
    }
    /**
     * @description Absolute Y position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
     * @param {number} y The y position.
     */
    y(y) {
        this._actionModel.y = y;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('y', y));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.x && result.x(actionModel.x);
        actionModel.y && result.y(actionModel.y);
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFillAction.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFillAction.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeLimitFillAction": () => (/* binding */ ResizeLimitFillAction)
/* harmony export */ });
/* harmony import */ var _ResizeFillAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeFillAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeFillAction.js");

/**
 * @description Defines how to crop-limit-fill an asset
 * @extends Actions.Resize.ResizeFillAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeLimitFillAction extends _ResizeFillAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeFillAction {
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFitAction.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitFitAction.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeLimitFitAction": () => (/* binding */ ResizeLimitFitAction)
/* harmony export */ });
/* harmony import */ var _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeSimpleAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js");

/**
 * @description Defines a limit fitting resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeLimitFitAction extends _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeSimpleAction {
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitPadAction.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeLimitPadAction.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeLimitPadAction": () => (/* binding */ ResizeLimitPadAction)
/* harmony export */ });
/* harmony import */ var _ResizePadAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizePadAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizePadAction.js");

/**
 * @description Defines an advanced resize with limit padding.
 * @extends Actions.Resize.ResizePadAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeLimitPadAction extends _ResizePadAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizePadAction {
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeMinimumPadAction.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeMinimumPadAction.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeMinimumPadAction": () => (/* binding */ ResizeMinimumPadAction)
/* harmony export */ });
/* harmony import */ var _ResizePadAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizePadAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizePadAction.js");

/**
 * @description Defines an advanced resize with minimum padding.
 * @extends Actions.Resize.ResizePadAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeMinimumPadAction extends _ResizePadAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizePadAction {
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizePadAction.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizePadAction.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizePadAction": () => (/* binding */ ResizePadAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeAdvancedAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js");
/* harmony import */ var _internal_models_createBackgroundModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/models/createBackgroundModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundModel.js");
/* harmony import */ var _internal_models_createBackgroundFromModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/models/createBackgroundFromModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundFromModel.js");




/**
 * @description Defines an advanced resize with padding.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizePadAction extends _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeAdvancedAction {
    /**
     * @description Sets the background.
     * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
     * transparent background areas or when resizing with padding.
     */
    background(backgroundQualifier) {
        this._actionModel.background = (0,_internal_models_createBackgroundModel_js__WEBPACK_IMPORTED_MODULE_1__.createBackgroundModel)(backgroundQualifier);
        return this.addQualifier(backgroundQualifier);
    }
    /**
     * @description Horizontal position for custom-coordinates based padding.
     * @param {number} x The x position.
     */
    offsetX(x) {
        this._actionModel.x = x;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('x', x));
    }
    /**
     * @description Vertical position for custom-coordinates based padding
     * @param {number} y The y position.
     */
    offsetY(y) {
        this._actionModel.y = y;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('y', y));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.background && result.background((0,_internal_models_createBackgroundFromModel_js__WEBPACK_IMPORTED_MODULE_3__.createBackgroundFromModel)(actionModel.background));
        actionModel.x && result.offsetX(actionModel.x);
        actionModel.y && result.offsetY(actionModel.y);
        actionModel.zoom && result.zoom(actionModel.zoom);
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeScaleAction.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeScaleAction.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeScaleAction": () => (/* binding */ ResizeScaleAction)
/* harmony export */ });
/* harmony import */ var _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeSimpleAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js");
/* harmony import */ var _qualifiers_gravity_GravityQualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/gravity/GravityQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js");


/**
 * @description Defines a scaling resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeScaleAction extends _ResizeSimpleAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeSimpleAction {
    /**
     * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
     * distortions.
     * @return {this}
     */
    liquidRescaling() {
        return this.addQualifier(new _qualifiers_gravity_GravityQualifier_js__WEBPACK_IMPORTED_MODULE_1__.GravityQualifier('liquid'));
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeSimpleAction.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeSimpleAction": () => (/* binding */ ResizeSimpleAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _internal_utils_toFloatAsString_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/utils/toFloatAsString.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/toFloatAsString.js");
/* harmony import */ var _qualifiers_aspectRatio_AspectRatioQualifierValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../qualifiers/aspectRatio/AspectRatioQualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/aspectRatio/AspectRatioQualifierValue.js");
/* harmony import */ var _qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../qualifiers/flag.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag.js");
/* harmony import */ var _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../qualifiers/flag/FlagQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js");
/* harmony import */ var _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/internalConstants.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js");







/**
 * @description Defines a resize using width and height.
 * @extends SDK.Action
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeSimpleAction extends _internal_Action_js__WEBPACK_IMPORTED_MODULE_0__.Action {
    /**
     * @param {string} cropType
     * @param {number | string} cropWidth The required width of a transformed asset.
     * @param {number | string} cropHeight The required height of a transformed asset.
     */
    constructor(cropType, cropWidth, cropHeight) {
        super();
        this._actionModel = { dimensions: {} };
        this._actionModel.actionType = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
        this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('c', cropType));
        cropWidth && this.width(cropWidth);
        cropHeight && this.height(cropHeight);
    }
    /**
     * @description Sets the height of the resize
     * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
     */
    height(x) {
        this._actionModel.dimensions.height = x;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('h', x));
    }
    /**
     * @description Sets the width of the resize
     * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
     */
    width(x) {
        this._actionModel.dimensions.width = x;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('w', x));
    }
    /**
     * @description Sets the aspect ratio of the asset.
     * For a list of supported types see {@link Qualifiers.AspectRatio|
      * AspectRatio values}
     * @param {AspectRatioType|number|string} ratio The new aspect ratio, specified as a percentage or ratio.
     * @return {this}
     */
    aspectRatio(ratio) {
        // toFloatAsString is used to ensure 1 turns into 1.0
        if (ratio instanceof _qualifiers_aspectRatio_AspectRatioQualifierValue_js__WEBPACK_IMPORTED_MODULE_3__.AspectRatioQualifierValue) {
            this._actionModel.dimensions.aspectRatio = `${ratio}`;
            return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('ar', ratio));
        }
        if (typeof ratio === 'number' || typeof ratio === 'string') {
            this._actionModel.dimensions.aspectRatio = (0,_internal_utils_toFloatAsString_js__WEBPACK_IMPORTED_MODULE_4__.toFloatAsString)(ratio);
            return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_2__.Qualifier('ar', (0,_internal_utils_toFloatAsString_js__WEBPACK_IMPORTED_MODULE_4__.toFloatAsString)(ratio)));
        }
        if (ratio instanceof _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_5__.FlagQualifier) {
            this._actionModel.dimensions.aspectRatio = `${ratio.qualifierValue}`;
            return this.addFlag(ratio);
        }
    }
    /**
     * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
     * @return {this}
     */
    relative() {
        this._actionModel.relative = true;
        return this.addFlag((0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_6__.relative)());
    }
    /**
     * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
     * @return {this}
     */
    regionRelative() {
        this._actionModel.regionRelative = true;
        return this.addFlag((0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_6__.regionRelative)());
    }
    static fromJson(actionModel) {
        const { actionType, dimensions, relative, regionRelative } = actionModel;
        const { aspectRatio, width, height } = dimensions;
        const cropMode = _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
        // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
        // This allows the inheriting classes to determine the class to be created
        const result = new this(cropMode, width, height);
        aspectRatio && result.aspectRatio(aspectRatio === 'ignore_aspect_ratio' ? (0,_qualifiers_flag_js__WEBPACK_IMPORTED_MODULE_6__.ignoreInitialAspectRatio)() : aspectRatio);
        relative && result.relative();
        regionRelative && result.regionRelative();
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ThumbnailAction.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ThumbnailAction.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbResizeAction": () => (/* binding */ ThumbResizeAction)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeAdvancedAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/resize/ResizeAdvancedAction.js");


/**
 * @description Defines a thumbnail resize action.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ThumbResizeAction extends _ResizeAdvancedAction_js__WEBPACK_IMPORTED_MODULE_0__.ResizeAdvancedAction {
    /**
     * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
     * @param {number | string} z The zoom factor. (Default: 1.0)
     */
    zoom(z) {
        this._actionModel.zoom = z;
        return this.addQualifier(new _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_1__.Qualifier('z', z));
    }
    static fromJson(actionModel) {
        const result = super.fromJson.apply(this, [actionModel]);
        actionModel.zoom && result.zoom(actionModel.zoom);
        return result;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qualifiers/flag/FlagQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js");
/* harmony import */ var _qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _utils_dataStructureUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dataStructureUtils.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/dataStructureUtils.js");
/* harmony import */ var _models_ActionModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/ActionModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/ActionModel.js");




/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines the category of transformation to perform.
 */
class Action extends _models_ActionModel_js__WEBPACK_IMPORTED_MODULE_0__.ActionModel {
    constructor() {
        super(...arguments);
        // We're using map, to overwrite existing keys. for example:
        // addParam(w_100).addQualifier(w_200) should result in w_200. and not w_100,w_200
        this.qualifiers = new Map();
        // Unlike regular qualifiers, there can be multiple flags in each url component /fl_1,fl_2/
        // If the falgs are added to the qualifiers map, only a single flag could exist in a component (it's a map)
        // So flags are stored separately until the very end because of that reason
        this.flags = [];
        this.delimiter = ','; // {qualifier}{delimiter}{qualifier} for example: `${'w_100'}${','}${'c_fill'}`
        this.actionTag = ''; // A custom name tag to identify this action in the future
    }
    prepareQualifiers() { }
    /**
     * @description Returns the custom name tag that was given to this action
     * @return {string}
     */
    getActionTag() {
        return this.actionTag;
    }
    /**
     * @description Sets the custom name tag for this action
     * @return {this}
     */
    setActionTag(tag) {
        this.actionTag = tag;
        return this;
    }
    /**
     * @description Calls toString() on all child qualifiers (implicitly by using .join()).
     * @return {string}
     */
    toString() {
        this.prepareQualifiers();
        return (0,_utils_dataStructureUtils_js__WEBPACK_IMPORTED_MODULE_1__.mapToSortedArray)(this.qualifiers, this.flags).join(this.delimiter);
    }
    /**
     * @description Adds the parameter to the action.
     * @param {SDK.Qualifier} qualifier
     * @return {this}
     */
    addQualifier(qualifier) {
        // if string, find the key and value
        if (typeof qualifier === 'string') {
            const [key, value] = qualifier.toLowerCase().split('_');
            if (key === 'fl') {
                // if string qualifier is a flag, store it in the flags arrays
                this.flags.push(new _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_2__.FlagQualifier(value));
            }
            else {
                // if the string qualifier is not a flag, create a new qualifier from it
                this.qualifiers.set(key, new _qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_3__.Qualifier(key, value));
            }
        }
        else {
            // if a qualifier object, insert to the qualifiers map
            this.qualifiers.set(qualifier.key, qualifier);
        }
        return this;
    }
    /**
     * @description Adds a flag to the current action.
     * @param {Qualifiers.Flag} flag
     * @return {this}
     */
    addFlag(flag) {
        if (typeof flag === 'string') {
            this.flags.push(new _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_2__.FlagQualifier(flag));
        }
        else {
            if (flag instanceof _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_2__.FlagQualifier) {
                this.flags.push(flag);
            }
        }
        return this;
    }
    addValueToQualifier(qualifierKey, qualifierValue) {
        this.qualifiers.get(qualifierKey).addValue(qualifierValue);
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/RawAction.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/RawAction.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawAction": () => (/* binding */ RawAction)
/* harmony export */ });
/* harmony import */ var _utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/unsupportedError.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js");

/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */
class RawAction {
    constructor(raw) {
        this.raw = raw;
    }
    toString() {
        return this.raw;
    }
    toJson() {
        return { error: (0,_utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__.createUnsupportedError)(`unsupported action ${this.constructor.name}`) };
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPE_TO_BLEND_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_BLEND_MODE_MAP),
/* harmony export */   "ACTION_TYPE_TO_CROP_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_CROP_MODE_MAP),
/* harmony export */   "ACTION_TYPE_TO_DELIVERY_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_DELIVERY_MODE_MAP),
/* harmony export */   "ACTION_TYPE_TO_EFFECT_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_EFFECT_MODE_MAP),
/* harmony export */   "ACTION_TYPE_TO_QUALITY_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_QUALITY_MODE_MAP),
/* harmony export */   "ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP": () => (/* binding */ ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP),
/* harmony export */   "CHROMA_MODEL_ENUM_TO_CHROMA_VALUE": () => (/* binding */ CHROMA_MODEL_ENUM_TO_CHROMA_VALUE),
/* harmony export */   "CHROMA_VALUE_TO_CHROMA_MODEL_ENUM": () => (/* binding */ CHROMA_VALUE_TO_CHROMA_MODEL_ENUM),
/* harmony export */   "COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP": () => (/* binding */ COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP),
/* harmony export */   "COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP": () => (/* binding */ COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP),
/* harmony export */   "CONDITIONAL_OPERATORS": () => (/* binding */ CONDITIONAL_OPERATORS),
/* harmony export */   "CROP_MODE_TO_ACTION_TYPE_MAP": () => (/* binding */ CROP_MODE_TO_ACTION_TYPE_MAP),
/* harmony export */   "DELIVERY_MODE_TO_ACTION_TYPE_MAP": () => (/* binding */ DELIVERY_MODE_TO_ACTION_TYPE_MAP),
/* harmony export */   "EFFECT_MODE_TO_ACTION_TYPE_MAP": () => (/* binding */ EFFECT_MODE_TO_ACTION_TYPE_MAP),
/* harmony export */   "QUALITY_MODE_TO_ACTION_TYPE_MAP": () => (/* binding */ QUALITY_MODE_TO_ACTION_TYPE_MAP),
/* harmony export */   "RESERVED_NAMES": () => (/* binding */ RESERVED_NAMES),
/* harmony export */   "STREAMING_PROFILE_TO_ACTION_TYPE_MAP": () => (/* binding */ STREAMING_PROFILE_TO_ACTION_TYPE_MAP)
/* harmony export */ });
/* harmony import */ var _utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/objectFlip.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/objectFlip.js");
/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */

const CONDITIONAL_OPERATORS = {
    "=": "eq",
    "!=": "ne",
    "<": "lt",
    ">": "gt",
    "<=": "lte",
    ">=": "gte",
    "&&": "and",
    "||": "or",
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow"
};
const RESERVED_NAMES = {
    "aspect_ratio": "ar",
    "aspectRatio": "ar",
    "current_page": "cp",
    "currentPage": "cp",
    "duration": "du",
    "face_count": "fc",
    "faceCount": "fc",
    "height": "h",
    "initial_aspect_ratio": "iar",
    "initial_height": "ih",
    "initial_width": "iw",
    "initialAspectRatio": "iar",
    "initialHeight": "ih",
    "initialWidth": "iw",
    "initial_duration": "idu",
    "initialDuration": "idu",
    "page_count": "pc",
    "page_x": "px",
    "page_y": "py",
    "pageCount": "pc",
    "pageX": "px",
    "pageY": "py",
    "tags": "tags",
    "width": "w",
    "trimmed_aspect_ratio": "tar",
    "current_public_id": "cpi",
    "initial_density": "idn",
    "page_names": "pgnames"
};
const ACTION_TYPE_TO_CROP_MODE_MAP = {
    limitFit: 'limit',
    limitFill: 'lfill',
    minimumFit: 'mfit',
    thumbnail: 'thumb',
    limitPad: 'lpad',
    minimumPad: 'mpad'
};
const ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
    colorSpace: 'cs',
    dpr: 'dpr',
    density: 'dn',
    defaultImage: 'd',
    format: 'f',
    quality: 'q'
};
const ACTION_TYPE_TO_EFFECT_MODE_MAP = {
    redEye: 'redeye',
    advancedRedEye: 'adv_redeye',
    oilPaint: 'oil_paint',
    unsharpMask: 'unsharp_mask',
    makeTransparent: 'make_transparent'
};
const ACTION_TYPE_TO_QUALITY_MODE_MAP = {
    autoBest: 'auto:best',
    autoEco: 'auto:eco',
    autoGood: 'auto:good',
    autoLow: 'auto:low',
    jpegminiHigh: 'jpegmini:1',
    jpegminiMedium: 'jpegmini:2',
    jpegminiBest: 'jpegmini:0'
};
const ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
    fullHd: 'full_hd',
    fullHdWifi: 'full_hd_wifi',
    fullHdLean: 'full_hd_lean',
    hdLean: 'hd_lean'
};
const CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
    444: "CHROMA_444",
    420: "CHROMA_420"
};
const COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
    'noCmyk': 'no_cmyk',
    'keepCmyk': 'keep_cmyk',
    'tinySrgb': 'tinysrgb',
    'srgbTrueColor': 'srgb:truecolor'
};
const ACTION_TYPE_TO_BLEND_MODE_MAP = {
    'antiRemoval': 'anti_removal'
};
const CHROMA_MODEL_ENUM_TO_CHROMA_VALUE = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
const COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
const CROP_MODE_TO_ACTION_TYPE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(ACTION_TYPE_TO_CROP_MODE_MAP);
const DELIVERY_MODE_TO_ACTION_TYPE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
const EFFECT_MODE_TO_ACTION_TYPE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(ACTION_TYPE_TO_EFFECT_MODE_MAP);
const QUALITY_MODE_TO_ACTION_TYPE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(ACTION_TYPE_TO_QUALITY_MODE_MAP);
const STREAMING_PROFILE_TO_ACTION_TYPE_MAP = (0,_utils_objectFlip_js__WEBPACK_IMPORTED_MODULE_0__.objectFlip)(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/ActionModel.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/ActionModel.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionModel": () => (/* binding */ ActionModel)
/* harmony export */ });
/* harmony import */ var _actionToJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionToJson.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/actionToJson.js");

class ActionModel {
    constructor() {
        this._actionModel = {};
    }
    toJson() {
        return _actionToJson_js__WEBPACK_IMPORTED_MODULE_0__.actionToJson.apply(this);
    }
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/IErrorObject.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/IErrorObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isErrorObject": () => (/* binding */ isErrorObject)
/* harmony export */ });
/**
 * Validates obj is an instance of IErrorObject
 * @param obj
 */
function isErrorObject(obj) {
    const errorObj = obj;
    return ('error' in errorObj) && !!errorObj.error;
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/QualifierModel.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/QualifierModel.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualifierModel": () => (/* binding */ QualifierModel)
/* harmony export */ });
/* harmony import */ var _qualifierToJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualifierToJson.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/qualifierToJson.js");

class QualifierModel {
    constructor() {
        this._qualifierModel = {};
    }
    toJson() {
        return _qualifierToJson_js__WEBPACK_IMPORTED_MODULE_0__.qualifierToJson.apply(this);
    }
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/actionToJson.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/actionToJson.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionToJson": () => (/* binding */ actionToJson)
/* harmony export */ });
/* harmony import */ var _utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unsupportedError.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js");

/**
 * Returns the action's model
 */
function actionToJson() {
    const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
    if (actionModelIsNotEmpty) {
        return this._actionModel;
    }
    return { error: (0,_utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__.createUnsupportedError)(`unsupported action ${this.constructor.name}`) };
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundFromModel.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundFromModel.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackgroundFromModel": () => (/* binding */ createBackgroundFromModel)
/* harmony export */ });
/* harmony import */ var _qualifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../qualifiers/background.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background.js");


/**
 * Create BackgroundQualifier from IBlurredBackgroundModel
 * @param backgroundModel
 */
function createBlurredBackground(backgroundModel) {
    const { brightness, intensity } = backgroundModel;
    const result = _qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.Background.blurred();
    if (brightness || brightness == 0) {
        result.brightness(brightness);
    }
    if (intensity || intensity == 0) {
        result.intensity(intensity);
    }
    return result;
}
/**
 * Create a gradientBackground from given model
 * @param background
 * @param backgroundModel
 */
function createGradientBackground(background, backgroundModel) {
    const { gradientColors, gradientDirection, contrast, palette } = backgroundModel;
    if (contrast) {
        background.contrast();
    }
    if (palette) {
        background.palette(...palette);
    }
    if (gradientColors) {
        background.gradientColors(+gradientColors);
    }
    if (gradientDirection) {
        background.gradientDirection(gradientDirection);
    }
    return background;
}
/**
 * Crete a background with contrast and palette from given model
 * @param background
 * @param backgroundModel
 */
function createContrastPaletteBackground(background, backgroundModel) {
    const { contrast, palette } = backgroundModel;
    if (contrast) {
        background.contrast();
    }
    if (palette) {
        background.palette(...palette);
    }
    return background;
}
/**
 * Create BackgroundQualifier from IBackgroundModel
 * @param backgroundModel
 */
function createBackgroundFromModel(backgroundModel) {
    const { backgroundType } = backgroundModel;
    switch (backgroundType) {
        case 'auto':
            return (0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.auto)();
        case 'blurred':
            return createBlurredBackground(backgroundModel);
        case 'border':
            return createContrastPaletteBackground((0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.border)(), backgroundModel);
        case 'borderGradient':
            return createGradientBackground((0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.borderGradient)(), backgroundModel);
        case 'predominant':
            return createContrastPaletteBackground((0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.predominant)(), backgroundModel);
        case 'predominantGradient':
            return createGradientBackground((0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.predominantGradient)(), backgroundModel);
        default:
            return (0,_qualifiers_js__WEBPACK_IMPORTED_MODULE_0__.color)(backgroundModel.color);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundModel.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createBackgroundModel.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackgroundModel": () => (/* binding */ createBackgroundModel)
/* harmony export */ });
/* harmony import */ var _qualifiers_background_shared_BlurredBackgroundAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../qualifiers/background/shared/BlurredBackgroundAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/BlurredBackgroundAction.js");
/* harmony import */ var _qualifiers_background_shared_auto_BackgroundAutoBorderQualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js");
/* harmony import */ var _qualifiers_background_shared_gradient_BackgroundBorderGradientQualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js");
/* harmony import */ var _qualifiers_background_shared_gradient_BackgroundPredominantGradientQualifier_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js");
/* harmony import */ var _qualifiers_background_shared_auto_BackgroundAutoPredominantQualifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js");





/**
 * Get the value of given background
 * @param background
 */
function getBackgroundValue(background) {
    return `${background}`.replace('b_', '');
}
/**
 * Create an IAutoBackgroundModel from given background
 */
function createAutoBackgroundModel() {
    return { backgroundType: 'auto' };
}
/**
 * Create an IBlurredBackgroundModel from given background
 * @param background
 */
function createBlurredBackgroundModel(background) {
    const { intensityLevel, brightnessLevel } = background;
    const result = {
        backgroundType: 'blurred'
    };
    if (intensityLevel || intensityLevel === 0) {
        result.intensity = intensityLevel;
    }
    if (brightnessLevel || brightnessLevel === 0) {
        result.brightness = brightnessLevel;
    }
    return result;
}
/**
 * Create an IContrastPaletteBackgroundModel from given background
 * @param background
 */
function createContrastPaletteBackgroundModel(background) {
    const contrast = background._contrast;
    const palette = background._palette;
    const result = {
        backgroundType: ''
    };
    if (contrast) {
        result.contrast = true;
    }
    if (palette) {
        result.palette = palette;
    }
    return result;
}
/**
 * Create an IBorderBackgroundModel from given background
 * @param background
 */
function createBorderBackgroundModel(background) {
    return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: 'border' });
}
/**
 * Create an IBaseGradientBackgroundModel from given background
 * @param background
 */
function createBaseGradientBackgroundModel(background) {
    const gradientColors = background._gradientColors;
    const gradientDirection = `${background._gradientDirection}`;
    const result = createContrastPaletteBackgroundModel(background);
    if (gradientColors) {
        result.gradientColors = gradientColors;
    }
    if (gradientDirection) {
        result.gradientDirection = gradientDirection;
    }
    return result;
}
/**
 * Create an IBorderGradientBackgroundModel from given background
 * @param background
 */
function createBorderGradientBackgroundModel(background) {
    return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: 'borderGradient' });
}
/**
 * Create an IColorBackgroundModel from given background
 * @param background
 */
function createColorBackgroundModel(background) {
    return {
        backgroundType: 'color',
        color: getBackgroundValue(background)
    };
}
/**
 * Create an IPredominantBackgroundModel from given background
 * @param background
 */
function createPredominantBackgroundModel(background) {
    return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: 'predominant' });
}
/**
 * Create an IPredominantGradientBackgroundModel from given background
 * @param background
 */
function createPredominantGradientBackgroundModel(background) {
    return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: 'predominantGradient' });
}
/**
 * Create an IBackgroundModel from given background
 * @param background
 */
function createBackgroundModel(background) {
    if (getBackgroundValue(background) === 'auto') {
        return createAutoBackgroundModel();
    }
    if (background instanceof _qualifiers_background_shared_BlurredBackgroundAction_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return createBlurredBackgroundModel(background);
    }
    if (background instanceof _qualifiers_background_shared_auto_BackgroundAutoBorderQualifier_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundAutoBorderQualifier) {
        return createBorderBackgroundModel(background);
    }
    if (background instanceof _qualifiers_background_shared_gradient_BackgroundBorderGradientQualifier_js__WEBPACK_IMPORTED_MODULE_2__.BackgroundBorderGradientQualifier) {
        return createBorderGradientBackgroundModel(background);
    }
    if (background instanceof _qualifiers_background_shared_auto_BackgroundAutoPredominantQualifier_js__WEBPACK_IMPORTED_MODULE_3__.BackgroundAutoPredominantQualifier) {
        return createPredominantBackgroundModel(background);
    }
    if (background instanceof _qualifiers_background_shared_gradient_BackgroundPredominantGradientQualifier_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundPredominantGradientQualifier) {
        return createPredominantGradientBackgroundModel(background);
    }
    return createColorBackgroundModel(background);
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityFromModel.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityFromModel.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGravityFromModel": () => (/* binding */ createGravityFromModel)
/* harmony export */ });
/* harmony import */ var _qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../qualifiers/gravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity.js");
/* harmony import */ var _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/focusOn.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js");
/* harmony import */ var _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../qualifiers/focusOn.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/focusOn.js");
/* harmony import */ var _qualifiers_autoFocus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../qualifiers/autoFocus.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/autoFocus.js");
/* harmony import */ var _qualifiers_gravity_compassGravity_CompassGravity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../qualifiers/gravity/compassGravity/CompassGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/compassGravity/CompassGravity.js");
/* harmony import */ var _qualifiers_gravity_qualifiers_compass_CompassQualifier_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../qualifiers/gravity/qualifiers/compass/CompassQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/compass/CompassQualifier.js");





/**
 * Validates that gravityModel is an ICompassGravityModel
 * @param gravityModel
 */
function isCompassGravityModel(gravityModel) {
    return gravityModel.gravityType === 'direction';
}
/**
 * Validates that gravityModel is an IOcrGravityModel
 * @param gravityModel
 */
function isOcrGravityModel(gravityModel) {
    return gravityModel.gravityType === 'ocr';
}
/**
 * Validates that gravityModel is an IAutoGravityModel
 * @param gravityModel
 */
function isAutoGravityModel(gravityModel) {
    return gravityModel.gravityType === 'auto';
}
/**
 * Create AutoFocus from IAutoGravityObjectModel
 * @param autoGravityObjectModel
 */
function createAutoFocusFromModel(autoGravityObjectModel) {
    const { object, weight, avoid } = autoGravityObjectModel;
    const autoFocus = new _qualifiers_autoFocus_js__WEBPACK_IMPORTED_MODULE_0__.AutoFocus(new _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_1__.FocusOnValue(object));
    (weight || weight === 0) && autoFocus.weight(weight);
    avoid && autoFocus.avoid();
    return autoFocus;
}
/**
 * Create AutoGravity from IAutoGravityModel
 * @param gravityModel
 */
function createAutoGravityFromModel(gravityModel) {
    const autoFocusModel = gravityModel.autoFocus || [];
    const autoFocus = autoFocusModel.map(createAutoFocusFromModel);
    return (0,_qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_2__.autoGravity)().autoFocus(...autoFocus);
}
/**
 * Create FocusOnGravity from given IFocusOnGravityModel
 * @param gravityModel
 */
function createFocusOnGravityFromModel(gravityModel) {
    const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_1__.FocusOnValue(str));
    const result = (0,_qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_2__.focusOn)(...focusOnObjects);
    if (gravityModel.fallbackGravity) {
        const autoGravity = createAutoGravityFromModel(gravityModel.fallbackGravity);
        result.fallbackGravity(autoGravity);
    }
    return result;
}
/**
 * Create gravity instance from given gravity model
 * @param gravityModel
 */
function createGravityFromModel(gravityModel) {
    if (isCompassGravityModel(gravityModel)) {
        return new _qualifiers_gravity_compassGravity_CompassGravity_js__WEBPACK_IMPORTED_MODULE_3__.CompassGravity(new _qualifiers_gravity_qualifiers_compass_CompassQualifier_js__WEBPACK_IMPORTED_MODULE_4__.CompassQualifier(gravityModel.compass));
    }
    if (isOcrGravityModel(gravityModel)) {
        return (0,_qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_2__.focusOn)((0,_qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_5__.ocr)());
    }
    if (isAutoGravityModel(gravityModel)) {
        return createAutoGravityFromModel(gravityModel);
    }
    return createFocusOnGravityFromModel(gravityModel);
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityModel.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/createGravityModel.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGravityModel": () => (/* binding */ createGravityModel)
/* harmony export */ });
/* harmony import */ var _qualifiers_gravity_autoGravity_AutoGravity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../qualifiers/gravity/autoGravity/AutoGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/autoGravity/AutoGravity.js");
/* harmony import */ var _qualifiers_gravity_focusOnGravity_FocusOnGravity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../qualifiers/gravity/focusOnGravity/FocusOnGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/focusOnGravity/FocusOnGravity.js");
/* harmony import */ var _qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../qualifiers/gravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity.js");
/* harmony import */ var _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../qualifiers/focusOn.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js");




/**
 * true if gravity starts with 'auto' or 'auto:'
 * @param gravity
 */
function isIAutoGravityString(gravity) {
    return gravity && `${gravity}`.split(':')[0] === 'auto';
}
/**
 * Validate that given val is an ICompassGravity
 * @param gravity
 */
function isCompassGravity(gravity) {
    //const gravityString = `${(typeof gravity === "string" ? gravity : gravity.qualifierValue)}`;
    const gravityValue = getGravityValue(gravity);
    return ['north', 'center', 'east', 'west', 'south', 'north_west', 'south_east', 'south_west', 'north_east'].includes(gravityValue);
}
/**
 * Get the value of given gravity
 * @param gravity
 */
function getGravityValue(gravity) {
    return `${gravity}`.replace('g_', '');
}
/**
 * Creates a compassGravity model
 * @param gravity
 */
function createCompassGravityModel(gravity) {
    return {
        compass: getGravityValue(gravity),
        gravityType: 'direction'
    };
}
/**
 * Validate that given gravity is an instance of ocr gravity
 * @param gravity
 */
function isOcrGravity(gravity) {
    return getGravityValue(gravity) === 'ocr_text';
}
/**
 * Creates an ocr gravity model
 */
function createOcrGravityModel() {
    return {
        gravityType: 'ocr'
    };
}
/**
 * Validate that given gravity is an instance of AutoGravity
 * @param gravity
 */
function isAutoGravity(gravity) {
    return `${gravity.qualifierValue}`.split(':')[0] === 'auto';
}
/**
 * Create an instance of IAutoGravityObjectModel
 * @param gravity
 */
function createIAutoFocusObject(gravity) {
    const gravityString = gravity.toString();
    const values = gravityString.split('_');
    const result = {
        object: values[0]
    };
    if (values.length > 1) {
        if (values[1] === 'avoid') {
            result.avoid = true;
        }
        else {
            result.weight = +values[1];
        }
    }
    return result;
}
/**
 * Creates an auto gravity model from given AutoGravity
 * @param gravity
 */
function createAutoGravityModel(gravity) {
    let values;
    const gravityQualifier = gravity === 'auto' ? new _qualifiers_gravity_autoGravity_AutoGravity_js__WEBPACK_IMPORTED_MODULE_0__.AutoGravity() : gravity;
    if (`${gravity}`.startsWith('auto:')) {
        values = `${gravity}`.split(':').filter((v) => v !== 'auto');
    }
    else {
        values = gravityQualifier.qualifierValue.values.filter((v) => v !== 'auto');
    }
    const autoFocus = values.map(createIAutoFocusObject);
    return {
        gravityType: 'auto',
        autoFocus
    };
}
/**
 * Create IFocusOnGravityModel from FocusOnGravity
 * @param gravity
 */
function createFocusOnGravityModel(gravity) {
    const hasAutoGravity = `${gravity}`.split(':').includes('auto');
    const values = gravity.qualifierValue.values;
    const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;
    const result = {
        gravityType: 'object',
        focusOnObjects: focusOnValues.map((v) => `${v}`)
    };
    if (hasAutoGravity) {
        // Remove the first 'auto' value by slicing it, because it's added by autoGravity()
        const autoFocusObjects = values[values.length - 1].values.slice(1);
        const autoGravityInstance = (0,_qualifiers_gravity_js__WEBPACK_IMPORTED_MODULE_1__.autoGravity)().autoFocus(...autoFocusObjects);
        result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
    }
    return result;
}
/**
 * Creates a FocusOnGravity from given string
 * @param gravity
 */
function createFocusOnGravity(gravity) {
    const values = gravity.split(':');
    const focusOnValues = values.map((g) => new _qualifiers_focusOn_js__WEBPACK_IMPORTED_MODULE_2__.FocusOnValue(g));
    return new _qualifiers_gravity_focusOnGravity_FocusOnGravity_js__WEBPACK_IMPORTED_MODULE_3__.FocusOnGravity(focusOnValues);
}
/**
 * Create a model of given gravity
 * @param gravity
 */
function createGravityModel(gravity) {
    if (isCompassGravity(gravity)) {
        return createCompassGravityModel(gravity);
    }
    if (isOcrGravity(gravity)) {
        return createOcrGravityModel();
    }
    if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
        return createAutoGravityModel(gravity);
    }
    return createFocusOnGravityModel(typeof gravity === 'string' ? createFocusOnGravity(gravity) : gravity);
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/qualifierToJson.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/models/qualifierToJson.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qualifierToJson": () => (/* binding */ qualifierToJson)
/* harmony export */ });
/* harmony import */ var _utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unsupportedError.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js");

/**
 * Returns the action's model
 */
function qualifierToJson() {
    return this._qualifierModel || { error: (0,_utils_unsupportedError_js__WEBPACK_IMPORTED_MODULE_0__.createUnsupportedError)(`unsupported qualifier ${this.constructor.name}`) };
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qualifier": () => (/* binding */ Qualifier)
/* harmony export */ });
/* harmony import */ var _QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");
/* harmony import */ var _models_QualifierModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/QualifierModel.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/QualifierModel.js");


/**
 * @summary SDK
 * @memberOf SDK
 */
class Qualifier extends _models_QualifierModel_js__WEBPACK_IMPORTED_MODULE_0__.QualifierModel {
    constructor(key, qualifierValue) {
        super();
        this.delimiter = '_'; // {key}{delimiter}{qualifierValue}
        this.key = key;
        if (qualifierValue instanceof _QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__.QualifierValue) {
            this.qualifierValue = qualifierValue;
        }
        else {
            this.qualifierValue = new _QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__.QualifierValue();
            this.qualifierValue.addValue(qualifierValue);
        }
    }
    toString() {
        const { key, delimiter, qualifierValue } = this;
        return `${key}${delimiter}${qualifierValue.toString()}`;
    }
    addValue(value) {
        this.qualifierValue.addValue(value);
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualifierValue": () => (/* binding */ QualifierValue)
/* harmony export */ });
/**
 * @summary SDK
 * @memberOf SDK
 */
class QualifierValue {
    /**
     *
     * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
     */
    constructor(qualifierValue) {
        this.values = [];
        this.delimiter = ':'; // {value}{delimiter}{value}...
        if (this.hasValue(qualifierValue)) {
            this.addValue(qualifierValue);
        }
    }
    /**
     * @description Joins the provided values with the provided delimiter
     */
    toString() {
        return this.values.join(this.delimiter);
    }
    /**
     * @description Checks if the provided argument has a value
     * @param {any} v
     * @private
     * @return {boolean}
     */
    hasValue(v) {
        return typeof v !== 'undefined' && v !== null && v !== '';
    }
    /**
     * @desc Adds a value for the this qualifier instance
     * @param {any} value
     * @return {this}
     */
    addValue(value) {
        // Append value or array of values
        if (Array.isArray(value)) {
            this.values = this.values.concat(value);
        }
        else {
            this.values.push(value);
        }
        // Remove falsy values
        this.values = this.values.filter((v) => this.hasValue(v));
        return this;
    }
    /**
     * @description Sets the delimiter for this instance
     * @param delimiter
     */
    setDelimiter(delimiter) {
        this.delimiter = delimiter;
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/dataStructureUtils.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/dataStructureUtils.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "mapToSortedArray": () => (/* binding */ mapToSortedArray)
/* harmony export */ });
/**
 * Sort a map by key
 * @private
 * @param map <string, any>
 * @Return array of map's values sorted by key
 */
function mapToSortedArray(map, flags) {
    const array = Array.from(map.entries());
    // objects from the Array.from() method above are stored in array of arrays:
    // [[qualifierKey, QualifierObj], [qualifierKey, QualifierObj]]
    // Flags is an array of FlagQualifierObj
    // We need to convert it to the same form: [flagQualifier] =>  ['fl', flagQualifier]
    flags.forEach((flag) => {
        array.push(['fl', flag]); // push ['fl', flagQualifier]
    });
    return array.sort().map((v) => v[1]);
}
/**
 * Checks if `value` is a string.
 * @private
 * @param {*} value The value to check.
 * @return {boolean} `true` if `value` is a string, else `false`.
 */
function isString(value) {
    return (typeof value === 'string' || value instanceof String);
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/objectFlip.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/objectFlip.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectFlip": () => (/* binding */ objectFlip)
/* harmony export */ });
/**
 * Flip keys and values for given object
 * @param obj
 */
function objectFlip(obj) {
    const result = {};
    Object.keys(obj).forEach((key) => {
        result[obj[key]] = key;
    });
    return result;
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareColor": () => (/* binding */ prepareColor)
/* harmony export */ });
/**
 * Returns RGB or Color
 * @private
 * @param color
 */
function prepareColor(color) {
    if (color) {
        return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
    }
    else {
        return color;
    }
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/toFloatAsString.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/toFloatAsString.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toFloatAsString": () => (/* binding */ toFloatAsString)
/* harmony export */ });
/**
 * @description
 * Returns a string representing the float value of the input, if the input was a number-like.
 * Examples:
 * - '1.0' -> '1.0'
 * - 1 -> '1.0'
 * - '5' -> '5.0'
 * - 'auto' -> 'auto'
 * @private
 * @param {string|number} value
 * @return {string}
 */
function toFloatAsString(value) {
    // Turn the input to string
    // The Function will return `returnValue` value if the input is not a number-like expression
    const returnValue = value.toString();
    // if the string contains letters, return the input
    if (returnValue.match(/[A-Z]/gi)) {
        return returnValue;
    }
    // If the leading digit is 0, and we have more than 1 digit, it's not a number.
    // 00, 00000, 0x15 etc.
    if (returnValue.length > 1 && returnValue[0] === '0') {
        return returnValue;
    }
    // Final sanity check, parse the number as a float and check if its NaN
    const isNumberLike = !isNaN(parseFloat(returnValue)) && returnValue.indexOf(':') === -1;
    // If it's a number-like, but the input does not contain a decimal - add it.
    if (isNumberLike && returnValue.indexOf('.') === -1) {
        return `${returnValue}.0`;
    }
    else {
        // If the input already contains a decimal, just return the value
        return returnValue;
    }
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsupportedError": () => (/* binding */ UnsupportedError),
/* harmony export */   "createUnsupportedError": () => (/* binding */ createUnsupportedError)
/* harmony export */ });
class UnsupportedError extends Error {
    constructor(message = 'Unsupported') {
        super(message);
    }
}
/**
 * Creates a new UnsupportedError
 * @param message
 */
function createUnsupportedError(message) {
    return new UnsupportedError(message);
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/aspectRatio/AspectRatioQualifierValue.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/aspectRatio/AspectRatioQualifierValue.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatioQualifierValue": () => (/* binding */ AspectRatioQualifierValue)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");

/**
 * @memberOf Qualifiers.AspectRatio
 * @extends {SDK.QualifierValue}
 */
class AspectRatioQualifierValue extends _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__.QualifierValue {
}


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/autoFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/autoFocus.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocus": () => (/* binding */ AutoFocus)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");

/**
 * @summary qualifier
 * @namespace AutoFocus
 * @memberOf Qualifiers
 * @see Visit {@link Qualifiers.Gravity|Gravity} for an example
 */
/**
 * @memberOf Qualifiers.AutoFocus
 * @extends {SDK.QualifierValue}
 * @see Visit {@link Qualifiers.Gravity|Gravity} for an example
 */
class AutoFocus extends _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__.QualifierValue {
    constructor(focusOn, weight) {
        super();
        this._weight = weight;
        this.focusOn = focusOn;
        this.shouldAvoid = false;
    }
    /**
     * @summary qualifier
     * @description Specifies the object to focus on automatically
     * Accepts an AutoFocusObject (which is just a wrapper for a FocusOn object, but with extra method: avoid, weight)
     * @param {Qualifiers.FocusOn} obj The object to focus on.
     * @param {number} weight
     */
    static focusOn(obj, weight) {
        return new AutoFocus(obj, weight);
    }
    shouldAddWeight() {
        return typeof this._weight === 'number' || typeof this._weight === 'string' || this.shouldAvoid;
    }
    /**
     * @summary qualifier
     * @desc Get the name of the of the object
     */
    getName() {
        return this.focusOn.name;
    }
    /**
     * @summary qualifier
     * @desc Get the weight for the object
     */
    getWeight() {
        if (this.shouldAvoid) {
            return 'avoid';
        }
        else {
            return this._weight;
        }
    }
    /**
     * @summary qualifier
     * @desc Return the string representation of this QualifierValue
     */
    toString() {
        // Future proofing, in case we'd like to support some custom string in the future, or if data is coming from a DB
        if (this.shouldAddWeight()) {
            return `${this.getName()}_${this.getWeight()}`;
        }
        else {
            return `${this.getName()}`;
        }
    }
    /**
     * @summary qualifier
     * @description Sets the importance level of the object within the automatic gravity algorithm
     * @param {numebr} w The focus weight for the object
     * @return {this}
     */
    weight(w) {
        this._weight = w;
        return this;
    }
    /**
     * @summary qualifier
     * @description Attempts to avoid the detected object in the image
     * @return {this}
     */
    avoid() {
        this.shouldAvoid = true;
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "blurred": () => (/* binding */ blurred),
/* harmony export */   "border": () => (/* binding */ border),
/* harmony export */   "borderGradient": () => (/* binding */ borderGradient),
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "predominant": () => (/* binding */ predominant),
/* harmony export */   "predominantGradient": () => (/* binding */ predominantGradient)
/* harmony export */ });
/* harmony import */ var _internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/utils/prepareColor.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js");
/* harmony import */ var _background_shared_auto_BackgroundAutoBorderQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/shared/auto/BackgroundAutoBorderQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js");
/* harmony import */ var _background_shared_gradient_BackgroundBorderGradientQualifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/shared/gradient/BackgroundBorderGradientQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js");
/* harmony import */ var _background_shared_auto_BackgroundAutoPredominantQualifier_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background/shared/auto/BackgroundAutoPredominantQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js");
/* harmony import */ var _background_shared_gradient_BackgroundPredominantGradientQualifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/shared/gradient/BackgroundPredominantGradientQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js");
/* harmony import */ var _background_shared_BlurredBackgroundAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background/shared/BlurredBackgroundAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/BlurredBackgroundAction.js");
/* harmony import */ var _background_shared_base_BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/shared/base/BackgroundQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BackgroundQualifier.js");







/**
 * @description Defines the background color to use instead of transparent background areas or when resizing with padding.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#setting_background_color|Setting background for images} | {@link https://cloudinary.com/documentation/video_effects_and_enhancements#background_color|Setting background for videos}
 *
 * @namespace Background
 * @memberOf Qualifiers
 */
/**
 * @summary qualifier
 * @description Selects the predominant color while taking only the image border pixels into account.
 * @memberOf Qualifiers.Background
 * @return {BackgroundAutoBorderQualifier}
 */
function border() {
    return new _background_shared_auto_BackgroundAutoBorderQualifier_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundAutoBorderQualifier();
}
/**
 * @summary qualifier
 * @description Automatically determines the color to use for padding, if needed when resizing an asset.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#content_aware_padding|Content-aware padding}
 * @memberOf Qualifiers.Background
 * @return {Qualifiers.Background.BackgroundQualifier}
 */
function auto() {
    return new _background_shared_base_BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundQualifier('auto');
}
/**
 * @summary qualifier
 * @description Applies a padding gradient fade effect using the predominant colors in the border of the image.
 * @memberOf Qualifiers.Background
 * @return {BackgroundBorderGradientQualifier}
 */
function borderGradient() {
    return new _background_shared_gradient_BackgroundBorderGradientQualifier_js__WEBPACK_IMPORTED_MODULE_2__.BackgroundBorderGradientQualifier();
}
/**
 * @summary qualifier
 * @description Applies a padding gradient fade effect using the predominant colors in the image.
 * @memberOf Qualifiers.Background
 * @return {BackgroundPredominantGradientQualifier}
 */
function predominantGradient() {
    return new _background_shared_gradient_BackgroundPredominantGradientQualifier_js__WEBPACK_IMPORTED_MODULE_3__.BackgroundPredominantGradientQualifier();
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account
 * @memberOf Qualifiers.Background
 * @return {BackgroundAutoPredominantQualifier}
 */
function predominant() {
    return new _background_shared_auto_BackgroundAutoPredominantQualifier_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundAutoPredominantQualifier();
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Qualifiers.Background
 * @return {Qualifiers.Background.BackgroundQualifier}
 */
function color(colorStr) {
    return new _background_shared_base_BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundQualifier((0,_internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_5__.prepareColor)(colorStr));
}
/**
 * @summary qualifier
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Qualifiers.Background
 * @return {BlurredBackgroundAction}
 */
function blurred() {
    return new _background_shared_BlurredBackgroundAction_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
}
const Background = {
    auto: auto,
    border: border,
    borderGradient: borderGradient,
    predominantGradient: predominantGradient,
    predominant: predominant,
    color: color,
    blurred: blurred
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/BlurredBackgroundAction.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/BlurredBackgroundAction.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/BackgroundQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BackgroundQualifier.js");

/**
 * @description A class for blurred background transformations.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BlurredBackgroundAction extends _base_BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundQualifier {
    /**
     * @description Sets the intensity of the blur.
     * @param {number} value - The intensity of the blur.
     */
    intensity(value) {
        this.intensityLevel = value;
        return this;
    }
    /**
     * @description Sets the brightness of the background.
     * @param {number} value - The brightness of the background.
     */
    brightness(value) {
        this.brightnessLevel = value;
        return this;
    }
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function
     */
    toString() {
        // b_blurred:{intensity}:{brightness}
        return `
    b_blurred
    ${this.intensityLevel ? `:${this.intensityLevel}` : ''}
    ${this.brightnessLevel ? `:${this.brightnessLevel}` : ''}
    `.replace(/\s+/g, '');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlurredBackgroundAction);


/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundAutoBorderQualifier": () => (/* binding */ BackgroundAutoBorderQualifier)
/* harmony export */ });
/* harmony import */ var _base_BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/BaseCommonBackground.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseCommonBackground.js");

/**
 * @description Automatically determines the color to use for padding, if needed when resizing an asset. Selects the
 * predominant color from the border of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BackgroundAutoBorderQualifier extends _base_BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__.BaseCommonBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:border
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundAutoPredominantQualifier": () => (/* binding */ BackgroundAutoPredominantQualifier)
/* harmony export */ });
/* harmony import */ var _base_BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/BaseCommonBackground.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseCommonBackground.js");

/**
 * @description Automatically determines the color to use for padding, if needed when resizing an asset. Selects the
 * predominant color from the whole image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BackgroundAutoPredominantQualifier extends _base_BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__.BaseCommonBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:predominant
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BackgroundQualifier.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BackgroundQualifier.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundQualifier": () => (/* binding */ BackgroundQualifier)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");

/**
 * @description Defines the visual appearance of the background.
 * @memberOf Qualifiers.Background
 * @extends {SDK.Qualifier}
 */
class BackgroundQualifier extends _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__.Qualifier {
    constructor(backgroundValue) {
        // The qualifier key for this qualifier
        super('b');
        // Such as color (b_red)
        if (backgroundValue) {
            this.addValue(backgroundValue);
        }
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseCommonBackground.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseCommonBackground.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCommonBackground": () => (/* binding */ BaseCommonBackground)
/* harmony export */ });
/* harmony import */ var _internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../internal/utils/prepareColor.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js");
/* harmony import */ var _BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BackgroundQualifier.js");


/**
 * @description Defines the background color to use when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BaseCommonBackground extends _BackgroundQualifier_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundQualifier {
    constructor() {
        super();
        this._palette = [];
    }
    /**
     * @description Selects the strongest contrasting color to use for padding.
     * @return {this}
     */
    contrast() {
        this._contrast = true;
        return this;
    }
    /**
     * @description Defines the custom colors to use when resizing using content-aware padding.
     * @param {...string} colors One or more colors - Example: palette('green', 'red', blue')
     * @return {this}
     */
    palette(...colors) {
        this._palette = colors.map((color) => {
            return (0,_internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_1__.prepareColor)(color);
        });
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseGradientBackground.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseGradientBackground.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseGradientBackground": () => (/* binding */ BaseGradientBackground)
/* harmony export */ });
/* harmony import */ var _BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCommonBackground.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseCommonBackground.js");

/**
 * @description Defines the gradient fade effect to use for the background when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BaseGradientBackground extends _BaseCommonBackground_js__WEBPACK_IMPORTED_MODULE_0__.BaseCommonBackground {
    /**
     *
     * @description Sets the number of predominant colors to use (2 or 4).
     * @param {number} num
     * @return {this}
     */
    gradientColors(num) {
        this._gradientColors = num;
        return this;
    }
    /**
     * @description Sets the direction for a background gradient fade effect.
     * @param {Qualifiers.GradientDirection | GradientDirectionType | string} direction Use one of these functions
     * provided by {@link Qualifiers.GradientDirection|GradientDirection}
     * @return {this}
     */
    gradientDirection(direction) {
        this._gradientDirection = direction;
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundBorderGradientQualifier": () => (/* binding */ BackgroundBorderGradientQualifier)
/* harmony export */ });
/* harmony import */ var _base_BaseGradientBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/BaseGradientBackground.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseGradientBackground.js");

/**
 * @description Specifies that the gradient fade effect, used for the background when resizing with padding, uses the
 * predominant colors in the border pixels of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseGradientBackground}
 */
class BackgroundBorderGradientQualifier extends _base_BaseGradientBackground_js__WEBPACK_IMPORTED_MODULE_0__.BaseGradientBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:border_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundPredominantGradientQualifier": () => (/* binding */ BackgroundPredominantGradientQualifier)
/* harmony export */ });
/* harmony import */ var _base_BaseGradientBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/BaseGradientBackground.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/background/shared/base/BaseGradientBackground.js");

/**
 * @description Specifies that the gradient fade effect, used for the background when resizing with padding, uses the
 * predominant colors in the whole of the image.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseGradientBackground}
 */
class BackgroundPredominantGradientQualifier extends _base_BaseGradientBackground_js__WEBPACK_IMPORTED_MODULE_0__.BaseGradientBackground {
    /**
     * @description
     * Stringify the qualifier
     * BackgroundQualifiers don't have a value, but instead override the toString() function.
     */
    toString() {
        return `
    b_auto:predominant_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/colorSpace.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/colorSpace.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSpace": () => (/* binding */ ColorSpace),
/* harmony export */   "cmyk": () => (/* binding */ cmyk),
/* harmony export */   "keepCmyk": () => (/* binding */ keepCmyk),
/* harmony export */   "noCmyk": () => (/* binding */ noCmyk),
/* harmony export */   "srgb": () => (/* binding */ srgb),
/* harmony export */   "tinySrgb": () => (/* binding */ tinySrgb),
/* harmony export */   "trueColor": () => (/* binding */ trueColor)
/* harmony export */ });
/**
 * @description Contains functions to select the color space mode.
 * @namespace ColorSpace
 * @memberOf Qualifiers
 * @see Visit {@link Actions.Delivery.colorSpace|Delivery Color Space} for an example
 */
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function srgb() {
    return 'srgb';
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function trueColor() {
    return 'srgb:truecolor';
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function tinySrgb() {
    return 'tinysrgb';
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function cmyk() {
    return 'cmyk';
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function noCmyk() {
    return 'no_cmyk';
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function keepCmyk() {
    return 'keep_cmyk';
}
const ColorSpace = {
    cmyk,
    keepCmyk,
    noCmyk,
    srgb,
    tinySrgb,
    trueColor
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flag": () => (/* binding */ Flag),
/* harmony export */   "animated": () => (/* binding */ animated),
/* harmony export */   "animatedPng": () => (/* binding */ animatedPng),
/* harmony export */   "animatedWebP": () => (/* binding */ animatedWebP),
/* harmony export */   "anyFormat": () => (/* binding */ anyFormat),
/* harmony export */   "attachment": () => (/* binding */ attachment),
/* harmony export */   "clip": () => (/* binding */ clip),
/* harmony export */   "clipEvenOdd": () => (/* binding */ clipEvenOdd),
/* harmony export */   "custom": () => (/* binding */ custom),
/* harmony export */   "forceIcc": () => (/* binding */ forceIcc),
/* harmony export */   "forceStrip": () => (/* binding */ forceStrip),
/* harmony export */   "getInfo": () => (/* binding */ getInfo),
/* harmony export */   "hlsv3": () => (/* binding */ hlsv3),
/* harmony export */   "ignoreInitialAspectRatio": () => (/* binding */ ignoreInitialAspectRatio),
/* harmony export */   "ignoreMaskChannels": () => (/* binding */ ignoreMaskChannels),
/* harmony export */   "immutableCache": () => (/* binding */ immutableCache),
/* harmony export */   "keepAttribution": () => (/* binding */ keepAttribution),
/* harmony export */   "keepDar": () => (/* binding */ keepDar),
/* harmony export */   "keepIptc": () => (/* binding */ keepIptc),
/* harmony export */   "layerApply": () => (/* binding */ layerApply),
/* harmony export */   "lossy": () => (/* binding */ lossy),
/* harmony export */   "mono": () => (/* binding */ mono),
/* harmony export */   "noOverflow": () => (/* binding */ noOverflow),
/* harmony export */   "noStream": () => (/* binding */ noStream),
/* harmony export */   "png24": () => (/* binding */ png24),
/* harmony export */   "png32": () => (/* binding */ png32),
/* harmony export */   "png8": () => (/* binding */ png8),
/* harmony export */   "preserveTransparency": () => (/* binding */ preserveTransparency),
/* harmony export */   "progressive": () => (/* binding */ progressive),
/* harmony export */   "rasterize": () => (/* binding */ rasterize),
/* harmony export */   "regionRelative": () => (/* binding */ regionRelative),
/* harmony export */   "relative": () => (/* binding */ relative),
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "splice": () => (/* binding */ splice),
/* harmony export */   "streamingAttachment": () => (/* binding */ streamingAttachment),
/* harmony export */   "stripProfile": () => (/* binding */ stripProfile),
/* harmony export */   "tiff8Lzw": () => (/* binding */ tiff8Lzw),
/* harmony export */   "tiled": () => (/* binding */ tiled),
/* harmony export */   "truncateTS": () => (/* binding */ truncateTS),
/* harmony export */   "waveform": () => (/* binding */ waveform)
/* harmony export */ });
/* harmony import */ var _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/FlagQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js");
/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Qualifiers
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used when delivering a video file as an image format that supports animation, such as animated WebP.
 * Plays all frames rather than just delivering the first one as a static image.
 * Use this flag in addition to the flag or parameter controlling the delivery format,
 * for example f_auto or fl_awebp.

 * Note: When delivering a video in GIF format, it is delivered as an animated GIF by default and this flag is not
 * necessary. To deliver a single frame of a video in GIF format, use the page parameter.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animated() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('animated');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When converting animated images to WebP format, generate an animated WebP from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated WebPs are not supported in all browsers and versions.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animatedWebP() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('awebp');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function anyFormat() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('any_format');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When converting animated images to PNG format, generates an animated PNG from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated PNGs are not supported in all browsers and versions.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animatedPng() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('apng');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function clip() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('clip');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Trims pixels according to a clipping path included in the original image (e.g., manually created
 * using PhotoShop)
 * using an evenodd clipping rule.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function clipEvenOdd() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('clip_evenodd');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function forceStrip() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('force_strip');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Allows custom flag
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function custom(value) {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier(value);
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function forceIcc() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('force_icc');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function attachment(filename) {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('attachment', filename);
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Returns metadata of the input asset and of the transformed output asset in JSON instead of the
 * transformed image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function getInfo() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('getinfo');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Deliver an HLS adaptive bitrate streaming file as HLS v3 instead of the default version (HLS v4).
 * Delivering in this format requires a private CDN configuration.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function hlsv3() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('hlsv3');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Sets the cache-control to immutable for the asset.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function immutableCache() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('immutable_cache');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description * Allows specifying only either width or height so the value of the second axis remains as is, and is not
 * recalculated to maintain the aspect ratio of the original image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function ignoreInitialAspectRatio() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('ignore_aspect_ratio');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepAttribution() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('keep_attribution');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * Keep the Display Aspect Ratio metadata of the uploaded video (if it’s different from the current video
 * dimensions).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepDar() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('keep_dar');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Keeps all meta-data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepIptc() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('keep_iptc');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Applies all chained transformations, until a transformation component that includes this flag, on the last added
 * overlay or underlay instead of applying on the containing image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function layerApply() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('layer_apply');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Automatically use lossy compression when delivering animated GIF files.
 *
 * This flag can also be used as a conditional flag for delivering PNG files: it tells Cloudinary to deliver the
 * image in PNG format (as requested) unless there is no transparency channel - in which case deliver in JPEG
 * format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function lossy() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('lossy');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Convert the audio channel to mono
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function mono() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('mono');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#fl_no_overflow|Overflow in overlays}
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function noOverflow() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('no_overflow');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Don't stream a video that is currently being generated on the fly. Wait until the video is fully generated.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function noStream() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('no_stream');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the png24 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png24() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('png24');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the png32 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png32() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('png32');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the PNG8 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png8() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('png8');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function preserveTransparency() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('preserve_transparency');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generates a JPG image using the progressive (interlaced) JPG format.
 *
 * This format allows the browser to quickly show a low-quality rendering of the image until the full-quality
 * image is loaded.
 *
 * @param {string} mode? The mode to determine a specific progressive outcome as follows:
 * * semi - A smart optimization of the decoding time, compression level and progressive rendering
 *          (less iterations). This is the default mode when using q_auto.
 * * steep - Delivers a preview very quickly, and in a single later phase improves the image to
 *           the required resolution.
 * * none  - Use this to deliver a non-progressive image. This is the default mode when setting
 *           a specific value for quality.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function progressive(mode) {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('progressive', mode);
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function regionRelative() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('region_relative');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in
 * order to enable
 * PDF resizing and overlay manipulations.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function rasterize() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('rasterize');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function relative() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('relative');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function sanitize() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('sanitize');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Splices the video stipulated as an overlay on to the end of the container video instead of adding it as an
 * overlay.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function splice() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('splice');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to clear all ICC color profile data included with the image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function stripProfile() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('strip_profile');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description If the requested video transformation has already been generated, this flag works identically to
 * Flag::attachment.
 *
 *  However, if the video transformation is being requested for the first time, this flag causes the video download
 * to begin immediately, streaming it as a fragmented video file.
 *
 * In contrast, if the regular fl_attachment flag is used when a user requests a new video transformation,
 * the download will begin only after the complete transformed video has been generated.
 *
 * Most standard video players successfully play fragmented video files without issue.
 *
 * @param {string} filename The attachment's filename
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function streamingAttachment(filename) {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('streaming_attachment', filename);
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function tiff8Lzw() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('tiff8_lzw');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/layers#automatic_tiling|Tiling overlay}
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function tiled() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('tiled');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Truncate (trim) a video file based on the start time defined in the metadata (relevant only where the metadata
 * includes a directive to play only a section of the video).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function truncateTS() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('truncate_ts');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Create a waveform image (in the format specified by the file extension) from the audio or video file.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function waveform() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('waveform');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description A qualifier that ensures that an alpha channel is not applied to a TIFF image if it is a mask channel.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function ignoreMaskChannels() {
    return new _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier('ignore_mask_channels');
}
const Flag = {
    animated, anyFormat, animatedPng, animatedWebP,
    clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
    sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
    keepAttribution, keepIptc, custom, streamingAttachment, hlsv3, keepDar, noStream, mono,
    layerApply, relative, regionRelative, splice, truncateTS, waveform, ignoreInitialAspectRatio, clip,
    tiled, noOverflow, ignoreMaskChannels
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlagQualifier": () => (/* binding */ FlagQualifier)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");


/**
 * @memberOf Qualifiers.Flag
 * @extends {SDK.Qualifier}
 * @description the FlagQualifier class
 */
class FlagQualifier extends _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__.Qualifier {
    constructor(flagType, flagValue) {
        let qualifierValue;
        if (flagValue) {
            qualifierValue = new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__.QualifierValue([flagType, `${flagValue}`]).setDelimiter(':');
        }
        else {
            qualifierValue = flagType;
        }
        super('fl', qualifierValue);
        this.flagValue = flagValue;
    }
    toString() {
        return super.toString().replace(/\./, '%2E');
    }
    getFlagValue() {
        return this.flagValue;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/focusOn.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/focusOn.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusOn": () => (/* binding */ FocusOn),
/* harmony export */   "FocusOnValue": () => (/* reexport safe */ _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue),
/* harmony export */   "advancedEyes": () => (/* binding */ advancedEyes),
/* harmony export */   "advancedFace": () => (/* binding */ advancedFace),
/* harmony export */   "advancedFaces": () => (/* binding */ advancedFaces),
/* harmony export */   "aeroplane": () => (/* binding */ aeroplane),
/* harmony export */   "background": () => (/* binding */ background),
/* harmony export */   "bicycle": () => (/* binding */ bicycle),
/* harmony export */   "bird": () => (/* binding */ bird),
/* harmony export */   "boat": () => (/* binding */ boat),
/* harmony export */   "bottle": () => (/* binding */ bottle),
/* harmony export */   "bus": () => (/* binding */ bus),
/* harmony export */   "car": () => (/* binding */ car),
/* harmony export */   "cat": () => (/* binding */ cat),
/* harmony export */   "chair": () => (/* binding */ chair),
/* harmony export */   "cow": () => (/* binding */ cow),
/* harmony export */   "diningtable": () => (/* binding */ diningtable),
/* harmony export */   "dog": () => (/* binding */ dog),
/* harmony export */   "face": () => (/* binding */ face),
/* harmony export */   "faces": () => (/* binding */ faces),
/* harmony export */   "horse": () => (/* binding */ horse),
/* harmony export */   "microwave": () => (/* binding */ microwave),
/* harmony export */   "motorbike": () => (/* binding */ motorbike),
/* harmony export */   "ocr": () => (/* binding */ ocr),
/* harmony export */   "person": () => (/* binding */ person),
/* harmony export */   "pottedplant": () => (/* binding */ pottedplant),
/* harmony export */   "refrigerator": () => (/* binding */ refrigerator),
/* harmony export */   "sheep": () => (/* binding */ sheep),
/* harmony export */   "sink": () => (/* binding */ sink),
/* harmony export */   "skateboard": () => (/* binding */ skateboard),
/* harmony export */   "sofa": () => (/* binding */ sofa),
/* harmony export */   "train": () => (/* binding */ train),
/* harmony export */   "tvmonitor": () => (/* binding */ tvmonitor)
/* harmony export */ });
/* harmony import */ var _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gravity/qualifiers/focusOn/FocusOnValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js");

/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects birds
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function bird() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('bird');
}
/**
 * @summary qualifier
 * @description Detects dogs
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function dog() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('dog');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects cats
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function cat() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('cat');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects microwaves
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function microwave() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('microwave');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects refrigerators
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function refrigerator() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('refrigerator');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects bottles
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function bottle() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('bottle');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects sinks
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function sink() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('sink');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects skateboards
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function skateboard() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('skateboard');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects people
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function person() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('person');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function advancedFace() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('adv_face');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function advancedFaces() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('adv_faces');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function advancedEyes() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('adv_eyes');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function face() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('face');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function faces() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('faces');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function background() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('background');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects aeroplane
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function aeroplane() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('aeroplane');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects bicycle
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function bicycle() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('bicycle');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects boat
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function boat() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('boat');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects bus
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function bus() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('bus');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects car
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function car() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('car');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects chair
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function chair() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('chair');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects cow
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function cow() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('cow');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects diningtable
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function diningtable() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('diningtable');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects horse
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function horse() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('horse');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects motorbike
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function motorbike() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('motorbike');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects pottedplant
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function pottedplant() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('pottedplant');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects sheep
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function sheep() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('sheep');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects sofa
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function sofa() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('sofa');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects train
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function train() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('train');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detects tvmonitor
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function tvmonitor() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('tvmonitor');
}
/**
 * @summary qualifier
 * @memberOf Qualifiers.FocusOn
 * @description Detect all text elements in an image using the {@link https://cloudinary.com/documentation/ocr_text_detection_and_extraction_addon|OCR Text Detection and Extraction add-on} and use the detected bounding box coordinates as the basis of the transformation.
 * @return {Qualifiers.FocusOn.FocusOnValue} FocusOnValue
 */
function ocr() {
    return new _gravity_qualifiers_focusOn_FocusOnValue_js__WEBPACK_IMPORTED_MODULE_0__.FocusOnValue('ocr_text');
}
/**
 * @memberOf Qualifiers
 * @namespace FocusOn
 * @see Visit {@link Qualifiers.Gravity|Gravity} for an example
 */
const FocusOn = {
    person,
    cat,
    microwave,
    refrigerator,
    skateboard,
    bird,
    bottle,
    dog,
    sink,
    face,
    train,
    sofa,
    sheep,
    pottedplant,
    horse,
    faces,
    cow,
    bus,
    boat,
    advancedEyes,
    advancedFace,
    advancedFaces,
    aeroplane,
    background,
    bicycle,
    car,
    chair,
    diningtable,
    tvmonitor,
    motorbike,
    ocr
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/format/FormatQualifier.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/format/FormatQualifier.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatQualifier": () => (/* binding */ FormatQualifier)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");

/**
 * @memberOf Qualifiers.Format
 * @extends {SDK.QualifierValue}
 */
class FormatQualifier extends _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__.QualifierValue {
    constructor(val) {
        super(val);
        this.val = val;
    }
    getValue() {
        return this.val;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gravity": () => (/* binding */ Gravity),
/* harmony export */   "autoGravity": () => (/* binding */ autoGravity),
/* harmony export */   "compass": () => (/* binding */ compass),
/* harmony export */   "focusOn": () => (/* binding */ focusOn),
/* harmony export */   "xyCenter": () => (/* binding */ xyCenter)
/* harmony export */ });
/* harmony import */ var _gravity_compassGravity_CompassGravity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gravity/compassGravity/CompassGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/compassGravity/CompassGravity.js");
/* harmony import */ var _gravity_focusOnGravity_FocusOnGravity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gravity/focusOnGravity/FocusOnGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/focusOnGravity/FocusOnGravity.js");
/* harmony import */ var _gravity_autoGravity_AutoGravity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gravity/autoGravity/AutoGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/autoGravity/AutoGravity.js");
/* harmony import */ var _gravity_xyCenterGravity_XYCenterGravity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gravity/xyCenterGravity/XYCenterGravity.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/xyCenterGravity/XYCenterGravity.js");




/**
 * @description Defines the gravity based on directional values from a compass.
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/resizing_and_cropping#control_gravity|Control gravity for images}
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_resizing_and_cropping#control_gravity|Control gravity for videos}
 * @param {Qualifiers.Compass | string} direction A compass Values
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {north} from "@cloudinary/url-gen/qualifiers/compass";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(compass(north())))
 * @return {CompassGravity}
 */
function compass(direction) {
    return new _gravity_compassGravity_CompassGravity_js__WEBPACK_IMPORTED_MODULE_0__.CompassGravity(direction);
}
/**
 * @summary qualifier
 * @description Specifies what to focus on, for example: faces, objects, eyes, etc.
 * @param {...Qualifier.FocusOn} args One or more objects to focus on
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 * import {cat} from "@cloudinary/url-gen/qualifiers/focusOn";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(focusOn(cat())))
 * @return {FocusOnGravity}
 */
function focusOn(...args) {
    const res = [...args];
    return new _gravity_focusOnGravity_FocusOnGravity_js__WEBPACK_IMPORTED_MODULE_1__.FocusOnGravity(res);
}
/**
 * @summary qualifier
 * @description Automatically identifies the most interesting regions in the asset, can be qualified further by including what to focus on.
 * @memberOf Qualifiers.Gravity
 * @return {Qualifiers.Gravity.AutoGravity}
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity()))
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 * import {cat} from "@cloudinary/url-gen/qualifiers/focusOn";
 * import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity().autoFocus(AutoFocus.focusOn(cat()))))
 */
function autoGravity() {
    return new _gravity_autoGravity_AutoGravity_js__WEBPACK_IMPORTED_MODULE_2__.AutoGravity();
}
/**
 * @summary qualifier
 * @description Set the center of gravity to the given x & y coordinates.
 * @memberOf Qualifiers.Gravity
 * @return {XYCenterGravity}
 */
function xyCenter() {
    return new _gravity_xyCenterGravity_XYCenterGravity_js__WEBPACK_IMPORTED_MODULE_3__.XYCenterGravity();
}
/**
 * @description A qualifier that determines which part of an asset to focus on, and thus which part of the asset to keep, </br>
 *              when any part of the asset is cropped. For overlays, this setting determines where to place the overlay.
 * @namespace Gravity
 * @memberOf Qualifiers
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
 * import {north} from "@cloudinary/url-gen/qualifiers/compass";
 * import {crop} from "@cloudinary/url-gen/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(compass(north())))
 *
 * // Expand every function separately to see its own example
 */
const Gravity = {
    compass: compass,
    autoGravity: autoGravity,
    focusOn: focusOn,
    xyCenter
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GravityQualifier": () => (/* binding */ GravityQualifier)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/qualifier/Qualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js");
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");


/**
 * @memberOf Gravity.GravityQualifier
 * @extends {SDK.Qualifier}
 */
class GravityQualifier extends _internal_qualifier_Qualifier_js__WEBPACK_IMPORTED_MODULE_0__.Qualifier {
    /**
     * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
     */
    constructor(value) {
        super('g', new _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_1__.QualifierValue(value));
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/autoGravity/AutoGravity.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/autoGravity/AutoGravity.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoGravity": () => (/* binding */ AutoGravity)
/* harmony export */ });
/* harmony import */ var _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GravityQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js");

/**
 * @description The class for the autoGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class AutoGravity extends _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__.GravityQualifier {
    constructor() {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super('auto');
    }
    /**
     * @description Autofocuses on objects, allowing their priority within the algorithm to be configured.
     * @param {AutoFocus} AutoFocusObjects
     */
    autoFocus(...AutoFocusObjects) {
        this.addValue(AutoFocusObjects);
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/compassGravity/CompassGravity.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/compassGravity/CompassGravity.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompassGravity": () => (/* binding */ CompassGravity)
/* harmony export */ });
/* harmony import */ var _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GravityQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js");

/**
 * @description The class for the CompassGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class CompassGravity extends _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__.GravityQualifier {
    constructor(dir) {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super(dir);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/focusOnGravity/FocusOnGravity.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/focusOnGravity/FocusOnGravity.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusOnGravity": () => (/* binding */ FocusOnGravity)
/* harmony export */ });
/* harmony import */ var _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GravityQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js");

/**
 * @description The class for the FocusOn builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class FocusOnGravity extends _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__.GravityQualifier {
    constructor(FocusOnObjects) {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super(FocusOnObjects);
    }
    /**
     * @description Specifies the gravity to use if none of the other gravity objects are found.
     * @param {Qualifiers.Gravity.AutoGravity} val
     */
    fallbackGravity(val) {
        /*
         *  FocusOnGravity(this) is already a qualifier, with a key and a value g_{obj1}
         *  fallBackGravity also attempts to add a value, to reach the result of g_{obj1}:auto:{obj2}
         *  Since AutoGravity is a Qualifier, it also comes with its own g_ key, which needs to be removed.
         *  To solve it, we take only the value from the qualifier, instead of the whole thing
         */
        this.addValue(val.qualifierValue);
        return this;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/compass/CompassQualifier.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/compass/CompassQualifier.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompassQualifier": () => (/* binding */ CompassQualifier)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");

/**
 * @memberOf Qualifiers.Compass
 * @extends {SDK.QualifierValue}
 */
class CompassQualifier extends _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__.QualifierValue {
    constructor(val) {
        super();
        this.val = val;
    }
    toString() {
        return this.val;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusOnValue": () => (/* binding */ FocusOnValue)
/* harmony export */ });
/* harmony import */ var _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../internal/qualifier/QualifierValue.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js");

/**
 * @memberOf Qualifiers.FocusOn
 * @extends {SDK.QualifierValue}
 */
class FocusOnValue extends _internal_qualifier_QualifierValue_js__WEBPACK_IMPORTED_MODULE_0__.QualifierValue {
    constructor(name) {
        super();
        this.name = name;
    }
    toString() {
        return this.name;
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/xyCenterGravity/XYCenterGravity.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/xyCenterGravity/XYCenterGravity.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XYCenterGravity": () => (/* binding */ XYCenterGravity)
/* harmony export */ });
/* harmony import */ var _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GravityQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/gravity/GravityQualifier.js");

/**
 * @description The class for the XYCenter Gravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class XYCenterGravity extends _GravityQualifier_js__WEBPACK_IMPORTED_MODULE_0__.GravityQualifier {
    constructor() {
        // Required due to https://github.com/microsoft/TypeScript/issues/13029
        /* istanbul ignore next */
        super('xy_center');
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/progressive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/progressive.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Progressive": () => (/* binding */ Progressive),
/* harmony export */   "ProgressiveQualifier": () => (/* binding */ ProgressiveQualifier),
/* harmony export */   "none": () => (/* binding */ none),
/* harmony export */   "progressive": () => (/* binding */ progressive),
/* harmony export */   "semi": () => (/* binding */ semi),
/* harmony export */   "steep": () => (/* binding */ steep)
/* harmony export */ });
/* harmony import */ var _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/FlagQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js");
/**
 * @description Contains functions to select the mode when using a progressive format.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/transformation_reference#fl_progressive|Progressive modes}
 * @memberOf Qualifiers
 * @namespace Progressive
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {format} from "@cloudinary/url-gen/actions/delivery";
 * import {jpg} from "@cloudinary/url-gen/qualifiers/format";
 * import {steep} from "@cloudinary/url-gen/qualifiers/progressive";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(format(jpg()).progressive(steep()))
 */

class ProgressiveQualifier extends _flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_0__.FlagQualifier {
    constructor(mode) {
        super('progressive', mode);
    }
}
/**
 * @memberOf Qualifiers.Progressive
 */
function none() {
    return new ProgressiveQualifier('none');
}
/**
 * @memberOf Qualifiers.Progressive
 */
function semi() {
    return new ProgressiveQualifier('semi');
}
/**
 * @memberOf Qualifiers.Progressive
 */
function steep() {
    return new ProgressiveQualifier('steep');
}
/**
 * @memberOf Qualifiers.Progressive
 */
function progressive() {
    return new ProgressiveQualifier();
}
const Progressive = {
    semi,
    none,
    steep,
    progressive,
    ProgressiveQualifier
};



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/transformation/ImageTransformation.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/transformation/ImageTransformation.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageTransformation": () => (/* binding */ ImageTransformation)
/* harmony export */ });
/* harmony import */ var _Transformation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transformation.js */ "./node_modules/@cloudinary/transformation-builder-sdk/transformation/Transformation.js");

/**
 * @summary SDK
 * @extends {SDK.Transformation}
 * @memberOf SDK
 */
class ImageTransformation extends _Transformation_js__WEBPACK_IMPORTED_MODULE_0__.Transformation {
}



/***/ }),

/***/ "./node_modules/@cloudinary/transformation-builder-sdk/transformation/Transformation.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/transformation-builder-sdk/transformation/Transformation.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transformation": () => (/* binding */ Transformation)
/* harmony export */ });
/* harmony import */ var _internal_Action_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/Action.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js");
/* harmony import */ var _actions_background_actions_BackgroundColor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/background/actions/BackgroundColor.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/background/actions/BackgroundColor.js");
/* harmony import */ var _internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/utils/prepareColor.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js");
/* harmony import */ var _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qualifiers/flag/FlagQualifier.js */ "./node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js");
/* harmony import */ var _internal_RawAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/RawAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/RawAction.js");
/* harmony import */ var _internal_models_IErrorObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/models/IErrorObject.js */ "./node_modules/@cloudinary/transformation-builder-sdk/internal/models/IErrorObject.js");
/* harmony import */ var _actions_delivery_DeliveryFormatAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/delivery/DeliveryFormatAction.js */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js");







/**
 * @summary SDK
 * @description - Defines how to transform an asset
 * @memberOf SDK
 */
class Transformation {
    constructor() {
        this.actions = [];
    }
    /**
     * @param {SDK.Action | string} action
     * @return {this}
     */
    addAction(action) {
        let actionToAdd;
        if (typeof action === 'string') {
            if (action.indexOf('/') >= 0) {
                throw 'addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead';
            }
            else {
                actionToAdd = new _internal_RawAction_js__WEBPACK_IMPORTED_MODULE_0__.RawAction(action);
            }
        }
        else {
            actionToAdd = action;
        }
        this.actions.push(actionToAdd);
        return this;
    }
    /**
     * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
     * @param {string | SDK.Transformation} tx
     * @example
     * import {Transformation} from "@cloudinary/url-gen";
     *
     * const transformation = new Transformation();
     * transformation.addTransformation('w_100/w_200/w_300');
     * @return {this}
     */
    addTransformation(tx) {
        if (tx instanceof Transformation) {
            // Concat the new actions into the existing actions
            this.actions = this.actions.concat(tx.actions);
        }
        else {
            this.actions.push(new _internal_RawAction_js__WEBPACK_IMPORTED_MODULE_0__.RawAction(tx));
        }
        return this;
    }
    /**
     * @return {string}
     */
    toString() {
        return this.actions
            .map((action) => {
            return action.toString();
        })
            .filter((a) => a)
            .join('/');
    }
    /**
     * @description Delivers an animated GIF.
     * @param {AnimatedAction} animatedAction
     * @return {this}
     */
    animated(animatedAction) {
        return this.addAction(animatedAction);
    }
    /**
     * @description Adds a border around the image.
     * @param {Border} borderAction
     * @return {this}
     */
    border(borderAction) {
        return this.addAction(borderAction);
    }
    /**
     * @description Adjusts the shape of the delivered image. </br>
     * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
     * @param {IReshape} reshapeAction
     * @return {this}
     */
    reshape(reshapeAction) {
        return this.addAction(reshapeAction);
    }
    /**
     * @description Resize the asset using provided resize action
     * @param {ResizeSimpleAction} resizeAction
     * @return {this}
     */
    resize(resizeAction) {
        return this.addAction(resizeAction);
    }
    /**
     * @desc An alias to Action Delivery.quality
     * @param {string|number} quality
     * @return {this}
     */
    quality(quality) {
        this.addAction(new _actions_delivery_DeliveryFormatAction_js__WEBPACK_IMPORTED_MODULE_1__.DeliveryFormatAction('q', quality));
        return this;
    }
    /**
     * @desc An alias to Action Delivery.format
     * @param {string} format
     * @return {this}
     */
    format(format) {
        this.addAction(new _actions_delivery_DeliveryFormatAction_js__WEBPACK_IMPORTED_MODULE_1__.DeliveryFormatAction('f', format));
        return this;
    }
    /**
     * @description Rounds the specified corners of an image.
     * @param roundCornersAction
     * @return {this}
     */
    roundCorners(roundCornersAction) {
        return this.addAction(roundCornersAction);
    }
    /**
     * @description Adds an overlay over the base image.
     * @param {LayerAction} overlayAction
     * @return {this}
     */
    overlay(overlayAction) {
        return this.addAction(overlayAction);
    }
    /**
     * @description Adds an underlay under the base image.
     * @param {LayerAction} underlayAction
     * @return {this}
     */
    underlay(underlayAction) {
        underlayAction.setLayerType('u');
        return this.addAction(underlayAction);
    }
    /**
     * @description Defines an new user variable.
     * @param {VariableAction} variableAction
     * @return {this}
     */
    addVariable(variableAction) {
        return this.addAction(variableAction);
    }
    /**
     * @description Specifies a condition to be met before applying a transformation.
     * @param {ConditionalAction} conditionAction
     * @return {this}
     */
    conditional(conditionAction) {
        return this.addAction(conditionAction);
    }
    /**
     * @description Applies a filter or an effect on an asset.
     * @param {SimpleEffectAction} effectAction
     * @return {this}
     */
    effect(effectAction) {
        return this.addAction(effectAction);
    }
    /**
     * @description Applies adjustment effect on an asset.
     * @param action
     * @return {this}
     */
    adjust(action) {
        return this.addAction(action);
    }
    /**
     * @description Rotates the asset by the given angle.
     * @param {RotateAction} rotateAction
     * @return {this}
     */
    rotate(rotateAction) {
        return this.addAction(rotateAction);
    }
    /**
     * @description Applies a pre-defined named transformation of the given name.
     * @param {NamedTransformation} namedTransformation
     * @return {this}
     */
    namedTransformation(namedTransformation) {
        return this.addAction(namedTransformation);
    }
    /**
     * @description Applies delivery action.
     * @param deliveryAction
     * @return {this}
     */
    delivery(deliveryAction) {
        return this.addAction(deliveryAction);
    }
    /**
     * @description Sets the color of the background.
     * @param {Qualifiers.Color} color
     * @return {this}
     */
    backgroundColor(color) {
        return this.addAction(new _actions_background_actions_BackgroundColor_js__WEBPACK_IMPORTED_MODULE_2__.BackgroundColor((0,_internal_utils_prepareColor_js__WEBPACK_IMPORTED_MODULE_3__.prepareColor)(color)));
    }
    /**
     * @description Adds a layer in a Photoshop document.
     * @param action
     * @return {this}
     */
    psdTools(action) {
        return this.addAction(action);
    }
    /**
     * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
     * @param action
     * @return {this}
     */
    extract(action) {
        return this.addAction(action);
    }
    /**
     * @description Adds a flag as a separate action.
     * @param {Qualifiers.Flag | string} flagQualifier
     * @return {this}
     */
    addFlag(flagQualifier) {
        const action = new _internal_Action_js__WEBPACK_IMPORTED_MODULE_4__.Action();
        let flagToAdd = flagQualifier;
        if (typeof flagQualifier === 'string') {
            flagToAdd = new _qualifiers_flag_FlagQualifier_js__WEBPACK_IMPORTED_MODULE_5__.FlagQualifier(flagQualifier);
        }
        action.addQualifier(flagToAdd);
        return this.addAction(action);
    }
    /**
     * @description Inject a custom function into the image transformation pipeline.
     * @return {this}
     */
    customFunction(customFunction) {
        return this.addAction(customFunction);
    }
    /**
     * Transcodes the video (or audio) to another format.
     * @param {Action} action
     * @return {this}
     */
    transcode(action) {
        return this.addAction(action);
    }
    /**
     * Applies the specified video edit action.
     *
     * @param {videoEditType} action
     * @return {this}
     */
    videoEdit(action) {
        return this.addAction(action);
    }
    toJson() {
        const actions = [];
        for (const action of this.actions) {
            const json = action.toJson();
            if ((0,_internal_models_IErrorObject_js__WEBPACK_IMPORTED_MODULE_6__.isErrorObject)(json)) {
                // Fail early and return an IErrorObject
                return json;
            }
            actions.push(json);
        }
        return { actions };
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/assets/CloudinaryFile.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/assets/CloudinaryFile.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudinaryFile": () => (/* binding */ CloudinaryFile),
/* harmony export */   "SEO_TYPES": () => (/* binding */ SEO_TYPES)
/* harmony export */ });
/* harmony import */ var _internal_url_cloudinaryURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/url/cloudinaryURL.js */ "./node_modules/@cloudinary/url-gen/internal/url/cloudinaryURL.js");
/* harmony import */ var _config_URLConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/URLConfig.js */ "./node_modules/@cloudinary/url-gen/config/URLConfig.js");
/* harmony import */ var _sdkAnalytics_getSDKAnalyticsSignature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sdkAnalytics/getSDKAnalyticsSignature.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/getSDKAnalyticsSignature.js");



/**
 * This const contains all the valid combination of asset/delivery for URL shortening purposes
 * It's exported because it's used in a test, but it's not really shared enough to belong in a separate file
 */
const SEO_TYPES = {
    "image/upload": "images",
    "image/private": "private_images",
    "image/authenticated": "authenticated_images",
    "raw/upload": "files",
    "video/upload": "videos"
};
/**
 * @description Cloudinary file without a transformation
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryFile {
    constructor(publicID, cloudConfig = {}, urlConfig) {
        this.setPublicID(publicID);
        this.setCloudConfig(cloudConfig);
        this.setURLConfig(urlConfig);
    }
    /**
     * @description Sets the URL Config for this asset
     * @param urlConfig
     * @return {this}
     */
    setURLConfig(urlConfig) {
        this.urlConfig = new _config_URLConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"](urlConfig);
        return this;
    }
    /**
     * @description Sets the Cloud Config for this asset
     * @param urlConfig
     * @return {this}
     */
    setCloudConfig(cloudConfig) {
        this.cloudName = cloudConfig.cloudName;
        this.apiKey = cloudConfig.apiKey;
        this.apiSecret = cloudConfig.apiSecret;
        this.authToken = cloudConfig.authToken;
        return this;
    }
    /**
     * @description Sets the public ID of the asset.
     * @param {string} publicID The public ID of the asset.
     * @return {this}
     */
    setPublicID(publicID) {
        // PublicID must be a string!
        this.publicID = publicID ? publicID.toString() : '';
        return this;
    }
    /**
     * @description Sets the delivery type of the asset.
     * @param {DELIVERY_TYPE | string} newType The type of the asset.
     * @return {this}
     */
    setDeliveryType(newType) {
        this.deliveryType = newType;
        return this;
    }
    /**
     * @description Sets the URL SEO suffix of the asset.
     * @param {string} newSuffix The SEO suffix.
     * @return {this}
     */
    setSuffix(newSuffix) {
        this.suffix = newSuffix;
        return this;
    }
    /**
     * @description Sets the signature of the asset.
     * @param {string} signature The signature.
     * @return {this}
     */
    setSignature(signature) {
        this.signature = signature;
        return this;
    }
    /**
     * @description Sets the version of the asset.
     * @param {string} newVersion The version of the asset.
     * @return {this}
     */
    setVersion(newVersion) {
        if (newVersion) {
            this.version = newVersion;
        }
        return this;
    }
    /**
     * @description Sets the asset type.
     * @param {string} newType The type of the asset.
     * @return {this}
     */
    setAssetType(newType) {
        if (newType) {
            this.assetType = newType;
        }
        return this;
    }
    sign() {
        return this;
    }
    /**
     * @description Serializes to URL string
     * @param overwriteOptions
     */
    toURL(overwriteOptions = {}) {
        return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
    }
    /**
     * @description Validate various options before attempting to create a URL
     * The function will throw in case a violation
     * @throws Validation errors
     */
    validateAssetForURLCreation() {
        if (typeof this.cloudName === 'undefined') {
            throw 'You must supply a cloudName when initializing the asset';
        }
        const suffixContainsDot = this.suffix && this.suffix.indexOf('.') >= 0;
        const suffixContainsSlash = this.suffix && this.suffix.indexOf('/') >= 0;
        if (suffixContainsDot || suffixContainsSlash) {
            throw '`suffix`` should not include . or /';
        }
    }
    /**
     * @description return an SEO friendly name for a combination of asset/delivery, some examples:
     * * image/upload -> images
     * * video/upload -> videos
     * If no match is found, return `{asset}/{delivery}`
     */
    getResourceType() {
        const assetType = (0,_internal_url_cloudinaryURL_js__WEBPACK_IMPORTED_MODULE_1__.handleAssetType)(this.assetType);
        const deliveryType = (0,_internal_url_cloudinaryURL_js__WEBPACK_IMPORTED_MODULE_1__.handleDeliveryType)(this.deliveryType);
        const hasSuffix = !!this.suffix;
        const regularSEOType = `${assetType}/${deliveryType}`;
        const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
        const useRootPath = this.urlConfig.useRootPath;
        const shorten = this.urlConfig.shorten;
        // Quick exit incase of useRootPath
        if (useRootPath) {
            if (regularSEOType === 'image/upload') {
                return ''; // For image/upload we're done, just return nothing
            }
            else {
                throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
            }
        }
        if (shorten && regularSEOType === 'image/upload') {
            return 'iu';
        }
        if (hasSuffix) {
            if (shortSEOType) {
                return shortSEOType;
            }
            else {
                throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(', ')}, Provided: ${regularSEOType} instead`);
            }
        }
        // If all else fails, return the regular image/upload combination (asset/delivery)
        return regularSEOType;
    }
    getSignature() {
        if (this.signature) {
            return `s--${this.signature}--`;
        }
        else {
            return '';
        }
    }
    /**
     *
     * @description Creates a fully qualified CloudinaryURL
     * @return {string} CloudinaryURL
     * @throws Validation Errors
     */
    createCloudinaryURL(transformation, trackedAnalytics) {
        // In accordance with the existing implementation, if no publicID exists we should return nothing.
        if (!this.publicID) {
            return '';
        }
        // Throws if some options are mis-configured
        // See the function for more information on when it throws
        this.validateAssetForURLCreation();
        const prefix = (0,_internal_url_cloudinaryURL_js__WEBPACK_IMPORTED_MODULE_1__.getUrlPrefix)(this.cloudName, this.urlConfig);
        const transformationString = transformation ? transformation.toString() : '';
        const version = (0,_internal_url_cloudinaryURL_js__WEBPACK_IMPORTED_MODULE_1__.getUrlVersion)(this.publicID, this.version, this.urlConfig.forceVersion);
        const publicID = this.publicID
            // Serialize the publicID, but leave slashes alone.
            // we can't use serializeCloudinaryCharacters because that does both things (, and /)
            .replace(/,/g, '%2C');
        // Resource type is a mixture of assetType, deliveryType and various URL Configurations
        // Note how `suffix` changes both image/upload (resourceType) and also is appended at the end
        const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID, this.suffix]
            .filter((a) => a)
            .join('/');
        if (typeof transformation === 'string') {
            return url;
        }
        else {
            const safeURL = encodeURI(url)
                .replace(/\?/g, '%3F')
                .replace(/=/g, '%3D');
            // urlConfig.analytics is true by default, has to be explicitly set to false to overwrite
            // Don't add analytics when publicId includes a '?' to not risk changing existing query params
            if (this.urlConfig.analytics !== false && !(publicID.includes('?'))) {
                return `${safeURL}?_a=${(0,_sdkAnalytics_getSDKAnalyticsSignature_js__WEBPACK_IMPORTED_MODULE_2__.getSDKAnalyticsSignature)(trackedAnalytics)}`;
            }
            else {
                return safeURL;
            }
        }
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/assets/CloudinaryImage.js":
/*!********************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/assets/CloudinaryImage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudinaryImage": () => (/* binding */ CloudinaryImage)
/* harmony export */ });
/* harmony import */ var _cloudinary_transformation_builder_sdk_transformation_ImageTransformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloudinary/transformation-builder-sdk/transformation/ImageTransformation */ "./node_modules/@cloudinary/transformation-builder-sdk/transformation/ImageTransformation.js");
/* harmony import */ var _CloudinaryTransformable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloudinaryTransformable.js */ "./node_modules/@cloudinary/url-gen/assets/CloudinaryTransformable.js");


/**
 * @desc Cloudinary image asset, with image-related transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryImage extends _CloudinaryTransformable_js__WEBPACK_IMPORTED_MODULE_0__.CloudinaryTransformable {
    constructor(publicID, cloudConfig, urlConfig) {
        /* istanbul ignore next */
        super(publicID, cloudConfig, urlConfig, new _cloudinary_transformation_builder_sdk_transformation_ImageTransformation__WEBPACK_IMPORTED_MODULE_1__.ImageTransformation());
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/assets/CloudinaryTransformable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/assets/CloudinaryTransformable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudinaryTransformable": () => (/* binding */ CloudinaryTransformable)
/* harmony export */ });
/* harmony import */ var _CloudinaryFile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloudinaryFile.js */ "./node_modules/@cloudinary/url-gen/assets/CloudinaryFile.js");
/* harmony import */ var _cloudinary_transformation_builder_sdk_actions_delivery_DeliveryFormatAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction */ "./node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js");


/**
 * @desc Cloudinary Transformable interface, extended by any class that needs a Transformation Interface
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryTransformable extends _CloudinaryFile_js__WEBPACK_IMPORTED_MODULE_0__.CloudinaryFile {
    constructor(publicID, cloudConfig, urlConfig, transformation) {
        /* istanbul ignore next */
        super(publicID, cloudConfig, urlConfig);
        this.transformation = transformation;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Animated} animated
     * @return {this}
     */
    animated(animated) {
        this.transformation.animated(animated);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Border} border
     * @return {this}
     */
    border(border) {
        this.transformation.border(border);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Reshape} reshape
     * @return {this}
     */
    reshape(reshape) {
        this.transformation.reshape(reshape);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Resize} resize
     * @return {this}
     */
    resize(resize) {
        this.transformation.resize(resize);
        return this;
    }
    /**
     * @desc An alias to Action Delivery.quality
     * @param {string|number} quality
     * @return {this}
     */
    quality(quality) {
        this.addAction(new _cloudinary_transformation_builder_sdk_actions_delivery_DeliveryFormatAction__WEBPACK_IMPORTED_MODULE_1__.DeliveryFormatAction('q', quality));
        return this;
    }
    /**
     * @desc An alias to Action Delivery.format
     * @param {string} format
     * @return {this}
     */
    format(format) {
        this.addAction(new _cloudinary_transformation_builder_sdk_actions_delivery_DeliveryFormatAction__WEBPACK_IMPORTED_MODULE_1__.DeliveryFormatAction('f', format));
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.RoundCorners} roundCorners
     * @return {this}
     */
    roundCorners(roundCorners) {
        this.transformation.roundCorners(roundCorners);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @return {this}
     */
    overlay(overlayAction) {
        this.transformation.overlay(overlayAction);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Variable} variableAction
     * @return {this}
     */
    addVariable(variableAction) {
        this.transformation.addVariable(variableAction);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Condition} conditionalAction
     * @return {this}
     */
    conditional(conditionalAction) {
        this.transformation.conditional(conditionalAction);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Effect} effect
     * @return {this}
     */
    effect(effect) {
        this.transformation.effect(effect);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Adjust} action
     * @return {this}
     */
    adjust(action) {
        this.transformation.adjust(action);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Rotate} rotate
     * @return {this}
     */
    rotate(rotate) {
        this.transformation.rotate(rotate);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.NamedTransformation} namedTransformation
     * @return {this}
     */
    namedTransformation(namedTransformation) {
        this.transformation.namedTransformation(namedTransformation);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Delivery} deliveryAction
     * @return {this}
     */
    delivery(deliveryAction) {
        this.transformation.delivery(deliveryAction);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Qualifiers.color} color
     * @return {this}
     */
    backgroundColor(color) {
        this.transformation.backgroundColor(color);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.PSDTools} action
     * @return {this}
     */
    psdTools(action) {
        this.transformation.psdTools(action);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.Extract} action
     * @return {this}
     */
    extract(action) {
        this.transformation.extract(action);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Qualifiers.Flag | string} flagQualifier
     * @return {this}
     */
    addFlag(flagQualifier) {
        this.transformation.addFlag(flagQualifier);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {Actions.CustomFunction} customFunction
     * @return {this}
     */
    customFunction(customFunction) {
        this.transformation.customFunction(customFunction);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @param {SDK.Action | string} action
     * @return {this}
     */
    addAction(action) {
        this.transformation.addAction(action);
        return this;
    }
    /**
     * @description Extend your transformation with another transformation
     * @param { string | SDK.Transformation } tx
     */
    addTransformation(tx) {
        this.transformation.addTransformation(tx);
        return this;
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @return {string}
     */
    toString() {
        return this.transformation.toString();
    }
    /**
     * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
     * @return {this}
     */
    underlay(underlayAction) {
        this.transformation.underlay(underlayAction);
        return this;
    }
    toURL(overwriteOptions = {}) {
        return this.createCloudinaryURL(this.transformation, overwriteOptions === null || overwriteOptions === void 0 ? void 0 : overwriteOptions.trackedAnalytics);
    }
}



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/config/BaseConfig.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/config/BaseConfig.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @private
 * @param {any} a
 */
function isObject(a) {
    if (typeof a !== 'object' || a instanceof Array) {
        return false;
    }
    else {
        return true;
    }
}
class Config {
    filterOutNonSupportedKeys(userProvidedConfig, validKeys) {
        const obj = Object.create({});
        if (isObject(userProvidedConfig)) {
            Object.keys(userProvidedConfig).forEach((key) => {
                if (validKeys.indexOf(key) >= 0) {
                    obj[key] = userProvidedConfig[key];
                }
                else {
                    console.warn('Warning - unsupported key provided to configuration: ', key);
                }
            });
            return obj;
        }
        else {
            return Object.create({});
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/config/URLConfig.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/config/URLConfig.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseConfig.js */ "./node_modules/@cloudinary/url-gen/config/BaseConfig.js");
/* harmony import */ var _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/internalConstants.js */ "./node_modules/@cloudinary/url-gen/internal/internalConstants.js");


class URLConfig extends _BaseConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param {IURLConfig} userURLConfig
     */
    constructor(userURLConfig) {
        super();
        const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_URL_CONFIG);
        Object.assign(this, {
            secure: true
        }, urlConfig);
    }
    extend(userURLConfig) {
        const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, _internal_internalConstants_js__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_URL_CONFIG);
        return new URLConfig(Object.assign({}, this, urlConfig));
    }
    /**
     * @param {string} value Sets the cname
     */
    setCname(value) {
        this.cname = value;
        return this;
    }
    /**
     * @param {string} value Sets the secureDistribution
     */
    setSecureDistribution(value) {
        this.secureDistribution = value;
        return this;
    }
    /**
     * @param {boolean} value Sets whether to use a private CDN (Removes cloudName from URL)
     */
    setPrivateCdn(value) {
        this.privateCdn = value;
        return this;
    }
    /**
     * @param value Sets whether or not to sign the URL
     */
    setSignUrl(value) {
        this.signUrl = value;
        return this;
    }
    /**
     * @param value Sets whether or not to use a long signature
     */
    setLongUrlSignature(value) {
        this.longUrlSignature = value;
        return this;
    }
    /**
     * @param value Sets whether or not to shorten the URL
     */
    setShorten(value) {
        this.shorten = value;
        return this;
    }
    /**
     * @param value Sets whether or not to use a root path
     */
    setUseRootPath(value) {
        this.useRootPath = value;
        return this;
    }
    /**
     * @param value Sets whether or not to deliver the asset through https
     */
    setSecure(value) {
        this.secure = value;
        return this;
    }
    /**
     * @param value Sets whether to force a version in the URL
     */
    setForceVersion(value) {
        this.forceVersion = value;
        return this;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URLConfig);


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/internalConstants.js":
/*!************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/internalConstants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_CLOUD_CONFIG": () => (/* binding */ ALLOWED_CLOUD_CONFIG),
/* harmony export */   "ALLOWED_URL_CONFIG": () => (/* binding */ ALLOWED_URL_CONFIG)
/* harmony export */ });
/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */
/**
 * @private
 */
const ALLOWED_URL_CONFIG = [
    'cname',
    'secureDistribution',
    'privateCdn',
    'signUrl',
    'longUrlSignature',
    'shorten',
    'useRootPath',
    'secure',
    'forceVersion',
    'analytics'
];
/**
 * @private
 */
const ALLOWED_CLOUD_CONFIG = [
    'cloudName',
    'apiKey',
    'apiSecret',
    'authToken'
];


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/url/cloudinaryURL.js":
/*!************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/url/cloudinaryURL.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlPrefix": () => (/* binding */ getUrlPrefix),
/* harmony export */   "getUrlVersion": () => (/* binding */ getUrlVersion),
/* harmony export */   "handleAssetType": () => (/* binding */ handleAssetType),
/* harmony export */   "handleDeliveryType": () => (/* binding */ handleDeliveryType)
/* harmony export */ });
/* harmony import */ var _urlUtils_isUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlUtils/isUrl.js */ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isUrl.js");
/* harmony import */ var _urlUtils_isFileName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlUtils/isFileName.js */ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isFileName.js");
/* harmony import */ var _urlUtils_publicIDContainsVersion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlUtils/publicIDContainsVersion.js */ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/publicIDContainsVersion.js");



/**
 * Create the URL prefix for Cloudinary resources.
 * Available use cases
 * http://res.cloudinary.com/{cloudName}
 * https://res.cloudinary.com/{cloudName}
 * https://{cloudName}-res.cloudinary.com/
 * http://{domain}/${cloudName}
 * https://{domain}/${cloudName}
 * https://{domain}
 * @private
 *
 * @param {string} cloudName
 * @param {IURLConfig} urlConfig
 */
function getUrlPrefix(cloudName, urlConfig) {
    const secure = urlConfig.secure;
    const privateCDN = urlConfig.privateCdn;
    const cname = urlConfig.cname;
    const secureDistribution = urlConfig.secureDistribution;
    if (!secure && !cname) {
        return `http://res.cloudinary.com/${cloudName}`;
    }
    if (secure && !secureDistribution && privateCDN) {
        return `https://${cloudName}-res.cloudinary.com`;
    }
    if (secure && !secureDistribution) {
        return `https://res.cloudinary.com/${cloudName}`;
    }
    if (secure && secureDistribution && privateCDN) {
        return `https://${secureDistribution}`;
    }
    if (secure && secureDistribution) {
        return `https://${secureDistribution}/${cloudName}`;
    }
    if (!secure && cname) {
        return `http://${cname}/${cloudName}`;
    }
    else {
        return 'ERROR';
    }
}
/**
 * @private
 * @param assetType
 */
function handleAssetType(assetType) {
    //default to image
    if (!assetType) {
        return 'image';
    }
    return assetType;
}
/**
 * @private
 * @param deliveryType
 */
function handleDeliveryType(deliveryType) {
    //default to upload
    if (!deliveryType) {
        return 'upload';
    }
    return deliveryType;
}
/**
 *
 * @param {string} publicID
 * @param {number} version
 * @param {boolean} forceVersion
 */
function getUrlVersion(publicID, version, forceVersion) {
    const shouldForceVersion = forceVersion !== false;
    if (version) {
        return `v${version}`;
    }
    // In all these conditions we never force a version
    if ((0,_urlUtils_publicIDContainsVersion_js__WEBPACK_IMPORTED_MODULE_0__.publicIDContainsVersion)(publicID) || (0,_urlUtils_isUrl_js__WEBPACK_IMPORTED_MODULE_1__.isUrl)(publicID) || (0,_urlUtils_isFileName_js__WEBPACK_IMPORTED_MODULE_2__.isFileName)(publicID)) {
        return '';
    }
    return shouldForceVersion ? 'v1' : '';
}



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isFileName.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isFileName.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFileName": () => (/* binding */ isFileName)
/* harmony export */ });
/**
 *
 * @param publicID
 */
function isFileName(publicID) {
    return publicID.indexOf('/') < 0;
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isUrl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/url/urlUtils/isUrl.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUrl": () => (/* binding */ isUrl)
/* harmony export */ });
/**
 *
 * @param publicID
 */
function isUrl(publicID) {
    return publicID.match(/^https?:\//);
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/url/urlUtils/publicIDContainsVersion.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/url/urlUtils/publicIDContainsVersion.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publicIDContainsVersion": () => (/* binding */ publicIDContainsVersion)
/* harmony export */ });
/**
 *
 * @param publicID
 */
function publicIDContainsVersion(publicID) {
    return publicID.match(/^v[0-9]+/);
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/internal/utils/packageVersion.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/internal/utils/packageVersion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageVersion": () => (/* binding */ packageVersion)
/* harmony export */ });
const packageVersion = '1.8.6';
/**
 * Export package version (injected during our build).
 * Reason for this is that If we import values from from package.json,
 * it will cause an error for users who do not have an 'import from json' plugin
 * as part of their build process / bundler.
 */



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js":
/*!********************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base64Map": () => (/* binding */ base64Map)
/* harmony export */ });
/* harmony import */ var _stringPad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringPad.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js");

/**
 * This file maps sequences of 6 bit binary digits to a character in base64.
 * 000000 -> A
 * 110011 -> Z
 * 111111 -> /
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const base64Map = {};
let num = 0;
chars.split('').forEach((char) => {
    let key = num.toString(2);
    key = (0,_stringPad_js__WEBPACK_IMPORTED_MODULE_0__.stringPad)(key, 6, '0');
    base64Map[key] = char;
    num++;
});
/**
 * Map of [six-bit binary codes] -> [Base64 characters]
 */



/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/encodeVersion.js":
/*!************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/encodeVersion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeVersion": () => (/* binding */ encodeVersion)
/* harmony export */ });
/* harmony import */ var _base64Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base64Map.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js");
/* harmony import */ var _stringPad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringPad.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js");
/* harmony import */ var _reverseVersion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverseVersion.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/reverseVersion.js");



/**
 * @private
 * @description Encodes a semVer-like version string
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} A string built from 3 characters of the base64 table that encode the semVer
 */
function encodeVersion(semVer) {
    let strResult = '';
    // support x.y or x.y.z by using 'parts' as a variable
    const parts = semVer.split('.').length;
    const paddedStringLength = parts * 6; // we pad to either 12 or 18 characters
    // reverse (but don't mirror) the version. 1.5.15 -> 15.5.1
    // Pad to two spaces, 15.5.1 -> 15.05.01
    const paddedReversedSemver = (0,_reverseVersion_js__WEBPACK_IMPORTED_MODULE_0__.reverseVersion)(semVer);
    // turn 15.05.01 to a string '150501' then to a number 150501
    const num = parseInt(paddedReversedSemver.split('.').join(''));
    // Represent as binary, add left padding to 12 or 18 characters.
    // 150,501 -> 100100101111100101
    let paddedBinary = num.toString(2);
    paddedBinary = (0,_stringPad_js__WEBPACK_IMPORTED_MODULE_1__.stringPad)(paddedBinary, paddedStringLength, '0');
    // Stop in case an invalid version number was provided
    // paddedBinary must be built from sections of 6 bits
    if (paddedBinary.length % 6 !== 0) {
        throw 'Version must be smaller than 43.21.26)';
    }
    // turn every 6 bits into a character using the base64Map
    paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
        // console.log(bitString);
        strResult += _base64Map_js__WEBPACK_IMPORTED_MODULE_2__.base64Map[bitString];
    });
    return strResult;
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/getAnalyticsOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/getAnalyticsOptions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnalyticsOptions": () => (/* binding */ getAnalyticsOptions)
/* harmony export */ });
/**
 * @private
 * @description Gets the analyticsOptions from options- should include sdkSemver, techVersion, sdkCode, and feature
 * @param {ITrackedPropertiesThroughAnalytics} options
 * @returns {IAnalyticsOptions}
 */
function getAnalyticsOptions(options) {
    const analyticsOptions = {
        sdkSemver: options.sdkSemver,
        techVersion: options.techVersion,
        sdkCode: options.sdkCode,
        feature: '0'
    };
    if (options.accessibility) {
        analyticsOptions.feature = 'D';
    }
    if (options.lazyload) {
        analyticsOptions.feature = 'C';
    }
    if (options.responsive) {
        analyticsOptions.feature = 'A';
    }
    if (options.placeholder) {
        analyticsOptions.feature = 'B';
    }
    return analyticsOptions;
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/getSDKAnalyticsSignature.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/getSDKAnalyticsSignature.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSDKAnalyticsSignature": () => (/* binding */ getSDKAnalyticsSignature)
/* harmony export */ });
/* harmony import */ var _encodeVersion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encodeVersion.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/encodeVersion.js");
/* harmony import */ var _getAnalyticsOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAnalyticsOptions.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/getAnalyticsOptions.js");
/* harmony import */ var _internal_utils_packageVersion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/utils/packageVersion.js */ "./node_modules/@cloudinary/url-gen/internal/utils/packageVersion.js");



/**
 * @private
 * @description Try to get the node version out of process, if browser just return 0.0.0
 */
function getNodeVersion() {
    const failedVersion = '0.0.0';
    if (typeof window !== 'undefined') {
        return failedVersion;
    }
    else {
        // node env
        try {
            return process.versions.node || failedVersion;
        }
        catch (e) {
            return failedVersion;
        }
    }
}
/**
 * @private
 * @description Ensure that all values ITrackedPropertiesThroughAnalytics are populated.
 * Accept a partial map of values and returns the complete interface of ITrackedPropertiesThroughAnalytics
 * @param {ITrackedPropertiesThroughAnalytics} trackedAnalytics
 * @param {ITrackedPropertiesThroughAnalytics} trackedAnalytics
 */
function ensureShapeOfTrackedProperties(trackedAnalytics) {
    // try to get the process version from node, but if we're on the client return 0.0.0
    const defaults = {
        techVersion: getNodeVersion(),
        sdkCode: 'T',
        sdkSemver: _internal_utils_packageVersion_js__WEBPACK_IMPORTED_MODULE_0__.packageVersion.split('-')[0],
        responsive: false,
        placeholder: false,
        lazyload: false,
        accessibility: false
    };
    if (!trackedAnalytics) {
        return defaults;
    }
    else {
        return Object.assign(Object.assign({}, defaults), trackedAnalytics);
    }
}
/**
 * @private
 * @description Creates the complete SDK signature by using all the values provided by ITrackedPropertiesThroughAnalytics
 *              Creation of the signature
 *              - Set the AlgoVersion of the encoding, this is an internal letter that represents the version
 *                of our encoding algorithm, it will allow us to perform breaking changes if we'll need them.
 *              - Take the constant SDK code (Arbitrary letter chosen for each SDK, for Base that letter is 'T')
 *                this is used to tell apart which SDK is being tracked.
 *              - Take the {major.minor} versions of the node version (techVersion) (14.2, 16.2 etc.)
 *              - Take the full semver of the SDK you wish to track
 *              - Take the features used(lazy, placeholder etc.) and turn them to a letter (for example accessibility -> D)
 *              - Before appending the string, the Versions must be encoded, see the function `encodeVersion` for more details
 *              - Append all the variables to a single string
 *              - In any case of an error, return the single letter 'E'
 *
 * @return {string} sdkAnalyticsSignature
 */
function getSDKAnalyticsSignature(_trackedAnalytics) {
    const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
    const analyticsOptions = (0,_getAnalyticsOptions_js__WEBPACK_IMPORTED_MODULE_1__.getAnalyticsOptions)(trackedAnalytics);
    try {
        const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
        const encodedSDKVersion = (0,_encodeVersion_js__WEBPACK_IMPORTED_MODULE_2__.encodeVersion)(analyticsOptions.sdkSemver);
        const encodedTechVersion = (0,_encodeVersion_js__WEBPACK_IMPORTED_MODULE_2__.encodeVersion)(twoPartVersion);
        const featureCode = analyticsOptions.feature;
        const SDKCode = analyticsOptions.sdkCode;
        const algoVersion = 'A'; // The algo version is determined here, it should not be an argument
        return `${algoVersion}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
    }
    catch (e) {
        // Either SDK or Node versions were unparsable
        return 'E';
    }
}
/**
 * @private
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' | 'x.y' | string} semVerStr
 */
function removePatchFromSemver(semVerStr) {
    const parts = semVerStr.split('.');
    return `${parts[0]}.${parts[1]}`;
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/reverseVersion.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/reverseVersion.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reverseVersion": () => (/* binding */ reverseVersion)
/* harmony export */ });
/* harmony import */ var _stringPad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringPad.js */ "./node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js");

/**
 * @private
 * @description Reverses the version positions, x.y.z turns to z.y.x
 *              Pads each segment with '0' so they have length of 2
 *              Example: 1.2.3 -> 03.02.01
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} in the form of zz.yy.xx (
 */
function reverseVersion(semVer) {
    if (semVer.split('.').length < 2) {
        throw new Error('invalid semVer, must have at least two segments');
    }
    // Split by '.', reverse, create new array with padded values and concat it together
    return semVer.split('.').reverse().map((segment) => {
        // try to cast to number
        const asNumber = +segment;
        if (isNaN(asNumber) || asNumber < 0) {
            throw 'Invalid version number provided';
        }
        return (0,_stringPad_js__WEBPACK_IMPORTED_MODULE_0__.stringPad)(segment, 2, '0');
    }).join('.');
}


/***/ }),

/***/ "./node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js":
/*!********************************************************************!*\
  !*** ./node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringPad": () => (/* binding */ stringPad)
/* harmony export */ });
/**
 * @private
 * @description Adds left padding to a string with the desired substring the provided number of times
 * @example stringPad(foo, 3, 'a'') // -> aaafoo
 * @param {string} value
 * @param {number} _targetLength
 * @param {string} _padString
 */
function stringPad(value, _targetLength, _padString) {
    let targetLength = _targetLength >> 0; //truncate if number or convert non-number to 0;
    let padString = String((typeof _padString !== 'undefined' ? _padString : ' '));
    if (value.length > targetLength) {
        return String(value);
    }
    else {
        targetLength = targetLength - value.length;
        if (targetLength > padString.length) {
            padString += repeatStringNumTimes(padString, targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(value);
    }
}
/**
 * @description Repeat a string multiple times, cross-browser-safe alternative to string.repeat()
 * @param string
 * @param _times
 */
function repeatStringNumTimes(string, _times) {
    let times = _times;
    let repeatedString = "";
    while (times > 0) {
        repeatedString += string;
        times--;
    }
    return repeatedString;
}


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