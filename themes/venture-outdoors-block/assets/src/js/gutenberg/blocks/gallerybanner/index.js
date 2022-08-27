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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/gallerybanner", {
  title: __( "Gallery Banner", 'ventureoutdoors' ),
  icon: 'align-pull-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    images: { type: "array" },
  },

  edit: Edit,

  save( { attributes: { images } } ) {
    const blockProps = useBlockProps.save( {
      className: 'sngl-activity-banner',
    } );

    let imageHTML = [];
    for ( let i = 0; i < images.length; i++ ) {
      let image = images[i]
      let ws = -1
      let hs = -1
      let t = image.derived[0].raw_transformation
      if ( t.search( 'c_scale' ) > -1 ) {
        let w = -1
        let h = -1
        let wiStart = t.search( 'w_' )
        let hiStart = t.search( 'h_' )
        if ( wiStart > -1 && ( wiEnd = t.search(',') > -1 )) {
          w = parseInt( t.substring( wiStart, wiEnd ) )
        }
        if ( hiStart > -1) {
          let hiEnd = t.substring( hiStart ).search(',') > -1 ? t.substring( hiStart ).search(',') : t.substring( hiStart ).search('/') > -1 ? t.substring( hiStart ).search('/') : -1
          if ( hiEnd > -1 ) {
            h = parseInt( t.substring( hiStart + 2, hiStart + hiEnd ) )
          } else {
            h = parseInt( t.substring( hiStart + 2 ) )
          }
        }
        ws = w > -1 ? w / image.width : -1
        hs = h > -1 ? h / image.height : -1
      }
      let width = image.width
      let height = image.height
      if ( ws > -1 && hs > -1 ) {
        width = Math.ceil( image.width * ws )
        height = Math.ceil( image.height * hs )
      } else if ( ws > -1 && hs === -1 ) {
        width = Math.ceil( image.width * ws )
        height = Math.ceil( image.height * ws )
      } else if ( ws === -1 && hs > -1 ) {
        width = Math.ceil( image.width * hs )
        height = Math.ceil( image.height * hs )
      }
      imageHTML.push( <img width={ width } height={ height } 
        className='full-width-slider-image lazyload' 
        src={ image.derived[0].secure_url } 
        data-src={ image.derived[1].secure_url }
        alt={ image.context ? image.context.alt : '' } /> )
    }
  
    return (
      <>
        <div { ...blockProps }>
          <div className='full-width-slider'>
            { imageHTML }
          </div>
        </div>
      </>
    )
  }
})
