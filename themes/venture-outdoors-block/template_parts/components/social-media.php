<?php 
  $ele = $args['ele'] ? $args['ele'] : 'span';
  $margin = $args['margin'] ? ' ' . $args['margin'] : '';
  $txt_color = $args['txt_color'] ? ' ' . $args['txt_color'] : '';
  $btn_color = $args['btn_color'] ? ' ' . $args['btn_color'] : '';
?>
<<?php echo $ele; ?> class="social-media">
  <h3 class="h5 montserrattlt text-center<?php echo $margin; ?><?php echo $txt_color; ?>">Connect With</h3>
  <div class="social-media-cont">
    <a aria-label="TripAdvisor" rel="noopener noopener"
      href="https://www.tripadvisor.com/Attraction_Review-g34515-d23746556-Reviews-Venture_Outdoors-Orlando_Florida.html"
      target="_blank" class="social-media-link<?php echo $btn_color; ?>">
      <div aria-hidden="true" class="social-icon icon-tripadvisor"></div>
    </a>
    <a aria-label="Facebook" rel="noopener noopener" href="https://www.facebook.com/ventureoutdoorsusa"
      target="_blank" class="social-media-link<?php echo $btn_color; ?>">
      <div aria-hidden="true" class="social-icon icon-facebook"></div>
    </a>
    <a aria-label="Instagram" rel="noopener noopener" href="https://www.instagram.com/ventureoutdoorsusa/"
      target="_blank" class="social-media-link<?php echo $btn_color; ?>">
      <div aria-hidden="true" class="social-icon icon-instagram"></div>
    </a>
    <a aria-label="Twitter" rel="noopener noopener" href="https://twitter.com/VentureOutdoor5" target="_blank"
      class="social-media-link<?php echo $btn_color; ?>">
      <div aria-hidden="true" class="social-icon icon-twitter"></div>
    </a>
    <a aria-label="YouTube" rel="noopener noopener" href="https://www.youtube.com/channel/UC8jUGB10lcIo8ocdpAgIJaA"
      target="_blank" class="social-media-link<?php echo $btn_color; ?>">
      <div aria-hidden="true" class="social-icon icon-youtube-play"></div>
    </a>
  </div>
</<?php echo $ele; ?>>
