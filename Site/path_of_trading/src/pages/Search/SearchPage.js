import React, { Component } from 'react';

import styled from 'styled-components';

import Header from './components/Header';
import TradingBody from './components/TradingBody';
import CombatBody from './components/CombatBody';

const Div = styled.div`
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
        {/* <TradingBody /> */}
      </Div>
    );
  }
}

export default SearchPage;
