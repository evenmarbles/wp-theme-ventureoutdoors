/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { InnerBlocks, RichText, InspectorControls } from '@wordpress/block-editor';
 
const Edit = ( { className, attributes, setAttributes } ) => {
  const { id, title } = attributes;

  return (
    <>
      <div>
        <RichText
          tagName="h4"
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
				</PanelBody>
			</InspectorControls>
    </>
  );
}

export default Edit;