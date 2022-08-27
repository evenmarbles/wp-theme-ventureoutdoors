<?php

  get_header();

  while (have_posts()) {
    the_post(); ?>
    
    <main id="page-body" class="page-body">
      <?php 
        pageBanner();
      ?>
      <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
        <div class="breadcrumbs-cont container">
          <ul class="list-style-none flush hard">
            <li>
              <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
              <i aria-hidden="true" class="icon-east"></i>
            </li>
            <li>
              <a href="<?php echo get_post_type_archive_link('activity') ?>" class="breadcrumbs-link">Activities</a>
              <i aria-hidden="true" class="icon-east"></i>
            </li>
            <li><span aria-current="page" class="breadcrumb-last"><?php the_title(); ?></span></li>
          </ul>
        </div>
      </div>

      <div class="page-content">
        <section class="intro-content bgc-quaternary">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <h2 class="h3 flush-top"><?php the_title(); ?></h2>
                <div class="intro-content-title">
                  <p class="intro-content-subtitle"><?php the_field('subtitle'); ?></p>
                </div>
              </div>
              <div class="col-lg-8"><?php the_content(); ?></div>
            </div>
          </div>
        </section>
        <div class="activity-search">
          <?php get_template_part('template_parts/filter', 'sidebar'); ?>
        </div>
        <div class="page-content">
          <div class="bgc-tertiary">
            <div class="container">
              <div class="row activity-types">
                <div class="col-md-6">
                  <h3 class="flush-top"><?php the_field('custom_title'); ?></h3>
                  <?php the_field('custom_text');?>
                </div>
                <div class="col-md-6">
                  <div class="container">
                    <div class="imggrid eqhwrap disblock-xx">
                      <?php 
                        $images = explode("\r\n", get_field('image_gallery'));
                        foreach ($images as $image) {
                          $image = explode(',', $image);
                      ?>
                          <img width="100%" height="100%" class="rounded-corners lazyload"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 859px) 96vw, (max-width: 991px) 825px, (max-width: 1279px) 44vw, 43vw"
                            data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_825/<?php echo $image[0]; ?>"
                            data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/<?php echo $image[0]; ?> 500w, https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/<?php echo $image[0]?> 800w, https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_825/<?php echo $image[0]?> 825w"
                            alt="<?php echo $image[1]; ?>">
                      <?php } ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


<?php
  }
  get_footer();

?>