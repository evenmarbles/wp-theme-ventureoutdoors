/**
 * Activity Details.
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
registerBlockType("vo-blocks/activitydetails", {
  title: __("Activity Details", 'ventureoutdoors'),
  icon: 'admin-multisite',
  category: "ventureoutdoors",

  edit() {
    return wp.element.createElement(
      "div", { className: "vo-placeholder-block" }, __( "Activity Details Placeholder", "ventureoutdoors" )
    )
  },

  save() {
    return null
  }
})
