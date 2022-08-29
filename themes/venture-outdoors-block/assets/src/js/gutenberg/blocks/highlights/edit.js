/**
 * WordPress Dependencies.
 */
import { useBlockProps } from '@wordpress/block-editor';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { data } = attributes
  const postId = wp.data.select('core/editor').getCurrentPostId()
  const blockProps = useBlockProps()
  
  const getHeighlights = async () => {
    const response = await fetch( `${ siteConfig.restUrl }highlights?_wpnonce=${siteConfig?.ajax_nonce ?? ''}&id=${postId}`, {
      method: 'GET',
      redirect: 'follow', 
      referrer: 'no-referrer', 
    })
    .then(
      returned => {
        if (returned.ok) return returned;
        throw new Error('Network response was not ok.')
      }
    );

    let data = await response.json()
    setAttributes( { data: data.highlights } )
  }
  getHeighlights()

  return (
    <div { ...blockProps }>
      <div>
        <h2 class="h5 flush-bottom">Tour Highlights</h2>
        <div class="row">
          <ul class="check-list flush-top flush-sides col-xs-6">
            { data ? data.map( highlight => {
              return <li>{ highlight }</li>
            } ) : "" }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Edit;