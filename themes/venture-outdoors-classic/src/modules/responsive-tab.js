import $ from 'jquery'

class ResponsiveTabs {
  constructor() {
    this.events();
  }

  events() {
    $('body').on('click', '.js-accordion', this.switchAccordion.bind(this));
  }

  switchAccordion(e) {
    e.preventDefault();

    var $this = $(e.currentTarget),
        $tab  = $($this.attr('data-target'));

    /*just open/toggle*/
   if($tab.is(':hidden')){
        // $tab.parent().children('.accordion-active').slideToggle("slow", function(){
        //     $(this).removeClass('accordion-active');
        //     $(this).prev().removeClass('active');
        //     $tab.parent( '.tc-sngl-trip' ).removeClass( 'active' );
        //     $tab.parent( '.shortcode-accordion' ).removeClass( 'active' );
        // });
    }

    $tab.slideToggle("slow", function(){
        if($tab.is(':hidden')){
            $tab.prev().removeClass('active');
            $tab.removeClass('accordion-active');
            $tab.parent( '.tc-sngl-trip' ).removeClass( 'active' );
            $tab.parent( '.shortcode-accordion' ).removeClass( 'active' );
        }else{
            $tab.prev().addClass('active');
            $tab.addClass('accordion-active');
            $tab.parent( '.tc-sngl-trip' ).addClass( 'active' );
            $tab.parent( '.shortcode-accordion' ).addClass( 'active' );
        }
    });
  }

}

export default ResponsiveTabs;
