/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { TextControl, Button, PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { getCF } from '../../api/getcf';

const Edit = ( { className, attributes, setAttributes } ) => {
  const { name, value, tagName, searchText, replaceText } = attributes;
  const postId = wp.data.select('core/editor').getCurrentPostId()
  let parser = new DOMParser();

  function getCustomField( value ) {
    if ( Array.isArray( value ) ) {
      if ( value.length <= 1 ) {
        value = { string: value[0] }
      } else {
        value = { array: value }
      }
    }
    if ( typeof value === 'string' ) {
      value = { string: value }
    }
    setAttributes( { value } )
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function replace() {
    const searchRegExp = new RegExp(escapeRegExp(searchText), "gi")
    const replaceWith = replaceText
    
    if ( value && value.array ) {
      value.array = value.array.map( v => v.replace(searchRegExp, replaceWith) )
      setAttributes( { value } )
    }
  }

  return (
    <>
     { value && value.array && 
        <ul>
          { value.array.map( v => <li>{ v }</li> ) }
        </ul>
      }
      { value && value.string && value.string.match(/<[^>]*>/g) && <div dangerouslySetInnerHTML={{__html: value.string}} /> }
      { value && value.string && !value.string.match(/<[^>]*>/g) && typeof value.string === 'string' && value.string }
      { !value && <div className="vo-placeholder-block">{ __( "Custom Field Placeholder", "ventureoutdoors" ) }</div>}

      
      <InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'ventureoutdoors' ) }>
          <PanelRow>
            <TextControl
              label={ __( 'Custom field name', 'ventureoutdoors' ) }
              help={ __( 'The name of the custom field', 'ventureoutdoors' ) }
              value={ name }
              onChange={ ( name ) => { setAttributes( { name } ); getCF( name, postId, getCustomField ) } }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={ __( 'Tag name', 'ventureoutdoors' ) }
              help={ __( 'The name of the tag', 'ventureoutdoors' ) }
              value={ tagName }
              onChange={ ( tagName ) => { setAttributes( { tagName } ) } }
            />
          </PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Replace', 'ventureoutdoors' ) }>
          <PanelRow>
            <TextControl
              label={ __( 'Search', 'ventureoutdoors' ) }
              value={ searchText }
              onChange={ ( searchText ) => setAttributes( { searchText } ) }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={ __( 'Replace', 'ventureoutdoors' ) }
              value={ replaceText }
              onChange={ ( replaceText ) => setAttributes( { replaceText } ) }
            />
          </PanelRow>
          <PanelRow>
            <Button 
              variant="primary"
              onClick={ replace }>{ __( 'Replace', 'ventureoutdoors' ) }
            </Button>
          </PanelRow>
				</PanelBody>
      </InspectorControls>
    </>
  );
}

export default Edit;