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
registerBlockType("vo-blocks/masthead", {
  title: __("Masthead", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
  },

  edit: Edit,

  save() {
  
    return (
      <>
        <div className="masthead-cont valign-middle">
          <div className="masthead-incont valign-middle-item">
            <InnerBlocks.Content />
          </div>
        </div>
      </>
    )
  }
})
