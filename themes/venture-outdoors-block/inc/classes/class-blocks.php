<?php
/**
 * Blocks
 *
 * @package Venture Outdoors
 */

namespace VENTUREOUTDOORS_THEME\Inc;

use VENTUREOUTDOORS_THEME\Inc\Traits\Singleton;


class Blocks {
	use Singleton;

	protected function __construct() {

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		list( $this->blocks, $this->placeholders ) = include get_theme_file_path('/assets/src/php/gutenberg/blocks.php');

		add_action( 'init', [ $this, 'register_blocks' ] );
		add_action( 'init', [ $this, 'register_placeholder_blocks' ] );
		add_filter( 'block_categories_all', [ $this, 'add_block_categories' ] );
	}

	/**
	 * Add a block category
	 *
	 * @param array $categories Block categories.
	 *
	 * @return array
	 */
	public function add_block_categories( $categories ) {

		$category_slugs = wp_list_pluck( $categories, 'slug' );

		return in_array( 'ventureoutdoors', $category_slugs, true ) ? $categories : array_merge(
			$categories,
			[
				[
					'slug'  => 'ventureoutdoors',
					'title' => __( 'Venture Outdoors Blocks', 'ventureoutdoors' ),
					'icon'  => 'table-row-after',
				],
			]
		);

	}

	public function register_blocks() {

		foreach ($this->blocks as $name => $block) {
			if (file_exists(get_theme_file_path("/assets/src/php/gutenberg/blocks/{$name}.php"))) {
				register_block_type("vo-blocks/{$name}", [
					'render_callback' => function ($attributes, $content) use ($name) {
						ob_start();
						require get_theme_file_path("/assets/src/php/gutenberg/blocks/{$name}.php");
						return ob_get_clean();
					}
				]);
			}
		}

	}
	
	public function register_placeholder_blocks() {
		
		foreach ($this->placeholders as $block) {
			register_block_type("vo-blocks/{$block}", [
				'render_callback' => function ($attributes, $content) use ($block) {
					ob_start();
					require get_theme_file_path("/assets/src/php/gutenberg/placeholders/{$block}.php");
					return ob_get_clean();
				}
			]);
		}

	}

}