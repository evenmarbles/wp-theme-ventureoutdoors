/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { TextControl, PanelBody, PanelRow } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { } from '@wordpress/block-editor';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { id } = attributes;

  const blockProps = useBlockProps( {
    className: 'accordion sngl-activity-accordion'
  } );
  
  return (
    <>
      <InspectorControls>
        <PanelBody title={ __('Block Settings', 'ventureoutdoors' ) } initialOpen={true}>
          <PanelRow>
            <TextControl 
              label={ __( 'Block Id', 'ventureoutdoors' ) }
              value={ id } 
              onChange={ ( id ) => setAttributes({ id }) } 
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <InnerBlocks allowedBlocks={ ['vo-blocks/accrdn'] } />
      </div>
    </>
  );
}

export default Edit;