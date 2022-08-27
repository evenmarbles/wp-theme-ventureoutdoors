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
registerBlockType("vo-blocks/wysiwyggray", {
  title: __("Wysiwyg Gray Content", 'ventureoutdoors'),
  icon: 'embed-photo',
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
      className: "wysiwyg-gray"
    } );
    
    return (
      <section { ...blockProps }>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 center-block">
              <div class="wysiwyg-gray-item">
                <div class="wysiwyg-gray-cnt bgc-tertiary content">
                  <InnerBlocks.Content />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
