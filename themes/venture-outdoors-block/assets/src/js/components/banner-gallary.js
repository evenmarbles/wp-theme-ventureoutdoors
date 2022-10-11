import $ from 'jquery'
import "slick-carousel";
import CloudinaryHelper from '../helpers/cloudinary-helper'

class BannerGallery {
  constructor() {
    this.banner = $('.banner');
    this.bannerItem = $('.banner-item');
    this.bannerImage = $('.banner-img');
    this.slickTrack = $('.banner-img .slick-track');
    this.bannerOverlay = $('.banner-overlay');

    // Mobile: Display random image
    var images = ['01', '02', '03', '04', '05'];
    var altTexts = ['Kayak with manatees in Florida\'s scenic landscape.',
      'Kayak tour through Florida\'s beautiful fauna.',
      'Witness great blue herons take care of their fledglings.',
      'Find tranquility and solitude on a kayak tour or a hike to Lake Norris, one of Venture Outdoors\' day tours.',
      'A kayak lessons with one of Venture Outdoors\' certified kayak instructor.'];
    var randomNum = this.getRandomNumber(images.length);
    var imgTag = document.getElementById("randomImage");

    if (!imgTag) {
      return
    }
    
    imgTag.setAttribute('data-public-id', 'slide-' + images[randomNum])
    imgTag.alt = altTexts[randomNum];
    CloudinaryHelper.cloudinaryImage(imgTag)

    // Desktop: Slider
    this.bannerImage.slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      appendArrows: $('.nav-arrows'),
      appendDots: $('.custom-nav'),
    });

    var slick = this.bannerImage.slick('getSlick');
    $('.num-slides').text(this.pad(slick.slideCount.toString(), 2));


    // Adjust banner height
    if ($(window).width() > 991) {
      let vph = $(window).height() - 162;
      this.banner.css('height', vph);
      this.bannerItem.css('height', vph);
      this.bannerImage.css('height', vph);
      this.slickTrack.css('height', vph);
      this.bannerOverlay.css('height', vph);
    }

    this.events();
  }

  events() {
    this.bannerImage.on('afterChange', function (event, slick, currentSlide) {
      $('.slide-count').text(this.pad((currentSlide + 1).toString(), 2));
    }.bind(this));

    $(window).on('resize', function () {
      this.banner.removeAttr('style');
      this.bannerItem.removeAttr('style');
      this.bannerImage.removeAttr('style');
      this.slickTrack.removeAttr('style');
      this.bannerOverlay.removeAttr('style');

      if ($(window).width() > 991) {
        let vph = $(window).height() - 162;
        this.banner.css('height', vph);
        this.bannerItem.css('height', vph);
        this.bannerImage.css('height', vph);
        this.slickTrack.css('height', vph);
        this.bannerOverlay.css('height', vph);
      }
    }.bind(this));
  }

  pad(num, max) {
    var str = num.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  }

  getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
}

export default BannerGallery;
