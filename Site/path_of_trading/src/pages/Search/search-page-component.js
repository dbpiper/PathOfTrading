import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/Header';
import ItemBody from './components/ItemBody';
import CombatBody from './components/CombatBody';
import TradingBody from './components/TradingBody';
import TabBar from './components/TabBar';

const mapStateToProps = state => {
  return { menuOpen: state.searchPage.menu.menuOpen };
};

const Div = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
`;

@connect(mapStateToProps)
class SearchPage extends Component {
  render() {
    return (
      <Div>
        <TabBar />
        <Header title="Path of Trading"/>
        <ItemBody />
        <CombatBody />
        <TradingBody />
      </Div>
    );
  }
}

export default SearchPage;
