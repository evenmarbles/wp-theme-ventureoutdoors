<?php
  $activity_type = implode( ',', array_map( function( $t ) {
    return get_the_title( $t->ID );
  }, get_field('activity_type') ) );

  $is_lesson = strpos( $activity_type, 'Lesson' );

  $title = $attributes['title'];
  if ( isset( $attributes['addPrefix'] ) ) {
    $title = $is_lesson ? 'Class ' . $title : 'Tour ' . $title;
  }
  if ( isset( $attributes['addSuffix'] ) ) {
    $title .= $is_lesson ? ' Classes' : ' Tours';
  }

  $className = "sngl-activity-sec sngl-activity-spacer mobile-accordion-container";
  if ( isset( $attributes['className'] ) ) {
    $className .= " ".$attributes['className'];
  }

?>
<div class="sngl-activity-mobile-accordion js-accordion hidden-md-up" data-target="#<?php echo $attributes['id']; ?>">
  <h3 class='mobile-accrdn-title'><?php echo $title; ?></h3>
</div>
<div class="<?php echo $className; ?>" id="<?php echo $attributes['id']; ?>">
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-md-offset-3 sngl-activity-sec-cont">
        <h3 class="flush-top hidden-sm-down"><?php echo isset( $attributes['altTitle'] ) ? $attributes['altTitle'] : $title ?></h3>
          <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>