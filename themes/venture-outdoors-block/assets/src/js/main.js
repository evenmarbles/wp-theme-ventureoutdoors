// Styles
import '../sass/main.scss'

// Third Party packages
import "lazysizes"
import "selectric"
import "jquery-validation"

// Header
import Affix from "./header/affix"
import Logo from "./header/logo"
import MobileMenu from "./header/mobile-menu"
import Ubermenu from "./header/ubermenu"

// Components
import BackToTop from './components/back-to-top'
import BannerGallery from './components/banner-gallary'
import { default as GoogleMap } from './components/google-map'
import Popup from './components/popup'
import Readmore from './components/readmore'
import ResponsiveTabs from './components/responsive-tab'
import SlickSlider from './components/slick-slider'
import StickySidebar from './components/sticky-sidebar'
import Toggle from './components/toggle'

import { loadMoonPhases, createCalendar } from './components/moon-phases'

// Posts
import LoadMore from './posts/loadmore'
import PageFilter from './posts/page-filter'
import BannerFilter from './posts/banner-filter'

import ContactForm from './forms/contact-form'


new Affix()
new MobileMenu()
new Logo()
new Ubermenu()

new BackToTop()
new ResponsiveTabs()
new SlickSlider()
new StickySidebar()
new Toggle()

/**
 * Include Banner Slider to posts identified by id.
 * 
 * PostIds:
 *    page-id-794 => Frontpage
 */
if (document.getElementsByClassName('page-id-794').length) {
  new BannerGallery()
}

/**
 * Include Contact Form Contact Us page.
 */
if (document.getElementsByClassName('page-id-34').length) {
  new ContactForm()
}

if (document.getElementsByClassName('single-activity').length) {
  new GoogleMap()
  new Popup()
  new Readmore()

  /**
   * Include Moon Phase Calendar to posts identified by id.
   * 
   * PostIds:
   *    postid-112 => Bioluminescence Kayak Tour
   */
  if (document.getElementsByClassName('postid-112').length) {
    var configMoon = {
      lang: 'en', 
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      size: "100%", 
      lightColor: "white", 
      shadeColor: "black", 
      texturize: true, 
    }
    loadMoonPhases( configMoon, createCalendar, 'moon-calendar' )
  }
}

if (document.getElementById('sidebar') !== null) {
  new LoadMore(new PageFilter())
} else if (!document.getElementsByClassName('single-activity').length) {
  new BannerFilter()
}


