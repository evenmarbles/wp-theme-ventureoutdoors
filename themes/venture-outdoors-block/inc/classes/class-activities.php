<?php
/**
 * Activity Query
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;
use \WP_Query;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;


class Activities {
	use Singleton;

	protected function __construct() {
    $this->data = [
      'types' => [],
      'lengths' => [],
      'difficulties' => []
    ];

    if ( !function_exists( 'acf_get_fields' ) ) {
      return;
    }

    $type_acf_fields = acf_get_fields('56'); // id: 56 => Custom Field Group: Activity Type(s)
    foreach ( $type_acf_fields as $field ) {
      switch ( $field[ 'label' ] ) {
        case 'Duration Summary':
          $this->length_choices = $field['choices'];
          break;
        case 'Difficulty Level':
          $this->difficulty_choices = $field['choices'];
          break;
        default:
          break;
      }
    }
    
    $this->init();
	}

  protected function init() {
    // Get activity types
    $type_query = new WP_Query( [
      'post_type' => 'activity-type',
      'order' => 'ASC'
    ] );

    while ( $type_query->have_posts() ) {
      $type_query->the_post();

      $type_id = get_the_ID();

      $this->data ['types' ][] = [
        'title' => get_the_title(),
        'slug' => get_post_field( 'post_name', $type_id ),
        'permalink' => get_the_permalink(),
        'thumbnail' => get_field( 'thumbnail' ),
        'id' => $type_id
      ];
    }

    $this->init_acf_field_data( $this->length_choices, 'lengths' );
    $this->init_acf_field_data( $this->difficulty_choices, 'difficulties' );
  }

  private function init_acf_field_data( $choices, $option ) {

    foreach ( $choices as $choice ) {
      $this->data[ $option ][] = [
        'title' => $choice,
        'slug' => str_replace( ' ', '-', strtolower( $choice ) ),
      ];
    }
  }

  private function build_query_for_acf_fields( $choices, $data, $key ) {

    $meta_query = ['relation' => 'OR' ];
  
    foreach ( $choices as $choice ) {
      $format_choice = str_replace( ' ', '-', strtolower( $choice ) );
  
      if ( !$data OR in_array( $format_choice, $data ) ) {
  
        // Build query for Activity Length
        $meta_query[] = [
          'key' => $key,
          'compare' => 'LIKE',
          'value' => $choice
        ];
      }
    }
  
    return $meta_query;
  }

	private function to_array( $value ) {
		return ! is_array( $value ) ? explode( ',', $value ) : $value;
	}

  public function clean_parameters() {
    /**
		 * Activity Type.
		 * If $_GET['slug'] has a value it means we are on the 'activities' page, else we are on an activity type page
		 */
		$slug = $_GET['slug'] ? $_GET['slug'] : 'activities';
		$types = $this->to_array( $slug === 'activities' ? $_GET['type'] : $slug );
		$lengths = $this->to_array( $_GET['length'] );
		$difficulties = $this->to_array( $_GET['difficulty'] );

    return [ $types, $lengths, $difficulties ];
  }

  public function build_query( $types, $lengths, $difficulties ) {
    $types = $types === null ? $types : array_map( function( $x ) { return strtolower( $x ); }, $types );
    $lengths = $lengths === null ? $lengths : array_map( function( $x ) { return strtolower( $x ); }, $lengths );
    $difficulties = $difficulties === null ? $difficulties : array_map( function( $x ) { return strtolower( $x ); }, $difficulties );
  
    $types_meta_query = [ 'relation' => 'OR' ];
  
    foreach ( $this->data[ 'types' ] as $value ) {
      if ( !$types OR in_array( $value[ 'slug' ], $types ) ) {
  
        // Build query for Activity Type
        $types_meta_query = [
          'key' => 'activity_type',
          'compare' => 'LIKE',
          'value' => '"' . $value['id'] . '"'
        ];
      }
    }
  
    wp_reset_postdata();
  
    $lengths_meta_query[] = $this->build_query_for_acf_fields( $this->length_choices, $lengths, 'duration_summary' );
    $difficulties_meta_query[] = $this->build_query_for_acf_fields( $this->difficulty_choices, $difficulties, 'difficulty_level' );

    return [ $types_meta_query, $lengths_meta_query, $difficulties_meta_query ];
  }

  /**
   *  Get Activities Meta Data
   */
  public function get_meta_data( $types, $lengths, $difficulties ) {
    [ $types_meta_query, $lengths_meta_query, $difficulties_meta_query ] = $this->build_query( $types, $lengths, $difficulties );

    $meta_data = [];

    foreach ( $this->data as $key => $data ) {
  
      $meta_data[ $key ] = $data;
  
      $meta_query = [ 'relation' => 'AND' ];
      switch ( $key ) {
        case 'types': {
          $meta_query[] = $lengths_meta_query;
          $meta_query[] = $difficulties_meta_query;
          $meta_key = 'activity_type';
          break;
        }
        case 'lengths': {
          $meta_query[] = $types_meta_query;
          $meta_query[] = $difficulties_meta_query;
          $meta_key = 'duration_summary';
          break;
        }
        case 'difficulties': {
          $meta_query[] = $types_meta_query;
          $meta_query[] = $lengths_meta_query;
          $meta_key = 'difficulty_level';
          break;
        }
        default:
          break;
      }
  
      $count = 0;
      foreach ( $this->data[ $key ] as $index => $value ) {
        // Reset query
        $query = $meta_query;
        $query[] = [ [ 'relation' => 'OR' ], [
          'key' => $meta_key,
          'compare' => 'LIKE',
          'value' => $value['id'] ? '"' . $value['id'] . '"' : $value['title'],
        ] ];
  
        $query = new WP_Query( [
          'post_type' => 'activity',
          'posts_per_page' => -1,
          'meta_query' => $query,
        ] );
  
        $meta_data[ $key ][ $index ][ 'count' ] = $query->found_posts;
        $count += $query->found_posts;

        wp_reset_postdata();
      }
    }
  
    $meta_data['count'] = $count;
    return $meta_data;
  }

  /**
   * Get Activity Query Arguments
   */
  public function get_query( $types, $lengths, $difficulties, $page_no = 1 ) {
    [ $types_meta_query, $lengths_meta_query, $difficulties_meta_query ] = $this->build_query( $types, $lengths, $difficulties );

    $meta_query = [ 'relation' => 'AND' ];
    $meta_query[] = $types_meta_query;
    $meta_query[] = $lengths_meta_query;
    $meta_query[] = $difficulties_meta_query;

    $args = [
      'post_type' => 'activity',
      'post_status' => 'publish',
      'posts_per_page' => 6, // Number of activities per page - default
      'paged' => $page_no,
      'meta_key' => '_custom_post_order',
      'orderby' => 'meta_value_num',
      'order' => 'ASC',
      'meta_query' => $meta_query,
    ];
    
    $query = new WP_Query( $args );
    
    wp_reset_postdata();

    return $query;
  }
}