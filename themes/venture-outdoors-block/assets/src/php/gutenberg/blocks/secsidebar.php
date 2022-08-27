<?php
  $activity_type = implode( ',', array_map( function( $t ) {
    return get_the_title( $t->ID );
  }, get_field('activity_type') ) );

  $is_lesson = strpos( $activity_type, 'Lesson' );
  $title = $is_lesson ? ' Classes' . $title : ' Tours' . $title;
?>
<div class="sec-with-floating-sidebar"<?php echo $attributes["className"] ? ' '.$attributes["className"] : "" ?>>
  <?php echo $content; ?>
  <div class="floating-sidebar hidden-sm-down">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-2 floating-sidebar-cont sngl-activity-spacer">
          <div class="side-tabmenu">
            <ul class="list-style-none flush">
              <li><a class="smoothlnk" href="#rates">Rates</a></li>
              <li><a class="smoothlnk" href="#booking">Tour Dates</a></li>
              <li><a class="smoothlnk" href="#details">Details</a></li>
              <li><a class="smoothlnk" href="#logistics">Logistics</a></li>
              <li><a class="smoothlnk" href="#related">Similar <?php echo $title ?></a></li>
            </ul>
            <div class="side-calendar text-center">
              <a class="smoothlnk btn-primary btn-no-arrow btn-block icon-calendar">Book Online</a>
              Or call us at 
              <a href="tel:+1-407-267-9950">407-267-9950</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
