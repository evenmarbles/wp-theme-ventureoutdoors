/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { Placeholder, Button, TextControl, TextareaControl, ToolbarGroup, CheckboxControl, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, BlockIcon, BlockControls, InspectorControls } from "@wordpress/block-editor";
import Cloudinary from '../../api/image'
 
const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { images } = attributes;
  const isSourceAvailable = images && typeof images[0].src !== "undefined";
  const blockProps = useBlockProps();
  
  window.addEventListener( 'MediaSelected', function( e ) {
    if ( e.detail.id !== clientId) {
      return
    }
    let data = e.detail.assets
    let images = []
    data.forEach( ( x, i) => {
      images.push( {
        src: x.secure_url,
        public_id: x.public_id,
        context: x.context ? x.context.custom : '',
        derived: x.derived ? x.derived : '',
        height: x.height,
        width: x.width,
        version: x.version
      } )
    })
    setAttributes( { images })
  } )

  function openML () {
    Cloudinary.openMediaLibrary( clientId, { multiple: true, 
      default_transformations: [
      [{crop: "scale", height: 400},{effect: "pixelate:20"}],
      [{crop: "scale", height: 400},{quality: "auto"},{fetch_format: "auto"}],
    ] } );
  }

  let imageHTML = [];
  if ( isSourceAvailable ) {
    for (let i = 0; i < images.length && i < 3; i++) {
      imageHTML.push(<div style={ { float:'left',width:33.33+'%' } }><img src={ images[i].src } /></div>)
    }
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
      { isSourceAvailable && <div style={ { content:'',clear:'both',display:'table' } }>{ imageHTML }</div> }
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