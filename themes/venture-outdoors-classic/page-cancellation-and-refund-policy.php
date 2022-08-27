<?php

  get_header();

    while(have_posts()) {
      the_post(); ?>

      <main id="page-body" class="page-body">
        <?php 
          pageBanner(array(
            'title' => 'Cancellation & Refund Policy',
            'image_slug' => 'hero-images/cancellation-policy',
            'image_alt_tag' => 'Encounter alligators in their natural habitat.'
          ));
        ?>
        <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
          <div class="breadcrumbs-cont container">
            <ul class="list-style-none flush hard">
              <li>
                <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
                <i aria-hidden="true" class="icon-east"></i>
              </li>
              <li><span aria-current="page" class="breadcrumb-last">Cancellation &amp; Refund Policy</span></li>
            </ul>
          </div>
        </div>
        
        <?php get_template_part('template_parts/filter', 'page'); ?>

        <div class="page-content">
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block">
                  <p>We crafted the cancellation and refund policies below based on time-tested industry standards and a
                    strong conviction that they must be fair to our guests and to Venture Outdoors.</p>
                  <p><strong>We strongly encourage you to read the policies and understand clearly what you are agreeing to.
                      We do not stray from these agreements under any circumstances, so please consider purchasing </strong>
                    <!-- <a href="" --><strong>trip
                        insurance</strong><!-- /a --><strong> to protect your travel investment. </strong>
                  </p>
                  <p>We appreciate your understanding of the realities we face as a small group adventure company operating
                    on public lands, and are more than happy to answer any questions you have about our policies.  Finally,
                    we can’t wait to help you experience the wonders of whichever activity you’re interested in – we’re sure
                    it will be unforgettable!</p>
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
                      <p">Venture Outdoors reserve the right to cancel any activity because of internal
                        reasons including but not limited to inadequate signups, loss of staff due to injury or illness and
                        significant damage/loss of inventory. If Venture Outdoors cancels an activity due to internal
                        reasons, a refund of the total amount paid will be given, including the deposit. Venture Outdoors is
                        not responsible for additional expenses incurred by preparing for the activity (for example:
                        non-refundable advance purchase air tickets, clothing, equipment, visa fees, medical expenses,
                        etc.).</p>
                      <p>If an activity or reservation is cancelled due to circumstances beyond our control, including but
                        not limited to public land closures, civil unrest, public health emergencies and natural disasters,
                        a full activity credit will be issued minus any nonrefundable expenses incurred by Venture Outdoors.
                        Refunds are not offered in these situations. Refunds will not be issued for arriving late or leaving
                        a trip early. Exceptions to the cancellation policy cannot be made for any reason, including but not
                        limited to any of the reasons stated above, weather or personal emergencies.</p>
                      <p>All reservations received by Venture Outdoors will be issued a confirmation; Lead party name,
                        amount of guests, activity booked, activity date and time will be confirmed. Venture Outdoors is not
                        responsible for any representations made in the booking process that are not made by an employee of
                        Venture Outdoors and are not in writing.</p>
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
                    <h2 class="h3">Day Activity Cancellations</h2>
                    <p>Due to high demand for our tours and instructions we only offer refunds with 48 hours notice by phone
                      before the scheduled activity. No refund is issued when notice is given within 48 hours. Tickets are
                      non-transferable and can only be redeemed by the party named on the ticket. Any tickets still
                      available at the time of the activity can be purchased online prior to tour departure via credit card
                      on a first come, first served basis.</p>
                    <p>If you are late and not at the meeting point by the time of your activity, Venture Outdoors reserves
                      the right to sell your seat, without refund, to other ready, willing, and able patrons. No refund will
                      be issued for late arrivals or &quot;no-shows&quot;. We recommend that you try to make it to the
                      meeting site at least 15 minutes before the activity.</p>
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <h4>Rain or shine</h4>
                      <p>For most activities, we can still depart safely in light rain. However, Florida is a sub-tropical
                        climate, so occasionally heavy rain, storms, or other unforeseen events may force us to cancel or
                        postpone the activity. In that case, we will do our best to contact you promptly using contact
                        information provided during your ticket purchase. Please remember that an afternoon/evening
                        thunder and lightning storm is absolutely normal every day of summer in Florida. They usually pass
                        within 30-60 minutes. We will monitor the weather closely at the activity site, to see if that
                        day’s regular storm is passing.</p>
                      <p>Your guide or instructor will only cancel the activity when there are prolonged conditions that
                        make departure unsafe.  We understand that many have just one day/night available to do their
                        activity, so when postponing for passing weather is possible, we will do our best to depart tours
                        when it is safe to do so.</p>
                      <p>Weather is beyond the control of The Company and refunds are not given due to weather. We do our
                        best to run our activities as promised, but there are times when we have to delay them. Here is
                        what to expect if there is inclement weather when you arrive for your activity:</p>
                      <ul role="list">
                        <li>We will wait 30 minutes past a lightning strike within 10 miles.</li>
                        <li>Activities may be delayed past initial launch time. Please be prepared to wait.</li>
                        <li>Many people have driven a long way, or have flights home, so we will wait for weather to clear
                          and launch the activity when it is safe to do so.</li>
                        <li>Guests that <strong>do not</strong> stay through the 1st 1-hour weather hold will not be
                          eligible for a refund. This means, if your activity was scheduled to depart at 8:30, you must be
                          willing to wait until at least 9:30 due to weather. Guests who leave before this will not be
                          rebooked, or issued a refund.</li>
                        <li>Guests that stay through the 1st 1-hour weather hold, but choose to not wait through a longer
                          weather hold will be eligible for a refund, or rebooked next available activity.</li>
                      </ul>
                      <p>In the rare event that an activity is canceled by Venture Outdoors, guests should email us using
                        our <a href="<?php echo site_url() . '/contact'; ?>" class="textlinks">Contact Us</a> form for a refund or rebooking or call
                        us by telephone at <a href="tel:+1-407-267-9950" class="textlinks">407-267-9950</a>.</p>
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
                    <h2 class="h3">Multi-Day trip Cancellations</h2>
                    <p>We ask you to notice that the closer a cancellation is to the trip start date, the smaller the
                      eligible refund becomes. The reason for this is capacities are strictly limited in most destinations
                      by land management regulations, so every spot is irreplaceable. The closer to the start date that a
                      guest cancels, the more difficult it is to fill that open spot. Within 30 days, no refund or trip
                      credit is offered because at that point it is very unlikely we’ll be able to replace the reservation,
                      even when we have people on waitlists.</p>
                    <div class="wysiwyg-gray-cnt bgc-tertiary content">
                      <p>If you cancel or leave a trip for any reason:</p>
                      <ul role="list">
                        <li><strong>60+ days prior to trip start</strong>: A full refund minus $50 per person will be
                          granted if you cancel within 10 days of making your reservation*. After 10 days from your first
                          payment we will grant you a full refund, less a $100 per person administrative fee.</li>
                        <li><strong>59 – 30 days prior to trip start</strong>: Refund of 50% of the trip cost.</li>
                        <li><strong>Less than 30 days prior to trip start</strong>: (or once the trip has begun) There
                          will be no refund, trip credit or transfer of payments.</li>
                      </ul>
                      <p><em>*The 10-day grace period applies solely to reservations made more than 60 days prior to the
                          trip start date.</em></p>
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