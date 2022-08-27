import $ from 'jquery'

class Readmore {
  constructor() {
    $('.readmoreToggle').on('click', function() {
      $('.js-read-more').toggleClass('open');
    })
  }
}

export default Readmore;
