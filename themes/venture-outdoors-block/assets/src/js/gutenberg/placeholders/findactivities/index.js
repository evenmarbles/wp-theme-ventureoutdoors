/**
 * Find Activity Form.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/findactivity", {
  title: __( "Find Activity Form", 'ventureoutdoors' ),
  icon: 'search',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
  },

  edit() {
    return wp.element.createElement(
      "div", { className: "vo-placeholder-block" }, __( "Find Activity Form Placeholder", "ventureoutdoors" )
    )
  },

  save() {
    return null
  }
})
