/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
const Edit = () => {
  const blockProps = useBlockProps( {
    className: 'container',
  } );
  
  return (
    <div style={{ border: "1px solid #333" }}>
      <div { ...blockProps }>
        <InnerBlocks />
      </div>
    </div>
  );
}

export default Edit;