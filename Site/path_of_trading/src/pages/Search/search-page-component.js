import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/Header';
import TradingBody from './components/TradingBody';
import CombatBody from './components/CombatBody';
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
        <CombatBody />
        <TradingBody />
      </Div>
    );
  }
}

export default SearchPage;
