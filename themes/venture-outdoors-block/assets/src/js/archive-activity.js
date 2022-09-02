// Styles
import '../sass/archive-activity.scss'

import LoadMore from './posts/loadmore'
import PageFilter from './posts/page-filter'
import ResponsiveTabs from './components/responsive-tab'

new LoadMore(new PageFilter())
new ResponsiveTabs()
