/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl, TextControl } from '@wordpress/components';
import { InnerBlocks, RichText, InspectorControls } from '@wordpress/block-editor';
 
const Edit = ( { className, attributes, setAttributes } ) => {
  const { id, title, altTitle, titlePrefix, titleSuffix, addPrefix, addSuffix } = attributes;

  return (
    <>
      <div>
        <RichText
          tagName="h3"
          value={ title }
          allowedFormats={ [] }
          onChange={ ( title ) => { setAttributes( { title } ) } }
          placeholder={ __( 'Title', 'ventureoutdoors' ) }
        />
        <InnerBlocks />
      </div>

      <InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'ventureoutdoors' ) }>
          <TextControl
						label={ __( 'The element ID', 'ventureoutdoors' ) }
						help={ __( 'Sets the elements id', 'ventureoutdoors' ) }
            value={ id }
						onChange={ ( id ) => { setAttributes( { id } ) } }
					/>
          <TextControl
						label={ __( 'Alternate title', 'ventureoutdoors' ) }
						help={ __( 'Alternate title for desktop', 'ventureoutdoors' ) }
            value={ altTitle }
						onChange={ ( altTitle ) => { setAttributes( { altTitle } ) } }
					/>
          <RadioControl
            label={ __( 'Add Prefix?', 'ventureoutdoors' ) }
            selected={ addPrefix }
            options={ [
              { label: 'Yes', value: 'yes' },
              { label: "No", value: 'no' },
            ] }
            onChange={ ( optionVal ) => {
              setAttributes( { addPrefix: optionVal } );
            } }
          />
          <RadioControl
            label={ __( 'Add Suffix?', 'ventureoutdoors' ) }
            selected={ addSuffix }
            options={ [
              { label: 'Yes', value: 'yes' },
              { label: "No", value: 'no' },
            ] }
            onChange={ ( optionVal ) => {
              setAttributes( { addSuffix: optionVal } );
            } }
          />
				</PanelBody>
			</InspectorControls>
    </>
  );
}

export default Edit;