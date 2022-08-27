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
registerBlockType("vo-blocks/mobileaccrdn", {
  title: __("Mobile Accordion", 'ventureoutdoors'),
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

    var iconClass = (icon) ? ` icon-${ icon }` : ''

    const blockProps1 = useBlockProps.save( {
      className: (id && id.slice(-1) === '1') ? 'mobile-accrdn mobile-accrdn-first' : 'mobile-accrdn',
    } );

    var blockProps2 = useBlockProps.save().className + ((className !== null) ? '-stxt mobile-accrdn-cont' : 'mobile-accrdn-cont');

    return (
      <div { ...blockProps1 }>
        <div className="row">
          <div className="col-sm-2 hidden-xs-down">
            <div className={ iconClass }></div>
          </div>
          <div className="col-sm-10">
            <RichText.Content className={`h5 hidden-xs-down flush-top`} tagName='h3' value={ title } />
            <h3 class={`h6 mobile-accrdn-title js-toggle-slide hidden-sm-up flush${ iconClass }`} data-target={ `#${ id }` }>{ title }</h3>
            <div className={ blockProps2 } id={ id }>
              <RichText.Content tagName='p' value={ content } />
            </div>
          </div>
        </div>
     </div>
    )
  }
})
