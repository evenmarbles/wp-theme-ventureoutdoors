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
import HoverCard from './hovercard';

/**
 * Register block type.
 */
registerBlockType("vo-blocks/activitygrid", {
  title: __("Activity Grid", 'ventureoutdoors'),
  icon: 'tagcloud',
  category: "ventureoutdoors",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    posts: { type: "array", default: [] }
  },

  edit: Edit,

  save( { attributes: { posts } }) {

    return (
      <div class="row grid eqhwrap disblock-xxs facetwp-template">
        { posts.map( post => {
          return ( 
            <HoverCard 
              permalink={ post.permalink } 
              title={ post.title } 
              guides_choice={ post.guides_choice } 
              thumbnail={ post.thumbnail }
              duration={ post.duration }
              cost={ post.cost }
              location={ post.location }
              area={ post.area }
              activity_type={ post.activity_type }
              difficulty={ post.difficulty }
              solitude={ post.solitude }
              excerpt={ post.excerpt }
            />
          ) 
        } ) }
    </div>
    )
  }
})
