import React from 'react';
import AbstractNumericField from './AbstractNumericField';
import ColorsFieldConstants from '../constants/ColorsFieldConstants';

function ColorField(props) {
  return (
    <AbstractNumericField
      underlineColor={props.underlineColor}
      focusedUnderlineColor={props.focusedUnderlineColor}
      hoveredUnderlineColor={props.hoveredUnderlineColor}
      placeholder={props.placeholder}
      min={ColorsFieldConstants.min}
      max={ColorsFieldConstants.max}
    />
  );
}

export default ColorField;
