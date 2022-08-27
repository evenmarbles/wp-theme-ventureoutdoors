<?php
/**
 * ACF Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

function acf_results( $data ) {

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