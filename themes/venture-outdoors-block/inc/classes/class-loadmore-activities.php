<?php
/**
 * Loadmore Activities
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;
use \WP_Query;

class Loadmore_Activities {

	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Create a short code.
		 *
		 * Usage echo do_shortcode('[post_listings]');
		 */
		add_shortcode( 'post_listings', [ $this, 'post_script_load_more' ] );
	}

	public static function loadmore( $request ) {
		$initial_request = is_bool( $request ) ? $request : false;

		if ( ! $initial_request && !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
			wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
			wp_die( '0', 400 );
		}
	
		// Check if it's an ajax call.
		$is_ajax_request = ! empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) &&
											 strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) === 'xmlhttprequest';
		/**
		 * Page number.
		 * If get_query_var( 'paged' ) is 2 or more, its a number pagination query.
		 * If $_GET['page'] has a value which means its a loadmore request, which will take precedence.
		 */
		$page_no = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
		$page_no = ! empty( $_GET['page'] ) ? filter_var( $_GET['page'], FILTER_VALIDATE_INT ) + 1 : $page_no;
	
		$activities = Activities::get_instance();
		$params = $activities->clean_parameters();
		$params[] = $page_no;
		$query = $activities->get_query( ...$params );
	
		$results = '';
		if ( $query->have_posts() ):
			ob_start();

			// Loop Posts.
			while ( $query->have_posts() ): $query->the_post();
				get_template_part( 'template_parts/components/activity-card' );
			endwhile;
	
			// Pagination for Google.
			if ( ! $is_ajax_request ) :
				$total_pages = $query->max_num_pages;
				get_template_part( 'template_parts/common/pagination', null, [
					'total_pages'  => $total_pages,
					'current_page' => $page_no,
				] );
			endif;
		
			$results = ob_get_clean();
		else:
			// Return response as zero, when no post found.
			wp_die( '0' );
		endif;
	
		return $results;
	}

	/**
	 * Initial posts display
	 */
	public function post_script_load_more() {
    
		// Initial Post Load.
		?>
		<div  class="load-more-content-wrap">
			<div id="load-more-content" class="row grid eqhwrap disblock-xxs facetwp-template">
				<?php

				// If user is not in editor and on page one, show the load more.
				?>
			</div>
			<div id="load-more" data-page="1" class="facetwp-facet facetwp-facet-pager_pager facetwp-type-pager">
				<button class="facetwp-load-more btn-primary btn-block no-arrow" data-loading="Loading...">Show More</button>
			</div>
			</div>
		<?php
	}
}
