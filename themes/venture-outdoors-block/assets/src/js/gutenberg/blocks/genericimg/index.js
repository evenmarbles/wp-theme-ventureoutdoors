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
    imageSizes: { type: "string" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width, isHeight100, isWidth100 } } ) {
    let alt = context ? context.alt : '';

    let src = `https://res.cloudinary.com/ventureoutdoors/image/upload/${ public_id }`

    width = isWidth100 ? "100%" : width;
    height = isHeight100 ? "100%" : height;

    const blockProps = useBlockProps.save( {
      className: 'lazyload',
    } );

    return (
      <img { ...blockProps } width={ width } height={ height } src={ src } alt={ alt} />
    )
  }
})
