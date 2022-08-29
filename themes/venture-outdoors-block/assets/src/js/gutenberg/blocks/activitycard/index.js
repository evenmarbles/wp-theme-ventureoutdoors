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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/activitycard", {
  title: __("Activity Type Carousel", 'ventureoutdoors'),
  icon: 'format-gallery',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    typeList: { type: "array" }
  },

  edit: Edit,

  save( { attributes: { typeList } }) {
    const blockProps = useBlockProps.save( {
      className: 'activity-card',
    } );

    let cards = ''
    if ( typeList.length ) {
      cards = typeList.map( ( { title, permalink, thumbnail, count } ) => {
        return <div className="activity-slider-item side-slider-item">
          <a href={ permalink }>
            <div className="imgbttn imgbttn-wbg">
              <img src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,h_428,dpr_2.0/activity-types/${ thumbnail }` }
                loading="lazy" alt={ title } className="imgbttn-img img-responsive objectfit"/>
              <div className="imgbttn-overlay">
                <div className="imgbttn-btn">
                  <span className="btn-tertiary">Explore</span>
                </div>
                <div className="imgbttn-txt activity-slide-cont">
                  <h3 className="h4 imgbttn-title flush-ends">{ title }</h3>
                  <div class="activity-count">{ count } { permalink.includes('lesson') ? 'Lessons' : 'Tours' }</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      } )
    }

    return (
      <section { ...blockProps }>
        <div className="container-fluid hard-right">
          <div className="row flush-right">
            <div className="col-xxs-11 col-xxs-push-1 hard-right">
              <div className="activity-slider side-slider">{ cards }</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
