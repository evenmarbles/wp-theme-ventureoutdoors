// Styles
import '../sass/main.scss'

// Third Party packages
import "lazysizes"
import "selectric"

import Affix from "./header/affix"
import BackToTop from './components/back-to-top'
import Logo from "./header/logo"
import MobileMenu from "./header/mobile-menu"
import Ubermenu from "./header/ubermenu"

new Affix()
new BackToTop()
new MobileMenu()
new Logo()
new Ubermenu()