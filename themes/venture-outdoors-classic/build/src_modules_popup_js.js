"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_popup_js"],{

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class Popup {
  constructor() {
    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-popup');
    this.events();
  }

  events() {
    this.openButton.on('click', this.openOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.mfp-close', this.closeOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.mfp-wrap', this.closeOverlayOnBlur.bind(this));
  }

  openOverlay(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').css('overflow', 'hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<div class="mfp-bg mfg-ready"></div>
    <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
      <div class="mfp-container mfp-s-ready mfp-inline-holder">
        <div class="mfp-content"></div>
      </div>
    </div>`).prependTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'));
    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data('id');
    let content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id);
    let mfpContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mfp-content');
    content.after(`<div class="mfp-hide"></div>`);
    content.removeClass('mfp-hide');
    content.append(`<button title="Close (Esc)" type="button" class="mfp-close">x</button>`);
    content.prependTo(mfpContent);
    mfpContent.after(`<div class="mfp-preloader">Loading...</div>`);
  }

  close(e, id) {
    let content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + id);
    content.addClass('mfp-hide');
    content.remove('button.mfp-close');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`div[class='mfp-hide']`).replaceWith(content);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mfp-wrap').remove();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mfp-bg').remove();
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').css('overflow', 'auto');
  }

  closeOverlay(e) {
    let id = e.currentTarget.parentNode.id;
    this.close(e, id);
  }

  closeOverlayOnBlur(e) {
    if (!e.target.closest('.tooltip-popup')) {
      let id = e.target.querySelector('.tooltip-popup').id;
      this.close(e, id);
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ })

}]);
//# sourceMappingURL=src_modules_popup_js.js.map