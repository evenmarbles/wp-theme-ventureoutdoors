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

/**
 * Register block type.
 */
registerBlockType("vo-blocks/socialbutton", {
  title: __("Social Button", 'ventureoutdoors'),
  icon: 'plus',
  category: "ventureoutdoors",
  attributes: {
    icon: { type: "string" },
    title: { type: "string" },
    linkObject: { type: "object", default: { url: "" } },
    colorName: { type: "string", default: "primary" }
  },

  edit: Edit,

  save( { attributes: { icon, title, linkObject, colorName } }) {
    return (
      <>
        <a aria-label={ title } href={ linkObject.url } target="_blank" rel="noopener noreferrer" className={ `social-media-link color-${ colorName }` } >
          <div aria-hidden="true" className={ `social-icon icon-${ icon }` }></div>
        </a>
      </>
    )
  }
})
