import React from 'react';
import styled from 'styled-components';

import Constants from 'constants/Constants';

import headingFont from 'shared/styles/headingFont';

const Div = styled.div`
    & {
      ${headingFont}

      cursor: pointer;

      width: 125px;

      height: 50px;

      background-color: ${props => props.active ? Constants.Colors.activeTab
        : Constants.Colors.inactiveTab
      };
    }
`;

class Tab extends React.Component {
  render() {
    return (
      <Div
        onClick={() => this.props.onClick(this.props.title)}
        active={this.props.selectedTab === this.props.title}
      >
        {this.props.title}
      </Div>
    );
  }
}

export default Tab;
