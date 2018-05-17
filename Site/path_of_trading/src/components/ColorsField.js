import React from 'react';

import ColorField from './ColorField';

import styled from 'styled-components';

import Constants from '../Constants';

const ColorsContainer = styled.span``;

function ColorsField(props) {
  return (
    <ColorsContainer>
          <ColorField
            placeholder={Constants.ColorComponents.Red.placeholder}
            underlineColor={Constants.ColorComponents.Red.underlineColor}
            focusedUnderlineColor={Constants.ColorComponents.Red.focusedUnderlineColor}
          />
          <ColorField
            placeholder={Constants.ColorComponents.Green.placeholder}
            underlineColor={Constants.ColorComponents.Green.underlineColor}
            focusedUnderlineColor={Constants.ColorComponents.Green.focusedUnderlineColor}
          />
          <ColorField
            placeholder={Constants.ColorComponents.Blue.placeholder}
            underlineColor={Constants.ColorComponents.Blue.underlineColor}
            focusedUnderlineColor={Constants.ColorComponents.Blue.focusedUnderlineColor}
          />
          <ColorField
            placeholder={Constants.ColorComponents.White.placeholder}
            underlineColor={Constants.ColorComponents.White.underlineColor}
            focusedUnderlineColor={Constants.ColorComponents.White.focusedUnderlineColor}
          />

    </ColorsContainer>
  );
}

export default ColorsField
