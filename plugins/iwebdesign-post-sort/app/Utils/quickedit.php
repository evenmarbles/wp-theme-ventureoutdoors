<?php
/**
 * Register Quick Edit
 *
 * @package iWebDesign
 */

namespace IWEBDESIGN\Plugin\Utils;

use IWEBDESIGN\Plugin\Utils;


class QuickEdit {

	public function __construct() {

		// load class.
		$this->setup_hooks();
	}

	public function setup_hooks() {

		/**
		 * Actions.
		 */
    add_action( 'quick_edit_custom_box' , [ $this, 'edit_box' ] , 10 , 3 );
    add_action( 'save_post', [ $this, 'update_custom_quickedit_box' ] );
	}

  /* Add quick edit box for sort order */
  public function edit_box( $column_name, $post_type, $postId ) {
    switch ( $post_type ) {
      case 'activity': 
        if ( $column_name === 'pos' ) {
          wp_nonce_field( basename( __FILE__ ), 'custom_post_order_nonce' ); ?>
          <fieldset class="inline-edit-col-right" id="#edit-">
            <div class="inline-edit-col">
              <label>
                <span class="title">Position</span>
                <span class="input-text-wrap">
                  <input type="number" name="pos" class="inline-edit-menu-order-input" value="" />
                </span>
              </label>
            </div>
          </fieldset>
        <?php }
        break;
      default:
        break;
    }
  }

  public function update_custom_quickedit_box() {
    if ( !isset( $_POST['custom_post_order_nonce'] ) || !wp_verify_nonce( $_POST['custom_post_order_nonce'], basename( __FILE__ ) ) ) {
      return;
    } 
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ){
      return;
    }
    if ( !current_user_can( 'edit_post', $_POST['post_ID'] ) ){
      return;
    }
    if ( isset( $_POST['pos'] ) ) {
      update_post_meta( $_POST['post_ID'], '_custom_post_order', sanitize_text_field( $_POST['pos'] ) );
    }
  }
}