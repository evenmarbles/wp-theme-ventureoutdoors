<?php

  get_header(); ?>
    
  <main id="page-body" class="page-body">
    <?php 
      pageBanner(array(
        'title' => 'Activities',
        'image_slug' => 'hero-images/activities',
        'image_alt_tag' => 'See the landscape reflect itself in Florida\'s undisturbed rivers.'
      ));
    ?>
    <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
      <div class="breadcrumbs-cont container">
        <ul class="list-style-none flush hard">
          <li>
            <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
            <i aria-hidden="true" class="icon-east"></i>
          </li>
          <li><span aria-current="page" class="breadcrumb-last">Activities</span></li>
        </ul>
      </div>
    </div>

    <div class="page-content">
      <section class="intro-content bgc-quaternary">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h2 class="h3 flush-top">Activities</h2>
              <div class="intro-content-title">
                <p class="intro-content-subtitle">We offer a continuously increasing variety of activities.</p>
              </div>
            </div>
            <div class="col-lg-8">
              <p>We currently focus on kayaking and hiking day trips and kayak lessons. However, we strive to
                continuously grow the variety of our adventures. Please check frequently on new activities and
                adventures we offer.</p>
              <p>Feel free to contact us using our <a href="<?php echo site_url() . '/contact' ?>">contact form</a> 
                or call us at <a href="tel:+1-407-267-9950">407-267-9950</a> if you have any special requests or 
                wish for us to add any activities not listed.</p>
            </div>
          </div>
        </div>
      </section>
      <div class="activity-search">
        <?php get_template_part('template_parts/filter', 'sidebar'); ?>
      </div>
    </div>
  </main>

<?php
  get_footer();

?>
