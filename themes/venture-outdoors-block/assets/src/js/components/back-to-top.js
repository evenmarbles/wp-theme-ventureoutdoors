import $ from 'jquery'

/**
 * Display scroll-to-top after a certain amount of pixels (default 100px)
 * @type {Object}
 */
class BackToTop {
  constructor() {

    this.events();
  }

  events() {
    $(window).on('scroll load', this.maybeShowButton);
    $('.js-slide-to-top').on('click', this.scrollToTop);
  }

  maybeShowButton() {
    $('.js-slide-to-top').toggleClass('is-visible', (500 < $(window).scrollTop()))
  }

  scrollToTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 500);
  }
}

export default BackToTop;