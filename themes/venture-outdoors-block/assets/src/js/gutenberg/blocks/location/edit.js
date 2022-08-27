/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { directions } = attributes;

  return (
    <>
      <h4>Driving Directions</h4>
      <RichText
          tagName="p"
          className={ className }
          value={ directions }
          allowedFormats={ [ 'core/bold', 'core/italic' ] }
          onChange={ ( directions ) => setAttributes( { directions } ) }
          placeholder={ __( 'Driving Directions...', 'ventureoutdoors' ) }
      />
    </>
  );
}

export default Edit;