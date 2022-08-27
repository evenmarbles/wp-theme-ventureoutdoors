/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
const Edit = () => {
  const blockProps = useBlockProps( {
    className: 'banner',
  } );
  
  return (
      <div { ...blockProps }>
        <div className="banner-item">
          <InnerBlocks allowedBlocks={ [ 'vo-blocks/slideshow', 'vo-blocks/banneroverlay' ] } />
        </div>
      </div>
  );
}

export default Edit;