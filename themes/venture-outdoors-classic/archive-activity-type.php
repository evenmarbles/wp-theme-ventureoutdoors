<?php

  get_header(); ?>

    
  <main id="page-body" class="page-body">
    <?php 
      pageBanner(array(
        'title' => 'Activity Types',
      ));
    ?>
    <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
      <div class="breadcrumbs-cont container">
        <ul class="list-style-none flush hard">
          <li>
            <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
            <i aria-hidden="true" class="icon-east"></i>
          </li>
          <li><span aria-current="page" class="breadcrumb-last">Activity Types</span></li>
        </ul>
      </div>
    </div>

    <div class="page-content">

      Welcome to archive-activity-type.php
      <?php 
      while (have_posts()) {
        the_post(); ?>

        

      <?php }
      echo paginate_links();
      ?>

    </div>
  </main>


<?php
  get_footer();

?>
