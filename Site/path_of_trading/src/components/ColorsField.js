import React from 'react';

import ColorField from './ColorField';

import styled from 'styled-components';

const ColorsContainer = styled.span`
    ${'' /* & {
      position: relative;
      display: flex;

      align-items: center;


      width: 100%;
    } */}
`;

function Range(props) {
  return (
    <ColorsContainer>
          <ColorField
            underlineColor="#831929"
            focusedUnderlineColor="#ea8f9d"
            placeholder="Red"
          />
          <ColorField
            underlineColor="#5d9e0e"
            focusedUnderlineColor="#82dd13"
            placeholder="Green"
          />
          <ColorField
            underlineColor="#1031A7"
            focusedUnderlineColor="#8fa5f4"
            placeholder="Blue"
          />
          <ColorField
            underlineColor="#dad3c1"
            focusedUnderlineColor="#ffffff"
            placeholder="White"
          />

    </ColorsContainer>
  );
}

export default Range
