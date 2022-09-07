<?php 

$activities = VENTUREOUTDOORS_THEME\Inc\Activities::get_instance();

$clean_params = $activities->clean_parameters();
$options = $activities->get_meta_data( ...$clean_params );
?>

<div class="find-activities-form">
  <div class="container">
    <div class="row">
      <div class="col-xs-10 center-block">
        <div class="row valign-middle disblock-xs-down flush-sm">
          <div class="find-activities-form-field col-sm-1 hard-sm">
            <h4 class="flush">Find Activities</h4>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_type facetwp-type-dropdown" data-name="frontpage_activity_types" data-type="dropdown">
              <select id="activity_types" class="facetwp_dropdown">
              <option value="">Activity Type</option>
              <?php foreach( $options[ 'types']  as $item ) { ?>
                <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $item[ 'title' ] . ' (' . $item[ 'count' ] . ')'?></option>
              <?php } ?>
            </select>
            </div>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_length facetwp-type-dropdown" data-name="frontpage_activity_lengths" data-type="dropdown">
              <select id="activity_lengths" class="facetwp_dropdown">
                <option value="">Activity Length</option>
                <?php foreach( $options['lengths' ] as $item ) { ?>
                  <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $item[ 'title' ] . ' (' . $item[ 'count' ] . ')'?></option>
                <?php } ?>
              </select>
            </div>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_difficulty_level facetwp-type-dropdown" data-name="frontpage_difficulties" data-type="dropdown">
              <select id="difficulties" class="facetwp_dropdown">
                <option value="">Difficulty</option>
                <?php foreach( $options[ 'difficulties' ] as $item ) { 
                  $title = substr( $item[ 'title' ], 0, strlen( $item[ 'title' ]) - 1 ) . ' ' . substr( $item[ 'title' ], -1 );
                  if ( $item[ 'count' ] > 0 ) {
                ?>
                  <option value="<?php echo $item[ 'slug' ]; ?>"><?php echo $title . ' (' . $item[ 'count' ] . ')'?></option>
                <?php }
                  } ?>
              </select>
            </div>
          </div>
          <div class="find-activities-form-field col-sm-2 hard-sm-right">
            <button class="find-activities-form-btn btn-primary btn-block js-frontpage-filter" type="submit">View Activities</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>