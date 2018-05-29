import React from 'react';

import Colors from 'constants/Colors';

import AbstractNumericField from './AbstractNumericField';

function NumericField(props) {
  return (
    <AbstractNumericField
      placeholder={props.placeholder}
      underlineColor={Colors.underlineColor}
      focusedUnderlineColor={Colors.underlineColorFocused}
      hoveredUnderlineColor={Colors.underlineColorHovered}
      small={props.small}
    />
  );
}

export default NumericField;
