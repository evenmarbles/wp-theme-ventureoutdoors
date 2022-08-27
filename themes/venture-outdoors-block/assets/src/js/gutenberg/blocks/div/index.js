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
registerBlockType("vo-blocks/div", {
  title: __("Div", 'ventureoutdoors'),
  icon: 'editor-code',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    id: { type: "string" },
  },

  edit: Edit,

  save( { attributes: { id } } ) {
    const blockProps = useBlockProps.save();
    
    return (
      <div { ...blockProps } { ...(id ? { id: id } : '') }>
        <InnerBlocks.Content />
      </div>
    )
  }
})
