"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_sticky-sidebar_js"],{

/***/ "./src/modules/sticky-sidebar.js":
/*!***************************************!*\
  !*** ./src/modules/sticky-sidebar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class StickySidebar {
  constructor() {
    this.target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-with-floating-sidebar'), this.target2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.floating-sidebar').prev('div');
    this.events();
  }

  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', this.scroll.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', this.updateHeight.bind(this));
  }

  updateHeight(e) {}

  scroll(e) {
    let scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(),
        headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-header-fixed').outerHeight(true); // var scrollTop = $(e.currentTarget).scrollTop(),
    //     headerHeight = $('.page-header-fixed').outerHeight(true),
    //     target = $('.sec-with-floating-sidebar'),
    //     target2 = $('.floating-sidebar').prev('div');

    if (this.target.length && this.target2.length) {
      var sidebarfixPoint = this.target.offset().top,
          bottomPoint = this.target2.offset().top;
      sidebarfixPoint = sidebarfixPoint - headerHeight;
      bottomPoint = bottomPoint - headerHeight;

      if (scrollTop >= bottomPoint) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.floating-sidebar').css({
          position: 'absolute',
          top: bottomPoint - sidebarfixPoint + 'px',
          display: 'block'
        });
      } else if (scrollTop >= sidebarfixPoint) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.floating-sidebar').css({
          position: 'fixed',
          top: headerHeight + 'px',
          display: 'block'
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.floating-sidebar').css({
          position: 'absolute',
          top: 0 + 'px' //display: 'none'

        });
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.side-tabmenu li a').each(function (i, e2) {
        e.preventDefault();
        var menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e2),
            target = menu.attr('href'),
            menuPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).offset().top;
        menuPosition = menuPosition - headerHeight - 20;

        if (scrollTop >= menuPosition) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.side-tabmenu a.current').removeClass('current');
          menu.addClass('current');
        } else {
          menu.removeClass('current');
        }
      });
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickySidebar);

/***/ })

}]);
//# sourceMappingURL=src_modules_sticky-sidebar_js.js.map