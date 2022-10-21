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
    version: { type: "number" },
    is_lazyload: { type: "boolean" },
    is_responsive: { type: "boolean" },
    is_placeholder: { type: "boolean" }
  },

  edit: Edit,

  save( { attributes: { public_id, context, height, width, is_lazyload, is_responsive, is_placeholder } } ) {
    let alt = context ? context.alt : '';

    const blockProps = useBlockProps.save()

    const loading = is_lazyload ? "lazy" : "eager"

    return (
      <div>
        <img width={ width } height={ height } loading={ loading } { ...blockProps } data-public-id={ public_id } data-lazyload={ is_lazyload } data-responsive={ is_responsive } data-placeholder={ is_placeholder } alt={ alt } />
      </div>
    )
  }
})
