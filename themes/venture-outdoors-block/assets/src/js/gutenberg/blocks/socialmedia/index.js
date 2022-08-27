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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/socialmedia", {
  title: __("Social Media", 'ventureoutdoors'),
  icon: 'share',
  category: "ventureoutdoors",
  attributes: {
    colorName: { type: "string", default: "senary" }
  },

  edit: Edit,

  save( { attributes: { colorName} } ) {
    const blockProps = useBlockProps.save( {
      className: `h5 montserrattlt text-center color-${ colorName }`
    });

    return (
      <span className='social-media'>
        <h3 { ...blockProps }>Connect With</h3>
        <div className="social-media-cont">
          <InnerBlocks.Content />
        </div>
      </span>
    )
  }
})
