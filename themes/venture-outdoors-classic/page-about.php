<?php

  get_header();

    while(have_posts()) {
      the_post(); ?>

      <main id="page-body" class="page-body">
        <?php 
          pageBanner(array(
            'title' => 'About Venture Outdoors',
            'image_slug' => 'hero-images/about-us',
            'image_alt_tag' => 'Venture Outdoors\' founder, Astrid Jackson, in Canyonlands taking pictures.'
          )); 
        ?>
        <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
          <div class="breadcrumbs-cont container">
            <ul class="list-style-none flush hard">
              <li>
                <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
                <i aria-hidden="true" class="icon-east"></i>
              </li>
              <li><span aria-current="page" class="breadcrumb-last">About Venture Outdoors</span></li>
            </ul>
          </div>
        </div>

        <?php get_template_part('template_parts/filter', 'page'); ?>

        <div class="page-content">
          <section class="intro-content">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <h2 class="flush-top h3">About Venture Outdoors</h2>
                  <p class="intro-content-subtitle">Learn all about Venture Outdoors!</p>
                </div>
                <div class="col-lg-8 content">
                  <p>Welcome to Venture Outdoors! We offer premier outdoor adventures suited for everyone. No matter if you
                    are an experienced outdoors (wo)man or just starting out, our exceptional guides and instructors ensure
                    that you will have an incredible experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="halfimg">
            <div class="halfimg-incont">
              <div class="row flush">
                <div class="col-md-7 halfimg-pic left top hard">
                    <img width="100%" height="100%" class="lazyload"
                      sizes="(max-width: 991px) 100vw, 58vw" src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/background-images/spring"
                      srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_500/background-images/spring 500w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_800/background-images/spring 800w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1000/background-images/spring 1000w"
                      data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/background-images/spring"
                      data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/background-images/spring 500w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/spring 800w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1000/background-images/spring 1000w"
                      alt="Experience Florida's crystal clear springs!">
                </div>
                <div class="col-md-6 halfimg-pic hard">
                    <img width="100%" height="100%" class="halfimg-pic-img lazyload" sizes="(max-width: 991px) 100vw, 50vw"
                      src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/background-images/canoe-rapids"
                      srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_500/background-images/canoe-rapids 500w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5_scale,w_800/background-images/canoe-rapids 800w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1000/background-images/canoe-rapids 1000w"
                      data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/background-images/canoe-rapids"
                      data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/background-images/canoe-rapids 500w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/background-images/canoe-rapids 800w,
                      https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1000/background-images/canoe-rapids 1000w"
                      alt="Canoeing Big Shoals down Suwannee River.">
                </div>
              </div>
            </div>
          </section>
          <section class="tour sec-with-imgbg">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="tour-info content">
                    <h3>What sets us apart</h3>
                    <p>Venture Outdoors wants you to have a wonderful and unforgettable adventure!</p>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="tour-col accrdn accrdn-first">
                        <h4 class="icon-check-circle hidden-xs-down flush">Professional, Expert Guides</h4>
                        <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-1">Professional, Expert Guides</h5>
                        <div class="accrdn-cont tour-colstxt" id="tour-1">
                          <p>We are committed to hire and train only the best guides in the industry with a
                            passion for their jobs. We take pride in the fact that all our guides have the skills and
                            certification to ensure a safe and enjoyable trip.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tour-col accrdn accrdn-first">
                        <h4 class="icon-check-circle hidden-xs-down flush">Small Groups</h4>
                        <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-2">Small Groups</h5>
                        <div class="accrdn-cont tour-colstxt" id="tour-2">
                          <p>We want you to truly experience the magic of the wilderness. We will travel only
                            in small groups, and when possible avoid the crowds. We want to show you the special places that lets
                            you find the calm and quite that only nature has to offer.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tour-col accrdn accrdn-first">
                        <h4 class="icon-check-circle hidden-xs-down flush">Choice of Activity</h4>
                        <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-3">Choice of Activity</h5>
                        <div class="accrdn-cont tour-colstxt" id="tour-3">
                          <p>We offer an ever growing variety of activities. Starting with kayaking,
                            canoeing, and hiking we are committed to extend our adventures to other outdoor activities.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="tour-col accrdn accrdn-first">
                        <h4 class="icon-check-circle hidden-xs-down flush">All-inclusive Adventures</h4>
                        <h5 class="accrdn-title js-toggle-slide icon-check-circle hidden-sm-up flush" data-target="#tour-4">All-inclusive Adventures</h5>
                        <div class="accrdn-cont tour-colstxt" id="tour-4">
                          <p>We want you to leave the worrying to us and allow yourself to completely immerse
                            yourself in your adventure. We provide all meals, transportation, professional guides, permits, fees,
                            and more!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="sec-imgbg lazyload" sizes="100vw" 
              data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap"
              data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_500/background-images/bg-rivermap 500w, 
              https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1080/background-images/bg-rivermap 1080w, 
              https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1134/background-images/bg-rivermap 1134w"
              alt="">
          </section>
          <section class="sec-storybg sec-with-imgbg">
              <img height="450px" width="100%" class="sec-imgbg lazyload" sizes="100vw"
                data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto/background-images/econ"
                data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_500/background-images/econ 500w,
                https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_800/background-images/econ 800w,
                https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1080/background-images/econ 1080w,
                https://res.cloudinary.com/ventureoutdoors/image/upload/q_100,f_auto,c_scale,w_1200/background-images/econ 1200w"
                alt="The Econlockhatchee River in Orlando provides for an adventurous and beautiful paddle experience.">
          </section>
          <section class="wysiwyg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <div class="wysiwyg-gray-item">
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h2 class="h3">Our Story</h2>
                      <img class="founder-img lazyload" width="300px" height="100%" 
                        src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_300/background-images/founder"
                        alt="Venture Outdoors&#x27; founder Astrid Jackson loves sharing her favorite places with you!">
                      <p>Venture Outdoors&#x27; founder, Astrid Jackson, has always been passionate about the outdoors. In
                        her childhood she loved exploring and playing in the woods, went on many camping trips, and explored
                        a variety of outdoor activities. But life circumstance led her away from her passion and instead she
                        worked as a Software Engineer in an office.</p>
                      <p>During a time period when Astrid realized that she was unfulfilled, opportunity knocked and led her
                        back to what she likes most - being outdoors. She secured a position as a kayak tour guide and kayak
                        instructor in Central Florida. Gaining great experience and enjoyment from her new career choice,
                        Astrid took a bull step and decided to open her own outdoor adventure business.</p>
                      <p>Astrid is certified by the <a href="https://americancanoe.org/" class="textlinks">American Canoe
                          Association (ACA)</a> as a kayak instructor and as a kayak touring trip leader. She also holds a
                        certification from the <a href="#" class="textlinks">Nantahala Outdoor Center (NOC)</a> as a raft
                        guide and is trained and certified as a <a
                          href="https://www.nols.edu/en/coursefinder/courses/wilderness-first-responder-WFR/"
                          class="textlinks">NOLS Wilderness First Responder</a>.</p>
                      <p>She loves sharing her passion with her guests and students and finds great pleasure when she is
                        able to create the &#x27;aha&#x27;-moment in others. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    <?php }

  get_footer();

?>