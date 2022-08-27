"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_readmore_js"],{

/***/ "./src/modules/readmore.js":
/*!*********************************!*\
  !*** ./src/modules/readmore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class Readmore {
  constructor() {
    if (window.innerWidth < 1025) {
      var contentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-read-more > div').height();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.readmoreToggle').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-read-more').toggleClass('open');
      });
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Readmore);

/***/ })

}]);
//# sourceMappingURL=src_modules_readmore_js.js.map