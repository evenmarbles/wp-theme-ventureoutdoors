<?php
/**
 * Highlights Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;


function highlights_callback($data) {

  if ( !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
    wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
    wp_die( '0', 400 );
  }

  $id = $data['id'];

  return ['highlights' => get_field('highlights', $id)];

}