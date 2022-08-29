/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
 
const Edit = ( { className, attributes, setAttributes } ) => {
  const { posts } = attributes;
  const postId = wp.data.select('core/editor').getCurrentPostId();

  const filterRoute = async () => {
    const response = await fetch( `${ siteConfig.restUrl }related?_wpnonce=${siteConfig?.ajax_nonce ?? ''}&id=${ postId }`, {
      method: 'GET',
      redirect: 'follow', 
      referrer: 'no-referrer', 
    })
    .then(
      returned => {
        if (returned.ok) return returned;
        throw new Error('Network response was not ok.');
      }
    );

    let data = await response.json();
    data = data.posts;
    setAttributes( { posts: data } );
  }
  
  filterRoute();
  
  return (
    <div>
      { posts.map( post => {
        return ( 
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4">
            <a className="sngl-activity-similar-item" href={ post.permalink }>{ post.title }</a>
          </div>
        ) 
      } ) }
    </div>
  )
}

export default Edit;