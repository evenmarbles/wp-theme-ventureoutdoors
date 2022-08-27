<?php

get_header(); ?>

  
<main id="page-body" class="page-body">
  <?php 
    pageBanner(array(
      'title' => get_the_archive_title(),
    ));
  ?>

  <div class="breadcrumbs bgc-senary text-center hidden-sm-down">
    <div class="breadcrumbs-cont container">
      <ul class="list-style-none flush hard">
        <li>
          <a href="<?php echo site_url() ?>" class="breadcrumbs-link">Home</a>
          <i aria-hidden="true" class="icon-east"></i>
        </li>
        <li><span aria-current="page" class="breadcrumb-last"><?php the_archive_title(); ?></span></li>
      </ul>
    </div>
  </div>

  <div class="page-content">

    Welcome to archives.php

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
