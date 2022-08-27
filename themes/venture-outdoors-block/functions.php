<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package VentureOutdoors
 * @since 1.0.0
*/

if ( ! defined( 'VENTUREOUTDOORS_DIR_PATH' ) ) {
	define( 'VENTUREOUTDOORS_DIR_PATH', untrailingslashit( get_template_directory() ) );
}

if ( ! defined( 'VENTUREOUTDOORS_DIR_URI' ) ) {
	define( 'VENTUREOUTDOORS_DIR_URI', untrailingslashit( get_template_directory_uri() ) );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_URI' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_PATH' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_JS_URI' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_JS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/js' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_JS_PATH' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_JS_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/js' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_IMG_URI' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_IMG_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/src/images' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_CSS_URI' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_CSS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/css' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_CSS_PATH' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_CSS_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/css' );
}

if ( ! defined( 'VENTUREOUTDOORS_BUILD_LIB_URI' ) ) {
	define( 'VENTUREOUTDOORS_BUILD_LIB_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/library' );
}


require_once get_theme_file_path('/inc/helpers/autoloader.php');
require_once get_theme_file_path('/inc/vendor/simplehtmldom/simple_html_dom.php');



function ventureoutdoors_get_theme_instance() {
  \VENTUREOUTDOORS_THEME\Inc\VENTUREOUTDOORS_THEME::get_instance();
}

ventureoutdoors_get_theme_instance();
