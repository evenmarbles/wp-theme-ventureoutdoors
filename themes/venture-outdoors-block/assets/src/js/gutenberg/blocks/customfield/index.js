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

/**
 * Register block type.
 */
registerBlockType("vo-blocks/customfield", {
  title: __("Custom Field", 'ventureoutdoors'),
  icon: 'edit',
  category: "ventureoutdoors",
  attributes: {
    name: { type: "string" },
    value: { type: "object" },
    tagName: { type: "string" },
    searchText: { type: "string" },
    replaceText: { type: "string" },
  },

  edit: Edit,

  save( { attributes: { value } } ) {
    if ( !value ) {
      return null
    }

    return ( 
      <>
        { value && value.array && 
          <ul>
            { value.array.map( v => <li>{ v }</li> )}
          </ul>
        }
      { value && value.string && value.string.match(/<[^>]*>/g) && <div dangerouslySetInnerHTML={{__html: value.string}} /> }
      { value && value.string && !value.string.match(/<[^>]*>/g) && typeof value.string === 'string' && value.string }
      </>
    )
  }
})
