/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
 
  const Edit = () => {
  
  return (
    <div className="promotions-bar">
      <div className="promotions-bar-cont">
        <InnerBlocks />
      </div>
    </div>
  );
}

export default Edit;