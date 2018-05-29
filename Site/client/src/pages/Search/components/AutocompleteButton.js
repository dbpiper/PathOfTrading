import React from 'react';
import styled, { css } from 'styled-components';

import Constants from 'constants/Constants';
import DropdownButton from './DropdownButton';
import SearchButton from './SearchButton';

const Div = styled.div`
  display: flex;

  ${props => props.dropup ? css`
    transform: rotateX(180deg);
  ` : ''};
`;

function AutocompleteButton(props) {
  return (
    <Div dropup={props.dropup}>
      <DropdownButton {...props} />
      <SearchButton {...props} searchText={Constants.Strings.search}/>
    </Div>
  );
}

export default AutocompleteButton;
