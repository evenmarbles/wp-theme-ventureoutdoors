/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {

  const blockProps = useBlockProps( {
    className: "wysiwyg-cntnt"
  });
  
  return (
    <section { ...blockProps }>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 center-block wysiwyg-cntnt-text content">
            <InnerBlocks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Edit;