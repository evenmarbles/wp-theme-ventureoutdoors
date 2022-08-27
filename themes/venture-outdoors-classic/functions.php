<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package VentureOutdoors
 * @since 1.0.0
*/

require get_theme_file_path('/inc/filter-route.php');

function pageBanner($args = NULL) {
  
  if (!$args['title']) {
    $args['title'] = get_the_title();
  }
  
  if (!$args['image_slug']) {
    if (get_field('page_banner_background_image_slug') AND !is_archive() AND !is_home()) {
      $args['image_slug'] = get_field('page_banner_background_image_slug');
    }
    else {
      $args['image_slug'] = 'hero-images/about-us';
    }
  }

  if (!$args['image_alt_tag']) {
    $args['image_alt_tag'] = the_field('page_banner_image_alt_tag');
  }
?>
  <header class="masthead text-center">
    <div class="masthead-cont valign-middle">
      <div class="masthead-incont valign-middle-item">
        <h1 class="masthead-title flush-ends"><?php echo $args['title']; ?></h1>
      </div>
    </div>
    <div class="cloudinary-hero-img w-embed">
      <img class="masthead-img img-responsive lazyload" sizes="100vw"
        src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/<?php echo $args['image_slug']; ?>"
        srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_500/<?php echo $args['image_slug']; ?> 500w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_800/<?php echo $args['image_slug']; ?> 800w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1080/<?php echo $args['image_slug']; ?> 1080w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5,c_scale,w_1600/<?php echo $args['image_slug']; ?> 1600w"
        data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/<?php echo $args['image_slug']; ?>"
        data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_500/<?php echo $args['image_slug']; ?> 500w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_800/<?php echo $args['image_slug']; ?> 800w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1080/<?php echo $args['image_slug']; ?> 1080w,
        https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_1600/<?php echo $args['image_slug']; ?> 1600w"
        alt="<?php echo $args['image_alt_tag']; ?>">
    </div>
  </header>
<?php }


add_action('wp_ajax_load_more', 'ventureoutdoors_load_more');
add_action('wp_ajax_nopriv_load_more', 'ventureoutdoors_load_more');

function ventureoutdoors_load_more() {
  $output = ventureoutdoors_filter_results($_POST);

  echo json_encode([
    'max' => $output['max'],
    'html' => $output['html'],
  ]);
  exit;
}

function loadThemeFonts() {
  add_filter('wptt_get_local_fonts_base_path', function ($path) {
    return get_template_directory();
  });

  add_filter('wptt_get_local_fonts_base_url', function ($path) {
    return get_template_directory_uri();
  });

  $font_families = array(
    'Oswald:wght@500;600',
    'Manuale:wght@400;600;700',
    'Montserrat:wght@500;600;700'
  );

  return add_query_arg(array(
    'family' => implode ('&family=', $font_families),
    'display' => 'swap',
  ), 'https://fonts.googleapis.com/css2');
}


// if (!function_exists('ventureoutdoors_setup')) :
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * Note that this function is hooked into the after_setup_theme hook, which runs
   * before the init hook. The init hook is too late for some features, such as indicating
   * support for post thumbnails.
   */
  function ventureoutdoors_setup() {
    /**
     * Add default posts and comments RSS feed links to <head>.
     */
    //add_theme_support('automatic-feed-links');

    /**
     * Enable support for post thumbnails and featured images.
     */
    //add_theme_support('post-thumbnails');

    //add_theme_support('editor-styles');

    //add_theme_support('wp-block-styles');
    
    add_theme_support('title-tag');

    add_image_size('bannerImage', 2500, 1875, true);

    add_theme_support('editor-styles');

    // Load the webfonts
    require_once get_theme_file_path('inc/wptt-webfont-loader.php');
    add_editor_style(wptt_get_webfont_url(esc_url_raw(loadThemeFonts())));

    add_editor_style(array('build/style-index.css', 'build/index.css'));
  }
// endif;

add_action('after_setup_theme', 'ventureoutdoors_setup');



function ventureoutdoors_title_separator($sep) {
  return "|";
}
add_filter('document_title_separator', 'ventureoutdoors_title_separator', 10, 1);


/**
 * Enqueue styles.
 */
function ventureoutdoors_enqueue_assets() {
	// Load the webfonts
	require_once get_theme_file_path('inc/wptt-webfont-loader.php');
  wp_enqueue_style('ventureoutdoors-theme-fonts', wptt_get_webfont_url(esc_url_raw(loadThemeFonts())), array(), '1.0');

	// Load the theme stylesheet.
	// wp_enqueue_style('ventureoutdoors', get_stylesheet_directory_uri() . '/style.css', array(), '1.0');
  wp_enqueue_style('ventureoutdoors-style', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('ventureoutdoors-extra-style', get_theme_file_uri('/build/index.css'));

  // Load scripts
  wp_enqueue_script('main-ventureoutdoors', get_theme_file_uri('/build/index.js'), array('jquery'),'1.0', true);
  wp_localize_script('main-ventureoutdoors', 'ventureoutdoorsData', array(
    'template_uri' => get_stylesheet_directory_uri(),
    'root_url' => get_site_url())
  );
}
add_action('wp_enqueue_scripts', 'ventureoutdoors_enqueue_assets');
