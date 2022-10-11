/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Placeholder, Button, CheckboxControl, ToolbarGroup, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, RichText, BlockIcon, BlockControls, InspectorControls } from '@wordpress/block-editor';
import Cloudinary from '../../api/image'


const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { content, author, public_id, version, is_lazyload, is_responsive, is_placeholder } = attributes;
  const isSourceAvailable = typeof public_id !== "undefined";

  const blockProps = useBlockProps( {
    className: 'flush-top',
  } );
  
  const src = `https://res.cloudinary.com/ventureoutdoors/image/upload/v${version}/${public_id}`

  window.addEventListener( 'MediaSelected', function( e ) {
    if ( e.detail.id !== clientId) {
      return
    }
    let data = e.detail.assets[0]
    setAttributes( {
      context: data.context ? data.context.custom : '',
      public_id: data.public_id,
      height: data.height,
      width: data.width,
      version: data.version,
      transformation: data.derived && data.derived[0].raw_transformation ? data.derived[0].raw_transformation : ''
    })
  } )

  function openML () {
    Cloudinary.openMediaLibrary( clientId );
  }

  return (
    <>
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
          label={ __("Testimonial Site Block", "ventureoutdoors") }
          instructions={__("Add a Cloudinary image image for testimonial site.","ventureoutdoors")} >
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