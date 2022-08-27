<?php
/**
 * Register Rest APIs
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;

class Rest_APIs {
	use Singleton;

	protected function __construct() {

		require_once( VENTUREOUTDOORS_DIR_PATH . '/inc/rest-apis/acf.php' );
		require_once( VENTUREOUTDOORS_DIR_PATH . '/inc/rest-apis/filter-options.php' );
		require_once( VENTUREOUTDOORS_DIR_PATH . '/inc/rest-apis/filter-activities.php' );
		require_once( VENTUREOUTDOORS_DIR_PATH . '/inc/rest-apis/highlights.php' );
		require_once( VENTUREOUTDOORS_DIR_PATH . '/inc/rest-apis/related-activities.php' );

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'rest_api_init', [ $this, 'register_rest_routes'] );

	}

	/**
	 * Register Rest Routes
	 */
	public function register_rest_routes() {

    register_rest_route('ventureoutdoors/v1', 'acf', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\acf_results'
    ) );

    register_rest_route('ventureoutdoors/v1', 'filter', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\filter_options_results'
    ) );

    register_rest_route('ventureoutdoors/v1', 'activities', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\filter_activities_results'
    ) );
	
    register_rest_route('ventureoutdoors/v1', 'highlights', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\highlights_callback'
    ) );
	
    register_rest_route('ventureoutdoors/v1', 'loadmore', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\Loadmore_Activities::loadmore'
    ) );

    register_rest_route('ventureoutdoors/v1', 'related', array(
      'method' => \WP_REST_SERVER::READABLE,
      'callback' => 'VENTUREOUTDOORS_THEME\Inc\related_activities_results'
    ) );

	}
}