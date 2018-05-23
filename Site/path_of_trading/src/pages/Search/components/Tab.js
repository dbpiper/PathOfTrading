import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Constants from 'constants/Constants';
import headingFont from 'shared/styles/headingFont';
import { selectTab } from '../actions/tab-actions';

const mapStateToProps = (state, props) => {
  return { ...props, selectedTab: state.searchPage.tab.selectedTab };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTab: selectedTab => dispatch(selectTab(selectedTab))
  };
};

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

@connect(mapStateToProps, mapDispatchToProps)
class Tab extends React.Component {
  handleClick(title) {
    this.props.selectTab(title);
  }

  render() {
    return (
      <Div
        onClick={() => this.handleClick(this.props.title)}
        active={this.props.selectedTab === this.props.title}
      >
        {this.props.title}
      </Div>
    );
  }
}

export default Tab;
