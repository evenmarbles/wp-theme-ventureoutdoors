<?php
/*
  Plugin Name: iWebDesign Post Sort
  Description: Custom post sort plugin.
  Version: 1.0
  Author: Astrid Jackson
*/

if ( !defined( 'IWEBDESIGN_DIR' ) ) {
	define( 'IWEBDESIGN_DIR', __DIR__ );
}

if ( !defined( 'IWEBDESIGN_URI' ) ) {
	define( 'IWEBDESIGN_URI',  plugin_dir_url( __FILE__ ) );
}



// Define the class and the function.
require_once( dirname( __FILE__ ) . '/app/iwebdesign.php' );

iwebdesign();

?>