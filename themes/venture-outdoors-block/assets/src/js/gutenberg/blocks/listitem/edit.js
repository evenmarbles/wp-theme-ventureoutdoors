/**
 * WordPress Dependencies.
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
 
const Edit = () => {
  const blockProps = useBlockProps();
  
  return (
      <li { ...blockProps }>
        <InnerBlocks />
      </li>
  );
}

export default Edit;