/**
 * Promobar.
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
registerBlockType("vo-blocks/promobar", {
  title: __("Promobar", 'ventureoutdoors'),
  icon: 'admin-links',
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
      <div className="promotions-bar-cont">
        <InnerBlocks.Content />
      </div>
    )
  }
})
