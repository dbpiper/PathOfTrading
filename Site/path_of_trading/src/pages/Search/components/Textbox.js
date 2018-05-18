import React from 'react';
import styled, { css } from 'styled-components';

import textbox from 'shared/styles/textbox';

import Constants from 'constants/Constants';

import Range from './Range';

const borderRadius = (props) => {
  if (!props.search) {
    return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
  } else {
    return Constants.SearchBox.borderRadus + Constants.SearchBox.borderRadiusUnit;
  }
};

const width = (props) => {
  if (!props.search) {
    return (Constants.Textbox.width * (props.canBeRanged ? 2 : 1)) + Constants.Textbox.widthUnit;
  } else {
    return (Constants.SearchBox.width * (props.canBeRanged ? 2 : 1)) + Constants.SearchBox.widthUnit;
  }
};

const height = (props) => {
  if (!props.search) {
    return Constants.Textbox.height + Constants.Textbox.heightUnit;
  } else {
    return Constants.SearchBox.height + Constants.SearchBox.heightUnit;
  }
};

const TextboxInput = styled.input.attrs({
  type: "text",
})`
   ${textbox}

   &&& {
     width: ${props => width(props)};
     height: ${props => height(props)};

    ${props => props.hasButton && css`
       -webkit-border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
          -moz-border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
               border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
    `}
`;


const TextboxDiv = styled.div`
  position: relative;
  display: flex;

`;

const TextboxSibling = styled.div`
  ${TextboxDiv} > & {
    position: absolute;
    display: ${props => props.canBeRanged && props.isRanged ? 'flex' : 'none'};
    right: ${Constants.Textbox.Ranged.rightOffset}${Constants.Textbox.Ranged.rightOffsetUnit};
    bottom: ${Constants.Textbox.Ranged.bottomOffset}${Constants.Textbox.Ranged.bottomOffsetUnit};
  }
`;


function Textbox(props) {
    return (
      <TextboxDiv>
        <TextboxInput
          {...props}
        />
        <TextboxSibling canBeRanged={props.canBeRanged} isRanged={props.isRanged}>
          <Range small={true}/>
        </TextboxSibling>
      </TextboxDiv>
    );
}

export default Textbox;
