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
    return (
      <div className="banner-item">
        <div className="mobile-banner-img hidden-sm-up">
          <img width="600" height="300" data-lazyload="false" data-responsive="true" data-placeholder="true" id="randomImage" />
        </div>
        <InnerBlocks.Content /> 
      </div>
    )
  }
})
