/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
const Edit = () => {
  const blockProps = useBlockProps( {
    className: 'banner-overlay valign-end disblock-xs-down',
  } );
  
  return (
      <div { ...blockProps }>
        <div className="banner-overlay-cont valign-middle-item">
          <div className="banner-txt text-shadow-black">
            <InnerBlocks allowedBlocks={["core/heading", "core/paragraph"]} />
          </div>
        </div>
      </div>
  );
}

export default Edit;