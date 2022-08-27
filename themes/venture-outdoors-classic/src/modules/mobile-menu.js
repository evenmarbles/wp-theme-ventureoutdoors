import $ from 'jquery'

/**
 * Mobile menu script for opening/closing menu and sub menus
 * @type {Object}
 */
class MobileMenu {
  constructor() {

    this.events();
  }

  events() {
    $('.nav-primary li.menu-item-has-children > a').after('<span class="submenu-toggle icon-arrow-down hidden-md-up"></span>');

    $('.submenu-toggle').on('click', function () {
      var $this = $(this),
          $parent = $this.closest("li"),
          $wrap = $parent.find("> .submenu");
      $wrap.toggleClass("opened-menu");
      $this.toggleClass("current");
    });
  }
}

export default MobileMenu;