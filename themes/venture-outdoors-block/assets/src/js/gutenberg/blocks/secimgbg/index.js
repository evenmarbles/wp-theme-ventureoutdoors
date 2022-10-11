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
    public_id: { type: "string" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" },
    bkgClassName: { type: "string" },
    option: { type: "string", default: "normalbg" }
  },

  edit: Edit,

  save( { attributes: { context, public_id, height, width, bkgClassName, option } } ) {
    let alt = context ? context.alt : ''
    const blockProps = useBlockProps.save( {
      className: 'sec-with-imgbg',
    } );

    let slantbgClass = ( option && option === "slantbg" ) ? ' slantbg' : ''
    const className = bkgClassName ? `sec-imgbg ${bkgClassName}${slantbgClass}` : `sec-imgbg${slantbgClass}`

    return (
      <>
        <section { ...blockProps }>
          <InnerBlocks.Content />
          <img width={ width } height={ height } loading="lazy" className={ className } data-public-id={ public_id } data-lazyload="true" data-responsive="true" alt={ alt } />
        </section>
      </>
    )
  }

})
