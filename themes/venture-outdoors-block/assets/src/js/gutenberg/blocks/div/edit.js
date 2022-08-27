/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { id } = attributes;
  const blockProps = useBlockProps();
  
  return (
    <>
      <div { ...blockProps }>
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