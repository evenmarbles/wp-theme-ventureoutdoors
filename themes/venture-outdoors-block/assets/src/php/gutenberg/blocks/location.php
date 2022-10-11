<?php
  $location = get_field('map_location');
  $lat = isset( $location['lat'] ) ? $location['lat'] : '';
  $lng = isset( $location['lng'] ) ?  $location['lng'] : '';
?>

<div class="category-container-cont clearfix">
  <p><?php the_field('meeting_location'); ?></p>
  <div class='col-md-6 acf-map'>
    <div class='marker' data-lat=<?php echo $lat; ?> data-lng=<?php echo $lng; ?>>
      <strong><?php the_title(); ?></strong><br /><?php echo isset( $location['address'] ) ? $location['address'] : ''; ?><br />
      <a style="color:#1c202a;text-decoration:underline;float:right" href=<?php echo "https://www.google.com/maps/dir/{$lat},{$lng}/"; ?> target="_blank" rel="noreferrer noopener">Directions</a>
    </div>
  </div>
  <div class='col-md-6'>
    <h4>Driving Directions</h4>
    <?php echo $content; ?>
  </div>
</div>