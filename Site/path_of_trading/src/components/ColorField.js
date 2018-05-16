import React from 'react';

import AbstractNumericField from './AbstractNumericField';

function ColorField(props) {
  return (
    <AbstractNumericField
      underlineColor={props.underlineColor}
      focusedUnderlineColor={props.focusedUnderlineColor}
      placeholder={props.placeholder}
      min="0"
      max="6"
    />
  );
}

export default ColorField
