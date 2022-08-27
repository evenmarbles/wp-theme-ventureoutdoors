<?php

  get_header();

    while(have_posts()) {
      the_post(); ?>

    <main id="page-body" class="page-body">
      <?php 
          pageBanner(array(
            'title' => 'Terms & Conditions',
            'image_slug' => 'hero-images/terms-and-conditions',
            'image_alt_tag' => 'A great blue heron taking off during a kayak tour.'
          ));
        ?>
        <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
          <div class="breadcrumbs-cont container">
            <ul class="list-style-none flush hard">
              <li>
                <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
                <i aria-hidden="true" class="icon-east"></i>
              </li>
              <li><span aria-current="page" class="breadcrumb-last">Terms &amp; Conditions</span></li>
            </ul>
          </div>
        </div>
        
        <?php get_template_part('template_parts/filter', 'page'); ?>

        <div class="page-content">
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block wysiwyg-cntnt-text content">
                  <p>The below stated terms and conditions are according to industry standards and presented with a strong
                    conviction that they must be fair to our guests and to Venture Outdoors.</p>
                  <p><strong>We strongly encourage you to read the terms and understand clearly what you are agreeing to. We
                      do not stray from these agreements under any circumstances. </strong></p>
                  <p>We appreciate your understanding of the realities we face as a small group adventure company operating
                    on public lands, and are more than happy to answer any questions you have about our terms.  Finally, we
                    can’t wait to help you experience the wonders of whichever activity you’re interested in – we’re sure it
                    will be unforgettable!</p>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <div class="wysiwyg-gray-item">
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h3>Pricing</h3>
                      <ul role="list">
                        <li>Prices shown on the Venture Outdoors website are per person unless otherwise stated.</li>
                        <li>Prices are subject to change, until the booking has been confirmed.</li>
                        <li>What is included is stated specifically on each page.</li>
                        <li>Children under eighteen must be accompanied by an adult on all our activities. Many activities
                          have waivers that must be signed and you have to be 18 years of age or older to sign them. No
                          exceptions.</li>
                        <li>Unless otherwise specified, prices shown are base prices and may be subject to taxes and fees.
                        </li>
                        <li>Prices do not include (unless stated otherwise) – gratuities to the guide, instructor, driver,
                          or tour manager, food and beverages and transfers to/from stations.</li>
                        <li>Gratuities are at your discretion.</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block wysiwyg-cntnt-text content">
                  <div class="wysiwyg-cnt">
                    <h3>Payment Schedule</h3>
                    <ul role="list">
                      <li>$250 per person deposit is required to secure your spot.</li>
                      <li>The final balance is due 60 days prior to your trip start date.</li>
                      <li>Full payment is due at the time of booking for day activity and multi-day trips starting 60 days
                        or less from today.</li>
                    </ul>
                    <p>Final acceptance of any participant is subject to receipt and review of all required forms,
                      documents, and payment.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <div class="wysiwyg-gray-item">
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h3>Trip Itineary Changes and Alternate Trips</h3>
                      <p>All Venture Outdoors Company trips are subject to itinerary changes based on a variety of
                        circumstances beyond our control, including, but not limited to permit or campsite availability,
                        snowpack, river crossings, wildlife, park or land closures, and forest fires. The price of an
                        activity will never change due to itinerary changes. Payments are not refundable for itinerary
                        changes or park or land closures. If a trip is cancelled due to circumstances beyond our control and
                        no alternate itinerary is available a trip credit will be issued equal to the full amount paid minus
                        any nonrefundable expenses incurred by the Company.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block wysiwyg-cntnt-text content">
                  <div class="wysiwyg-cnt">
                    <h3>Right to refuse service</h3>
                    <p>We reserve the right to refuse service to anyone who is intoxicated, seemingly under the influence of
                      drugs or alcohol, is uncontrollably angry, refuses to follow safety rules or any other reason deemed a
                      threat to the safety and enjoyment of our guides, instructors, and guests. Refusals will not be issued
                      refunds under any circumstances.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <div class="wysiwyg-gray-item">
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h3>Liability</h3>
                      <p>Venture Outdoors shall not be liable should it be required to change an itinerary or other service
                        necessary for the safety and continuation of any activity or passenger or due to unforeseen
                        circumstances beyond the control of Venture Outdoors. Venture Outdoors reserves the right to modify
                        or change any published rate where changes or modifications have been made and are required by any
                        entities beyond ownership or control. Venture Outdoors shall not be held responsible for
                        misrepresentation in the sales process. Venture Outdoors is not liable for the personal property of
                        any participants.</p>
                      <p>We may, at our discretion, require any person to withdraw from any activity, if we deem their acts
                        or conduct offensive, or a nuisance to other passengers, and we shall have no further liability.</p>
                      <p>Should the passenger fail to arrive or arrive late at the starting point or during the activity,
                        then no liability can be accepted.</p>
                      <p>We have no liability for loss, damage, delay, inconvenience, or direct or consequential loss,
                        however caused, unless due to our employees negligence, in which case our liability is limited
                        (except for death or personal injury) to a maximum of the refund of the activity cost.</p>
                      <p>Any failure to perform, delay, liability or damage shall be excused and Venture Outdoors shall not
                        be held responsible for the consequences of Acts of God, labor disputes, civil commotions, fire,
                        weather conditions, theft, unavoidable accidents, war, acts of state or agencies thereof, or any
                        other circumstance beyond the control of Venture Outdoors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block wysiwyg-cntnt-text content">
                  <div class="wysiwyg-cnt">
                    <h3>General Conditions</h3>
                    <ul role="list">
                      <li>If you have comments about your activity, you should contact us via email from our <a
                          href="<?php echo site_url() . '/contact'; ?>" class="textlinks">Contact Us</a> form, by telephone at <a
                          href="tel:+-407-267-9950" class="textlinks">407-267-9950</a>, or by mailing us at:<br>
                            Venture Outdoors<br>     924 N. Magnolia Avenue, Suite 202 #1226<br>     Orlando, Florida
                        32803</li>
                      <li>No agent or proprietor of ours can vary our conditions and any such purported variation shall be
                        of no effect unless it has been signed by one of our Directors.</li>
                      <li>We do not own or manage third party venues and we have no liability for loss or damage caused by
                        the proprietors or operators thereof.</li>
                      <li>No firearms are permitted on any Venture Outdoors vehicle or during your activity. We have no
                        storage for them, please do not bring them with you.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="wysiwyg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <div class="wysiwyg-gray-item">
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h3>Terms Of Use</h3>
                      <p>Any and all use of the web site <a href="#" class="textlinks">ventueoutdoorsllc.com</a> (“the
                        Site”) is on the terms and conditions below. If you do not agree to these conditions cease use of
                        the Site immediately. These terms are a legal agreement between us and can only be modified with
                        our consent. We reserve the right to change the terms at our discretion by changing them on the
                        Site. You may save or print a copy of these terms.</p>
                      <ul role="list">
                        <li>By using t or any Venture Outdoors affiliated website (including booking software, social
                          media, or third party affiliates), you agree to be legally bound by these terms, which shall
                          take effect immediately.</li>
                        <li>If you do not agree to be legally bound by all the following terms &amp; conditions, please do
                          not access and/or use or Venture Outdoors affiliated website. Please do not use via verbal
                          direction to a staff member by way of booking request over the phone.</li>
                        <li>Booking over the phone constitutes consent to these terms and conditions as the Site is used
                          for all reservations.</li>
                        <li>Venture Outdoors may change these terms at any time by posting changes online. Please review
                          these terms and conditions regularly to ensure you are aware of any changes made by Venture
                          Outdoors. Your continued use of Venture Outdoors website and Venture Outdoors affiliated website
                          after changes are posted means you agree to be legally bound by these terms as updated and/or
                          amended.</li>
                        <li>You may not copy, reproduce, republish, download, post, broadcast, transmit, make available to
                          the public, or otherwise use the Site content (inclusive of text, images, URLs, pricing
                          information, etc.) in any way except for your own personal, non-commercial use. Any other use of
                          the Site content requires the prior written permission of Venture Outdoors.</li>
                        <li>You agree to use the Site and Venture Outdoors affiliated websites only for lawful purposes
                          and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and
                          enjoyment of the Site.</li>
                        <li>Your use of the Site or any Venture Outdoors affiliated sites is intended for personal,
                          non-commercial use and/or to make legitimate requests to book the products or services offered.
                          You agree not to use the Site to make any speculative, false or fraudulent requests. You agree
                          not to use robots or other automated means to access this site, unless specifically permitted by
                          Venture Outdoors.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </main>

    <?php }

  get_footer();

?>