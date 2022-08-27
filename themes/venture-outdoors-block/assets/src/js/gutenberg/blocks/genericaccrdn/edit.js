/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';
 
const Edit = ( { className, attributes, setAttributes } ) => {
  const blockProps = useBlockProps( {
    className: 'accrdn',
  } );
  
  const { id, icon, title, content } = attributes;

  return (
    <div { ...blockProps }>
      <span className={ icon ? `icon-${icon}` : '' }>
      </span>
      <RichText
          tagName="h4"
          className={ className }
          value={ title }
          allowedFormats={ [] }
          onChange={ ( title ) => setAttributes( { title } ) }
          placeholder={ __( 'Title', 'ventureoutdoors' ) }
      />
      <div className="accrdn-cont">
        <RichText
            { ...blockProps }
            tagName="p"
            className={ className }
            value={ content }
            allowedFormats={ [ 'core/bold', 'core/italic' ] }
            onChange={ ( content ) => setAttributes( { content } ) }
            placeholder={ __( 'Content', 'ventureoutdoors' ) }
        />
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
						label={ __( 'Name of the icon', 'ventureoutdoors' ) }
						help={ __( 'Sets the icon', 'ventureoutdoors' ) }
            value={ icon }
						onChange={ ( icon ) => { setAttributes( { icon } ) } }
					/>
				</PanelBody>
			</InspectorControls>

    </div>
  );
}

export default Edit;