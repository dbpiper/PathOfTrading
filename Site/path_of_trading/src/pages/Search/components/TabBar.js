import React from 'react';
import styled from 'styled-components';

// import standardFont from 'shared/styles/standardFont';

import Tab from './Tab';

const Div = styled.label`
    ${'' /* & {
      ${standardFont}
    } */}

    width: 250px;

    position: absolute;
`;

class TabBar extends React.Component {

  handleTabClick(title) {
    this.props.onClick(title);
  }

  render() {
    return (
      <Div>
        <Tab title="Item" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
        <Tab title="Combat" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
        <Tab title="Trading" onClick={(title) => this.handleTabClick(title)}
          selectedTab={this.props.selectedTab}
        />
      </Div>
    );
  }
}

export default TabBar;
