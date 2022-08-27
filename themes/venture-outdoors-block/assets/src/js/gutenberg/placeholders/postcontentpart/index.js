/**
 * Filter Activity.
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

/**
 * Register block type.
 */
registerBlockType("vo-blocks/postcontentpart", {
  title: __( "Post Content Part", 'ventureoutdoors' ),
  icon: 'editor-alignleft',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    blockInclude: { type: "string" },
    blockId: { type: "string" }
  },

  edit: Edit,

  save() {
    return null
  }
})
