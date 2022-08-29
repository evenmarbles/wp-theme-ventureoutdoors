<?php
/**
 * Activities Summary Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;
use \WP_Query;

function related_activities_results ( $data ) {

  if ( !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
    wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
    wp_die( '0', 400 );
  }

  $id = $data['id'];

  $related_activities = array_map( function($x) { return $x->ID; }, get_field( 'related_activities', $id ) );

  $results = [
    'posts' => []
  ];

  if ( $related_activities ) {
    $args = array(
      'post_type' => 'activity',
      'post__in' => $related_activities,
    );

    $custom_query = new WP_Query( $args );

    while ( $custom_query->have_posts() ) {
      $custom_query->the_post();
      $results['posts'][] = [
        'permalink' => get_the_permalink(),
        'title' => get_the_title(),
        'guides_choice' => get_field('guides_choice'),
        'thumbnail' => get_field('thumbnail'),
        'duration' => get_field('duration'),
        'cost' => get_field('cost'),
        'locaton' => get_field('location'),
        'area' => get_field('area'),
        'activity_type' => array_map(function ($t) {return get_the_title($t->ID);}, get_field('activity_type'))[0],
        'difficulty' => str_replace(' ', '-', strtolower(get_field('difficulty_level'))),
        'solitude' => str_replace(' ', '-', strtolower(get_field('solitude_level'))),
        'excerpt' => wp_strip_all_tags(get_the_excerpt())
      ];
    }
    wp_reset_postdata();
  } 

  return $results;
}

?>