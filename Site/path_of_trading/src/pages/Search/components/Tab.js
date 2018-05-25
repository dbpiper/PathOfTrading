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
      ${headingFont}

      cursor: pointer;

    transform: ${props => 'translateX(' + props.x + 'px)'};

      width: ${TabConstants.width + TabConstants.width};

      height: ${TabConstants.height};

      border-top: ${props => props.tabTitle === 'Combat' ? 0 : TabConstants.border + ' solid'};
      border-bottom: ${props => props.tabTitle === 'Combat' ? 0 : TabConstants.border + ' solid'};
      border-left: 0;
      border-right: 0;
      border-color: ${Colors.borderColor};

      display: grid;

      align-items: center;


      background-color: ${props => props.active ? Colors.activeTab
        : Colors.inactiveTab};


      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
         -moz-box-sizing: border-box;    /* Firefox, other Gecko */
              box-sizing: border-box;         /* Opera/IE 8+ */

      &:hover {
        ${
          props => {
            if (!props.active) {
              return 'background-color: ' + Colors.hoverTab;
            }
          }
        }

      }
`;

const ShrinkDiv = styled.div`
  display: block;
  width: ${TabConstants.width + TabConstants.width}
  padding-left: ${TabConstants.paddingLeft};
  ${'' /* overflow: hidden; */}

    transform: ${props => 'translateX(' + props.x + 'px)'};
`

@connect(mapStateToProps, mapDispatchToProps)
class Tab extends React.Component {
  handleClick(title) {
    this.props.selectTab(title);
  }

  render() {
    return (
      <Div
        onClick={() => this.handleClick(this.props.tabTitle)}
        active={this.props.selectedTab === this.props.tabTitle}
        tabTitle={this.props.tabTitle}
        x={this.props.x}
      >
        <ShrinkDiv x={this.props.x}>
          {this.props.tabTitle}
        </ShrinkDiv>
      </Div>
    );
  }
}

export default Tab;
