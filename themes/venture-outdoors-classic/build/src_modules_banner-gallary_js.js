"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_banner-gallary_js"],{

/***/ "./src/modules/banner-gallary.js":
/*!***************************************!*\
  !*** ./src/modules/banner-gallary.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);



class BannerGallery {
  constructor() {
    this.banner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner');
    this.bannerItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-item');
    this.bannerImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-img');
    this.slickTrack = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-img .slick-track');
    this.bannerOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-overlay'); // Mobile: Display random image

    var images = ['01', '02', '03', '04', '05'];
    var altTexts = ['Kayak with manatees in Florida\'s scenic landscape.', 'Kayak tour through Florida\'s beautiful fauna.', 'Witness great blue herons take care of their fledglings.', 'Find tranquility and solitude on a kayak tour or a hike to Lake Norris, one of Venture Outdoors\' day tours.', 'A kayak lessons with one of Venture Outdoors\' certified kayak instructor.'];
    var randomNum = this.getRandomNumber(images.length);
    var htmlImage = document.getElementById("randomImage");
    htmlImage.classList.add("lazyload");
    htmlImage.src = 'https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,w_600/slides/slide-' + images[randomNum];
    htmlImage.setAttribute('data-src', 'https://res.cloudinary.com/ventureoutdoors/image/upload/dpr_2,w_600/slides/slide-' + images[randomNum]); //htmlImage.srcset = images[randomNum];

    htmlImage.alt = altTexts[randomNum]; // Desktop: Slider

    this.bannerImage.slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      appendArrows: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-arrows'),
      appendDots: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.custom-nav')
    });
    var slick = this.bannerImage.slick('getSlick');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.num-slides').text(this.pad(slick.slideCount.toString(), 2)); // Adjust banner height

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 991) {
      let vph = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - 162;
      this.banner.css('height', vph);
      this.bannerItem.css('height', vph);
      this.bannerImage.css('height', vph);
      this.slickTrack.css('height', vph);
      this.bannerOverlay.css('height', vph);
    }

    this.events();
  }

  events() {
    this.bannerImage.on('afterChange', function (event, slick, currentSlide) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slide-count').text(this.pad((currentSlide + 1).toString(), 2));
    }.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      this.banner.removeAttr('style');
      this.bannerItem.removeAttr('style');
      this.bannerImage.removeAttr('style');
      this.slickTrack.removeAttr('style');
      this.bannerOverlay.removeAttr('style');

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 991) {
        let vph = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - 162;
        this.banner.css('height', vph);
        this.bannerItem.css('height', vph);
        this.bannerImage.css('height', vph);
        this.slickTrack.css('height', vph);
        this.bannerOverlay.css('height', vph);
      }
    }.bind(this));
  }

  pad(num, max) {
    var str = num.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  }

  getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerGallery);

/***/ })

}]);
//# sourceMappingURL=src_modules_banner-gallary_js.js.map