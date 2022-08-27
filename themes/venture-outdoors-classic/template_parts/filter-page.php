<?php $results = ventureoutdoors_filter_results([]); ?>

<div class="find-activities-form">
  <div class="container">
    <div class="row">
      <div class="col-xs-10 center-block">
        <div class="row valign-middle disblock-xs-down flush-sm">
          <div class="find-activities-form-field col-sm-1 hard-sm">
            <h4 class="flush">Find Activities</h4>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_type facetwp-type-dropdown" data-name="frontpage_activity_type" data-type="dropdown">
              <select id="activity_type" class="facetwp_dropdown">
              <option value="">Activity Type</option>
              <?php foreach($results['type'] as $item) { ?>
                <option value="<?php echo $item['slug']; ?>"><?php echo $item['title'] . ' (' . $item['count'] . ')'?></option>
              <?php } ?>
            </select>
            </div>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_activity_length facetwp-type-dropdown" data-name="frontpage_activity_length" data-type="dropdown">
              <select id="activity_length" class="facetwp_dropdown">
                <option value="">Activity Length</option>
                <?php foreach($results['length'] as $item) { ?>
                  <option value="<?php echo $item['slug']; ?>"><?php echo $item['title'] . ' (' . $item['count'] . ')'?></option>
                <?php } ?>
              </select>
            </div>
          </div>
          <div class="find-activities-form-field col-sm-3 hard-sm-right">
            <div class="facetwp-facet facetwp-facet-frontpage_difficulty_level facetwp-type-dropdown" data-name="frontpage_difficulty" data-type="dropdown">
              <select id="difficulty" class="facetwp_dropdown">
                <option value="">Difficulty</option>
                <?php foreach($results['difficulty'] as $item) { 
                  $title = substr($item['title'], 0, strlen($item['title'])-1) . ' ' . substr($item['title'], -1);
                ?>
                  <option value="<?php echo $item['slug']; ?>"><?php echo $title . ' (' . $item['count'] . ')'?></option>
                <?php } ?>
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