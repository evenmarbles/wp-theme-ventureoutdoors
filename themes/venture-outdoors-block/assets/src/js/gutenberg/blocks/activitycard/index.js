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
  title: __("Activity Type Carousel2", 'ventureoutdoors'),
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
    let cards = ''
    if ( typeList !== null && typeList !== undefined ) {
      cards = typeList.map( ( { title, permalink, thumbnail, count } ) => {
        return <div className="activity-slider-item side-slider-item">
          <a href={ permalink }>
            <div className="imgbttn imgbttn-wbg">
              <img width="571" height="428" className="imgbttn-img img-responsive objectfit" loading="lazy" data-public-id={ `activity-types/${ thumbnail }` } data-lazyload="true" data-responsive="true" data-placeholder="true" alt={ title } />
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

    const blockProps = useBlockProps.save( {
      className: 'activity-card',
    } );

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
