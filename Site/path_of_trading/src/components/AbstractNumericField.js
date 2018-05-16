import React from 'react';

import styled from 'styled-components';

const AbstractNumericFieldContainer = styled.span`
    ${'' /* position: relative;
    display: flex;

    align-items: center;

    width: 100%; */}
    width: 100%;
`;


const boxWidth = (props) => {
  return props.placeholder.length * 1.25;
};

const AbstractNumericInput = styled.input.attrs({
  type: 'number',
})`
    & {
      border: 0px solid ${props => props.underlineColor};
      border-bottom-width: 1px;
      background-color: transparent;

      padding-bottom: 0;

      caret-color: #FEFDFF;
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;

      width: ${props => boxWidth(props)}rem;
      margin-right: 20px;

      padding-top: 10px;
      padding-right: 10px;
      padding-bottom: 5px;

      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
         -moz-box-sizing: border-box;    /* Firefox, other Gecko */
              box-sizing: border-box;         /* Opera/IE 8+ */
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &:focus {
      border: 0px solid ${props => props.focusedUnderlineColor};
      border-bottom-width: 1px;
      background-color: transparent
      outline: none;
    }

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    &::placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
      padding-left: ${props => boxWidth(props)*0.15625}rem;
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
      padding-left: ${props => boxWidth(props)*0.15625}rem;
    }

    /* Internet Explorer 10-11 */
    &:-ms-input-placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
      padding-left: ${props => boxWidth(props)*0.15625}rem;
    }
`;

function AbstractNumericField(props) {
  return (
    <AbstractNumericFieldContainer>
      <AbstractNumericInput
        underlineColor={props.underlineColor}
        focusedUnderlineColor={props.focusedUnderlineColor}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      />
    </AbstractNumericFieldContainer>
  );
}


export default AbstractNumericField
