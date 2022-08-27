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
import { RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/genericaccrdn", {
  title: __("Generic Accordion", 'ventureoutdoors'),
  icon: 'align-center',
  category: "ventureoutdoors",
  attributes: {
    id: { type: "string" },
    icon: { type: "string" },
    title: { type: "string" },
    content: { type: "string" },
  },

  edit: Edit,

  save( { attributes: { id, icon, title, content, className } } ) {

    var iconClass = (icon) ? `icon-${ icon } ` : ''

    const blockProps1 = useBlockProps.save( {
      className: (id && id.slice(-1) === '1') ? 'accrdn accrdn-first' : 'accrdn',
    } );

    var blockProps2 = useBlockProps.save().className + ((className !== null) ? '-stxt accrdn-cont' : 'accrdn-cont');

    return (
      <div { ...blockProps1 }>
        <RichText.Content className={`${ iconClass }hidden-xs-down flush`} tagName='h4' value={ title } />
        <h5 className={`accrdn-title js-toggle-slide ${ iconClass }hidden-sm-up flush`} data-target={ `#${ id }` }>{ title }</h5>
        <div className={ blockProps2 } id={ id }>
          <RichText.Content tagName='p' value={ content } />
        </div>
     </div>
    )
  }
})
