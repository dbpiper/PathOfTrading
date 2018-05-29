import React from 'react';

import AbstractAutocomplete from './AbstractAutocomplete';

function Autocomplete(props) {
  return (
    <AbstractAutocomplete {...props} editable canBeRanged={props.canBeRanged}/>
  );
}

export default Autocomplete;
