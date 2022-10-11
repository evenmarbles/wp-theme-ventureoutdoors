<?php
$cloudinary = VENTUREOUTDOORS_THEME\Inc\Cloudinary::get_instance();
?>

<div id="page-header" class="page-header">
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
              <?php 
                echo $cloudinary->get_image_tag( 'venture-outdoors-logo-base', 'logo-base', 'auto', true, false ); 
                echo $cloudinary->get_image_tag( 'venture-outdoors-logo-needle', 'logo-needle', 60, true, false ); 
              ?>
            </a>
          </div>
          <div class="border-bottom-xs"></div>
        </div>
        <div class="col-xs-6 col-md-9 col-lg-9">
          <div class="page-header-main-menu">

            <!-- Primary Navigation -->
            <?php get_template_part( 'template_parts/header/ubermenu' ); ?>
            <!-- End Primery Navigation-->

            <!-- Mobile Navigation -->
            <?php get_template_part( 'template_parts/header/mobilenav', 'base' ); ?>
            <!-- End Mobile Navigation -->

          </div>

          <!-- Mobile Top Navigation -->
          <?php get_template_part( 'template_parts/header/mobilenav', 'top' ); ?>
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
</div>