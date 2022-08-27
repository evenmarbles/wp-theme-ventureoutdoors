<?php

  get_header();

  while(have_posts()) {
    the_post(); ?>

    <main id="page-body" class="page-body">
    <?php 
        pageBanner(array(
          'title' => 'Contact Us',
          'image_slug' => 'hero-images/contact-us',
          'image_alt_tag' => 'Observe alligator babies in their natural habitat while you kayak the Florida rivers.'
        ));
      ?>
      <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
        <div class="breadcrumbs-cont container">
          <ul class="list-style-none flush hard">
            <li>
              <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
              <i aria-hidden="true" class="icon-east"></i>
            </li>
            <li><span aria-current="page" class="breadcrumb-last">Contact Us</span></li>
          </ul>
        </div>
      </div>

      <?php get_template_part('template_parts/filter', 'page'); ?>

      <div class="page-content">
        <section class="intro-content sec-with-imgbg">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="intro-content-title">
                  <h2 class="h3 flush-top">Get in Touch!</h2>
                  <p class="intro-content-title">We love talking to our guests!</p>
                </div>
              </div>
              <div class="col-lg-8 content">
                <p>You can reach us by phone or email 7 days a week between 8:00 AM and 9:00PM Eastern
                  Standard Time. We
                  are ready to answer all your questions or help you find and book your next adventure! </p>
                <p>Please leave us your comments and feedback, we are committed to providing you an exceptional
                  experience. We&#x27;d love to hear from you!</p>

                <?php get_template_part('template_parts/social', 'media', array(
                  'ele' => 'div',
                  'margin' => 'push-top',
                  'txt_color' => 'color-senary',
                  'btn_color' => 'color-secondary',
                )); ?>
                
              </div>
            </div>
          </div>
          <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap" loading="lazy"
            alt="" class="sec-imgbg">
        </section>
        <section class="wysiwyg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 center-block">
                <div class="wysiwyg-gray-item">
                  <div class="wysiwyg-gray-cnt bgc-tertiary content">
                    <h2 class="h3">Hours</h2>
                    <p>Daily from 8am to 9pm Eastern Standard Time</p>
                    <div class="divider"></div>
                    <h2 class="h3">Email Us</h2>
                    <div class="form-success text-center hidden">
                      Thank you! Your submission has been received!<br>We will respond in
                        1 - 3 business days.
                    </div>
                    <div class="form-error text-center hidden">
                      Oops! Something went wrong and your message couldn't be sent. Please try again later.
                    </div>
                    <form id="contact_form" name="contact_form" enctype="multipart/form-data">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-col">
                            <label for="first_name">First Name *</label>
                            <input id="first_name" maxlength="40" name="first_name" size="20" type="text">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-col">
                            <label for="last_name">Last Name *</label>
                            <input id="last_name" maxlength="80" name="last_name" size="20" type="text">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-col">
                            <label for="phone">Phone *</label>
                            <input id="phone" maxlength="40" name="phone" size="20" type="tel">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-col">
                            <label for="email">Email *</label>
                            <input id="email" maxlength="80" name="email" size="20" type="email">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-col">
                            <label for="description">Description *</label>
                            <textarea id="description" maxlength="5000" name="description"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-col">
                            <label for="found_us">How You Found Us</label>
                            <select id="found_us" name="found_us" title="How You Found Us">
                              <option value="">&#8211;None&#8211;</option>
                              <option value="I'm a return guest">I&#8217;m a return guest</option>
                              <option value="Someone referred me">Someone referred me</option>
                              <option value="Google">Google</option>
                              <option value="Facebook">Facebook</option>
                              <option value="Instagram">Instagram</option>
                              <option value="Yahoo">Yahoo</option>
                              <option value="Bing">Bing</option>
                              <option value="Another website">Another website</option>
                              <option value="Travel agent">Travel agent</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-col">
                            <label class="form-checkbox">
                              <input id="opt_in" name="opt_in" type="checkbox" />
                              <span class="opt-in-label">Receive emails about Venture Outdoors
                                Promotions, Updates, and Discounts</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-col hidden">
                            <label for="extra">Extra</label>
                            <input id="extra" maxlength="256" name="extra" type="text">
                          </div>
                        </div>
                      </div>
                      <div class="g-recaptcha g-recaptcha-error g-recaptcha-disabled" data-sitekey="6Ld4zykdAAAAAA-V3HxD3SHxC9H-XPFkClkOAGB4">
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-col">
                            <input id="submit" name="submit" type="submit" data-wait="Please wait...">
                            </div>
                        </div>
                      </div>
                    </form>
                    <div class="divider"></div>
                    <h2 class="h3">Call Us</h2>
                    <h3 class="h4">+1 407-267-9950</h3>
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