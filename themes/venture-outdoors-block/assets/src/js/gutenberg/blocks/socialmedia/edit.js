/**
 * WordPress Dependencies.
 */
import colors from "../../api/colors"
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { InspectorControls, getColorObjectByColorValue } from '@wordpress/block-editor';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { colorName } = attributes;

  const currentColorValue = colors.filter( color => {
    return color.name == colorName
  } )[0].color

  function handleColorChange( colorCode ) {
    // from the hex value that the color palette gives us, we need to find its color name
    const { name } = getColorObjectByColorValue( colors, colorCode )
    setAttributes( { colorName: name } )
  }

  const blockProps = useBlockProps( {
    className: `h5 montserrattlt text-center color-${ colorName }`
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={ true }>
          <PanelRow>
            <ColorPalette disableCustomColors={ true } clearable={ false } colors={ colors } value={currentColorValue} onChange={ handleColorChange } />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <span className='social-media'>
        <h3 { ...blockProps }>Connect With</h3>
        <div className="social-media-cont">
          <InnerBlocks allowedBlocks={ ['vo-blocks/socialbutton'] } />
        </div>
      </span>
    </>
  );
}

export default Edit;