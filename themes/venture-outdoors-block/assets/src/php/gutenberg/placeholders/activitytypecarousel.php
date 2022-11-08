<?php 
$cloudinary = VENTUREOUTDOORS_THEME\Inc\Cloudinary::get_instance();

$activities = VENTUREOUTDOORS_THEME\Inc\Activities::get_instance();
$clean_params = $activities->clean_parameters();
$options = $activities->get_meta_data( ...$clean_params )[ 'types' ];
?>

<section class="activity-card">
  <div class="container-fluid hard-right">
    <div class="row flush-right">
      <div class="col-xxs-11 col-xxs-push-1 hard-right">
        <div class="activity-slider side-slider">
          <?php 

            foreach ( $options as $item ) { ?>

              <div class="activity-slider-item side-slider-item">
                <a href="<?php echo $item[ 'slug' ]; ?>">
                  <div class="imgbttn imgbttn-wbg">
                    <?php echo $cloudinary->get_image_tag( 'activity-types/' . $item[ 'featured_public_id' ], 'imgbttn-img img-responsive objectfit', 'auto', true, false, false ); ?>
                    <div class="imgbttn-overlay">
                      <div class="imgbttn-btn">
                        <span class="btn-tertiary">Explore</span>
                      </div>
                      <div class="imgbttn-txt activity-slide-cont">
                        <h3 class="h4 imgbttn-title flush-ends"><?php echo $item[ 'title' ]; ?></h3>
                        <div class="activity-count"><?php echo $item[ 'count' ] . ' ' . ( str_contains( $item[ 'slug' ], 'lessons' ) ? 'Lessons' : 'Tours' ); ?></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>    

          <?php } ?>
        </div>
      </div>
    </div>
  </div>
</section>
