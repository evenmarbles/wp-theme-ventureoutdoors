<?php
/**
 * Enqueue Assests
 *
 * @package iWebDesign
 */

namespace IWEBDESIGN\Plugin\Utils;

use IWEBDESIGN\Plugin\Utils;


class Assets {

	public function __construct() {

		// load class.
		$this->setup_hooks();
	}

	public function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_assets' ] );
	}

	public function enqueue_assets( $hook ) {
    wp_enqueue_script( 'custom-quickedit-box', IWEBDESIGN_URI . '/assets/js/custom_quickedit_box.js', array( 'jquery', 'inline-edit-post' ), 1.0 );
	}
}