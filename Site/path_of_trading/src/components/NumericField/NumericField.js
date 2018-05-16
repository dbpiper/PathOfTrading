import React from 'react';

import AbstractNumericField from '../AbstractNumericField';

function NumericField(props) {
  return (
    <AbstractNumericField
      underlineColor="#000000"
      focusedUnderlineColor="#FEFDFF"
      placeholder={props.placeholder}
    />
  );
}

export default NumericField
