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
import { isEmpty } from 'lodash';
 
/**
 * Register block type.
 */
registerBlockType("vo-blocks/rates", {
  title: __("Rates", 'ventureoutdoors'),
  icon: 'money-alt',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    rates: { type: "array", default: [] },
    isPrivate: { type: 'string', default: 'no' },
    agent: { type: 'string', default: 'guide' }
  },

  edit: Edit,

  save( { attributes: { rates, isPrivate, agent } } ) {

    return (
      <>
        <ul>
          { rates.map( rate => <li>{ rate }</li> ) }
        </ul>
        { (!isEmpty(isPrivate) && isPrivate === "yes" ) && <p>Private tours are only open to your party.</p> }
        <p><em>*Prices do not include gratuity for your { agent }.</em></p>
      </>
      )
  }
})
