/**
 * Location.
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
import { RichText } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/location", {
  title: __("Location", 'ventureoutdoors'),
  icon: 'location',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    directions: { 
      type: "string",
      source: 'html',
      selector: 'p',
    },
  },

  edit: Edit,

  save({ attributes: { directions } }) {
    return (
      <RichText.Content tagName='p' value={ directions } />
    )
  }
})
