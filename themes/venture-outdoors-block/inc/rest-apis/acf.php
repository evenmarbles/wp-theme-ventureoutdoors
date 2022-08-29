<?php
/**
 * ACF Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

function acf_results( $data ) {

  if ( !check_ajax_referer( 'wp_rest', 'ajax_nonce', false ) ) {
    wp_send_json_error( __( 'Invalid security token sent.', 'ventureoutdoors' ) );
    wp_die( '0', 400 );
  }

  $id = $data['id'];
  if ( !is_array( $data['name'] ) ) {
    $name = explode( ',', $data['name'] );
  }

  if ( count( $name ) > 1 ) {
    $response = [];

    foreach( $name as $n ) {
      $response[$n] = get_field( $n, $id );
    }

    return [ 'value' => $response ];
  }

  return [ 'value' => get_field( $name[0], $id ) ];
}