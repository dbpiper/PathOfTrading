import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Colors from 'constants/Colors';
import TabConstants from '../constants/TabConstants';
import Tab from './Tab';
import MenuIcon from './MenuIcon';

const mapStateToProps = state => {
  return { menuOpen: state.searchPage.menu.menuOpen };
};

const Div = styled.label`
    ${'' /* & {
      ${standardFont}
    } */}

    ${'' /* width: 250px; */}

    height: 100%;

    position: absolute;
    height: ${TabConstants.barHeight};
    background-color: ${Colors.inactiveTab}


    align-items: center;

    z-index: 1;

    display: ${props => props.menuOpen ? 'grid' : 'none'};
`;

const TabDiv = styled.div`
`;

const CloseMenuDiv = styled.div`
  display: ${props => props.menuOpen ? 'grid' : 'none'};
`

@connect(mapStateToProps)
class TabBar extends React.Component {

  handleTabClick(title) {
    this.props.onClick(title);
  }

  render() {
    return (
      <Div menuOpen={this.props.menuOpen}>
        <CloseMenuDiv menuOpen={this.props.menuOpen}>
          <MenuIcon />
        </CloseMenuDiv>
        <TabDiv>
          <Tab title="Item" onClick={(title) => this.handleTabClick(title)}
            selectedTab={this.props.selectedTab}
          />
          <Tab title="Combat" onClick={(title) => this.handleTabClick(title)}
            selectedTab={this.props.selectedTab}
          />
          <Tab title="Trading" onClick={(title) => this.handleTabClick(title)}
            selectedTab={this.props.selectedTab}
          />
        </TabDiv>
      </Div>
    );
  }
}

export default TabBar;
