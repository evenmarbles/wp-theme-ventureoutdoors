/**
 * Container.
 *
 * @package VentureOutdoors
 */

/**
 * Internal dependencies.
 */
import Edit from './edit';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/slideshow", {
  title: __("Slideshow", 'ventureoutdoors'),
  icon: 'slides',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" }
  },

  edit: Edit,

  save() {
    const blockProps = useBlockProps.save( {
      className: 'banner-img hidden-xs-down',
    } );

    return (
      <>
        <div className="mobile-banner-img hidden-sm-up">
          <img src="" id="randomImage" alt="#" />
        </div>
        <div { ...blockProps }>
          <InnerBlocks.Content />
        </div>
        <div class="banner-pagination">
          <div class="slider-control">
            <div class="custom-nav"></div>
              <div class="slide-counter w-clearfix">
                <div class="slide-count float-left">01</div>
                <div class="float-left">/</div>
                <div class="num-slides float-left">05</div>
              </div>
            <div class="nav-arrows"></div>
          </div>
        </div>
      </>
    )
  }
})
