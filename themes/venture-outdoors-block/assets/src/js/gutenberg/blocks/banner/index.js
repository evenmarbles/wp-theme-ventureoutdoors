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
      <div className="banner-item">
        <div className="mobile-banner-img hidden-sm-up">
          <img width="600px" height="300px" src="" id="randomImage" alt="#" />
        </div>
        <InnerBlocks.Content /> 
      </div>
    )
  }
})
