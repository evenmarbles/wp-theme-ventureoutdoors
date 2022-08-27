<?php

  get_header();

    while(have_posts()) {
      the_post(); ?>

      <main id="page-body" class="page-body">
        <?php 
          pageBanner(array(
            'title' => 'Privacy Policy',
            'image_slug' => 'hero-images/privacy-policy',
            'image_alt_tag' => 'See birds taking baths.'
          ));
        ?>
        <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
          <div class="breadcrumbs-cont container">
            <ul class="list-style-none flush hard">
              <li>
                <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
                <i aria-hidden="true" class="icon-east"></i>
              </li>
              <li><span aria-current="page" class="breadcrumb-last">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <?php get_template_part('template_parts/filter', 'page'); ?>

        <div class="page-content">
          <section class="wysiwyg-cntnt">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 center-block wysiwyg-cntnt-text content">
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Privacy Policy Statement</h2>
                    <p>This is the website of Venture Outdoors LLC.</p>
                    <p>Florida Office<br>924 N Magnolia Avenue, Suite 202, #1226<br>Orlando, FL 32803</p>
                    <p>We can be reached via email from our <a href="<?php echo site_url() . '/contact'; ?>" class="textlinks">Contact Us</a> form or
                      by telephone at <a href="tel:+1-407-267-9950" class="textlinks">407-267-9950</a>.</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">What we collect</h2>
                    <p>Primarily, we collect volunteered information through the use of interactive forms. When placing an
                      order we ask the following information: your name, email address, phone number, referral source, and
                      credit card information. When requesting to join our Venture Outdoors mailing list, we also collect
                      your name and email address. Through the use of third party partners, The Venture Outdoors Company may
                      also retain and analyze certain visitors’ information regarding the use of ventureoutdoorsllc.com and
                      the services available therein. Information collected may include but is not limited to website
                      traffic volume, frequency of visits, type and time of transactions, type of browsers, type of
                      operating system, geographical data of visitors, demographic data of visitors, page visits, website
                      referral data, Cookie data, and live chat transcripts.</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Cookies and third party advertisers</h2>
                    <p>When visiting ventureoutdoorsllc.com, approved third parties (such as AdRoll, Google Analytics…etc.)
                      may place cookies on users’ browsers for targeted advertising purposes. The types of data collected
                      for targeted advertising include but are not limited to: IP addresses, cookie identifiers, and website
                      activity. This data may be used by third parties (such as AdRoll) to target advertising on other sites
                      based on users’ online activity.</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Use of information</h2>
                    <p>We may use personal information to provide the services you’ve requested. We may also use personal
                      information to personalize your experience, process transactions, administer a contest, promotion,
                      survey, or other site feature, and to send periodic emails. In addition, we may also use personal
                      information for auditing, research and analysis to improve The Venture Outdoors Company. We may use
                      third parties to assist us in analyzing your personal information, and we require that such third
                      parties agree to comply with our Privacy Policy and all appropriate confidentiality and security
                      measures. <br></p>
                    <p>We do not share or sell the information we collect for commercial purposes, except to provide the
                      services you’ve requested or when we have your permission</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Accessing and updating personal information</h2>
                    <p>When you use Venture Outdoors' Company website, we make good faith efforts to provide you with
                      access to your personal information and either correct this data if it is inaccurate or to delete
                      information if it is not otherwise required to be retained by law or for valid business purposes. You
                      may update your information by clicking on your registration link or contacting us by phone, email, or
                      mail. We may decline to process requests that are unreasonable such as requests concerning information
                      residing on backup drives.</p>
                    <p>If you supply us with your postal address on-line you may receive periodic mailings from us with
                      information on new products and offerings. If you do not wish to receive such mailings, please let us
                      know by calling us at the number provided above, e-mailing us, or writing to us at the above address.
                      You may receive mailings from other reputable companies.</p>
                    <p>Visitors and guests who supply us with their telephone numbers on-line may receive telephone calls
                      from us with information about new products and offerings. If you do not wish to receive such
                      telephone calls, please let us know by sending us e-mail, calling us at the above telephone number, or
                      writing to us at the above address.</p>
                    <p>Persons who supply us with their e-mail address on-line may receive e-mail contact from us with
                      information regarding new products and offerings. If you do not wish to receive such e-mails, please
                      let us know by emailing us, calling us at the above telephone number, or writing to us at the above
                      address.</p>
                    <p>With respect to Ad Servers: We do not, and will not, partner with or have special relationships with
                      any ad server companies.</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Protection of information</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when
                      you place an order or access your personal information.</p>
                    <p>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via
                      Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database
                      only to be accessible by those authorized with special access rights to such systems, and are required
                      to keep the information confidential.</p>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
                      information. This does not include trusted third parties who assist us in operating our website,
                      conducting our business, or servicing you, so long as those parties agree to keep this information
                      confidential. We may also release your information when we believe release is appropriate to comply
                      with the law, enforce our site policies, or protect ours or others rights, property, or safety.
                      However, non-personally identifiable visitor information may be provided to other parties for
                      marketing, advertising, or other uses.</p>
                  </div>
                  <div class="paragraph-wrapper">
                    <h2 class="h4">Changes to this privacy policy</h2>
                    <p>The Venture Outdoors Company will periodically update this policy. We do not intend to reduce your
                      rights under this Policy without your explicit consent, and we expect most changes made will be minor.
                    </p>
                    <p>Those concerned with how private information is used by The Venture Outdoors Company should contact
                      us with any questions using the above email forms, phone number, and mailing addresses.</p>
                    <p>By using our site, you consent to our online privacy policy.</p>
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