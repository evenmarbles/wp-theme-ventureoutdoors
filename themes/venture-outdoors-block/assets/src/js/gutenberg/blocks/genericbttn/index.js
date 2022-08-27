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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/genericbttn", {
  title: __("Generic Button", 'ventureoutdoors'),
  icon: 'button',
  category: "ventureoutdoors",
  attributes: {
    text: { type: "string" },
    linkObject: { type: "object", default: { url: "" } },
    colorName: { type: "string", default: "primary" }
  },

  edit: Edit,

  save( { attributes: { text, linkObject, colorName } } ) {
    let rel=""
    let target = ""
    if ( linkObject.url && window.location.hostname !== new URL(linkObject.url).hostname ) {
      rel="noopener noreferrer"
      target="_blank"
    }

    const blockProps = useBlockProps.save( {
      className: `btn-${colorName ? colorName : 'primary'}`,
      ...( target && { target: target } ),
      ...( rel && { rel: rel } )
    } );
    
    return (
      <a href={ linkObject.url } { ...blockProps }>{ text }</a>
    )
  }
})
