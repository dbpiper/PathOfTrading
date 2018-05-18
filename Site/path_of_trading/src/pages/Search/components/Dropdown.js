import React from 'react';

import AbstractAutocomplete from './AbstractAutocomplete';

function Dropdown(props) {
  return (
    <AbstractAutocomplete {...props} canBeRanged={false}/>
  );
}

export default Dropdown;
