/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Edit = () => {
  const blockProps = useBlockProps( {
    className: "hightlighted-section"
  });

  return (
    <>
      <div { ...blockProps }>
        <ul className="list-style-none">
          <li>
            <h4 className="flush-top montserrattlt">Highly Rated On</h4>
          </li>
          <InnerBlocks allowedBlocks={ ['vo-blocks/listitem'] } />
        </ul>
      </div>
    </>
  );
}

export default Edit;