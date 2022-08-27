<?php
/**
 * Maps
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;

class Maps {
	use Singleton;

	protected function __construct() {

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_filter( 'acf/fields/google_map/api', [ $this, 'acf_google_map_api' ] );
	}

	/**
	 * Retrieve Google Map API key
	 *
	 * @param array $categories Block categories.
	 *
	 * @return array
	 */
	public function acf_google_map_api( $api ) {

    $api['key'] = 'AIzaSyC5-hjbF39wa7k4RnpJ_5h_kLr5yuAysrk';
    return $api;
	}

}