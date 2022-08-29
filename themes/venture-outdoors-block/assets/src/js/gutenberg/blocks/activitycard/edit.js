/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
 
const Edit = ( { className, attributes, setAttributes } ) => {

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
    data = data.type;
    setAttributes( { typeList: data } );
  }
  
  filterRoute();
  
  return wp.element.createElement(
    "div", { className: "vo-placeholder-block" }, __( "Activity Type Carousel Placeholder", "ventureoutdoors" )
  )
}

export default Edit;