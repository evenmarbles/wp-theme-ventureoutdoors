/**
 * WordPress Dependencies.
 */
import { __ } from "@wordpress/i18n";
import { TextControl, PanelBody, PanelRow } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
 
const Edit = ( { className, attributes, setAttributes, clientId } ) => {
  const { blockInclude, blockId } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __('Block Settings', 'ventureoutdoors' ) } initialOpen={true}>
          <PanelRow>
            <TextControl 
              label={ __( 'Block Name', 'ventureoutdoors' ) }
              value={ blockInclude } 
              onChange={ ( blockInclude ) => setAttributes({ blockInclude }) } 
            />
          </PanelRow>
          <PanelRow>
            <TextControl 
              label={ __( 'Block ID', 'ventureoutdoors' ) }
              value={ blockId } 
              onChange={ ( blockId ) => setAttributes({ blockId }) } 
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className={  "vo-placeholder-block" }>
        { __( "Post Content Part Placeholder", "ventureoutdoors" ) }
      </div>
    </>

  );
}

export default Edit;
