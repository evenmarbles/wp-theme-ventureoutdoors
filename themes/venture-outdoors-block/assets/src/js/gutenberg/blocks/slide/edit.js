/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n'
import { Placeholder, Button, CheckboxControl, ToolbarGroup, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, BlockIcon, BlockControls, InspectorControls } from "@wordpress/block-editor";
import Cloudinary from '../../api/image'

const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { src, is_lazyload, is_responsive, is_placeholder } = attributes
  const isSourceAvailable = typeof src !== "undefined";
  const blockProps = useBlockProps();

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
  
  return (
    <>
      <BlockControls>
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
          label={ __("Slide Block", "ventureoutdoors") }
          instructions={__("Add a Cloudinary background image to your slide.","ventureoutdoors")} >
          <Button 
            variant="primary"
            onClick={ openML }>{ __("Choose Image", "ventureoutdoors") }
          </Button>
        </Placeholder>
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