<?php
/**
 * Enqueue theme assets
 *
 * @package VentureOutdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;

require_once( dirname( __DIR__, 2 ) . '/assets/vendor/autoload.php' );
require_once( dirname( __DIR__, 1 ) . '/helpers/decrypt.php' );


class Assets {
	use Singleton;

	protected function __construct() {

		try {
			if ( strstr( $_SERVER[ 'SERVER_NAME' ], 'venture-outdoors-classic.local' ) ) {
				$dir = dirname( __DIR__, 2 );
			} else {
				$dir = dirname( $_SERVER['DOCUMENT_ROOT'], 1 ) . '/private_html';
			}
			$dotenv = \Dotenv\Dotenv::createImmutable( $dir );
			$dotenv->load();
	
			$this->google_api_key = isset( $_ENV['GOOGLEMAPS'] ) ? decrypt( $_ENV['GOOGLEMAPS'] ) : '';
				
		} catch ( Exception $e ) {
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
		// add_action( 'wp_head', [ $this, 'critical_css'] );
		add_action( 'wp_head', [ $this, 'preload_lcp' ] );

		add_filter( 'clean_url', [ $this, 'defer_parsing_of_js' ], 11, 1 );
		add_filter( 'style_loader_tag', [ $this, 'add_rel_preload'], 10, 4 );
		// add_filter( 'style_loader_tag', [ $this, 'defer_parsing_non_critical_css'], 10, 4 );

		/**
		 * The 'enqueue_block_assets' hook includes styles and scripts both in editor and frontend,
		 * except when is_admin() is used to include them conditionally
		 */
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_editor_assets' ] );
	}

	public function register_styles() {
		// Register styles.
		wp_register_style( 'slick', VENTUREOUTDOORS_BUILD_LIB_URI . '/css/slick.css', [], false, 'all' );
		wp_register_style( 'main', VENTUREOUTDOORS_BUILD_CSS_URI . '/main.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/main.css' ), 'all' );
		wp_register_style( 'page', VENTUREOUTDOORS_BUILD_CSS_URI . '/page.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/page.css' ), 'all' );
		wp_register_style( 'page-contact', VENTUREOUTDOORS_BUILD_CSS_URI . '/page-contact.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/page-contact.css' ), 'all' );
		wp_register_style( 'single-activity-type', VENTUREOUTDOORS_BUILD_CSS_URI . '/single-activity-type.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/single-activity-type.css' ), 'all' );
		wp_register_style( 'single-activity', VENTUREOUTDOORS_BUILD_CSS_URI . '/single-activity.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/single-activity.css' ), 'all' );
		wp_register_style( 'archive-activity', VENTUREOUTDOORS_BUILD_CSS_URI . '/archive-activity.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/archive-activity.css' ), 'all' );
		wp_register_style( 'frontpage', VENTUREOUTDOORS_BUILD_CSS_URI . '/frontpage.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/frontpage.css' ), 'all' );
		wp_register_style( '404', VENTUREOUTDOORS_BUILD_CSS_URI . '/404.css', [], filemtime( VENTUREOUTDOORS_BUILD_CSS_PATH . '/404.css' ), 'all' );

		// Enqueue Styles.
		wp_enqueue_style( 'slick' );
		wp_enqueue_style( 'main' );

		if ( is_singular( 'activity-type' ) ) {
			wp_enqueue_style( 'single-activity-type' );
		}

		if ( is_singular( 'activity' ) ) {
			wp_enqueue_style( 'single-activity' );
		}

		if ( is_archive( 'activity' ) ) {
			wp_enqueue_style( 'archive-activity' );
		}

		if ( is_page() ) {
			wp_enqueue_style( 'page' );
		}

		if ( is_page( 'contact' ) ) {
			wp_enqueue_style( 'page-contact' );
		}

		if ( is_front_page() ) {
			wp_enqueue_style( 'frontpage' );
		}

		if ( is_404() ) {
			wp_enqueue_style( '404' );
		}
	}

	public function register_scripts() {
		// Register scripts.
		wp_register_script( 'main', VENTUREOUTDOORS_BUILD_JS_URI . '/main.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/main.js' ), true );
		wp_register_script( 'page', VENTUREOUTDOORS_BUILD_JS_URI . '/page.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/page.js' ), true );
		wp_register_script( 'page-contact', VENTUREOUTDOORS_BUILD_JS_URI . '/page-contact.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/page-contact.js' ), true );
		wp_register_script( 'single', VENTUREOUTDOORS_BUILD_JS_URI . '/single.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/single.js' ), true );
		wp_register_script( 'single-activity-type', VENTUREOUTDOORS_BUILD_JS_URI . '/single-activity-type.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/single-activity-type.js' ), true );
		wp_register_script( 'single-activity', VENTUREOUTDOORS_BUILD_JS_URI . '/single-activity.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/single-activity.js' ), true );
		wp_register_script( 'archive-activity', VENTUREOUTDOORS_BUILD_JS_URI . '/archive-activity.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/archive-activity.js' ), true );
		wp_register_script( 'frontpage', VENTUREOUTDOORS_BUILD_JS_URI . '/frontpage.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/frontpage.js' ), true );
		wp_register_script( '404', VENTUREOUTDOORS_BUILD_JS_URI . '/404.js', [ 'jquery' ], filemtime( VENTUREOUTDOORS_BUILD_JS_PATH . '/404.js' ), true );
		wp_register_script( 'google-map', "//maps.googleapis.com/maps/api/js?key={$this->google_api_key}", NULL, false, true );
  
		// Enqueue Scripts.
		wp_enqueue_script( 'main' );

		if ( is_singular( 'activity-type' ) ) {
			wp_enqueue_script( 'single-activity-type' );
		}

		if ( is_singular( 'activity' ) ) {
			wp_enqueue_script( 'google-map' );
			wp_enqueue_script( 'single-activity' );
		}

		if ( is_archive( 'activity' ) ) {
			wp_enqueue_script( 'archive-activity' );
		}

		if ( is_page() ) {
			wp_enqueue_script( 'page' );
		}

		if ( is_page( 'contact' ) ) {
			wp_enqueue_script( 'page-contact' );
		}

		if ( is_single() ) {
			wp_enqueue_script( 'single' );
		}

		if ( is_front_page() ) {
			wp_enqueue_script( 'frontpage' );
		}

		if ( is_404() ) {
			wp_enqueue_script( '404' );
		}

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

	public function preload_lcp() {
		$src = 'https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_361/background-images/bg-guide-blue';
		
		/** Output the link HTML tag */
    printf( '<link rel="preload" fetchpriority="high" as="image" href="%s"/>', esc_url( $src ) );
	}

	public function critical_css() {
		// Note: https://kingdesignllc.com/blog/defining-a-critical-css-workflow-for-wordpress/

		if ( is_admin() ) {
			return;
		}
		
		$styles = '';
		$template = '';

		if ( is_singular( 'activity-type' ) ) {
			$template = 'single-activity-type';
		}

		if ( is_singular( 'activity' ) ) {
			$template = 'single-activity';
		}

		if ( is_archive( 'activity' ) ) {
			$template = 'achive-activity';
		}

		if ( is_page() ) {
			$template = 'page';
		}

		if ( is_page( 'contact' ) ) {
			$template = 'page-contact';
		}

		// if ( is_single() ) {
		// 	wp_enqueue_script( 'single' );
		// }

		if ( is_front_page() ) {
			$template = 'frontpage';
		}

		if ( !$template ) {
			error_log( 'critical_css: Template does not exist.' );
			return;
		}

		$styles .= '<style id="critical-css">' . file_get_contents( VENTUREOUTDOORS_BUILD_CSS_URI . '/' . $template . '-critical.css', FILE_USE_INCLUDE_PATH ) .'</style>';
		echo( $styles );
	}

	public function defer_parsing_of_js( $url ) {
		if ( is_admin() ) {
			return $url;
		}

		if ( false === strpos( $url, '.js' ) ) return $url;
		if ( strpos( $url, 'jquery.js' ) ) return $url;
		return "$url' defer ";
	}

	public function add_rel_preload( $html, $handle, $href, $media ) {
		if ( is_admin() ) {
			return $html;
		}

		$html = <<<EOT
<link rel='preload' as='style' onload="this.onload=null;this.rel='stylesheet'" id='$handle' href='$href' type='text/css' media='all' /><noscript><link rel='stylesheet' href='$href'></noscript>
EOT;
    return $html;
	}

	public function defer_parsing_non_critical_css( $html, $handle, $href, $media ) {
		if ( is_admin() ) {
			return $html;
		}

		$html = <<<EOT
<link rel='stylesheet' onload="this.media='all'" id='$handle' href='$href' media='print' /><noscript><link rel='stylesheet' href='$href'></noscript>
EOT;
    return $html;
	}

}