"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_toggle_js"],{

/***/ "./src/modules/toggle.js":
/*!*******************************!*\
  !*** ./src/modules/toggle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * One Toggle function no need to repeat
 * @type {Object}
 */

class Toggle {
  constructor() {
    this.events();
  }

  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-toggle-slide").on('click', this.sToggle);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth() > 750) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-accrdn-cont').removeAttr('style');
      }
    });
  }

  sToggle(e) {
    e.preventDefault();
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget),
        attrtarget = $this.attr('data-target');
    /*content to view or to hide*/

    if (typeof attrtarget !== typeof undefined) {
      var container = attrtarget;
    } else {
      var container = $this.attr('href');
    }

    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(container);
    target.slideToggle(500, function () {
      $this.toggleClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(container).toggleClass('open');
      $this.find('i').toggleClass('icon-menu-close');
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(container).find('input').first();

      if ($input.is(':visible')) {
        $input.focus();
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

/***/ })

}]);
//# sourceMappingURL=src_modules_toggle_js.js.map