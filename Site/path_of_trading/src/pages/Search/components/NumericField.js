import React from 'react';

import Constants from 'constants/Constants';

import AbstractNumericField from './AbstractNumericField';

function NumericField(props) {
  return (
    <AbstractNumericField
      placeholder={props.placeholder}
      underlineColor={Constants.Colors.underlineColor}
      focusedUnderlineColor={Constants.Colors.underlineColorFocused}
      small={props.small}
    />
  );
}

export default NumericField;
