<?php
  get_header();
?>
    
  <main id="page-body" class="page-body">
    <?php 
      pageBanner(array(
        'title' => 'Page Not Found',
        'image_slug' => 'hero-images/404',
        'image_alt_tag' => 'Hundreds of manatees gather at the spring in the cooler months of the year.'
      ));
    ?>
    <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
      <div class="breadcrumbs-cont container">
        <ul class="list-style-none flush hard">
          <li>
            <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
            <i aria-hidden="true" class="icon-east"></i>
          </li>
          <li><span aria-current="page" class="breadcrumb-last">Error 404: Page not found</span></li>
        </ul>
      </div>
    </div>


    <article class="page-content">
      <section class="intro-content sec-with-imgbg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 center-block text-center">
              <h2>404: Oops! We can't find the page you're looking for.</h2>
            </div>
          </div>
        </div>
        <img class="sec-imgbg welcome-imgbg lazyload" sizes="100vw" 
          data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap"
          data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_500/background-images/bg-rivermap 500w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1080/background-images/bg-rivermap 1080w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1134/background-images/bg-rivermap 1134w"
          alt="">
      </section>
      <div class="page-activity-list">
        <div class="container">
          <div class="row grid">
            <h3 class="white text-center">Explore one of these Activities Instead:</h3>
            <?php 
              $cloudinary = 'https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/hover-box/';
              $data = array(
                array(
                  'title' => 'Home Page',
                  'imgbg' => $cloudinary . 'heron',
                  'imgalt' => 'Get close up to nature.',
                  'href' => get_site_url()
                ),
                array(
                  'title' => 'Activity Types',
                  'imgbg' => $cloudinary . 'manatee',
                  'imgalt' => 'Encounter manatees on your tour.',
                  'href' => get_site_url() . '/activity-types'
                ),
                array(
                  'title' => 'Reviews',
                  'imgbg' => $cloudinary . 'spring',
                  'imgalt' => 'Tranquility at the crystal clear spring.',
                  'href' => get_site_url() . '/venture-outdoors-reviews'
                ),
                array(
                  'title' => 'About Us',
                  'imgbg' => $cloudinary . 'manatee-encounter',
                  'imgalt' => 'Manatees get right up your boat.',
                  'href' => get_site_url() . '/about'
                ),
              );

              foreach($data as $d) { ?>
                <div class="col-xs-6 col-md-3">
                <?php  get_template_part("template_parts/hover-box", "explore", $d); ?>
                </div>
              <?php } ?>
          </div>
        </div>
      </div>
      <div class="page-wysiwyg">
        <div class="container">
          <div class="row">
            <div call="col-lg-8 center-block">
            <?php get_template_part('template_parts/filter', 'page'); ?>
            </div>
          </div>
        </div>
      </div>

    </article>
  </main>

<?php
  get_footer();
?>
