import $ from 'jquery'

class Popup {
  constructor() {
    this.openButton = $('.js-popup');

    this.events();
  }

  events() {
    this.openButton.on('click', this.openOverlay.bind(this));
    $(document).on('click', '.mfp-close', this.closeOverlay.bind(this));
    $(document).on('click', '.mfp-wrap', this.closeOverlayOnBlur.bind(this));
  }

  openOverlay(e) {
    e.preventDefault()
    $('body').css('overflow', 'hidden');

    $(`<div class="mfp-bg mfg-ready"></div>
    <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
      <div class="mfp-container mfp-s-ready mfp-inline-holder">
        <div class="mfp-content"></div>
      </div>
    </div>`).prependTo($('body'));

    let id = $(e.currentTarget).data('id');
    let content = $(id);
    let mfpContent = $('.mfp-content');

    content.after(`<div class="mfp-hide"></div>`);
    content.removeClass('mfp-hide');
    content.append(`<button title="Close (Esc)" type="button" class="mfp-close">x</button>`);
    content.prependTo(mfpContent);
    mfpContent.after(`<div class="mfp-preloader">Loading...</div>`);
  }

  close(e, id) {
    let content = $('#' + id);
    content.addClass('mfp-hide');
    content.remove('button.mfp-close');

    $(`div[class='mfp-hide']`).replaceWith(content);
    $('.mfp-wrap').remove();
    $('.mfp-bg').remove();

    e.preventDefault();
    $('body').css('overflow', 'auto');
  }

  closeOverlay(e) {
    let id = e.currentTarget.parentNode.id;
    this.close(e, id);
  }

  closeOverlayOnBlur(e) {
    if (!e.target.closest('.tooltip-popup')) {
      let id = e.target.querySelector('.tooltip-popup').id;
      this.close(e, id);
    }
  }
}

export default Popup;
