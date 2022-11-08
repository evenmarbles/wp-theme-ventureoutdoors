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
registerBlockType("vo-blocks/genericimg", {
  title: __("Generic Image", 'ventureoutdoors'),
  icon: 'format-image',
  category: "ventureoutdoors",
  attributes: {
    src: { type: "string" },
    public_id: { type: "string" },
    context: { type: "object" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" },
    customHeight: { type: "string" },
    customWidth: { type: "string" },
    is_lazyload: { type: "boolean" },
    is_responsive: { type: "boolean" },
    is_placeholder: { type: "boolean" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width, customHeight, customWidth, is_lazyload, is_responsive, is_placeholder } } ) {
    let alt = context ? context.alt : ''

    const blockProps = useBlockProps.save();

    var thisHeight = height.toString()
    var thisWidth = width.toString()

    if ( customHeight ) {
      var heightParts = customHeight.split(/([0-9]+)/).filter(Boolean)
      if ( heightParts[1] === '%' ) {
        thisHeight = customHeight
        customHeight = ''
      }
    }
    if ( customWidth ) {
      var widthParts = customWidth.split(/([0-9]+)/).filter(Boolean)
      if ( widthParts[1] == '%' ) {
        thisWidth = customWidth
        customWidth = ''
      }
    }


    return (
      <img width={ thisWidth } height={ thisHeight } { ...( is_lazyload && { loading: "lazy" } ) } { ...blockProps } data-public-id={ public_id } { ...( customWidth && {'data-width': customWidth }) } { ...( customHeight && {'data-height': customHeight }) } data-lazyload={ is_lazyload } data-responsive={ is_responsive } data-placeholder={ is_placeholder } alt={ alt } />
    )
  }
})
