import '../css/style.scss'

import "lazysizes"
import "selectric"
import "jquery-validation"

// Modules / classes
import Affix from "./modules/affix"
import Ubermenu from "./modules/ubermenu"
import MobileMenu from "./modules/mobile-menu"
import BackToTop from "./modules/back-to-top"
import Misc from "./modules/misc"

// if (document.querySelector('.home')) {
//   import('../css/style-home.scss')
// }
// if (document.querySelector('.single-activity')) {
//   import('../css/style-sngl-activity.scss')
// }
// if (document.querySelector('.error404')) {
//   import('../css/style-error404.scss')
// }
// if (document.querySelector('.js-popup')) {
//   import('../css/popup.css')
// }

//Instantiations of modules/classes
new Affix()
new Ubermenu()
new MobileMenu()
new BackToTop()
new Misc()

if (document.querySelector('.sidebar-filter') ||
    document.querySelector('.sngl-activity-sec')) {
  import("./modules/responsive-tab").then(({ default: ResponsiveTabs }) => {
    new ResponsiveTabs()
  })
}

if (document.querySelector('.js-toggle-slide')) {
  import("./modules/toggle").then(({ default: Toggle }) => {
    new Toggle()
  })
}

if (document.querySelector('.banner-form') || 
    document.querySelector('.activity-search') ||
    document.querySelector('.find-activities-form')) { 
  import("./modules/page-filter").then(({ default: PageFilter }) => {
    new PageFilter()
  })
}

if (document.querySelector('.js-read-more')) {
  import("./modules/readmore").then(({ default: Readmore }) => {
    new Readmore()
  })
}

if (document.querySelector('.js-popup')) {
  import("./modules/popup").then(({ default: Popup }) => {
    new Popup()
  })
}

if (document.querySelector('.sec-with-floating-sidebar')) {
  import("./modules/sticky-sidebar").then(({ default: StickySidebar }) => {
    new StickySidebar()
  })
}

if (document.querySelector('.slick-slider') ||
    document.querySelector('.full-width-slider') ||
    document.querySelector('.side-slider')) {
  import("./modules/slick-slider").then(({ default: SlickSlider }) => {
    new SlickSlider()
  })
}

if (document.querySelector("form[name=contact_form]")) {
  import("./modules/contact-form").then(({ default: ContactForm }) => {
    new ContactForm()
  })
}
if (document.querySelector(('.banner-item'))) { 
  import("./modules/banner-gallary").then(({ default: BannerGallery }) => {
    new BannerGallery()
  })
}
