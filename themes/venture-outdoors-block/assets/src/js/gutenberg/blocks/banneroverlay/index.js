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
registerBlockType("vo-blocks/banneroverlay", {
  title: __("Banner Overlay", 'ventureoutdoors'),
  icon: 'menu',
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
      className: 'banner-overlay valign-end disblock-xs-down',
    } );

    return (
      <>
        <div { ...blockProps }>
          <div className="banner-overlay-cont valign-middle-item">
            <div className="banner-txt text-shadow-black">
              <InnerBlocks.Content />
            </div>
            <img width="173" height="25" loading="lazy" className="imgdivider small hidden-xs-down" data-public-id="vector-images/feather-divider" data-height="25" data-lazyload="true" data-responsive="false" data-placeholder="false" />
          </div>
        </div>
      </>
    )
  }
})
