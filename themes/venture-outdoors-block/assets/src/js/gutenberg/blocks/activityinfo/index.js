/**
 * Div.
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
registerBlockType("vo-blocks/activityinfo", {
  title: __("Activity Info", 'ventureoutdoors'),
  icon: 'info',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    id: { type: "string" }
  },

  edit: Edit,

  save() {
    const blockProps = useBlockProps.save( {
      className: 'accordion sngl-activity-accordion'
    } );
    
    return (
      <div { ...blockProps }>
        <InnerBlocks.Content />
      </div>
    )
  }
})
