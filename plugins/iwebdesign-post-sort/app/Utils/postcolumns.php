<?php
/**
 * Register Post Columns
 *
 * @package iWebDesign
 */

namespace IWEBDESIGN\Plugin\Utils;

use IWEBDESIGN\Plugin\Utils;


class PostColumns {

	public function __construct() {

		// load class.
		$this->setup_hooks();
	}

	public function setup_hooks() {

		/**
		 * Filters.
		 */
    add_filter( 'manage_activity_posts_columns' , [ $this, 'add_post_order_column'] );

		/**
		 * Actions.
		 */
    add_action( 'manage_activity_posts_custom_column' , [ $this, 'post_order_value' ] , 10 , 2 );
	}

  /* Add custom post order column to post list */
  function add_post_order_column( $columns ) {
    return array_merge ( $columns,
      array( 'pos' => 'Position', ));
  }

  /* Display custom post order in the post list */
  function post_order_value( $column, $post_id ) {
    if ( $column === 'pos' ){
      $metaData = '<p>' . get_post_meta( $post_id, '_custom_post_order', true) . '</p>';
      echo $metaData;
    }
  }
}