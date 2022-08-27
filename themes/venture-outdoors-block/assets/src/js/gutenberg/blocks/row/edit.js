/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
  const blockProps = useBlockProps( {
    className: 'row',
  } );
  

  return (
    <div { ...blockProps }>
      <InnerBlocks />
    </div>
  );
  }

export default Edit;