import React, { Component } from 'react';

import styled from 'styled-components';

import Header from './components/Header';
import CombatBody from './components/CombatBody';

const Div = styled.div`
    ${'' /* & {
      ${headingFont}
    } */}

    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
`;

class SearchPage extends Component {
  render() {
    return (
      <Div>
        <Header title="Path of Trading"/>
        <CombatBody />
      </Div>
    );
  }
}

export default SearchPage;
