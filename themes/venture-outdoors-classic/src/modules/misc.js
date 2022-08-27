import $ from 'jquery'

/**
 * Miscellaneous
 * @type {Object}
 */
class Misc {
  constructor() {

    this.events();
  }

  events() {
    $('.logo-needle').on('mouseover', function (e) {
      $(e.currentTarget).removeClass('animated');
    });
    $('.logo-needle').on('mouseout', function (e) {
      $(e.currentTarget).addClass('animated');
    });

    // Selectric with Style Guide update
    if (typeof $.fn.selectric === 'function') {
      $.fn.selectric.defaults.disableOnMobile = false;
      $('select').not('.js-desired-trip').each(function () {
          var target = $(this),
              is_multiple = target.attr('multiple');
          if (is_multiple != 'multiple') {
              target.selectric({
                  arrowButtonMarkup: '<b class="button"></b>'
              });
              if (target.hasClass('notranslate')) {
                  target.parents('.selectric-wrapper').addClass('notranslate')
              }
          }
      });
      $('select#js-sg-section-switcher').selectric('destroy');
    }
  }
}

export default Misc;