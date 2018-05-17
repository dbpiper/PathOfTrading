import React from 'react';
import AbstractNumericField from './AbstractNumericField';
import Constants from '../Constants';

function NumericField(props) {
  return (
    <AbstractNumericField
      placeholder={props.placeholder}
      underlineColor={Constants.Colors.underlineColor}
      focusedUnderlineColor={Constants.Colors.underlineColorFocused}
    />
  );
}

export default NumericField
