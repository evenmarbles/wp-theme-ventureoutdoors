<?php
/**
 * Activity Card
 *
 * Note: Should be called with The Loop
 */

if ( empty( get_the_ID() ) ) {
	return null;
}

$cloudinary = VENTUREOUTDOORS_THEME\Inc\Cloudinary::get_instance();

$activityType = implode( ',', array_map( function ( $t ) { return get_the_title( $t->ID ); }, get_field( 'activity_type' ) ) );
$difficulty = str_replace( ' ', '-', strtolower( get_field( 'difficulty_level' ) ) );
$solitude = str_replace( ' ', '-', strtolower( get_field( 'solitude_level' ) ) );
?>

<div class="col-xxs-12 col-xs-6 col-sm-6 col-lg-4">
  <a class="sngl-activity-similar-item" href="<?php the_permalink(); ?>">
    <?php if ( get_field( 'guides_choice' ) ) { ?>
      <div class="sngl-activity-badges">
        <?php echo $cloudinary->get_image_tag( 'background-images/guides-choice', 'badge img-responsive', 'auto', true, false, false ); ?>
      </div>
    <?php } ?>
    <div class="sngl-activity-similar-item-img">
      <?php echo get_the_post_thumbnail( get_the_ID(), 'post-thumbnail', [ 'class' => 'objectfit img-responsive' ] ); ?>
    </div>
    <div class="sngl-activity-similar-item-cont">
      <div class="sngl-activity-duration"><?php the_field( 'duration' ); ?></div>
      <div class="sngl-activity-cost">from $<?php the_field('cost'); ?></div>
      <h5 class="flush"><?php the_title(); ?></h5>
      <div><strong>Location:</strong> <?php the_field( 'location' ); ?></div>
      <div><strong>Area:</strong> <?php the_field( 'area' ); ?></div>
      <div><strong>Activity Type:</strong> <?php echo $activityType; ?></div>
      <div class="sngl-activity-similar-difficulty">
        <strong>Difficulty:</strong>
        <?php echo $cloudinary->get_image_tag( 'levels/' . $difficulty, 'sngl-activity-similar-difficulty__img', 'auto', true, false ); ?>
      </div>
      <?php if ( get_field( 'solitude_level' ) ) { ?>
      <div class="sngl-activity-similar-difficulty">
        <strong>Solitude:</strong>
        <?php echo $cloudinary->get_image_tag( 'levels/' . $solitude, 'sngl-activity-similar-difficulty__img', 'auto', true, false ); ?>
      </div>
      <?php } ?>
      <div>
        <strong>Highlights:</strong> <?php echo wp_strip_all_tags( get_the_excerpt() ); ?>
      </div>
    </div>
  </a>
</div>
