import $ from 'jquery'
import "slick-carousel";

class SlickSlider {
  constructor() {
    // Fix flashing issue (first slide initially shown)
    $('.slick-slider').on('init', function (e, slick) {
      $('.slideshow .slide').show();
    });
    $('.slick-slider').slick({ /* Change class based on slider name */
      /* Add settings here*/
    });

    $(".side-slider").slick({
      dots: false,
      infinite: true,
      variableWidth: true
    });

    $('.full-width-slider').slick({
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: false,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      responsive: [{
        breakpoint: 768,
        settings:
        {
          centerMode: true,
          slidesToShow: 3
        }
      }]
    });

    this.events();
  }

  events() {
  }
}

export default SlickSlider;