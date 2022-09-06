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
registerBlockType("vo-blocks/testimonial", {
  title: __("Testimonial", 'ventureoutdoors'),
  icon: 'media-text',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
    author: {
      type: 'string',
      source: 'html',
      selector: 'span',
    }
  },

  edit: Edit,

  save( { attributes: { content, author } } ) {
    const blockProps = useBlockProps.save( {
      className: 'flush-top',
    } );

    return (
      <>
          <RichText.Content { ...blockProps } tagName='p' value={ content } />
          <div className="testimonial-author">
            <div>— <RichText.Content tagName='span' value={ author } />
              <img width="105px" height="24px" src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/affiliates/tripadvisor_secondary.svg"
                loading="lazy" alt="Hear from past guests about their experience with Venture Outdoors on TripAdvisor." />
            </div>
          </div>
      </>
    )
  }
})
