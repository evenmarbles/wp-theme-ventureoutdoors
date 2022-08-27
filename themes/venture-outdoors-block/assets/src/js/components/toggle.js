import $ from 'jquery'

/**
 * One Toggle function no need to repeat
 * @type {Object}
 */
class Toggle {
  constructor() {

    this.events();
  }

  events() {
    $(".js-toggle-slide").on('click', this.sToggle);
    // $(window).on('resize', function () {
    //   var width = $(window).width();
    // });
  }

  sToggle(e) {
    e.preventDefault();

    var $this = $(e.currentTarget),
        attrtarget = $this.attr('data-target');

    /*content to view or to hide*/
    if (typeof attrtarget !== typeof undefined) {
      var container = attrtarget;
    } else {
      var container = $this.attr('href');
    }
    var target = $(container);

    target.slideToggle(500, function () {
      $this.toggleClass('open');
      $(container).toggleClass('open');
      $this.find('i').toggleClass('icon-menu-close');
      var $input = $(container).find('input').first();
      if ($input.is(':visible')) {
        $input.focus();
      }
    });
  }
}

export default Toggle;