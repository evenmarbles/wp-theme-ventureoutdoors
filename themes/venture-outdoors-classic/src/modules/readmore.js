import $ from 'jquery'

class Readmore {
  constructor() {
    if (window.innerWidth < 1025) {
      var contentHeight = $('.js-read-more > div').height();

      $('.readmoreToggle').on('click', function() {
        $('.js-read-more').toggleClass('open');
      })
    }
  }
}

export default Readmore;
