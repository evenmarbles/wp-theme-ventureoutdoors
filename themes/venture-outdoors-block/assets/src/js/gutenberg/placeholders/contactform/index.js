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
registerBlockType("vo-blocks/contactform", {
  title: __( "Contact Form", 'ventureoutdoors' ),
  icon: 'forms',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
  },

  edit() {
    return wp.element.createElement(
      "div", { className: "vo-placeholder-block" }, __( "Contact Form Placeholder", "ventureoutdoors" )
    )
  },

  save() {
    return null
  }
})
