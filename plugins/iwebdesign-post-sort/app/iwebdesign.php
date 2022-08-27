<?php

namespace IWEBDESIGN\Plugin {
	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	/**
	 * Main IWEBDESIGN class.
	 *
	 * @since 4.0.0
	 */
	final class IWEBDESIGN {
		/**
		 * Holds the instance of the plugin currently in use.
		 *
		 * @since 4.0.0
		 *
		 * @var IWEBDESIGN\Plugin\IWEBDESIGN
		 */
		private static $instance;

		public static function instance() {
			if ( null === self::$instance || ! self::$instance instanceof self ) {
				self::$instance = new self();

				self::$instance->init();
				self::$instance->setup_hooks();
			}

			return self::$instance;
		}
		
		/**
		 * Main IWEBDESIGN Instance.
		 *
		 * Insures that only one instance of IWEBDESIGN exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @since 4.0.0
		 *
		 * @return IWEBDESIGN The iwebdesign instance.
		 */
		private function init() {
			$this->load();
		}

		/**
		 * Load our classes.
		 *
		 * @since 4.0.0
		 *
		 * @return void
		 */
		private function load() {
			require_once(  dirname( __FILE__ ) . '/Utils/assets.php' );
			require_once(  dirname( __FILE__ ) . '/Utils/metaboxes.php' );
			require_once(  dirname( __FILE__ ) . '/Utils/postcolumns.php' );
			require_once(  dirname( __FILE__ ) . '/Utils/quickedit.php' );
			$this->assets = new Utils\Assets();
			$this->metaboxes = new Utils\MetaBoxes();
			$this->postcolums = new Utils\PostColumns();
			$this->quickedit = new Utils\QuickEdit();
		}
		
		public function setup_hooks() {
			add_action( 'pre_get_posts' , [ $this, 'custom_post_order_sort' ] );
		}

		/* Sort posts on the blog posts page according to the custom sort order */
		public function custom_post_order_sort( $query ) {
			// if ( $query->is_main_query() /*&& $query->is_post_type( 'activity-type' )*/ ) {
			// 	echo '<pre>';
			// 	print_r($query);
			// 	echo'</pre>';
			// 	$query->set( 'post_type', 'activity' );
			// 	$query->set( 'orderby', 'meta_value' );
			// 	// $query->set( 'meta_key', '_custom_post_order' );
			// 	$query->set( 'meta_query', array( array( 'key' => '_custom_post_order' ) ) );
			// 	// $query->set( 'meta_compare', '>' );
			// 	$query->set( 'order' , 'ASC' );
			// }
		}
  }
}



namespace {
	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	/**
	 * The function which returns the one IWEBDESIGN instance.
	 *
	 * @since 4.0.0
	 *
	 * @return IWEBDESIGN\Plugin\IWEBDESIGN The instance.
	 */
	function iwebdesign() {
		return IWEBDESIGN\Plugin\IWEBDESIGN::instance();
	}
}