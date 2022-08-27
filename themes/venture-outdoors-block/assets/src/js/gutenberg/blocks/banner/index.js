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
registerBlockType("vo-blocks/banner", {
  title: __("Banner", 'ventureoutdoors'),
  icon: 'welcome-view-site',
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
      className: 'banner',
      id: 'masthead',
    } );

    return (
      <>
        <div className="banner-logo-container">
          <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo/venture-outdoors-base_382x200.png" alt="Go to Venture Outdoors&#x27; homepage."
            className="logo-base" />
          <img src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/logo//venture-outdoors-logo-needle_195x200.png"
            alt="Go to Venture Outdoors&#x27; homepage." className="logo-needle" />
        </div>
        <div className="banner-item">
          <InnerBlocks.Content /> 
        </div>
      </>
    )
  }
})
