import React from 'react';

import AbstractAutocomplete from './AbstractAutocomplete';

function SearchBox(props) {
  return (
    <AbstractAutocomplete {...props} search={true} editable canBeRanged={false}/>
  );
}

export default SearchBox;
