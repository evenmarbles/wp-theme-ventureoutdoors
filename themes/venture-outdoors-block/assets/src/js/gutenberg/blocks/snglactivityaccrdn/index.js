/**
 * Single Activity Accordion.
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
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/snglactivityaccrdn", {
  title: __("Single Activity Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: { type: "string" },
    title: { type: "string" },
    altTitle: { type: "string" },
    addPrefix: { type: "boolean", default: "no" },
    addSuffix: { type: "boolean", default: "no" },
  },

  edit: Edit,

  save() {

    return (
      <>
        <InnerBlocks.Content />
      </>
    )
  }
})
