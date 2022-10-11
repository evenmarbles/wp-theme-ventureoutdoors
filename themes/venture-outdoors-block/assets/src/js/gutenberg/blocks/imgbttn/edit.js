/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { link } from "@wordpress/icons"
import { Placeholder, Button, Popover, CheckboxControl, ToolbarGroup, ToolbarButton, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, BlockIcon, BlockControls, InspectorControls, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
import { useState } from "@wordpress/element"
import Cloudinary from '../../api/image'

const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { public_id, version, linkObject, is_lazyload, is_responsive, is_placeholder } = attributes;
  const isSourceAvailable = typeof public_id !== "undefined";
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
  const blockProps = useBlockProps();

  const src = `https://res.cloudinary.com/ventureoutdoors/image/upload/v${version}/${public_id}`

  window.addEventListener( 'MediaSelected', function( e ) {
    if ( e.detail.id !== clientId) {
      return
    }
    let data = e.detail.assets[0]
    setAttributes( {
      src: data.secure_url,
      context: data.context ? data.context.custom : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
      version: data.version
    })
  } )

  function openML () {
    Cloudinary.openMediaLibrary( clientId );
  }

  function buttonHandler() {
    setIsLinkPickerVisible(prev => !prev)
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
      { isSourceAvailable && <img { ...blockProps } src={ src } /> }
      { !isSourceAvailable && (
        <Placeholder
          icon={ <BlockIcon icon="format-image" /> }
          label={ __("Image Block", "ventureoutdoors") }
          instructions={__("Add a Cloudinary image to your site.","ventureoutdoors")} >
          <Button 
            variant="primary"
            onClick={ openML }>{ __("Choose Image", "ventureoutdoors") }
          </Button>
        </Placeholder>
      ) }
      { isLinkPickerVisible && (
        <Popover position="middle center">
          <LinkControl settings={[]} value={linkObject} onChange={ (linkObject) => setAttributes( { linkObject } ) } />
          <Button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display: "block", width: "100%" }}>
            Confirm Link
          </Button>
        </Popover>
      ) }
      <InspectorControls>
        <PanelBody title={ __('Image Settings', 'ventureoutdoors' ) } initialOpen={ true }>
          <PanelRow>
            <CheckboxControl
              label={ __( 'lazyload', 'ventureoutdoors' ) }
              checked={ is_lazyload }
              onChange={ () => { setAttributes( { is_lazyload : !is_lazyload } ) } }
            />
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label={ __( 'responsive', 'ventureoutdoors' ) }
              checked={ is_responsive }
              onChange={ () => { setAttributes( { is_responsive : !is_responsive } ) } }
            />				
          </PanelRow>
          <PanelRow>
            <CheckboxControl
              label={ __( 'placeholder', 'ventureoutdoors' ) }
              checked={ is_placeholder }
              onChange={ () => { setAttributes( { is_placeholder : !is_placeholder } ) } }
            />				
          </PanelRow>
        </PanelBody>
      </InspectorControls>  
    </>
  );
}

export default Edit;