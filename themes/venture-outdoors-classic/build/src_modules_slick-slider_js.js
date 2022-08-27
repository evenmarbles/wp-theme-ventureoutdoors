"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_slick-slider_js"],{

/***/ "./src/modules/slick-slider.js":
/*!*************************************!*\
  !*** ./src/modules/slick-slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);



class SlickSlider {
  constructor() {
    // Fix flashing issue (first slide initially shown)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-slider').on('init', function (e, slick) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slideshow .slide').show();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-slider').slick({
      /* Change class based on slider name */

      /* Add settings here*/
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".side-slider").slick({
      dots: false,
      infinite: true,
      variableWidth: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.full-width-slider').slick({
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      responsive: [{
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      }]
    });
    this.events();
  }

  events() {}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlickSlider);

/***/ })

}]);
//# sourceMappingURL=src_modules_slick-slider_js.js.map