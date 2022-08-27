<?php
  $id = get_the_ID();
  $public_id = get_field('page_banner_background_image_slug', $id)
?>

<header class="masthead text-center">
  <?php echo $content; ?>
  <div class="cloudinary-hero-img w-embed">
    <img class="masthead-img img-responsive lazyload" sizes="100vw"
        src="https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20/<?php echo $public_id; ?>"
        srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20,c_scale,w_500/<?php echo $public_id; ?> 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20,c_scale,w_800/<?php echo $public_id; ?> 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20,c_scale,w_1080/<?php echo $public_id; ?> 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20,c_scale,w_1600/<?php echo $public_id; ?> 1600w"
        data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/<?php echo $public_id; ?>"
        data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/<?php echo $public_id; ?> 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/<?php echo $public_id; ?> 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1080/<?php echo $public_id; ?> 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1600/<?php echo $public_id; ?> 1600w" 
        alt="<?php the_field('page_banner_background_image_alt_tag', $id); ?>" />
  </div>
</header>