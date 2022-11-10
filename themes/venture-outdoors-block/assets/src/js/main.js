// Styles
import '../sass/main.scss'

// Third Party packages
import "selectric"

// import lazyload from './helpers/lazyload'
import Affix from "./header/affix"
import BackToTop from './components/back-to-top'
import Logo from "./header/logo"
import MobileMenu from "./header/mobile-menu"
import Ubermenu from "./header/ubermenu"
import Toggle from './components/toggle'
import CloudinaryHelper from './helpers/cloudinary-helper'

new Affix()
new BackToTop()
new MobileMenu()
new Logo()
new Ubermenu()
new Toggle()

CloudinaryHelper.createImage()
// lazyload()