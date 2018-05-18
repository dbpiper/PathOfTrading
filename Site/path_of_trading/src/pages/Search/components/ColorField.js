import React from 'react';
import AbstractNumericField from './AbstractNumericField';
import Constants from '../../../constants/Constants';

function ColorField(props) {
  return (
    <AbstractNumericField
      underlineColor={props.underlineColor}
      focusedUnderlineColor={props.focusedUnderlineColor}
      placeholder={props.placeholder}
      min={Constants.ColorComponents.Shared.min}
      max={Constants.ColorComponents.Shared.max}
    />
  );
}

export default ColorField;
