
<?php
/**
 * Theme font loader.
 *
 * @package VentureOutdoors
 */
require_once VENTUREOUTDOORS_DIR_PATH . '/inc/helpers/wptt-webfont-loader.php';


if ( ! function_exists( 'ventureoutdoors_load_theme_fonts' ) ) {

  function ventureoutdoors_load_theme_fonts( $font_families=null ) {
    add_filter('wptt_get_local_fonts_base_path', function ($path) {
      return VENTUREOUTDOORS_DIR_PATH;
    });

    add_filter('wptt_get_local_fonts_base_url', function ($path) {
      return VENTUREOUTDOORS_DIR_URI;
    });

    if (!isset($font_families)) {
      $font_families = array(
        'Oswald:wght@500;600',
        'Manuale:wght@400;600;700',
        'Montserrat:wght@500;600;700'
      );
    }

    return add_query_arg(array(
      'family' => implode ('&family=', $font_families),
      'display' => 'swap',
    ), 'https://fonts.googleapis.com/css2');
  }
}