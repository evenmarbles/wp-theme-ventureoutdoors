/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, TextControl, PanelBody } from "@wordpress/components";
import { InspectorControls } from '@wordpress/block-editor';


const Edit = ( { className, attributes, setAttributes } ) => {
  const { itemId, flowId, isPrivate } = attributes;
  
  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Block Settings', 'ventureoutdoors' ) }>
          <RadioControl
            label={ __( 'Is Private Instruction?', 'ventureoutdoors' ) }
            selected={ isPrivate }
            options={ [
              { label: 'Yes', value: 'yes' },
              { label: "No", value: 'no' },
            ] }
            onChange={ ( optionVal ) => {
              setAttributes( { isPrivate: optionVal } );
            } }
          />
          <TextControl 
            label={ __( 'Item ID', 'ventureoutdoors' ) }
            value={ itemId } 
            onChange={ ( itemId ) => setAttributes( { itemId } ) } 
          />
          <TextControl 
            label={ __( 'Flow ID', 'ventureoutdoors' ) }
            value={ flowId } 
            onChange={ ( flowId ) => setAttributes( { flowId } ) } 
          />
        </PanelBody>
      </InspectorControls>

      <div className="vo-placeholder-block" >{ __( "Booking Placeholder", "ventureoutdoors" ) }</div>
    </>
  );
}

export default Edit;