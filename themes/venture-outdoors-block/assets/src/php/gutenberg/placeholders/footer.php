<?php
$cloudinary = VENTUREOUTDOORS_THEME\Inc\Cloudinary::get_instance();
?>

<div class="container">
  <div class="row clearfix">
    <div class="col-sm-6 col-md-4 push-top-md-up">
      <div class="footer-column text-center">
        <div class="footer-logo">
          <?php 
            echo $cloudinary->get_image_tag( 'venture-outdoors-base_132x132', 'logo-base', 'auto', true, false );
            echo $cloudinary->get_image_tag( 'venture-outdoors-logo-needle_132x132', 'logo-needle', 'auto', true, false );
          ?>
        </div>
        <div class="back-to-top hidden-md-up hidden-xs-down js-slide-to-top">
          <a class="btn-primary" href="#top">Back to Top</a>
        </div>
        <div class="footer-bottom hidden-sm-down">
          <div class="footer-bottom-menu">
            <a href="#" class="menu-item menu-item-footer">Site Credits</a>
            <a href="#" class="menu-item menu-item-footer">Sitemap</a>
          </div>
          <div class="copyright">All Content &amp; Photos Copyrighted by Venture Outdoors LLC @ 2021.</div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 push-top-sm-down text-center">
      <div class="footer-column">
        <div class="footer-address">
          <div class="h5 montserrattlt white push-half-bottom">Mailing Address *</div>
          <p class="footer-address-text">924 N. Magnolia Ave., Suite 202 #1226, Orlando, FL 32803</p>
          <div class="footer-disclaimer"><em>* Disclaimer: This address is for mail correspondence only, please refer to the
              individual activity for the meeting location.</em></div>
        </div>
        
        <?php get_template_part('template_parts/components/social-media', null, array(
          'ele' => 'div',
          'margin' => 'push-half-bottom',
          'txt_color' => 'white',
        )); ?>

      </div>
    </div>
    <div class="col-sm-6 col-md-4 push-top-sm-down">
      <div class="footer-column text-center hidden-sm">
        <div class="affiliations">
          <div class="h5 montserrattlt white push-half-bottom">Affiliations</div>
          <div class="affiliates">
            <div class="affiliate-link-cont aca">
              <a aria-label="American Canoe Association" rel="noopener" href="https://americancanoe.org/"
                target="_blank" class="affiliate-link aca">
                <div class="affiliated-link-text">American Canoe Association</div>
              </a>
            </div>
            <div class="affiliate-link-cont flsee">
              <a aria-label="Florida SEE" rel="noopener" href="https://www.floridasee.org/" target="_blank"
                class="affiliate-link flsee">
                <div class="affiliated-link-text">Florida SEE</div>
              </a>
            </div>
            <div class="affiliate-link-cont ties">
              <a aria-label="The International Ecotourism Society" rel="noopener" href="https://ecotourism.org/"
                target="_blank" class="affiliate-link ties">
                <div class="affiliated-link-text">The International Ecotourism Society</div>
              </a>
            </div>
          </div>
        </div>
        <div class="back-to-top">
          <a class="btn-primary js-slide-to-top" href="#top">Back to Top</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom hidden-md-up text-center">
    <div class="footer-bottom-menu">
      <a href="#" class="menu-item menu-item-footer">Site Credits</a>
      <a href="#" class="menu-item menu-item-footer">Sitemap</a>
    </div>
    <div class="copyright">All Content &amp; Photos Copyrighted by Venture Outdoors LLC @ 2021.</div>
  </div>
</div>