import $ from 'jquery'

class StickySidebar {
  constructor() {
    this.target = $('.sec-with-floating-sidebar'),
    this.target2 = $('.floating-sidebar').prev('div');
    
    this.events();
  }

  events() {
    $(window).on('scroll', this.scroll.bind(this));
    $(window).on('resize', this.updateHeight.bind(this));
  }

  updateHeight(e) {

  }

  scroll(e) {
    let scrollTop = $(window).scrollTop(),
        headerHeight = $('.page-header-fixed').outerHeight(true);

    // var scrollTop = $(e.currentTarget).scrollTop(),
    //     headerHeight = $('.page-header-fixed').outerHeight(true),
    //     target = $('.sec-with-floating-sidebar'),
    //     target2 = $('.floating-sidebar').prev('div');

    if (this.target.length && this.target2.length){
      var sidebarfixPoint = this.target.offset().top,
          bottomPoint = this.target2.offset().top;

      sidebarfixPoint = sidebarfixPoint - headerHeight;
      bottomPoint = bottomPoint - headerHeight;

      if(scrollTop >= bottomPoint) {
        $('.floating-sidebar').css({
            position: 'absolute',
            top: (bottomPoint - sidebarfixPoint) +'px',
            display: 'block'
        });
      } else if (scrollTop >= sidebarfixPoint) {
        $('.floating-sidebar').css({
            position: 'fixed',
            top: (headerHeight) + 'px',
            display: 'block'
        });
      } else  {
        $('.floating-sidebar').css({
            position: 'absolute',
            top: 0 +'px',
            //display: 'none'
        });
      }

      $('.side-tabmenu li a').each(function (i, e2){
        e.preventDefault();
        var menu = $(e2),
            target = menu.attr('href'),
            menuPosition = $(target).offset().top;

        menuPosition = (menuPosition - headerHeight) - 20;

        if(scrollTop >= menuPosition) {
            $('.side-tabmenu a.current').removeClass('current');
            menu.addClass('current');
        } else{
            menu.removeClass('current');
        }
      });
    }
  }
}

export default StickySidebar;
