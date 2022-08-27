/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { Button, TextControl, RadioControl, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import Cloudinary from '../../api/image'

const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { src, bkgClassName, option } = attributes;

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
      derived: data.derived ? data.derived : '',
      height: data.height,
      width: data.width,
      version: data.version
    })
  } )

  function openML () {
    Cloudinary.openMediaLibrary( clientId, { default_transformations: [
      [{quality: "auto"},{fetch_format: "auto"}],
      [{crop: "scale", width: 500},{quality: "auto"},{fetch_format: "auto"}],
      [{crop: "scale", width: 800},{quality: "auto"},{fetch_format: "auto"}],
      [{crop: "scale", width: 1080},{quality: "auto"},{fetch_format: "auto"}],
      [{crop: "scale", width: 1600},{quality: "auto"},{fetch_format: "auto"}],
    ] } );
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __('Background Settings', 'ventureoutdoors' ) } initialOpen={true}>
          <PanelRow>
            <Button variant='secondary' onClick={ openML }>Choose Image</Button>
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
						onChange={ ( optionVal ) => {
							setAttributes( { optionVal } );
						} }
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