// Styles
import '../sass/single-activity.scss'

import { default as GoogleMap } from './components/google-map'
import { loadMoonPhases, createCalendar } from './components/moon-phases'
import Popup from './components/popup'
import Readmore from './components/readmore'
import ResponsiveTabs from './components/responsive-tab'
import SlickSlider from './components/slick-slider'
import StickySidebar from './components/sticky-sidebar'

new GoogleMap()
new Popup()
new Readmore()
new ResponsiveTabs()
new SlickSlider()
new StickySidebar()

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