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
registerBlockType("vo-blocks/highlights", {
  title: __("Highlights", 'ventureoutdoors'),
  icon: 'editor-ul',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    data: { 
      type: "array", 
      selector: "ul",
    }
  },

  edit: Edit,

  save( { attributes: { data } } ) {
    const blockProps = useBlockProps.save()
    
    return (
      <div { ...blockProps }>
        <div>
          <h2 class="h5 flush-bottom">Tour Highlights</h2>
          <div class="row">
            <ul class="check-list flush-top flush-sides col-xs-6">
              { data.map( highlight => {
                return <li>{ highlight }</li>
              } ) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
