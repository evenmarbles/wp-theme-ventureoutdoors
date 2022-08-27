/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { link } from "@wordpress/icons"
import { Placeholder, Button, TextControl, ToolbarGroup, ToolbarButton, Popover, CheckboxControl, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, RichText, BlockIcon, BlockControls, InspectorControls, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
import { useState } from "@wordpress/element"
import Cloudinary from '../../api/image'
 
const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { title, text, permalink, src } = attributes
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
  const isSourceAvailable = typeof src !== "undefined";
  const blockProps = useBlockProps();
  
  function handleTextChange( x ) {
    setAttributes( { text: x } )
  }

  function buttonHandler() {
    setIsLinkPickerVisible( prev => !prev )
  }

  function handleLinkChange( newLink )  {
    setAttributes( { permalink: newLink } )
  }


  window.addEventListener( 'MediaSelected', function( e ) {
    if ( e.detail.id !== clientId) {
      return
    }
    let data = e.detail.assets[0]
    setAttributes( {
      src: data.secure_url,
      alt: data.context && data.context.custom ? data.context.custom.alt : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
    })
  } )

  function openML () {
    Cloudinary.openMediaLibrary( clientId );
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={ buttonHandler } icon={ link } />
        </ToolbarGroup>
        <ToolbarGroup>
          {isSourceAvailable && (
            <Button 
              showTooltip
              icon="update-alt" 
              onClick={ openML }
              label={ __("Choose Image", "ventureoutdoors") }
            />
          ) }
        </ToolbarGroup>
      </BlockControls>
      <RichText
        { ...blockProps }
        tagName="p"
        className={ className }
        value={ title }
        allowedFormats={ [ 'core/bold', 'core/italic' ] }
        onChange={ ( title ) => setAttributes( { title } ) }
        placeholder={ __( 'Title', 'ventureoutdoors' ) }
      />
      <RichText 
        allowedFormats={ [] } 
        tagName="a" 
        value={ text } 
        onChange={ handleTextChange }
        placeholder={ __( 'Button', 'ventureoutdoors' ) }
      />
      {isLinkPickerVisible && (
        <Popover position="middle center">
          <LinkControl settings={ [] } value={ permalink } onChange={ handleLinkChange } />
          <Button variant="primary" onClick={ () => setIsLinkPickerVisible( false ) } style={ { display: "block", width: "100%" } }>
            Confirm Link
          </Button>
        </Popover>
      ) }
      { isSourceAvailable && <img { ...blockProps } src={ src } /> }
      { !isSourceAvailable && (
        <Placeholder
          icon={ <BlockIcon icon="format-image" /> }
          label={ __("Generic Image Block", "ventureoutdoors") }
          instructions={__("Add a Cloudinary image to your site.","ventureoutdoors")} >
          <Button 
            variant="primary"
            onClick={ openML }>{ __("Choose Image", "ventureoutdoors") }
          </Button>
        </Placeholder>
      ) }
    </>

  );
}

export default Edit;
