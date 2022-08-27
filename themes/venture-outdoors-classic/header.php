<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <aside class="promotions-bar">
      <div class="promotions-bar-cont">
        <div class="promo-text">Use promo code <strong class="bold-text">LAUNCH21</strong> for a 10% discount on all
          activities!</div>
      </div>
    </aside>
    <header id="page-header" class="page-header">
      <div class="top-header hidden-sm-down">
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-md-2 col-lg-3 top-header-phone">
              <a href="tel:+1-407-267-9950">
                  <i aria-hidden="true" class="icon-phone-android"></i>407-267-9950
              </a>
              <span class="soft-quater-left hidden-md-down">(8AM-9PM Every Day)</span>
            </div>
            <div class="col-md-8 col-lg-6 top-header-menu">
              <ul class="flush hard">
              <li class="flexbox-right">
                <a href="<?php echo site_url() . '/contact'; ?>">
                  Contact Us
                  <i aria-hidden="true" class="icon-east"></i>
                </a>
              </li>
              </ul>
            </div>
          </div>
          <div class="top-header-lang">
            <label class="top-header-lang-label">Other Languages:</label>
            <div class="selectric-wrapper">
              <div class="selectric">
                <span class="label">EN</span>
                <b class="button"></b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-header-fixed">
        <div class="page-header-cont container-fluid">
          <div class="row valign-middle disblock-xxs clearfix">
            <div class="col-xs-6 col-md-2 col-lg-3">
              <div class="logo">
                <a href="<?php echo site_url(); ?>" aria-current="page" class="logo-target w--current">
                  <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-logo-base"
                    loading="lazy" alt="Go to Venture Outdoors&#x27; homepage." class="logo-base">
                  <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-logo-needle" loading="lazy"
                    alt="Go to Venture Outdoors&#x27; homepage." class="logo-needle"></a>
              </div>
              <div class="border-bottom-xs"></div>
            </div>
            <div class="col-xs-6 col-md-9 col-lg-9">
              <div class="page-header-main-menu">
                <!-- Primary Navigation -->
                <nav id="ubermenu-main" class="ubermenu ubermenu-main ubermenu-loc-main_menu ubermenu-responsive-collapse ubermenu-horizontal ubermenu-transition-shift ubermenu-trigger-hover_intent ubermenu-skin-none ubermenu-bar-align-full ubermenu-items-align-auto ubermenu-disable-submenu-scroll ubermenu-sub-indicators ubermenu-retractors-responsive ubermenu-submenu-indicator-closes ubermenu-notouch">
                  <ul class="ubermenu-nav" data-title="mainmenu">
                    <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-advanced-sub ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
                      <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only ubermenu-noindicator" 
                        href="<?php echo site_url() . '/activities'; ?>" tabindex="0">
                        <span class="ubermenu-target-title ubermenu-target-text">Activities</span>
                      </a>
                      <div class="ubermenu-submenu ubermenu-submenu-type-mega ubermenu-submenu-drop ubermenu-submenu-align-full_width">
                        <ul class="ubermenu-row ubermenu-autoclear">
                          <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2119 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                            <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only" href="<?php echo site_url() . '/activity-types/day-kayak-tours'; ?>">
                                  <span class="ubermenu-target-title ubermenu-target-text">Day kayak tours</span>
                                </a>
                              </li>
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only" href="<?php echo site_url() . '/activity-types/day-hike-tours'; ?>">
                                  <span class="ubermenu-target-title ubermenu-target-text">Day hike tours</span>
                                </a>
                              </li>
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only" href="<?php echo site_url() . '/activity-types/kayak-lessons'; ?>">
                                  <span class="ubermenu-target-title ubermenu-target-text">kayak Lessons</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2120 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                            <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
                              <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-2110 ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <div class="ubermenu-content-block ubermenu-custom-content">
                                  <div class="custom-content-wrapper">
                                    <h4>Unforgettable experiences</h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-advanced-sub ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
                      <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only ubermenu-noindicator" 
                        href="<?php echo site_url() . '/about'; ?>">
                        <div class="ubermenu-target-title ubermenu-target-text">About Venture Outdoors</div>
                      </a>
                      <div class="ubermenu-submenu ubermenu-submenu-type-mega ubermenu-submenu-drop ubermenu-submenu-align-full_width">
                        <ul class="ubermenu-row ubermenu-autoclear">
                          <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2119 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                            <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a href="<?php echo site_url() . '/terms-and-conditions'; ?>" class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only">
                                  <span class="ubermenu-target-title ubermenu-target-text">Terms &amp; Conditions</span>
                                </a>
                              </li>
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a href="<?php echo site_url() . '/cancellation-and-refund-policy'; ?>" class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only">
                                  <span class="ubermenu-target-title ubermenu-target-text">Cancellation &amp; Refund policy</span>
                                </a>
                              </li>
                              <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <a href="<?php echo site_url() . '/privacy-policy'; ?>" class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only">
                                  <span class="ubermenu-target-title ubermenu-target-text">Privacy Policy</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2120 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                            <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
                              <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-2110 ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                                <div class="ubermenu-content-block ubermenu-custom-content">
                                  <div class="custom-content-wrapper">
                                    <h4>Why ecotourism?</h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-advanced-sub ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
                      <a rel="noreferrer noopener" class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only ubermenu-noindicator"
                        href="https://store.picthrive.com/ventureoutdoors/?utm_source=ventureoutdoors&amp;utm_medium=button&amp;utm_term=custom_text&amp;utm_content=&amp;utm_campaign=custom_link"
                        target="_blank">
                        <div class="ubermenu-target-title ubermenu-target-text">Buy Photos</div>
                      </a>
                    </li>
                  </ul>
                </nav>
                <!-- End UberMenu -->
                <!-- End Primery Navigation-->
                <!-- Mobile Navigation -->
                <nav id="nav-primary" class="nav-primary hidden-md-up">
                  <ul class="menu-main-navigation flexbox-justify flush hard disblock-sm-down">
                    <li class="menu-item menu-item-has-children">
                      <a href="<?php echo site_url() . '/activities'; ?>">Activities</a>
                      <ul class="submenu">
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/activity-types/day-kayak-tours'; ?>">Day Kayak Tours</a>
                        </li>
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/activity-types/day-hike-tours'; ?>">Day Hike Tours</a>
                        </li>
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/activity-types/kayak-lessons'; ?>">Kayak Lessons</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="about; ?>">About Venture outdoors</a>
                      <ul class="submenu">
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/terms-and-conditions'; ?>">Terms &amp; conditions</a>
                        </li>
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/cancellation-and-refund-policy'; ?>">Cancellation &amp; Refund Policy</a>
                        </li>
                        <li class="menu-item">
                          <a href="<?php echo site_url() . '/privacy-policy'; ?>">Privacy Policy</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a rel="noreferrer noopener"
                        href="https://store.picthrive.com/ventureoutdoors/?utm_source=ventureoutdoors&amp;utm_medium=button&amp;utm_term=custom_text&amp;utm_content=&amp;utm_campaign=custom_link"
                        target="_blank">Buy Photos</a>
                    </li>
                  </ul>
                  <div class="header-info hidden-md-up">
                    <span>
                      <a href="<?php echo site_url() . '/contact'; ?>">
                          Contact Us
                          <i class="icon-east"></i>
                      </a>
                    </span>
                    
                    <?php get_template_part('template_parts/social', 'media', array(
                      'margin' => 'push-top',
                      'btn_color' => 'color-secondary',
                    )); ?>
                
                  </div>
                </nav>
                <!-- End Mobile Navigation -->
              </div>
              <!-- Mobile Top Navigation -->
              <nav class="nav-secondary hidden-md-up">
                <ul class="flexbox-justify flush hard">
                  <li class="menu-item">
                    <a href="<?php echo site_url() . '/activities'; ?>" class="menu-target">Activities</a>
                  </li>
                  <li class="menu-item">
                    <a rel="noopener"
                      href="https://store.picthrive.com/ventureoutdoors/?utm_source=ventureoutdoors&amp;utm_medium=button&amp;utm_term=custom_text&amp;utm_content=&amp;utm_campaign=custom_link"
                      target="_blank" class="menu-target">Buy Photos</a>
                  </li>
                </ul>
              </nav>
              <!-- End Mobile Top Navigation -->
            </div>
          </div>
          <div class="book-btn hidden-md-down">
            <a class="btn-primary"
              href="https://fareharbor.com/embeds/book/ventureoutdoorsllc/?full-items=yes&flow=648312">Book an
              Activity</a>
          </div>
        </div>
      </div>
      <div class="nav-fixed hidden-md-up clearfix">
        <div class="nav-fixed-bookbtn">
          <a class="btn-primary btn-no-arrow"
            href="https://fareharbor.com/embeds/book/ventureoutdoorsllc/?full-items=yes&flow=648312">Book an
            Activity</a>
        </div>
        <div class="nav-fixed-callbtn top-header-phone hidden-md-up">
          <a class="icon-phone_iphone" href="tel:+1-407-267-9950">
            <span class="mobile-phone">407-267-9950</span>
          </a>
        </div>
        <button class="nav-fixed-menubtn js-toggle-slide" data-target="#nav-primary">Menu</button>
      </div>
    </header>
