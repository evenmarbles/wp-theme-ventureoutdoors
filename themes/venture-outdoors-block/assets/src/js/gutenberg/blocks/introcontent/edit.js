/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {

  const blockProps = useBlockProps( {
    className: "intro-content"
  });
  
  return (
    <section { ...blockProps }>
    <div className="container">
      <div className="row">
        <InnerBlocks />
      </div>
    </div>
  </section>
  );
}

export default Edit;