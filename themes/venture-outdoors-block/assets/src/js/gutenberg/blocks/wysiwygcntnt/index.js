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
registerBlockType("vo-blocks/wysiwygcntnt", {
  title: __("Wysiwyg Content", 'ventureoutdoors'),
  icon: 'embed-generic',
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
      className: "wysiwyg-cntnt"
    } );
    
    return (
      <section { ...blockProps }>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 center-block wysiwyg-cntnt-text content">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </section>
    )
  }
})
