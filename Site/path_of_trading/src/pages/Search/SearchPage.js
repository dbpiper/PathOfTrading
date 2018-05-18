import React, { Component } from 'react';

import styled from 'styled-components';

import Header from './components/Header';
import TestBody from './components/TestBody';

const Div = styled.label`
    ${'' /* & {
      ${headingFont}
    } */}
`;

class SearchPage extends Component {
  render() {
    return (
      <Div>
        <Header title="Path of Trading"/>
        <TestBody />
      </Div>
    );
  }
}

export default SearchPage;
