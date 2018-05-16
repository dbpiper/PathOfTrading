import React from 'react';

import AbstractNumericField from './AbstractNumericField';

function NumericField(props) {
  return (
    <AbstractNumericField
      underlineColor="#0D0106"
      focusedUnderlineColor="#FEFDFF"
      placeholder={props.placeholder}
    />
  );
}

export default NumericField
