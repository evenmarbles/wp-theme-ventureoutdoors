/**
 * Footer.
 *
 * @package VentureOutdoors
 */

/**
 * WordPress Dependencies.
 */
 import { __ } from '@wordpress/i18n';
 
 wp.blocks.registerBlockType("vo-blocks/footer", {
  title: __( "Venture Outdoors Footer", 'ventureoutdoors' ),
  icon: 'editor-indent',
  category: "ventureoutdoors",

  edit() {
    return wp.element.createElement(
       "div", 
      { className: "vo-placeholder-block" }, 
      __( "Footer Placeholder", 'ventureoutdoors' )
    )
  },

  save() {
    return null
  }
})