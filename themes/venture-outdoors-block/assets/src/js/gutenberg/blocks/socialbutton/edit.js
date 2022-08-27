/**
 * WordPress Dependencies.
 */
import colors from "../../api/colors"
import { __ } from '@wordpress/i18n';
import { link } from "@wordpress/icons"
import { ToolbarGroup, ToolbarButton, Popover, TextControl, Button, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, getColorObjectByColorValue } from '@wordpress/block-editor';
import { useState } from "@wordpress/element"

const Edit = ( { className, attributes, setAttributes } ) => {
  const { icon, title, linkObject, colorName } = attributes;
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

  function handleTextChange( x ) {
    setAttributes( { title: x } )
  }

  function buttonHandler() {
    setIsLinkPickerVisible( prev => !prev )
  }

  function handleLinkChange( newLink ) {
    setAttributes( { linkObject: newLink } )
  }

  const currentColorValue = colors.filter( color => {
    return color.name == colorName
  } )[0].color

  function handleColorChange( colorCode ) {
    // from the hex value that the color palette gives us, we need to find its color name
    const { name } = getColorObjectByColorValue( colors, colorCode )
    setAttributes( { colorName: name } )
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
          <PanelRow>
            <TextControl
              label={ __( 'Name of the icon', 'ventureoutdoors' ) }
              help={ __( 'Sets the icon', 'ventureoutdoors' ) }
              value={ icon }
              onChange={ ( icon ) => { setAttributes( { icon } ) } }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText allowedFormats={[]} tagName="a" className={ `social-media-link color-${ colorName }` } value={ title } onChange={ handleTextChange } />
      {isLinkPickerVisible && (
        <Popover position="middle center">
          <LinkControl settings={[]} value={ linkObject } onChange={ handleLinkChange } />
          <Button variant="primary" onClick={ () => setIsLinkPickerVisible( false) } style={ { display: "block", width: "100%" } }>
            Confirm Link
          </Button>
        </Popover>
      )}
    </>
  );
}

export default Edit;