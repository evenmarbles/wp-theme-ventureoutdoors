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
registerBlockType("vo-blocks/imgbttn", {
  title: __("Image Button", 'ventureoutdoors'),
  icon: 'button',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    public_id: { type: "string" },
    context: { type: "object" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" },
    linkObject: { type: "object", default: { url: "" } },
    is_lazyload: { type: "boolean" },
    is_responsive: { type: "boolean" },
    is_placeholder: { type: "boolean" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width, linkObject, is_lazyload, is_responsive, is_placeholder } } ) {
    let alt = context ? context.alt : ''

    let rel=""
    let target = ""
    if ( window.location.hostname !== new URL(linkObject.url).hostname ) {
      rel="noopener noreferrer"
      target="_blank"
    }

    const blockProps = useBlockProps.save( {
      ...( target && { target: target } ),
      ...( rel && { rel: rel } )
    } );

    return (
      <a href={ linkObject.url } { ...blockProps }>
        <img width={ width } height={ height } loading="lazy" data-public-id={ public_id } data-lazyload={ is_lazyload } data-responsive={ is_responsive } data-placeholder={ is_placeholder } alt={ alt } />
      </a>
    )
  }
})
