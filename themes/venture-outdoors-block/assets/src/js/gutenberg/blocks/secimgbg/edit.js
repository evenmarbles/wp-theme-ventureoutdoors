/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { Button, TextControl, RadioControl, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import Cloudinary from '../../api/image'

const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { src, public_id, bkgClassName, option } = attributes;

  const blockProps = useBlockProps( {
    className: 'sec-with-imgbg',
  } );

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
      <InspectorControls>
        <PanelBody title={ __('Background Settings', 'ventureoutdoors' ) } initialOpen={true}>
          <PanelRow>
            <Button variant='secondary' onClick={ openML }>Choose Image</Button>
          </PanelRow>
          <PanelRow>
            <p>{ 'File: ' + ( public_id === null ? '' : public_id ) }</p>
          </PanelRow>
          <PanelRow>
            <TextControl 
              label={ __( 'Additional CSS class(es)', 'ventureoutdoors' ) }
              value={ bkgClassName } 
              onChange={ ( bkgClassName ) => setAttributes({ bkgClassName }) } 
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title={ __( 'Block Settings', 'ventureoutdoors' ) }>
					<RadioControl
						label={ __( 'Select slant background', 'ventureoutdoors' ) }
						help={ __( 'Controls a slant background', 'ventureoutdoors' ) }
						selected={ option }
						options={ [
							{ label: 'Normal', value: 'normalbg' },
							{ label: "Slant", value: 'slantbg' },
						] }
						onChange={ ( optionVal ) => { setAttributes( { option: optionVal } ) } }
					/>
				</PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <InnerBlocks />
        <img src={ src } className="sec-imgbg" />
      </section>
    </>
  );
}

export default Edit;