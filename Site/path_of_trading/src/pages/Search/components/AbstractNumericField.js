import React from 'react';
import styled from 'styled-components';

import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';
import Constants from 'constants/Constants';
import TextCursor from 'media/images/cur/beam_black.cur';
import standardFont from 'shared/styles/standardFont';
import placeholder from 'shared/styles/placeholder';



const AbstractNumericFieldContainer = styled.span`
    width: 100%;
`;


const boxWidth = (props) => {
  return props.placeholder.length *
  (props.small ? Fonts.Standard.fontSizeSmall : Fonts.Standard.fontSize);
};

const AbstractNumericInput = styled.input.attrs({
  type: 'number',
})`
    & {
      border: 0px solid ${props => props.underlineColor};
      border-bottom-width: ${Constants.AbstractNumericField.borderBottomWidth}${Constants.AbstractNumericField.borderBottomWidthUnit};
      background-color: transparent;

      padding-bottom: 0;

      caret-color: ${Colors.standardFont};

      ${standardFont}

      width: ${props => boxWidth(props)}rem;

      margin-right: ${(props) => (props.small ? Constants.AbstractNumericField.smallMarginRight : Constants.AbstractNumericField.marginRight)}${Constants.AbstractNumericField.marginRightUnit};

      padding-top: ${Constants.AbstractNumericField.paddingTop}${Constants.AbstractNumericField.paddingTopUnit};
      padding-right: ${Constants.AbstractNumericField.paddingRight}${Constants.AbstractNumericField.paddingRightUnit};
      padding-bottom: ${Constants.AbstractNumericField.paddingBottom}${Constants.AbstractNumericField.paddingBottomUnit};

      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
         -moz-box-sizing: border-box;    /* Firefox, other Gecko */
              box-sizing: border-box;         /* Opera/IE 8+ */

      -moz-appearance:textfield;

      ${placeholder}

      cursor: url(${TextCursor}), text;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        color: ${Colors.standardFont};
    }

    &:hover {

      transition-duration 250ms;
      border-bottom-color: ${props => props.hoveredUnderlineColor};
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
      font-size: ${(props) => props.small ? Fonts.Standard.fontSizeSmall : Fonts.Standard.fontSize}${Fonts.Standard.fontSizeUnit};
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder {
      font-size: ${(props) => props.small ? Fonts.Standard.fontSizeSmall : Fonts.Standard.fontSize}${Fonts.Standard.fontSizeUnit};
    }

    /* Internet Explorer 10-11 */
    &:-ms-input-placeholder {
      font-size: ${(props) => props.small ? Fonts.Standard.fontSizeSmall : Fonts.Standard.fontSize}${Fonts.Standard.fontSizeUnit};
    }

    &&& {
      font-size: ${(props) => props.small ? Fonts.Standard.fontSizeSmall : Fonts.Standard.fontSize}${Fonts.Standard.fontSizeUnit};
    }
`;

function AbstractNumericField(props) {
  return (
    <AbstractNumericFieldContainer>
      <AbstractNumericInput
        {...props}
      />
    </AbstractNumericFieldContainer>
  );
}


export default AbstractNumericField;
