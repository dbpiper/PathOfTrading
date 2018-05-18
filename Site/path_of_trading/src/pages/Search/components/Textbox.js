import React from 'react';
import styled, { css } from 'styled-components';
import textbox from '../../../shared/styles/textbox';

import Range from './Range';

import Constants from '../../../constants/Constants';

const borderRadius = (props) => {
  return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
};

const textboxRadiusWithButton = css`
   -webkit-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
      -moz-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
           border-radius: ${borderRadius()} 0 0 ${borderRadius()};
`;

const TextboxInput = styled.input.attrs({
  type: "text",
})`
  ${textbox}
   &&& {
     width: ${(props) => (Constants.Textbox.width * (props.canBeRanged ? 2 : 1))}${Constants.Textbox.widthUnit}
     ${props => props.hasButton && textboxRadiusWithButton}
   }
`;


const TextboxDiv = styled.div`
  position: relative;
  display: flex;

`;

const TextboxSibling = styled.div`
  ${TextboxDiv} > & {
    position: absolute;
    display: ${props => props.canBeRanged && props.isRanged ? 'inline-block' : 'none'};
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

export default Textbox;
