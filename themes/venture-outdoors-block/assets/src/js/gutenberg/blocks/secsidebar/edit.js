/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {

  const blockProps = useBlockProps();
  
  return (
    <div { ...blockProps }>
      <InnerBlocks allowedBlocks={ ['vo-blocks/snglactivityaccrdn'] } />
    </div>
  );
}

export default Edit;