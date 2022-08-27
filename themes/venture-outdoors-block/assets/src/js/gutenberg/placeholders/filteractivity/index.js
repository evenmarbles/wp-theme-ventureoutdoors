/**
 * Filter Activity.
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
registerBlockType("vo-blocks/filteractivity", {
  title: __( "Filter Activity", 'ventureoutdoors' ),
  icon: 'align-pull-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
  },

  edit() {
    return wp.element.createElement(
      "div", { className: "vo-placeholder-block" }, __( "Filter Activity Placeholder", "ventureoutdoors" )
    )
  },

  save() {
    return null
  }
})
