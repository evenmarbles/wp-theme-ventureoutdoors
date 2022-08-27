<?php
/**
 * Highlights Callback
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;


function highlights_callback($data) {

  $id = $data['id'];

  return ['highlights' => get_field('highlights', $id)];

}