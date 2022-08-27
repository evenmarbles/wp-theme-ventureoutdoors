<?php 
  $activity_type = implode(',', array_map(function($t) {return get_the_title($t->ID);}, get_field('activity_type')));
  $is_lesson = strpos($activity_type, 'Lesson');
?>
<div class="sngl-activity-price">
  <div class="row">
    <div class="package col-xxs-12 col-xs-12 text-center">
      <div class="border-top"><?php the_field('duration'); ?>
        <h3 class="h5 flush">$<?php the_field('cost'); ?> per person</h3>
      </div>
    </div>
    <div class="col-xxs-12 text-center">
      <div class="single">Season: <span><?php the_field('season'); ?></span></div>
    </div>
  </div>
</div>
<div class="sngl-activity-discount text-center hidden">Return Guests get 10% discount on all Tours!</div>
<div class="sngl-activity-details">
  <div class="row flush">
    <div class="col-sm-6 details-item">
      <strong>Activity Type:</strong>
      <span><?php echo $activity_type; ?></span>
    </div>
    <div class="col-sm-6 details-item">
      <strong>Difficulty Level:</strong>
      <span>
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php strtolower(the_field('difficulty_level')); ?>" loading="lazy" alt="Level 1" class="level-image">
        <a class="icon-info_outline color-primary js-popup" href="#" data-id="#difficulty-level-info"></a>
      </span>
    </div>
    <?php if (!$is_lesson) { ?>
    <div class="col-sm-6 details-item">
      <strong>Solitude Level:</strong>
      <span>
        <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php strtolower(the_field('solitude_level')); ?>" loading="lazy" alt="Level 1" class="level-image">
        <a class="icon-info_outline color-primary js-popup" href="#" data-id="#solitude-level-info"></a>
      </span>
    </div>
    <?php } ?>
    <div class="col-sm-6 details-item">
      <strong>Group Size:</strong>
      <span><?php echo get_field('group_size_min') . '-' . get_field('group_size_max') . ($is_lesson ? ' Students' : ' Guests'); ?></span>
    </div>
    <div class="col-sm-6 details-item">
      <strong>Tour Length:</strong>
      <span><?php the_field('duration'); ?></span>
    </div>
    <?php if (!$is_lesson) { ?>
    <div class="col-sm-6 details-item">
      <strong>Distance:</strong>
      <span><?php the_field('distance'); ?></span>
    </div>
    <?php } ?>
  </div>
</div>
<div class="tooltip-popup content white-popup mfp-hide" id="difficulty-level-info">
  <h4>Difficulty Level <?php echo substr(get_field('difficulty_level'), -1)?></h4>
  <p><em>Scale of 1-5. 1 least difficult; 5 most difficult</em></p>
  <div><?php the_field('difficulty_popup'); ?></div>
  <div class="text-center">
    <a class="btn-secondary btn-small btn-no-arrow flush-top" href="/trip-rating-system">Learn More About Our Rating System</a>
  </div>
</div>
<div class="tooltip-popup content white-popup mfp-hide" id="solitude-level-info">
  <h4>Solitude Level <?php echo substr(get_field('solitude_level'), -1)?></h4>
  <p><em>Scale of 1-5. 1 least solitue; 5 most solitude</em></p>
  <div><?php the_field('solitude_popup'); ?></div>
  <div class="text-center">
    <a class="btn-secondary btn-small btn-no-arrow flush-top" href="/trip-rating-system">Learn More About Our Rating System</a>
  </div>
</div>
<div class="sngl-activity-moreinfo">
  <div class="sngl-activity-moreinfohelp bgc-tertiary text-center">
    We are here to help. If you have any questions, call us at 
    <a href="tel:+1-407-267-9950" class="color-primary">407-267-9950</a> 
    or 
    <a href="<?php echo site_url() . '/contact'; ?>" class="color-primary">contact us online</a>.
  </div>
  <a class="btn-terniary btn-no-arrow btn-block js-popup hidden" href="#js-printable-format-form">PDF Trip itineary packet</a>
  <?php if(!$is_lesson) { ?>
  <a class="btn-secondary btn-no-arrow btn-block icon-pictures" 
      href="https://store.picthrive.com/ventureoutdoors/?utm_source=ventureoutdoors&amp;utm_medium=button&amp;utm_term=custom_text&amp;utm_content=&amp;utm_campaign=custom_link">Buy photos</a>
  <?php } ?>
  <a class="smoothlnk btn-primary btn-no-arrow btn-block icon-calendar" href="#booking">Book online</a>
  <div class="text-center hide-print">
    Or call to book <a href="tel:+1-407-267-9950" class="call-to-book-link">407-267-9950</a>
  </div>
  <div class="sngl-activity-moreinfopvt text-center hidden">
    <h5 class="h6 flush">Learn about our private tours</h5>
    <a class="btn-secondary btn-small btn-no-arrow flush-top js-popup" href="#">View private trips</a>
  </div>
  <div class="sngl-activity-moreinfopvt text-center hidden">
    <h5 class="h6 flush">Only 1 or 2 participants?</h5>
    <a class="btn-quaternary btn-small btn-no-arrow flush-top" href="#rates">Learn more about our RATES</a>
  </div>
