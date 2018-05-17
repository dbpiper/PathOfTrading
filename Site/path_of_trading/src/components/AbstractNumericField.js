import React from 'react';
import styled from 'styled-components';
import standardFont from '../styles/standardFont';
import Constants from '../Constants';


const AbstractNumericFieldContainer = styled.span`
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
      border-bottom-width: ${Constants.AbstractNumericField.borderBottomWidth}${Constants.AbstractNumericField.borderBottomWidthUnit};
      background-color: transparent;

      padding-bottom: 0;

      caret-color: ${Constants.Colors.standardFont};

      ${standardFont}

      width: ${props => boxWidth(props)}rem;

      margin-right: ${Constants.AbstractNumericField.marginRight}${Constants.AbstractNumericField.marginRightUnit};

      padding-top: ${Constants.AbstractNumericField.paddingTop}${Constants.AbstractNumericField.paddingTopUnit};
      padding-right: ${Constants.AbstractNumericField.paddingRight}${Constants.AbstractNumericField.paddingRightUnit};
      padding-bottom: ${Constants.AbstractNumericField.paddingBottom}${Constants.AbstractNumericField.paddingBottomUnit};

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

    & {
      -moz-appearance:textfield;
    }

    &:focus {
      border-bottom-width: ${Constants.AbstractNumericField.borderBottomWidth}${Constants.AbstractNumericField.borderBottomWidthUnit};
      background-color: transparent
      outline: none;
      border-bottom-color: ${props => props.focusedUnderlineColor};
      transition-duration 250ms;
      ${'' /* transition: all 0.3s ease-in-out 0s;
      transform: scaleX(1); */}
    }

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    &::placeholder {
      ${standardFont}
      ${'' /* padding-left: ${props => boxWidth(props)*0.15625}rem; */}
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder {
      ${standardFont}
      ${'' /* padding-left: ${props => boxWidth(props)*0.15625}rem; */}
    }

    /* Internet Explorer 10-11 */
    &:-ms-input-placeholder {
      ${standardFont}
      ${'' /* padding-left: ${props => boxWidth(props)*0.15625}rem; */}
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
