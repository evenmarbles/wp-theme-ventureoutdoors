<?php
/**
 * Enqueue theme assets
 *
 * @package VentureOutdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;


class Assets {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
		/**
		 * The 'enqueue_block_assets' hook includes styles and scripts both in editor and frontend,
		 * except when is_admin() is used to include them conditionally
		 */
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_editor_assets' ] );
	}

	public function register_styles() {
		// Register styles.
		wp_register_style( 'main', VENTUREOUTDOORS_BUILD_CSS_URI . '/main.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/main.css' ), 'all' );

		// Enqueue Styles.
		wp_enqueue_style( 'main' );
	}

	public function register_scripts() {
		// Register scripts.
		wp_register_script( 'google-map', '//maps.googleapis.com/maps/api/js?key=AIzaSyC5-hjbF39wa7k4RnpJ_5h_kLr5yuAysrk', NULL, '1.0', true );
		wp_register_script( 'main', VENTUREOUTDOORS_BUILD_JS_URI . '/main.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/main.js' ), true );
  
		// Enqueue Scripts.
		wp_enqueue_script( 'google-map' );
		wp_enqueue_script( 'main' );

		wp_localize_script( 'main', 'siteConfig', [
			'templateUrl' => get_template_directory_uri(),
			'restUrl' => rest_url( 'ventureoutdoors/v1/' ),
			'ajax_nonce' => wp_create_nonce( 'wp_rest' ),
		]);
	}

	public function enqueue_editor_assets() {
		$asset_config_file = sprintf( '%s/assets.php', VENTUREOUTDOORS_BUILD_PATH );

		if ( !file_exists( $asset_config_file ) ) {
			return;
		}

		$asset_config = require_once $asset_config_file;

		if ( empty( $asset_config['js/editor.js'] ) ) {
			return;
		}

		$editor_asset = $asset_config['js/editor.js'];
		$js_dependencies = ( ! empty( $editor_asset['dependencies'] ) ) ? $editor_asset['dependencies'] : [];
		$version = ( ! empty( $editor_asset['version'] ) ) ? $editor_asset['version'] : filemtime( $asset_config_file );

		// Theme Gutenberg blocks JS.
		if ( is_admin() ) {
			wp_enqueue_script('cloudinary-media-library', 'https://media-library.cloudinary.com/global/all.js', [], null, true);

			// Register scripts
			wp_register_script( 'ventureoutdoors-blocks', VENTUREOUTDOORS_BUILD_JS_URI . '/blocks.js', $js_dependencies, $version, true );

			// Enqueue scripts
			wp_enqueue_script( 'ventureoutdoors-blocks' );

			wp_localize_script('ventureoutdoors-blocks', 'siteConfig', [
				'restUrl' => rest_url( 'ventureoutdoors/v1/' ),
				'ajax_nonce' => wp_create_nonce( 'wp_rest' ),
			] );

			include get_theme_file_path('/assets/src/php/gutenberg/blocks.php');
			foreach ($blocks as $name => $data) {
				if ($data) {
					wp_localize_script('ventureoutdoors-blocks', $name, $data);
				}
			}
		}

		// Theme Gutenberg blocks CSS.
		$css_dependencies = [
			'wp-block-library-theme',
			'wp-block-library',
		];

		wp_enqueue_style(
			'ventureoutdoors-blocks',
			VENTUREOUTDOORS_BUILD_CSS_URI . '/blocks.css',
			$css_dependencies,
			filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/blocks.css' ),
			'all'
		);
	}
}