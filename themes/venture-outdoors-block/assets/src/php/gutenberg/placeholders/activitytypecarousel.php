<?php 

$activities = VENTUREOUTDOORS_THEME\Inc\Activities::get_instance();

$clean_params = $activities->clean_parameters();
$options = $activities->get_meta_data( ...$clean_params );

?>

<section class="activity-card">
  <div class="container-fluid hard-right">
    <div class="row flush-right">
      <div class="col-xxs-11 col-xxs-push-1 hard-right">
        <div class="activity-slider side-slider">
          <?php 

            foreach ( $options[ 'types' ] as $item ) { ?>

              <div class="activity-slider-item side-slider-item">
                <a href="<?php echo $activity[ 'slug' ]; ?>">
                  <div class="imgbttn imgbttn-wbg">
                    <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_428,dpr_2.0/activity-types/<?php echo $item[ 'thumbnail' ]; ?>"
                      loading="lazy" alt="<?php echo $item[ 'title' ]; ?>" class="imgbttn-img img-responsive objectfit">
                    <div class="imgbttn-overlay">
                      <div class="imgbttn-btn">
                        <span class="btn-tertiary">Explore</span>
                      </div>
                      <div class="imgbttn-txt activity-slide-cont">
                        <h3 class="h4 imgbttn-title flush-ends"><?php echo $item[ 'title' ]; ?></h3>
                        <div class="activity-count"><?php echo $item[ 'count' ] . ' ' . str_contains( $item[ 'slug '], 'lessons' ) ? 'Lessons' : 'Tours'; ?></div>
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
