/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
 
const Edit = ( { className, attributes, setAttributes } ) => {
   const { typeList } = attributes

  const filterRoute = async () => {
     const response = await fetch( `${ siteConfig.restUrl }filter?_wpnonce=${siteConfig?.ajax_nonce ?? ''}`, {
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
    data = data.types;
    setAttributes( { typeList: data } );
  }
  
  filterRoute();
  
  return (
    <div>
      <h2 class="h5 flush-bottom">Activity Types Carousel</h2>
      <div class="row">
        <ul class="flush-top flush-sides col-xs-6">
          { typeList ? typeList.map( ( { title, permalink, thumbnail, count } ) => {
            return <li>{ title }</li>
          } ) : "" }
        </ul>
      </div>
    </div>
  );
}

export default Edit;