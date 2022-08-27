<?php

  get_header();

  while (have_posts()) {
    the_post(); ?>
    
    <?php 
      $activity_type = implode(',', array_map(function($t) {return get_the_title($t->ID);}, get_field('activity_type')));
      $is_lesson = strpos($activity_type, 'Lesson');
      switch ($activity_type) {
        case "Day Kayak Tours":
          $activity_type_link = '/activity-types/day-kayak-tours';
          break;
        case "Day Hikes":
          $activity_type_link = '/activity-types/day-hike-tours';
          break;
        case "Kayak Lessons":
          $activity_type_link = '/activity-types/kayak-lessons';
          break;
        default:
          echo "No match"; break;
      }
    ?>
    <main id="page-body" class="page-body">
    <?php if (!$is_lesson) { ?>
    <div class="sngl-activity-banner">
      <div class="full-width-slider">
        <?php 
          $images = explode("\r\n", get_field('image_gallery'));
          foreach ($images as $image) {
            $image = explode(',', $image); ?>
            <img width="<?php echo $image[2]?>" height="<?php echo $image[3]?>" class="full-width-slider-image lazyload"
              src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,h_400/<?php echo $image[0]; ?>"
              data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_400/<?php echo $image[0]; ?>"
              alt="<?php echo $image[1]; ?>">
          <?php } ?>
      </div>
    </div>
    <?php } ?>
      <div class="breadcrumbs hidden-sm-down">
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
            <li>
              <a href="<?php echo site_url() . $activity_type_link ?>" class="breadcrumbs-link">Activity Types</a>
              <i aria-hidden="true" class="icon-east"></i>
            </li>
            <li><span aria-current="page" class="breadcrumb-last"><?php the_title(); ?></span></li>
          </ul>
        </div>
      </div>

      <div class="page-content">
        <div class="sngl-activity-sec sngl-activity-desc">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1 class="h2 flush-top"><?php the_title(); ?></h1>
                <div class="sngl-activity-desc-address  list-style-none flexbox-left flush-top flush-sides valign-middle">
                  <span class="soft-right">
                    <h2 class="h5 icon-map-signs flush"><?php the_field('area'); ?></h2>
                  </span>
                </div>
                <?php 
                if (!$is_lesson) { ?>
                <div>
                  <h2 class="h5 flush-bottom">Tour Highlights</h2>
                  <div class="row">
                    <ul class="check-list flush-top flush-sides col-xs-6">
                      <?php
                        // $highlights = explode("\r\n", get_field('highlights'));
                        foreach (get_field('highlights') as $highlight) { ?>
                      <li><?php echo $highlight; ?></li>
                      <?php } ?>
                    </ul>
                  </div>
                </div>
                <?php } ?>
                <div class="single-activity-video"></div>
                <div class="sngl-description-content">
                  <h2 class="h3">Description</h2>
                  <div class="single-activity-description js-read-more">
                    <div><?php the_content(); ?></div>
                  </div>
                  <a href="javascript:void(0)" class="readmoreToggle">Read more ...</a>
                </div>
              </div>
              <div class="col-md-5 col-md-offset-1">
                <div class="sngl-activity-price">
                  <div class="row">
                    <div class="package col-xxs-12 col-xs-12 text-center">
                      <div class="border-top"><?php the_field('duration'); ?>
                        <h3 class="h5 flush">$<?php the_field('cost'); ?> per person</h3>
                      </div>
                    </div>
                    <div class="col-xxs-12 text-center">
                      <div class="single">Season: <span><?php the_field('season'); ?></span></div>
                    </div>
                  </div>
                </div>
                <div class="sngl-activity-discount text-center hidden">Return Guests get 10% discount on all Tours!</div>
                <div class="sngl-activity-details">
                  <div class="row flush">
                    <div class="col-sm-6 details-item">
                      <strong>Activity Type:</strong>
                      <span><?php echo $activity_type; ?></span>
                    </div>
                    <div class="col-sm-6 details-item">
                      <strong>Difficulty Level:</strong>
                      <span>
                        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php strtolower(the_field('difficulty_level')); ?>" loading="lazy" alt="Level 1" class="level-image">
                        <a class="icon-info_outline color-primary js-popup" href="#" data-id="#difficulty-level-info"></a>
                      </span>
                    </div>
                    <?php if (!$is_lesson) { ?>
                    <div class="col-sm-6 details-item">
                      <strong>Solitude Level:</strong>
                      <span>
                        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php strtolower(the_field('solitude_level')); ?>" loading="lazy" alt="Level 1" class="level-image">
                        <a class="icon-info_outline color-primary js-popup" href="#" data-id="#solitude-level-info"></a>
                      </span>
                    </div>
                    <?php } ?>
                    <div class="col-sm-6 details-item">
                      <strong>Group Size:</strong>
                      <span><?php echo get_field('group_size_min') . '-' . get_field('group_size_max') . ($is_lesson ? ' Students' : ' Guests'); ?></span>
                    </div>
                    <div class="col-sm-6 details-item">
                      <strong>Tour Length:</strong>
                      <span><?php the_field('duration'); ?></span>
                    </div>
                    <?php if (!$is_lesson) { ?>
                    <div class="col-sm-6 details-item">
                      <strong>Distance:</strong>
                      <span><?php the_field('distance'); ?></span>
                    </div>
                    <?php } ?>
                  </div>
                </div>
                <div class="tooltip-popup content white-popup mfp-hide" id="difficulty-level-info">
                  <h4>Difficulty Level <?php echo substr(get_field('difficulty_level'), -1)?></h4>
                  <p><em>Scale of 1-5. 1 least difficult; 5 most difficult</em></p>
                  <div><?php the_field('difficulty_popup'); ?></div>
                </div>
                <div class="tooltip-popup content white-popup mfp-hide" id="solitude-level-info">
                  <h4>Solitude Level <?php echo substr(get_field('solitude_level'), -1)?></h4>
                  <p><em>Scale of 1-5. 1 least solitue; 5 most solitude</em></p>
                  <div><?php the_field('solitude_popup'); ?></div>
                  <div class="text-center">
                    <a class="btn-secondary btn-small btn-no-arrow flush-top" href="#">Learn More About Our Rating System</a>
                  </div>
                </div>
                <div class="sngl-activity-moreinfo">
                  <div class="sngl-activity-moreinfohelp bgc-tertiary text-center">
                    We are here to help. If you have any questions, call us at 
                    <a href="tel:+1-407-267-9950" class="color-primary">407-267-9950</a> 
                    or 
                    <a href="<?php echo site_url() . '/contact'; ?>" class="color-primary">contact us online</a>.
                  </div>
                  <a class="btn-terniary btn-no-arrow btn-block js-popup hidden" href="#js-printable-format-form">PDF Trip itineary packet</a>
                  <?php if(!$is_lesson) { ?>
                  <a class="btn-secondary btn-no-arrow btn-block icon-pictures" 
                     href="https://store.picthrive.com/ventureoutdoors/?utm_source=ventureoutdoors&amp;utm_medium=button&amp;utm_term=custom_text&amp;utm_content=&amp;utm_campaign=custom_link">Buy photos</a>
                  <?php } ?>
                  <a class="smoothlnk btn-primary btn-no-arrow btn-block icon-calendar" href="#booking">Book online</a>
                  <div class="text-center hide-print">
                    Or call to book <a href="tel:+1-407-267-9950" class="call-to-book-link">407-267-9950</a>
                  </div>
                  <div class="sngl-activity-moreinfopvt text-center hidden">
                    <h5 class="h6 flush">Learn about our private tours</h5>
                    <a class="btn-secondary btn-small btn-no-arrow flush-top js-popup" href="#">View private trips</a>
                  </div>
                  <div class="sngl-activity-moreinfopvt text-center hidden">
                    <h5 class="h6 flush">Only 1 or 2 participants?</h5>
                    <a class="btn-quaternary btn-small btn-no-arrow flush-top" href="#rates">Learn more about our RATES</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sec-with-floating-sidebar">
          <div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#rates">
            <h3 class="mobile-accrdn-title">RATES</h3>
          </div>
          <div class="sngl-activity-sec sngl-activity-rates bgc-tertiary sngl-activity-spacer mobile-accordion-container" id="rates">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
                  <h3 class="flush-top hidden-sm-down">RATES</h3>
                  <ul>
                    <?php $rates = explode("\r\n", get_field('rates'));
                      foreach ($rates as $rate) { ?>
                      <li><?php echo $rate; ?></li>
                    <?php } ?>
                  </ul>
                  <?php if (!$is_lesson) { ?>
                  <p>Private day kayak tours are only open to your party.</p>
                  <?php } ?>
                  <p><em>*Prices do not include gratuity for your <?php echo $is_lesson ? 'instructor' : 'guide'; ?></em></p>
                </div>
              </div>
            </div>
          </div>
          <div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#booking">
            <h3 class="mobile-accrdn-title">TOUR DATES & BOOKING</h3>
          </div>
          <div class="sngl-activity-sec sngl-activity-booking sngl-activity-spacer mobile-accordion-container" id="booking">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
                  <h3 class="flush hidden-sm-down">TOUR DATES & BOOKING</h3>
                  <?php if (get_the_title() !== 'Private Instruction') { ?>
                  <p class="tour-dates-message">Click on a date to book. You can also call 
                    <a href="tel:+1-407-267-9950">407-267-9950</a> 
                    to book through customer service</p>
                  <script src="https://fareharbor.com/embeds/script/calendar/ventureoutdoorsllc/items/<?php the_field('fareharbor_item_id'); ?>/?fallback=simple&flow=<?php the_field('fareharbor_flow_id'); ?>"></script>
                  <?php } else { ?>
                    <p class="tour-dates-message">Private Lessons are by appointment only.</p>
                    <div class="activity-cta bgc-quaternary ">
                      <div class="activity-cta-wrapper text-center">
                        <h4>Please call to book!</h4>
                        <a href="tel:+1-407-267-9950" class="color-primary icon-phone-android">407-267-9950</a>
                      </div>
                      <img width="500" height="161" class="activity-background" src="https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave">
                    </div>
                  <?php } ?>
                </div>
                <?php if(get_the_title() !== 'Private Instruction') { ?>
                <div class="col-md-9 col-md-offset-3 activity-cta">
                  <img width="500" height="161" class="activity-background" src="https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave">
                  <div class="activity-cta-wrapper text-center">
                    <h4>Don't see your dates? call us!</h4>
                    <a href="tel:+1-407-267-9950" class="color-primary icon-phone-android">407-267-9950</a>
                  </div>
                </div>
                <?php } ?>
              </div>
            </div>
          </div>
          <div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#details">
            <h3 class="mobile-accrdn-title">TOUR DETAILS</h3>
          </div>
          <div class="sngl-activity-sec sngl-activity-details bgc-tertiary sngl-activity-spacer mobile-accordion-container" id="details">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
                  <h3 class="flush-top hidden-sm-down">TOUR DETAILS</h3>
                  <div class="accordion sngl-activity-accordion">
                    <h4 class="accordion-title flush js-accordion" data-target="#details1">What's included?</h4>
                    <div class="accordion-cont content" id="details1">
                      <?php if (!$is_lesson) { ?>
                      <ul>
                        <?php
                          foreach (get_field('included') as $include) { ?>
                        <li><?php echo str_replace('${guide}', $is_lesson ? 'instructor' : 'guide', $include); ?></li>
                        <?php } ?>
                      </ul>
                      <?php } else { ?>
                        <p><?php the_field('included'); ?></p>
                      <?php } ?>
                    </div>
                    <h4 class="accordion-title flush js-accordion" data-target="#details2">What's Not included? (recommended)</h4>
                    <div class="accordion-cont content" id="details2">
                      <ul>
                        <?php
                          foreach (get_field('not_included') as $include) { ?>
                        <li><?php echo str_replace('${guide}', $is_lesson ? 'instructor' : 'guide', $include); ?></li>
                        <?php } ?>
                      </ul>
                    </div>
                    <?php if(!$is_lesson) { ?>
                    <h4 class="accordion-title flush js-accordion" data-target="#details3">Food: what to expect?</h4>
                    <div class="accordion-cont content" id="details3">
                      <p>Day tours include energizing trail snacks and a delicious picnic lunch. Your guide will
                        customize the food for your tour, but a typical lunch consists of crackers, cheese, salami,
                        fruit, veggies, drinks, and a dessert.</p>
                        <p>We regularly accommodate vegan, vegetarian, kosher, and non-gluten diets and will make
                        adjustments for food allergies. These and other special dietary requests may require an
                        additional fee.</p>
                    </div>
                    <?php } ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#logistics">
            <h3 class="mobile-accrdn-title">TOUR LOGISTICS</h3>
          </div>
          <div class="sngl-activity-sec sngl-activity-logistics sngl-activity-spacer mobile-accordion-container" id="logistics">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
                  <h3 class="flush-top hidden-sm-down">TOUR LOGISTICS</h3>
                  <div class="accordion sngl-activity-accordion">
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics1">Where do we meet?</h4>
                    <div class="accordion-cont content" id="logistics1">
                      <p><?php the_field('meeting_location');  ?></p>
                      <h4>Driving Directions</h4>
                      <p><?php the_field('driving_directions'); ?></p>
                    </div>
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics2">Safety Considerations</h4>
                    <div class="accordion-cont content" id="logistics2">
                      <p>Your safety is our top priority. Our kayaking tours are led by professional kayak guides, 
                        all of whom are wilderness-certified first responders, each with years of guiding and wilderness experience. 
                        We’ve developed comprehensive risk management protocols that our guides adhere to in case of an emergency. 
                        If you have any further questions about safety, please contact us at 
                        <a href="tel:+1-407-267-9950">407-267-9950</a> for more information.</p>
                    </div>
                    <?php if (!$is_lesson) { ?>
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics3">Guides</h4>
                    <div class="accordion-cont content" id="logistics3">
                      <p>Your tour will be led by a trained, experienced professional with a solid guiding background, years of personal 
                        wilderness and kayaking experience, medical certifications, and a passion for leading people into breathtaking 
                        landscapes. Check out our <a href="<?php echo site_url() . '/meet-our-team'; ?>">Meet Our Team</a> page for staff bios.</p>
                    </div>
                    <?php } else { ?>
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics4">Instructors</h4>
                    <div class="accordion-cont content" id="logistics4">
                      <p>Your class will be taught by a professional instructor, certified by the 
                        <a href="https://americancanoe.org/">American Canoe Association (ACA)</a>, with years of teaching
                        experience, medical certifications, and a passion for coaching you. Check out our <a href="<?php echo site_url() . '/meet-our-team'; ?>">Meet Our Team</a> page for staff bios.</p>
                    </div>
                    <?php } ?>
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics5">Group size and age restrictions</h4>
                    <div class="accordion-cont content" id="logistics5">
                      <p>The maximum group size on this tour is <?php the_field('group_size_max') ?> guests. If you have more questions about group size,
                      please give us a call at <a href="tel:+1-407-267-9950">+1-407-267-9950</a> and
                      we’ll answer all your questions.</p>
                      <p><?php the_field('restrictions'); ?></p>
                    </div>
                    <h4 class="accordion-title flush js-accordion" data-target="#logistics6">Weather in Central Florida</h4>
                    <div class="accordion-cont content" id="logistics6">
                      <p>Central Florida on average maintains warm temperatures throughout the entire year with slightly
                      lower temperatures during the winter months. Summers, lasting from May to October, are long,
                      warm and particularly humid. Rain showers are common during this time of the year. The winter
                      month are short, cool, and dry, lasting from December to February. Over the course of the year,
                      the temperature typically varies from 52°F (11°C)to 91°F (33°C).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#related">
            <h3 class="mobile-accrdn-title">RELATED TOURS</h3>
          </div>
          <div class="sngl-activity-sec sngl-activity-booking bgc-tertiary sngl-activity-spacer mobile-accordion-container" id="related">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
                  <h3 class="flush-top hidden-sm-down">YOU MIGHT ALSO LIKE...</h3>
                  <div class="row grid eqhwrap disblock-xxs facetwp-template">
                    <?php
                      $related_activities = array_map(function($x) { return $x->ID; }, get_field('related_activities'));
                      // print_r($related_activities);

                      if ($related_activities) {
                        $args = array(
                          'post_type' => 'activity',
                          'post__in' => $related_activities,
                        );

                        $custom_query = new WP_Query( $args );

                        while ($custom_query->have_posts()) {
                          $custom_query->the_post();
                          get_template_part('template_parts/card', get_post_type());
                        }
                        wp_reset_postdata();
                      }
                    ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="floating-sidebar hidden-sm-down">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-lg-2 floating-sidebar-cont sngl-activity-spacer">
                  <div class="side-tabmenu">
                    <ul class="list-style-none flush">
                      <li><a class="smoothlnk" href="#rates">Rates</a></li>
                      <li><a class="smoothlnk" href="#booking">Tour Dates</a></li>
                      <li><a class="smoothlnk" href="#details">Details</a></li>
                      <li><a class="smoothlnk" href="#logistics">Logistics</a></li>
                      <li><a class="smoothlnk" href="#related">Similar Tours</a></li>
                    </ul>
                    <div class="side-calendar text-center">
                      <a class="smoothlnk btn-primary btn-no-arrow btn-block icon-calendar">Book Online</a>
                      Or call us at 
                      <a href="tel:+1-407-267-9950">407-267-9950</a>
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