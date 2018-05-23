import React from 'react';
import styled from 'styled-components';

import Colors from 'constants/Colors';
import TabConstants from '../constants/TabConstants';
import Tab from './Tab';

const Div = styled.label`
    ${'' /* & {
      ${standardFont}
    } */}

    ${'' /* width: 250px; */}

    height: 100%;

    position: absolute;
    height: ${TabConstants.barHeight};
    background-color: ${Colors.inactiveTab}
`;

const Header = styled.div`
  margin-top: 100%;
`;

const Footer = styled.div`
  margin-bottom: 50%;
`;

class TabBar extends React.Component {

  handleTabClick(title) {
    this.props.onClick(title);
  }

  render() {
    return (
      <Div>
        <Header />
        <Tab title="Item" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
        <Tab title="Combat" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
        <Tab title="Trading" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
        <Footer />
      </Div>
    );
  }
}

export default TabBar;
