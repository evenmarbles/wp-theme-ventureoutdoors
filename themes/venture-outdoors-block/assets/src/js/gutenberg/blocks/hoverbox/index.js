/**
 * HoverBox Grid.
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
registerBlockType("vo-blocks/hoverbox", {
  title: __( "Hoverbox", 'ventureoutdoors' ),
  icon: 'code-standards',
  category: "ventureoutdoors",
  attributes: {
    title: { 
      type: "string",
      selector: "p"
    },
    src: { type: "string" },
    public_id: { type: "string" },
    alt: { type: "string" },
    height: { type: "number" },
    width: { type: "number" },
    text: { type: "string" },
    permalink: { type: "object", default: { url: "" } },
  },

  edit: Edit,

  save( { attributes: { title, public_id, alt, height, width, text, permalink } }) {
    let src = `https://res.cloudinary.com/ventureoutdoors/image/upload/${ public_id }`

    return (
      <>
        <div className={ "page-activity-item imgbttn imgbttn-wbg" }>
          <img className={ "imgbttn-img img-responsive objectfit lazyload" } width={ width } height={ height } src={ src } alt={ alt } />
          <div className={ "imgbttn-overlay" }>
            <div className={ "imgbttn-btn"} >
              <a className={ "btn-tertiary" } href={ permalink.url }>{ text }</a>
            </div>
            <div className={ "imgbttn-txt activity-slide-cont" }>
              <h3 className={ "h4 imgbttn-title page-activity-title flush-top" }>{ title }</h3>
            </div>
          </div>
        </div>
      </>
    )
  }
})
