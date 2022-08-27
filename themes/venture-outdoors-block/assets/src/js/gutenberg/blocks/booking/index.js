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
registerBlockType("vo-blocks/booking", {
  title: __("Booking", 'ventureoutdoors'),
  icon: 'calendar',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    itemId: {
      type: 'string',
      selector: '.itemId',
    },
    flowId: {
      type: 'string',
      selector: '.flowId',
    },
    isPrivate: { type: 'string', default: 'no' },
  },

  edit: Edit,

  save( { attributes: { itemId, flowId, isPrivate } } ) {

    return (
      <>
        { (!isEmpty(isPrivate) && isPrivate === "no" ) && <p className="tour-dates-message">Click on a date to book. You can also call <a href="tel:+1-407-267-9950">407-267-9950</a> to book through customer service</p> }
        { (!isEmpty(isPrivate) && isPrivate === "no" ) &&  <script src={ `https://fareharbor.com/embeds/script/calendar/ventureoutdoorsllc/items/${ itemId }/?fallback=simple&flow=${ flowId }` }></script> }
        { (!isEmpty(isPrivate) && isPrivate === "no" ) && <div class="col-md-12 activity-cta">
            <img width="500" height="161" class="activity-background" src="https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave" />
            <div class="activity-cta-wrapper text-center">
              <h4>Don't see your dates? call us!</h4>
              <a href="tel:+1-407-267-9950" class="color-primary icon-phone-android">407-267-9950</a>
            </div>
          </div> }
        { (!isEmpty(isPrivate) && isPrivate === "yes" ) && <p className="tour-dates-message">Private Lessons are by appointment only.</p> }
        { (!isEmpty(isPrivate) && isPrivate === "yes" ) &&  <div className="activity-cta bgc-quaternary ">
            <div className="activity-cta-wrapper text-center">
              <h4>Please call to book!</h4>
              <a href="tel:+1-407-267-9950" className="color-primary icon-phone-android">407-267-9950</a>
            </div>
            <img width="500" height="161" className="activity-background" src="https://res.cloudinary.com/ventureoutdoors/image/upload/e_sharpen:200/background-images/bg-wave" />
          </div>
        }
      </>
      )
  }
})
