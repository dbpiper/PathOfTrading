import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Colors from 'constants/Colors';
import TabConstants from '../constants/TabConstants';
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

      width: ${TabConstants.width};

      height: ${TabConstants.height};

      border-top: ${props => props.title === 'Combat' ? 0 : TabConstants.border + ' solid'};
      border-bottom: ${props => props.title === 'Combat' ? 0 : TabConstants.border + ' solid'};
      border-left: 0;
      border-right: 0;
      border-color: ${Colors.borderColor};

      display: grid;

      align-items: center;

      padding-left: ${TabConstants.paddingLeft};

      background-color: ${props => props.active ? Colors.activeTab
        : Colors.inactiveTab};
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
        title={this.props.title}
      >
        {this.props.title}
      </Div>
    );
  }
}

export default Tab;
