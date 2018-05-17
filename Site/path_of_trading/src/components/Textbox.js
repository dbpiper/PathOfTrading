import React from 'react';
import styled from 'styled-components';
import textbox from '../styles/textbox';


const TextboxContainer = styled.span`
`;

const TextboxInput = styled.input.attrs({
  type: "text",
})`
  ${textbox}
`;


function Textbox(props) {
    return (
        <TextboxInput placeholder={props.placeholder} />
    );
}

export default Textbox
