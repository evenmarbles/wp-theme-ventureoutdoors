/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from "@wordpress/block-editor";


const Edit = () => {

  return (
    <>
    <header className="masthead text-center">
      <div className="masthead-cont valign-middle">
        <div className="masthead-incont valign-middle-item">
          <InnerBlocks />
        </div>
      </div>
      <div className="cloudinary-hero-img w-embed">
        <img className="masthead-img img-responsive" src="https://res.cloudinary.com/ventureoutdoors/image/upload/hero-images/reviews" />
      </div>
    </header>
  </>

  );
}

export default Edit;