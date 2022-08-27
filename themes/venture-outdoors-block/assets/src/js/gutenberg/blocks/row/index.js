/**
 * Row.
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
registerBlockType("vo-blocks/row", {
  title: __("Row", 'ventureoutdoors'),
  icon: 'shortcode',
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
      className: 'row',
    } );

    return (
      <div { ...blockProps }>
        <InnerBlocks.Content />
      </div>
    )
  }
})
 