<?php
/**
 * Blocks
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

require_once( dirname( __DIR__, 2 ) . '/assets/vendor/autoload.php' );
require_once( dirname( __DIR__, 1 ) . '/helpers/decrypt.php' );

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;

// Use the Configuration class 
use Cloudinary\Api\Admin\AdminApi;
use Cloudinary\Asset\Image;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Tag\ImageTag;
use Cloudinary\Transformation\Delivery;
use Cloudinary\Transformation\Format;
use Cloudinary\Transformation\Quality;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Effect;


class Cloudinary {
	use Singleton;

	protected function __construct() {

		$this->configure();
	}

	/**
	 * Initialize singleton
	 */
	protected function configure() {

		try {
			if ( strstr( $_SERVER[ 'SERVER_NAME' ], 'venture-outdoors-classic.local' ) ) {
				$dir = dirname( __DIR__, 2 );
			} else {
				$dir = dirname( $_SERVER[ 'DOCUMENT_ROOT' ], 1 ) . '/private_html';
			}
			$dotenv = \Dotenv\Dotenv::createImmutable( $dir );
			$dotenv->load();
	
			if ( isset( $_ENV[ 'CLOUDINARY' ] ) && isset( $_ENV[ 'CLOUDINARY_SECRET' ] ) ) {
				// Configure an instance of your Cloudinary cloud
				$api_key = decrypt( $_ENV['CLOUDINARY'] );
				$api_secret = decrypt( $_ENV['CLOUDINARY_SECRET'] );
	
				$config = Configuration::instance( [
					'cloud' => [
						'cloud_name' => 'ventureoutdoors',
						'api_key' => $api_key,
						'api_secret' => $api_secret ],
					'url' => [
						'secure' => true ]
				] );
			}
		} catch ( Exception $e ) {
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	
	}

	public function get_image_tag( $publicId, $class, $width='auto', $lazyload=true, $responsive=true, $placeholder=true ) {
		try {
			$admin = new AdminApi();
		} catch ( Exception $e ) {
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
		$details = $admin->asset( $publicId );

		// $details = [
		// 	'width' => 250,
		// 	'height' => 250,
		// 	'context' => [
		// 		'custom' => [
		// 			'alt' => "Guides' Choice"
		// 		]
		// 	]
		// ];

		$alt = $details !== null && isset($details['context']) && 
		       isset($details[ 'context' ][ 'custom' ]) && isset($details[ 'context' ][ 'custom' ][ 'alt' ]) ? $details[ 'context' ][ 'custom' ][ 'alt' ] : '';
		$alt = '"' . htmlspecialchars($alt) . '"';

		$width = $width === 'auto' ? isset( $details[ 'width' ] ) : $width;
		$height = isset( $details[ 'height' ] );

		$imageTag = "<img width='$width' height='$height'";

		if ( $lazyload ) {
			$imageTag .= " loading='lazy'";
		}

		$lazyload = $lazyload ? '"true"' : '"false"';
		$responsive = $responsive ? '"true"' : '"false"';
		$placeholder = $placeholder ? '"true"' : '"false"';

		$imageTag .= " class='$class' data-public-id='$publicId' data-lazyload=$lazyload data-responsive=$responsive data-placeholder=$placeholder alt=$alt />";

		return $imageTag;
	}

}