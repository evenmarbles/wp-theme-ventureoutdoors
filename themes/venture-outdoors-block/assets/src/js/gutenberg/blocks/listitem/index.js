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
registerBlockType("vo-blocks/listitem", {
  title: __("List Item", 'ventureoutdoors'),
  icon: 'editor-ul',
  category: "ventureoutdoors",

  edit: Edit,

  save() {
    const blockProps = useBlockProps.save();

    return (
      <li { ...blockProps }>
        <InnerBlocks.Content />
      </li>
    )
  }
})
