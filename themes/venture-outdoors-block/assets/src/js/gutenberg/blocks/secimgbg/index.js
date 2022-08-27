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
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
import { isEmpty } from 'lodash';
/**
 * Register block type.
 */
registerBlockType("vo-blocks/secimgbg", {
  title: __("Section with Image Background", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    src: { type: "string", default: secimgbg.fallbackimage },
    context: { type: "object" },
    derived: { type: "array" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" },
    bkgClassName: { type: "string" },
    option: { type: "string", default: "normalbg" }
  },

  edit: Edit,

  save( { attributes: { src, context, derived, height, width, bkgClassName, option } } ) {
    let alt = context ? context.alt : ''
    const blockProps = useBlockProps.save( {
      className: 'sec-with-imgbg',
    } );

    let slantbgClass = ( !isEmpty(option) && option === " slantbg" ) ? 'slantbg' : ''

    const className = bkgClassName ? `sec-imgbg ${bkgClassName}${slantbgClass} lazyload` : `sec-imgbg${slantbgClass} lazyload`

    let sizes = [500, 800, 1080, 1600]

    let thisSrc = src
    let thisSrcset = ''

    if ( derived ) {
      thisSrc = derived[0].secure_url
      derived.slice(1).forEach(( d, index ) => {
        thisSrcset += `${ d.secure_url } ${sizes[index]}w`
        if ( index !== derived.length - 2 ) { thisSrcset += ',' }
      })
    }

    return (
      <>
        <section { ...blockProps }>
          <InnerBlocks.Content />
          { ( !isEmpty(option) && option === "slantbg" ) && <div className="sec-slantbg"></div> }
          <img width={ width } height={ height } className={ className } 
            data-src={ thisSrc }
            data-srcset={ thisSrcset }
            alt={ alt } />
        </section>
      </>
    )
  }

})
