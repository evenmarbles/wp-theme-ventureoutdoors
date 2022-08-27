import $ from 'jquery'

/**
 * Affix
 * Fixes sticky items on scroll
 * @type {Object}
 */
class Affix {
  constructor() {
    this.windowHeight = $('.page-header').height();

    this.events();
  }

  events() {
    $(window).on('scroll', this.scroll.bind(this));
    $(window).on('resize', this.updateWindowHeight.bind(this));
  }

  scroll(e) {
    var scrolltop = $(e.currentTarget).scrollTop(),
        fixPoint = this.windowHeight,
        hidePoint = fixPoint - 10;

    $('.page-header').css('height', fixPoint);

    $('.page-header-fixed').toggleClass('hideheader', scrolltop > hidePoint)
    $('.page-header-fixed').toggleClass('js-scrolled', scrolltop > fixPoint)
}

  updateWindowHeight(e) {
    this.windowHeight = $('.page-header').height();
  }
}

export default Affix;