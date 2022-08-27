"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_responsive-tab_js"],{

/***/ "./src/modules/responsive-tab.js":
/*!***************************************!*\
  !*** ./src/modules/responsive-tab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class ResponsiveTabs {
  constructor() {
    this.events();
  }

  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-accordion', this.switchAccordion.bind(this));
  }

  switchAccordion(e) {
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveTabs);

/***/ })

}]);
//# sourceMappingURL=src_modules_responsive-tab_js.js.map