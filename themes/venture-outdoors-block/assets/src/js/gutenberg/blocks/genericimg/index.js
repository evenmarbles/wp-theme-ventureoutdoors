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
    sizes: { type: "string" },
    isHeight100: { type: "boolean", default: false },
    isWidth100: { type: "boolean", default: false },
    imageSizes: { type: "string" },
    is_lazyload: { type: "boolean" },
    is_responsive: { type: "boolean" },
    is_placeholder: { type: "boolean" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width, isHeight100, isWidth100, is_lazyload, is_responsive, is_placeholder } } ) {
    let alt = context ? context.alt : '';

    width = isWidth100 ? "100%" : width;
    height = isHeight100 ? "100%" : height;

    const blockProps = useBlockProps.save();

    return (
      <img width={ width } height={ height } { ...( is_lazyload && { loading: "lazy" } ) } { ...blockProps } data-public-id={ public_id } data-lazyload={ is_lazyload } data-responsive={ is_responsive } data-placeholder={ is_placeholder } alt={ alt } />
    )
  }
})
