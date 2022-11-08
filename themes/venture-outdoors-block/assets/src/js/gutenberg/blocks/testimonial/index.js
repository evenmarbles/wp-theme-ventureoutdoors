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
import { RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
/**
 * Register block type.
 */
registerBlockType("vo-blocks/testimonial", {
  title: __("Testimonial", 'ventureoutdoors'),
  icon: 'media-text',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
    author: {
      type: 'string',
      source: 'html',
      selector: 'span',
    },
    public_id: { type: "string" },
    context: { type: "object" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" },
    transformation: { type: "string" },
    is_lazyload: { type: "boolean" },
    is_responsive: { type: "boolean" },
    is_placeholder: { type: "boolean" }
  },

  edit: Edit,

  save( { attributes: { content, author, public_id, context, height, width, transformation, is_lazyload, is_responsive, is_placeholder } } ) {
    let alt = context ? context.alt : '';

    var newTransformation = []

    if ( transformation ) {
      var transformArray = transformation.split( '/' )
      transformArray.forEach( item => {
        if ( item !== 'q_auto' && item !== 'f_auto' ) {
          if ( transformation.search( 'c_scale' ) !== -1 ) {
            var dims = item.split( ',' )
            dims.forEach( d => {
              var pos =  d.search( 'w_' )
              if ( pos !== -1 ) {
                width = parseInt( d.substring( pos + 2 ) )
              }
              pos =  d.search( 'h_' )
              if ( pos !== -1 ) {
                height = parseInt( d.substring( pos + 2 ) )
              }
            })
          } else {
            newTransformation.push( item )
          }
        }
      })
    }

    const blockProps = useBlockProps.save( {
      className: 'flush-top',
    } );

    const loading = is_lazyload ? "lazy" : "eager"

    return (
      <>
        <RichText.Content { ...blockProps } tagName='p' value={ content } />
        <div className="testimonial-author">
          <div>— <RichText.Content tagName='span' value={ author } />
            <div style={{ display: 'inline-block'}}><img width={ width } height={ height } loading={ loading } data-public-id={ public_id } data-transformation={ newTransformation.join() } data-lazyload={ is_lazyload } data-responsive={ is_responsive } data-placeholder={ is_placeholder } alt={ alt } /></div>
          </div>
        </div>
      </>
    )
  }
})
