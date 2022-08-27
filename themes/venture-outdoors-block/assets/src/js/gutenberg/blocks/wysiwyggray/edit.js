/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {

  const blockProps = useBlockProps( {
    className: "wysiwyg-gray"
  } ); 

  return (
    <section { ...blockProps }>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 center-block">
            <div class="wysiwyg-gray-item">
              <div class="wysiwyg-gray-cnt bgc-tertiary content">
                <InnerBlocks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Edit;