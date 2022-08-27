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
registerBlockType("vo-blocks/slide", {
  title: __("Slide", 'ventureoutdoors'),
  icon: 'id',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    src: { type: "string" },
    public_id: { type: "string" },
    context: { type: "object" },
    height: { type: "number" },
    width: { type: "number" },
    version: { type: "number" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width } } ) {
    let alt = context ? context.alt : '';

    const blockProps = useBlockProps.save( {
      className: 'lazyload',
    } );

    return (
      <div>
        <img width={ width } height={ height } { ...blockProps } sizes="100vw"
          src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_800/${ public_id }` }
          srcset={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_500/${ public_id } 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_800/${ public_id } 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_1080/${ public_id } 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_1,e_pixelate:5/c_scale,w_1600/${ public_id } 1600w` }
          data-src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_800/${ public_id }` }
          data-srcset={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_500/${ public_id } 500w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_800/${ public_id } 800w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_1080/${ public_id } 1080w,https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_1600/${ public_id } 1600w` }
          alt={ alt } />
      </div>
    )
  }
})
