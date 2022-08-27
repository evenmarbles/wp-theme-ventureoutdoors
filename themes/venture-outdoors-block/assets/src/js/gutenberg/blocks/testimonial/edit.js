/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';


const Edit = ( { className, attributes, setAttributes } ) => {
  const { content, author } = attributes;

  const blockProps = useBlockProps( {
    className: 'flush-top',
  } );
  
  return (
    <div className="testimonial-content">
      <div class="testimonial">
        <div class="testimonial-inner icon-qoute-open icon-qoute-close">
          <RichText
              { ...blockProps }
              tagName="p"
              className={ className }
              value={ content }
              allowedFormats={ [ 'core/bold', 'core/italic' ] }
              onChange={ ( content ) => setAttributes( { content } ) }
              placeholder={ __( 'Testimonial...', 'ventureoutdoors' ) }
          />
          <RichText
              tagName="span"
              className={ className }
              value={ author }
              allowedFormats={ [] }
              onChange={ ( author ) => setAttributes( { author } ) }
              placeholder={ __( 'Author', 'ventureoutdoors' ) }
          />
        </div>
      </div>
    </div>
  );
}

export default Edit;