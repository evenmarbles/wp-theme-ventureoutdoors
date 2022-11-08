<?php
/**
 * Masthead
 */
?>

<header class="masthead text-center">
  <?php echo $content; ?>
  <div class="cloudinary-hero-img w-embed">
    <?php 
      $id = get_the_ID();
      $public_id = get_field('page_banner_background_image_slug', $id);
      
      $cloudinary = VENTUREOUTDOORS_THEME\Inc\Cloudinary::get_instance();

      echo $cloudinary->get_image_tag( $public_id, 'masthead-img img-responsive', 'auto', false, true, false ); 
    ?>
  </div>
</header>