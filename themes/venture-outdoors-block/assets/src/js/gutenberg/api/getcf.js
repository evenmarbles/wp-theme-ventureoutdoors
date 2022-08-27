export const getCF = async ( name, postId, callback ) => {
  
  if ( Array.isArray( name ) ) {
    name = name.join(',')
  }

  const response = await fetch( `${ siteConfig.restUrl }acf?id=${ postId }&name=${ name }`, {
    method: 'GET',
    redirect: 'follow', 
    referrer: 'no-referrer', 
  })
  .then(
    returned => {
      if (returned.ok) return returned
      throw new Error('Network response was not ok.')
    }
  );

  let data = await response.json()
  callback( data.value )
}
