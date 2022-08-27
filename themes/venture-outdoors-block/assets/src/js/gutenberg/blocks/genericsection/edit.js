/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {

  const blockProps = useBlockProps();
  
  return (
    <section { ...blockProps }>
      <InnerBlocks />
    </section>
  );
}

export default Edit;