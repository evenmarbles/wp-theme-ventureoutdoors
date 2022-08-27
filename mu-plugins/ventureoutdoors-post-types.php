<?php 

function ventureoutdoors_post_types() {
  // Activity Type post type
  register_post_type('activity-type', array(
    'show_in_rest' => true,
    'supports' => array('page-attributes','title', 'editor'),
    'rewrite' => array('slug' => 'activity-types'),
    'has_archive' => true,
    'hierarchical' => true,
    'public' => true,
    'labels' => array(
      'name' => 'Activity Types',
      'add_new_item' => 'Add New Activity Type',
      'edit_item' => 'Edit Activity Type',
      'all_items' => 'All Activity Types',
      'singular_name' => 'Activity Type'
    ),
    'menu_icon' => 'dashicons-universal-access'
  ));

  // Activity post type
  register_post_type('activity', array(
    'show_in_rest' => true,
    'supports' => array('page-attributes','title', 'editor', 'excerpt'),
    'rewrite' => array('slug' => 'activities'),
    'has_archive' => true,
    'hierarchical' => true,
    'public' => true,
    'labels' => array(
      'name' => 'Activities',
      'add_new_item' => 'Add New Activity',
      'edit_item' => 'Edit Activity',
      'all_items' => 'All Activities',
      'singular_name' => 'Activity'
    ),
    'menu_icon' => 'dashicons-universal-access-alt',
    'taxonomies' => ['category']
  ));
}

add_action( 'init', 'ventureoutdoors_post_types' );


function ventureoutdoors_modify_archive_titles( $titles, $original_title, $prefix ) {
  if ( is_post_type_archive() ) {
    $title = sprintf( __('%1$s', 'ventureoutdoors'), $original_title );
  }
  return $title;
}

add_filter( 'get_the_archive_title', 'ventureoutdoors_modify_archive_titles', 10, 3 );