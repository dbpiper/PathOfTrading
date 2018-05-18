import React from 'react';

import styled from 'styled-components';

import Constants from 'constants/Constants';

import DropdownButton from './DropdownButton';
import SearchButton from './SearchButton';

const Div = styled.div`
  display: flex;
`;

function AutocompleteButton(props) {
  return (
    <Div>
      <DropdownButton {...props} />
      <SearchButton {...props} searchText={Constants.Strings.search}/>
    </Div>
  );
}

export default AutocompleteButton;
