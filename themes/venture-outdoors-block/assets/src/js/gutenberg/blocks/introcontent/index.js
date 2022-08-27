/**
 * Div.
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

/**
 * Register block type.
 */
registerBlockType("vo-blocks/introcontent", {
  title: __("Intro Conent", 'ventureoutdoors'),
  icon: 'align-left',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" }
  },

  edit: Edit,

  save() {
    const blockProps = useBlockProps.save( {
      className: "intro-content"
    });
    
    return (
      <section { ...blockProps }>
        <div className="container">
          <div className="row">
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    )
  }
})
