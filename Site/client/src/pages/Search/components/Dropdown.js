import React from 'react';

import AbstractAutocomplete from './AbstractAutocomplete';

function Dropdown(props) {
  return (
    <AbstractAutocomplete {...props} dropdown={true} canBeRanged={false}/>
  );
}

export default Dropdown;
