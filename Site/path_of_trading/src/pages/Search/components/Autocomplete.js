import React from 'react';

import AbstractAutocomplete from './AbstractAutocomplete';

function Autocomplete(props) {
  return (
    <AbstractAutocomplete placeholder="Mod" editable canBeRanged={props.canBeRanged}/>
  );
}

export default Autocomplete;
