/**
 * WordPress Dependencies.
 */
import colors from "../../api/colors"
import { __ } from '@wordpress/i18n';
import { link } from "@wordpress/icons"
import { ToolbarGroup, ToolbarButton, Popover, Button, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { useBlockProps, RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, getColorObjectByColorValue } from "@wordpress/block-editor"
import { useState } from "@wordpress/element"

const Edit = ( { className, attributes, setAttributes } ) => { 
  const { text, linkObject, colorName } = attributes
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
  const blockProps = useBlockProps( {
    className: `btn-${ colorName ? colorName : 'primary' }`,
  } );

  function handleTextChange( x ) {
    setAttributes( { text: x } )
  }

  function buttonHandler() {
    setIsLinkPickerVisible( prev => !prev )
  }

  function handleLinkChange( newLink )  {
    setAttributes( { linkObject: newLink } )
  }

  const currentColorValue = colors.filter( color => {
    return color.name == colorName
  } )[0].color

  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    const { name } = getColorObjectByColorValue(colors, colorCode)
    setAttributes({ colorName: name })
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={ buttonHandler } icon={ link } />
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={ true }>
          <PanelRow>
            <ColorPalette disableCustomColors={ true } clearable={ false } colors={ colors } value={currentColorValue} onChange={ handleColorChange } />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText allowedFormats={ [] } tagName="a" { ...blockProps } value={ text } onChange={ handleTextChange } />
      {isLinkPickerVisible && (
        <Popover position="middle center">
          <LinkControl settings={ [] } value={ linkObject } onChange={ handleLinkChange } />
          <Button variant="primary" onClick={ () => setIsLinkPickerVisible( false ) } style={ { display: "block", width: "100%" } }>
            Confirm Link
          </Button>
        </Popover>
      )}
    </>
  );
}

export default Edit;