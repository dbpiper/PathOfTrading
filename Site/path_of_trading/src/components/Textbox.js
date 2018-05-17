import React from 'react';
import styled from 'styled-components';
import textbox from '../styles/textbox';


const TextboxContainer = styled.span`
  position: relative;
  display: flex;

  align-items: center;
`;

const TextboxInput = styled.input.attrs({
  type: "text",
})`
  ${textbox}
`;


function Textbox(props) {
    return (
      <TextboxContainer>
        <TextboxInput placeholder={props.placeholder} />
      </TextboxContainer>
    );
}

export default Textbox
