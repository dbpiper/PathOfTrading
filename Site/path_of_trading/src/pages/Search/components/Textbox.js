import React from 'react';
import styled from 'styled-components';
import textbox from '../../../shared/styles/textbox';

import Range from './Range';

import Constants from '../../../constants/Constants';

const TextboxInput = styled.input.attrs({
  type: "text",
})`
  ${textbox}
   &&& {
     width: ${(props) => (Constants.Textbox.width * (props.canBeRanged ? 2 : 1))}${Constants.Textbox.widthUnit}
   }
`;

const TextboxDiv = styled.div`
  position: relative;
`;

const TextboxSibling = styled.div`
  ${TextboxDiv} > & {
    position: absolute;
    display: ${props => props.canBeRanged && props.isRanged ? 'inline-block' : 'none'};
    ${'' /* top: 25%;
    bottom: 25%; */}
    right: 0;


  }
`;


function Textbox(props) {
    return (
      <TextboxDiv>
        <TextboxInput
          {...props}
        />
        <TextboxSibling canBeRanged={props.canBeRanged} isRanged={props.isRanged}>
          <Range small/>
        </TextboxSibling>
      </TextboxDiv>
    );
}

export default Textbox
