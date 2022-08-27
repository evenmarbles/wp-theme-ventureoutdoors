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
registerBlockType("vo-blocks/rating", {
  title: __("Rating", 'ventureoutdoors'),
  icon: 'star-filled',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
  },

  edit: Edit,

  save() {
    const blockProps = useBlockProps.save( {
      className: "hightlighted-section"
    });

    return (
      <div { ...blockProps }>
        <ul className="list-style-none">
          <li>
            <h4 className="flush-top montserrattlt">Highly Rated On</h4>
          </li>
          <InnerBlocks.Content />
        </ul>
      </div>
    )
  }
})
