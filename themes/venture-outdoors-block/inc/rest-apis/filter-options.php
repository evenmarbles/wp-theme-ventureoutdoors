<?php
/**
 * Activities Summary Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

function filter_options_results( $request ) {

  if ( !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
    wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
    wp_die( '0', 400 );
  }

  // Check if it's an ajax call.
  $is_ajax_request = ! empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) &&
                     strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) === 'xmlhttprequest';


  $activities = Activities::get_instance();

  return $activities->get_meta_data( ...$activities->clean_parameters() );
}

