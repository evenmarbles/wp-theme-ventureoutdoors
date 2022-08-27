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
import { InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/accrdn", {
  title: __("Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: { type: "string" },
    title: { type: "string" },
  },

  edit: Edit,

  save( { attributes: { id, title } } ) {

    return (
      <>
        <RichText.Content className={'accordion-title flush js-accordion'} tagName='h4' data-target={ `#${id}` } value={ title } />
        <div class="accordion-cont content" id={ id }>
          <InnerBlocks.Content />
        </div>
     </>
    )
  }
})
