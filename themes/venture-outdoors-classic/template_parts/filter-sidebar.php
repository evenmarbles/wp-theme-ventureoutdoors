<?php
  $results = ventureoutdoors_filter_results([]);
  $pathname = explode('/' , $_SERVER['REQUEST_URI']);
  $slug = $pathname[count($pathname)-2];
?>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3 class="h4 activity-list-title">All Activities
        <small>
          <span class="montserrattlt">
            (<span class="js-number-results"><?php echo $results['count']; ?></span> results)
          </span>
        </small>
      </h3>
      <a class="btn-activity-filter btn-secondary btn-small no-arrow hidden-md-up js-mobile-activity-filter" href="#sidebar-filter">Filter</a>
    </div>
  </div>
  <div class="row" id="main-content">
    <div class="col-md-4 sidebar-filter-wrap normal-hidden-sm-down main" id="sidebar">
      <div class="sidebar-filter" id="sidebar-filter">
        <h4 class="h5 flush-bottom">Filter Activities</h4>
        <ul class="list-style-none hard flush">
          <?php if ($slug === 'activities') { ?>
          <!-- Activity Type -->
          <li>
            <h5 class="h6 icon-activity js-accordion active" data-target="#activity-type-container">Activity Type</h6>
            <div id="activity-type-container" class="accordion-active">
              <div class="facetwp-facet facetwp-facet-activity facetwp-type-checkboxes" data-name="activity-type" data-type="checkboxes">
                <?php foreach ($results['type'] as $item) { ?>
                <label class="facetwp-checkbox" data-value="<?php echo $item['slug']; ?>">
                  <input type="checkbox"></input>
                  <span class="facetwp-display-value"><?php echo $item['title']; ?></span>
                  <span class="facetwp-counter">(<?php echo $item['count']; ?>)</span>
                  <!-- <span class="facetwp-expand">[+]</span> -->
                </label>
                <?php } ?>
              </div>
            </div>
          </li>
          <?php  } ?>
          <!-- Activity Length -->
          <li>
            <h5 class="h6 icon-clock js-accordion<?php if ($slug !== 'activities') { ?> active <?php } ?>" data-target="#activity-length-container">Activity Length</h6>
            <div id="activity-length-container"<?php if ($slug === 'activities') { ?> style="display: none" <?php } ?>>
              <div class="facetwp-facet facetwp-facet-activity facetwp-type-checkboxes" data-name="activity-length" data-type="checkboxes">
                <?php foreach ($results['length'] as $item) { ?>
                <label class="facetwp-checkbox" data-value="<?php echo $item['slug']; ?>">
                  <input type="checkbox"></input>
                  <span class="facetwp-display-value"><?php echo $item['title']; ?></span>
                  <span class="facetwp-counter">(<?php echo $item['count']; ?>)</span>
                  <!-- <span class="facetwp-expand">[+]</span> -->
                </label>
                <?php } ?>
              </div>
            </div>
          </li>
          <!-- Difficulty -->
          <li>
            <h5 class="h6 icon-heartrate js-accordion" data-target="#difficulty-container">Difficulty</h6>
            <div id="difficulty-container" style="display: none">
              <div class="facetwp-facet facetwp-facet-activity facetwp-type-checkboxes" data-name="activity-difficulty" data-type="checkboxes">
                <?php foreach ($results['difficulty'] as $item) { ?>
                <label class="facetwp-checkbox" data-value="<?php echo $item['slug']; ?>">
                  <input type="checkbox"></input>
                  <span class="facetwp-display-value">
                    <img width="75" height="20" class="sngl-activity-similar-difficulty__img lazyload" 
                      sizes="(max-width: 75px) 100vw, 75px"
                      data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php echo $item['slug']; ?>.png" 
                      data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/<?php echo $item['slug']; ?> 75w, https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/<?php echo $item['slug']; ?> 49w"
                      alt="" loading="lazy" />
                  </span>
                  <span class="facetwp-counter">(<?php echo $item['count']; ?>)</span>
                  <!-- <span class="facetwp-expand">[+]</span> -->
                </label>
                <?php } ?>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-8 sngl-activity-sec-cont">
      <div class="row grid eqhwrap disblock-xxs facetwp-template"></div>
      <div class="facetwp-facet facetwp-facet-pager_pager facetwp-type-pager" data-name="pager_pager" data-type="pager">
        <button class="facetwp-load-more btn-primary btn-block no-arrow" data-loading="Loading...">Show More</button>
      </div>
    </div>
  </div>
</div>
