<?php

  get_header(); 
  
  $results = ventureoutdoors_filter_results([]);
?>

  <main id="page-body" class="page-body">
    <header id="masthead" class="banner">
      <div class="banner-logo-container">
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-base_382x200.png" loading="lazy" alt="Go to Venture Outdoors&#x27; homepage."
          class="logo-base">
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo//venture-outdoors-logo-needle_195x200.png" loading="lazy"
          alt="Go to Venture Outdoors&#x27; homepage." class="logo-needle">
      </div>
      <div class="banner-item">
        <div class="mobile-banner-img hidden-sm-up">
          <img src="" id="randomImage" alt="#">
        </div>
        <div class="banner-img hidden-xs-down">
          <?php $altTexts = array(
              'Kayak with manatees in Florida&#x27;s scenic landscape.',
              'Kayak tour through Florida&#x27;s beautiful fauna.',
              'Witness great blue herons take care of their fledglings.',
              'Find tranquility and solitude on a kayak tour or a hike to Lake Norris, one of Venture Outdoors&#x27; day tours.',
              'A kayak lessons with one of Venture Outdoors&#x27; certified kayak instructor.'
             );

             foreach ($altTexts as $i => $altText) {
          ?>
          <div>
            <img class="lazyload" sizes="100vw"
              src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_800/slides/slide-0<?php echo $i+1?>"
              srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_500/slides/slide-0<?php echo $i+1?> 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_800/slides/slide-0<?php echo $i+1?> 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1080/slides/slide-0<?php echo $i+1?> 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1600/slides/slide-0<?php echo $i+1?> 1600w"
              data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/slides/slide-0<?php echo $i+1?>"
              data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/slides/slide-0<?php echo $i+1?> 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/slides/slide-0<?php echo $i+1?> 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1080/slides/slide-0<?php echo $i+1?> 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1600/slides/slide-0<?php echo $i+1?> 1600w"
              alt="<?php echo $altText; ?>">
          </div>
          <?php } ?>
        </div>
        <div class="banner-pagination">
          <div class="slider-control">
            <div class="custom-nav"></div>
            <div class="slide-counter w-clearfix">
              <div class="slide-count float-left">01</div>
              <div class="float-left">/</div>
              <div class="num-slides float-left">05</div>
            </div>
            <div class="nav-arrows"></div>
          </div>
        </div>
        <div class="banner-overlay valign-end disblock-xs-down">
          <div class="banner-overlay-cont valign-middle-item">
            <div class="banner-txt text-shadow-black">
              <h1 class="flush-top">Adventures For everyone</h1>
              <p class="large hidden-xs-down flush-bottom">All Inclusive, Expert Led, Premier Outdoor
                Experiences</p>
            </div>
            <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/vector-images/feather-divider.svg" loading="lazy" alt="" class="imgdivider small hidden-xs-down">
          </div>
        </div>
      </div>
      <div class="banner-form">
        <div class="banner-form__content">
          <h2 class="h4 flush-top">Find Your Ideal Outdoor Activity</h2>
          <div class="row">
            <div class="col-sm-3">
              <div class="form-select">
                <div class="facetwp-facet facetwp-facet-frontpage_activity_type facetwp-type-dropdown" data-name="frontpage_activity_type" data-type="dropdown">
                  <select id="activity_type" class="facetwp_dropdown">
                    <option value="">Activity Type</option>
                    <?php foreach($results['type'] as $item) { ?>
                      <option value="<?php echo $item['slug']; ?>"><?php echo $item['title'] . ' (' . $item['count'] . ')'?></option>
                    <?php } ?>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-select">
                <div class="facetwp-facet facetwp-facet-frontpage_activity_length facetwp-type-dropdown" data-name="frontpage_activity_length" data-type="dropdown">
                  <select id="activity_length" class="facetwp_dropdown">
                    <option value="">Activity Length</option>
                    <?php foreach($results['length'] as $item) { ?>
                      <option value="<?php echo $item['slug']; ?>"><?php echo $item['title'] . ' (' . $item['count'] . ')'?></option>
                    <?php } ?>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-select">
                <div class="facetwp-facet facetwp-facet-frontpage_difficulty_level facetwp-type-dropdown" data-name="frontpage_difficulty" data-type="dropdown">
                  <select id="difficulty" class="facetwp_dropdown">
                    <option value="">Difficulty</option>
                    <?php foreach($results['difficulty'] as $item) { 
                      $title = substr($item['title'], 0, strlen($item['title'])-1) . ' ' . substr($item['title'], -1);
                    ?>
                      <option value="<?php echo $item['slug']; ?>"><?php echo $title . ' (' . $item['count'] . ')'?></option>
                    <?php } ?>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <button class="btn-primary btn-block js-frontpage-filter">View Activities</button>
            </div>
          </div>
          <p class="flush-bottom"><span class="js-number-results"><?php echo $results['count']; ?></span> activities meet your criteria</p>
        </div>
      </div>
    </header>
    <div class="page-content">
      <section class="welcome sec-with-imgbg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="welcome-txt">
                <h2 class="h3">Welcome to Venture Outdoors</h2>
                <p class="large">Find out how we differentiate ourselves from other adventure companies.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="welcome-list mobile-accrdn mobile-accrdn-first">
                <div class="row">
                  <div class="col-sm-2 hidden-xs-down">
                    <div class="welcome-list-icon icon-best-guides"></div>
                  </div>
                  <div class="col-sm-10">
                    <h3 class="h5 hidden-xs-down flush-top">The best guides in the industry</h3>
                    <h3 class="h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush icon-best-guides" data-target="#wellist-1">The Best Guides In The Industry</h3>
                    <div class="mobile-accrdn-cont welcome-list-stxt" id="wellist-1">
                      <p>Not only are all of our guides professionally trained, but they also
                        bring with them the knowledge and enthusiasm that will turn a wonderful trip into an
                        unforgettable, inspiring - and sometimes truly life changing - adventure.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome-list mobile-accrdn">
                <div class="row">
                  <div class="col-sm-2 hidden-xs-down">
                    <div class="welcome-list-icon icon-all-inclusive"></div>
                    </div>
                  <div class="col-sm-10">
                    <h3 class="h5 hidden-xs-down flush-top">All inclusive trips</h3>
                    <h3 class="h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush icon-all-inclusive" data-target="#wellist-3">All Inclusive Trips</h3>
                    <div class="mobile-accrdn-cont welcome-list-stxt" id="wellist-3">
                      <p>We want you to leave the worrying to us and allow yourself to
                        completely immerse yourself in your adventure. We provide all meals, transportation, professional
                        guides, permits, fees, and more!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="welcome-list mobile-accrdn">
                <div class="row">
                  <div class="col-sm-2 hidden-xs-down">
                    <div class="welcome-list-icon icon-small-groups"></div>
                  </div>
                  <div class="col-sm-10">
                    <h3 class="h5 hidden-xs-down flush-top">Small Groups</h3>
                    <h3 class="h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush icon-small-groups" data-target="#wellist-2">Small Groups</h3>
                    <div class="mobile-accrdn-cont welcome-list-stxt" id="wellist-2">
                      <p>To provide a personalized experience that prioritizes quality and
                        safety all our tours and lessons are small group adventures. Typically we have 3-5 people join us
                        on our day tours or lessons and 4-12 people on our multi-day tours. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome-list mobile-accrdn">
                <div class="row">
                  <div class="col-sm-2 hidden-xs-down">
                    <div class="welcome-list-icon icon-relationships"></div>
                    </div>
                  <div class="col-sm-10">
                    <h3 class="h5 hidden-xs-down flush-top">We build Relationships</h3>
                    <h3 class="h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush icon-all-inclusive" data-target="#wellist-4">We Build Relationships</h3>
                    <div class="mobile-accrdn-cont welcome-list-stxt" id="wellist-4">
                      <p>With us you are not just a number. We want to get to know you, help you
                        grow in your skills, and reach your outdoor adventure goals. For this reason we will automatically
                        enroll you into our Loyalty Program immediately after the first activity you book with us! </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap"
          loading="lazy" alt="" class="sec-imgbg welcome-imgbg">
      </section>
      <section class="sec-acttype sec-with-imgbg">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-8 center-block">
              <h2 class="flush-top">Activity Types</h2>
              <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/vector-images/bear-divider-white.svg" loading="lazy" alt=""
                class="imgdivider">
              <p class="large">We have just the right adventure for you!</p>
              <a href="<?php echo get_post_type_archive_link('activity'); ?>" class="btn-primary">search all activities</a>
            </div>
          </div>
        </div>
        <img width="186" height="293" class="sec-imgbg lazyload" sizes="100vw" 
          data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-activities"
          data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_500,dp,dpr_2.0/background-images/bg-activities 500w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1080,dpr_2.0/background-images/bg-activities 1080w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1134,dpr_2.0/background-images/bg-activities 1134w"
          alt="">
      </section>
      <section class="activity-card">
        <div class="container-fluid hard-right">
          <div class="row flush-right">
            <div class="col-xxs-11 col-xxs-push-1 hard-right">
              <div class="activity-slider side-slider">
                <?php 
                  $activityTypes = new WP_Query(array(
                    "post_type" => 'activity-type',
                    'orderby' => 'id',
                    'order' => 'ASC'
                  ));

                  while ($activityTypes->have_posts()) {
                    $activityTypes->the_post(); ?>

                    <div class="activity-slider-item side-slider-item">
                      <a href="<?php the_permalink(); ?>">
                        <div class="imgbttn imgbttn-wbg">
                          <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_428,dpr_2.0/activity-types/<?php the_field('thumbnail') ?>"
                            loading="lazy" alt="<?php the_title()?>" class="imgbttn-img img-responsive objectfit">
                          <div class="imgbttn-overlay">
                            <div class="imgbttn-btn">
                              <span class="btn-tertiary">Explore</span>
                            </div>
                            <div class="imgbttn-txt activity-slide-cont">
                              <h3 class="h4 imgbttn-title flush-ends"><?php the_title(); ?></h3>
                              <?php 
                                $extension = str_contains(get_permalink(), 'lessons') ? 'Lessons' : 'Tours';
                                $items = array_filter($results['type'], function($item) {
                                  return $item['slug'] === get_post_field('post_name', get_the_ID());
                                });
                              ?>
                              <div class="activity-count"><?php echo $items[array_key_first($items)]['count'] . ' ' . $extension; ?></div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>    

                <?php } ?>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sec-rating sec-with-imgbg">
        <div class="sec=rating-cont">
          <div class="hightlighted-section">
            <ul class="list-style-none">
              <li>
                <h4 class="flush-top montserrattlt">Highly Rated On</h4>
              </li>
              <li>
                <a href="https://www.tripadvisor.com/UserReviewEdit-g34515-d23746556-Venture_Outdoors-Orlando_Florida.html">
                  <img width="110" height="108" class="lazyload" src="https://res.cloudinary.com/ventureoutdoors/image/upload/affiliates/trip-review-logo">
                </a>
              </li>
              <li>
                <a href="https://g.page/r/CZQkqJ3S8J1EEB0/review">
                  <img width="200" height="84" class="lazyload" src="https://res.cloudinary.com/ventureoutdoors/image/upload/affiliates/google-review-logo">
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/venture-outdoors-orlando">
                  <img width="147" height="108" class="lazyload" src="https://res.cloudinary.com/ventureoutdoors/image/upload/affiliates/yelp-review-logo">
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ventureoutdoorsusa/reviews">
                  <img width="172" height="103" class="lazyload" src="https://res.cloudinary.com/ventureoutdoors/image/upload/affiliates/facebook-review-logo">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap"
          loading="lazy" alt="" class="sec-imgbg sec-rating-imgbg">
      </section>
      <section class="sec-review sec-with-imgbg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-push-2">
              <div class="text-center">
                <h3 class="flush-top">We prioritize Quality of experience and Your safety</h3>
                <p class="large">No matter what activity you choose, we are committed to providing you an extraordinary,
                  one-of-a-kind experience you will not forget!
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial-content">
            <div class="testimonial">
              <div class="testimonial-inner icon-qoute-open icon-qoute-close">
                <p class="flush-top">This was a well organized and professionally led day kayak
                  trip. The guide (Astrid) did a superb job throughout the entire day. Gave us the necessary instructions
                  in the beginning and then informed us of all the wildlife during the trip. She also took photos of us
                  and the animals we saw and provided us access to those on Facebook. Was a great experience.
                </p>
                <div class="testimonial-author">
                  <span>— Edward Buckley</span>
                  <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/affiliates/tripadvisor_secondary.svg"
                      loading="lazy" height="16" alt="Hear from past guests about their experience with Venture Outdoors on TripAdvisor.">
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a href="<?php echo site_url() . '/venture-outdoors-reviews'; ?>" class="btn-secondary">View all testimonials</a>
          </div>
        </div>
        <div class="sec-review-slantbg"></div>
        <img class="sec-imgbg slantbg lazyload" sizes="100vw"
        data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/bg-wekiva-river"
        data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/background-images/bg-wekiva-river 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/bg-wekiva-river 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1080/background-images/bg-wekiva-river 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1600/background-images/bg-wekiva-river 1600w"
        alt="Beautiful Wekiva river.">
      </section>
      <section class="tour sec-with-imgbg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="tour-info content">
                <h3>Why Join a guided outdoor adventure?</h3>
                <p>There are many reasons for choosing a guided outdoor adventure. Join us on one of
                  our tours and see for yourself!
                </p>
                <p>
                  <a class="btn btn-primary"
                    href="https://fareharbor.com/embeds/book/ventureoutdoorsllc/?full-items=yes&flow=648312">Book an Activity</a>
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8">
              <div class="row">
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Convenience</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-1">Convenience</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-1">
                      <p>We handle all trip planning and on-the-ground logistics. This allows you to
                          focus 100% on your experience before, during, and after your adventure. </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Trained Guides</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-2">Trained Guides</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-2">
                      <p>Traveling with an experienced, trained guide increases the safety and enjoyment
                          of your adventure. This is especially true when a guide is trained in medical first aid.</p>
                    </div>
                  </div>
                </div>
                <div class="clearfix hidden-md-up"></div>
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Knowledge &amp; Learning</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-3">Trained Guides</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-3">
                      <p>Learning about the environment and the wildlife in the area enhances the
                          experience for many guests. Guides can bring places to life by sharing personal passion, knowledge,
                          observations, context, and stories.</p>
                    </div>
                  </div>
                </div>
                <div class="clearfix hidden-md-down"></div>
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Learn from Experts</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-4">Learn from Experts</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-4">
                      <p>Starting a new outdoor venture can be intimidating when you have never done
                          anything like it before. An expert can set you on the right foot and ease you into the new activity
                          ensuring you learn best practices and safety. A guided trip is an excellent way to get started.</p>
                    </div>
                  </div>
                </div>
                <div class="clearfix hidden-md-up"></div>
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Make new friends</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-5">Make new friends</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-5">
                      <p>On a guided trip you meet many new people - guides and other guests. Often these
                    new formed friendships last a lifetime and lead to many more outdoor adventures!</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="tour-col accrdn accrdn-first">
                    <h4 class="icon-check-circle hidden-xs-down flush">Ecotourism done right</h4>
                    <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-6">Ecotourism done right</h5>
                    <div class="accrdn-cont tour-colstxt" id="tour-6">
                      <p>On a guided tour, the guides trained in ecotourism can ensure that best
                          practices are upheld and that our carbon footprint be kept small. This way we may enjoy our
                          environment in the future.</p>
                    </div>
                  </div>
                </div>
                <div class="clearfix hidden-md-down"></div>
                <div class="clearfix hidden-md-up"></div>
              </div>
            </div>
          </div>
        </div>
        <img height="410" class="sec-imgbg tour-imgbg img-responsive lazyload" sizes="100vw"
          data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/bg-beach-lighter"
          data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/background-images/bg-beach-lighter 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/bg-beach-lighter 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1080/background-images/bg-beach-lighter 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1600/background-images/bg-beach-lighter 1600w"
          alt="A lonely kayak on the beach.">
      </section>
    </div>
  </main>


<?php

  get_footer();

?>