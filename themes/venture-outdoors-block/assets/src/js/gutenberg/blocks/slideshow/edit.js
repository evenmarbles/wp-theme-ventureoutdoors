/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
const Edit = () => {
  const blockProps = useBlockProps( {
    className: 'banner-img hidden-xs-down',
  } );
  
  return (
    <InnerBlocks allowedBlocks={ [ 'vo-blocks/slide' ] } />
  );
}

export default Edit;