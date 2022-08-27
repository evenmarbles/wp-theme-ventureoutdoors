/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, PanelBody } from "@wordpress/components";
import { InspectorControls } from '@wordpress/block-editor';
import { isEmpty } from 'lodash';
import { getCF } from '../../api/getcf';


const Edit = ( { className, attributes, setAttributes } ) => {
  const { rates, isPrivate, agent } = attributes;
  const postId = wp.data.select('core/editor').getCurrentPostId()

  function getCustomField( rates ) {
    rates = rates.split('\r\n')
    setAttributes( { rates } )
  }

  getCF( 'rates', postId, getCustomField )
  
  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Block Settings', 'ventureoutdoors' ) }>
          <RadioControl
            label={ __( 'Is Private?', 'ventureoutdoors' ) }
            selected={ isPrivate }
            options={ [
              { label: 'Yes', value: 'yes' },
              { label: "No", value: 'no' },
            ] }
            onChange={ ( optionVal ) => {
              setAttributes( { isPrivate: optionVal } );
            } }
          />
          <RadioControl
            label={ __( 'Who is performing the activity?', 'ventureoutdoors' ) }
            selected={ agent }
            options={ [
              { label: 'Guide', value: 'guide' },
              { label: "Instructor", value: 'instructor' },
            ] }
            onChange={ ( optionVal ) => {
              setAttributes( { agent: optionVal } );
            } }
          />
        </PanelBody>
      </InspectorControls>

      <ul>
        { rates.map( rate => <li>{ rate }</li> ) }
      </ul>
      { (!isEmpty(isPrivate) && isPrivate === "yes" ) && <p>Private tours are only open to your party.</p> }
        <p><em>*Prices do not include gratuity for your { agent }.</em></p>

    </>
  );
}

export default Edit;