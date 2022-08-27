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
registerBlockType("vo-blocks/readmore", {
  title: __("Read More", 'ventureoutdoors'),
  icon: 'ellipsis',
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
      className: 'js-read-more'
    } );
    
    return (
      <>
        <div { ...blockProps }>
          <div>
            <InnerBlocks.Content />
          </div>
        </div>
        <a href="javascript:void(0)" className='readmoreToggle'>Read more ...</a>
      </>
    )
  }
})
