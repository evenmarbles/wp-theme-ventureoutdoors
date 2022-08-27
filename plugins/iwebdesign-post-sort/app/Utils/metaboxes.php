<?php
/**
 * Register Meta Boxes
 *
 * @package iWebDesign
 */

namespace IWEBDESIGN\Plugin\Utils;

use IWEBDESIGN\Plugin\Utils;


class MetaBoxes {

	public function __construct() {

		// load class.
		$this->setup_hooks();
	}

	public function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'add_meta_boxes', [ $this, 'add_custom_meta_box' ] );
		add_action( 'save_post', [ $this, 'save_post_meta_data' ] );
	}

	public function add_custom_meta_box() {
		add_meta_box( 
			'custom_post_sort_box', 
			__( "Position in List of Post", 'iwebdesign' ), 
			[ $this, 'custom_post_order' ], 
			[ 'post', 'activity' ],
			'side'
		);
	}

	public function custom_post_order( $post ) {
		wp_nonce_field( basename( __FILE__ ), 'custom_post_order_nonce' );
		$current_pos = get_post_meta( $post->ID, '_custom_post_order', true); ?>
		<p>Enter the position at which you would like the post to appear. For exampe, post "1" will appear first, post "2" second, and so forth.</p>
		<p><input type="number" name="pos" value="<?php echo $current_pos; ?>" /></p>
		<?php
	}

	public function save_post_meta_data( $post_id ) {
    if ( !isset( $_POST['custom_post_order_nonce'] ) || !wp_verify_nonce( $_POST['custom_post_order_nonce'], basename( __FILE__ ) ) ) {
      return;
    } 
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ){
      return;
    }
    if ( !current_user_can( 'edit_post', $post_id ) ){
      return;
    }
    if ( isset( $_REQUEST['pos'] ) ) {
      update_post_meta( $post_id, '_custom_post_order', sanitize_text_field( $_POST['pos'] ) );
    }
  }
}