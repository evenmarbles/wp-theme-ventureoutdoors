<?php
/**
 * Activities Summary Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;
use \WP_Query;

function filter_activities_results( $request ) {

  if ( !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
    wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
    wp_die( '0', 400 );
  }

  // Check if it's an ajax call.
  $is_ajax_request = ! empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) &&
                     strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) === 'xmlhttprequest';

  $activities = Activities::get_instance();
  $query = $activities->get_query( ...$activities->clean_parameters() );
	
  $results = '';
  if ( $query->have_posts() ):
    ob_start(); ?>

    <div id="load-more-content" class="row grid eqhwrap disblock-xxs facetwp-template">
    <?php

    // Loop Posts.
    while ( $query->have_posts() ): $query->the_post();
      get_template_part( 'template_parts/components/activity-card' );
    endwhile;

    // Pagination for Google.
    $total_pages = $query->max_num_pages;
    get_template_part( 'template_parts/common/pagination', null, [
      'total_pages'  => $total_pages,
      'current_page' => 1,
    ] );
    ?>

    </div>
    <div id="load-more" data-page="1" class="facetwp-facet facetwp-facet-pager_pager facetwp-type-pager">
      <button class="facetwp-load-more btn-primary btn-block no-arrow" data-loading="Loading...">Show More</button>
    </div>

    <?php
  
    $results = ob_get_clean();
  else:
    // Return response as zero, when no post found.
    wp_die( '0' );
  endif;

  return [
    'innerHTML' => $results,
    'postCount' => $query->found_posts
  ];
}