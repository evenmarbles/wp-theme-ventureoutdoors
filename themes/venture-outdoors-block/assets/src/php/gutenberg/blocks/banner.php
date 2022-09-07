<?php
$activities = VENTUREOUTDOORS_THEME\Inc\Activities::get_instance();

$clean_params = $activities->clean_parameters();
$options = $activities->get_meta_data( ...$clean_params );
$query = $activities->get_query( ...$clean_params );
?>

<header id="masthead" class="banner">
  <div class="banner-logo-container">
    <img width="382px" height="200px" src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-base_382x200.png" alt="Go to Venture Outdoors&#x27; homepage."
      class="logo-base" />
    <img width="195px" height="200px" src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo//venture-outdoors-logo-needle_195x200.png"
      alt="Go to Venture Outdoors&#x27; homepage." class="logo-needle" />
  </div>
  <?php echo $content; ?>
  <div class="banner-form">
    <div class="banner-form__content">
      <h2 class="h4 flush-top">Find Your Ideal Outdoor Activity</h2>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-select">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_type facetwp-type-dropdown" data-name="frontpage_activity_types" data-type="dropdown">
              <select id="activity_types" class="facetwp_dropdown">
                <option value="">Activity Type</option>
                <?php foreach( $options[ 'types' ] as $item ) { ?>
                <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $item[ 'title' ] . ' (' . $item[ 'count' ] . ')'?></option>
                <?php } ?>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-select">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_length facetwp-type-dropdown" data-name="frontpage_activity_lengths" data-type="dropdown">
              <select id="activity_lengths" class="facetwp_dropdown">
                <option value="">Activity Length</option>
                <?php foreach( $options['lengths'] as $item ) { ?>
                <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $item[ 'title' ] . ' (' . $item[ 'count' ] . ')'?></option>
                <?php } ?>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-select">
            <div class="facetwp-facet facetwp-facet-frontpage_difficulty_level facetwp-type-dropdown" data-name="frontpage_difficulties" data-type="dropdown">
              <select id="difficulties" class="facetwp_dropdown">
                <option value="">Difficulty</option>
                <?php foreach( $options['difficulties'] as $item ) { 
                  $title = substr( $item[ 'title' ], 0, strlen( $item[ 'title' ] ) - 1 ) . ' ' . substr( $item[ 'title' ], -1 );
                  if ( $item[ 'count' ] > 0 ) {
                ?>
                <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $title . ' (' . $item[ 'count' ] . ')'?></option>
                <?php } 
                  } ?>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <button class="btn-primary btn-block js-frontpage-filter">View Activities</button>
        </div>
      </div>
      <p class="flush-bottom"><span class="js-number-results"><?php echo $query->found_posts; ?></span> activities meet your criteria</p>
    </div>
  </div>
</header>