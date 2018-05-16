import React from 'react';

import styled from 'styled-components';

const AbstractNumericFieldContainer = styled.span`
  & {
    position: relative;
    display: flex;

    align-items: center;

    width: 100%;
  }
`;

const AbstractNumericInput = styled.input`
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

      width: 60px;

      padding-top: 10px;
      padding-right: 10px;
      padding-left: 10px;
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
      background-color: transparent;
    }

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    &::placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
    }

    /* Internet Explorer 10-11 */
    &:-ms-input-placeholder {
      color: #FEFDFF;

      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
    }
`;

function AbstractNumericField(props) {
  return (
    <AbstractNumericFieldContainer>
      <AbstractNumericInput
        underlineColor={props.underlineColor}
        focusedUnderlineColor={props.focusedUnderlineColor}
        type="number"
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      />
    </AbstractNumericFieldContainer>
  );
}


export default AbstractNumericField
