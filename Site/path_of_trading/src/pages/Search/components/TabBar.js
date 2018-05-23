import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Animate } from 'react-move';
import { easeExpInOut, easeExpOut, easeLinear } from 'd3-ease';

import Colors from 'constants/Colors';
import TabConstants from '../constants/TabConstants';
import Tab from './Tab';
import MenuIcon from './MenuIcon';
import {
  finishMenuOpen,
  finishMenuClose,
}
from '../actions/menu-actions';

const mapStateToProps = state => {
  return {
    startedMenuOpen: state.searchPage.menu.startedMenuOpen,
    finishedMenuOpen: state.searchPage.menu.finishedMenuOpen,
    startedMenuClose: state.searchPage.menu.startedMenuClose,
    finishedMenuClose: state.searchPage.menu.finishedMenuClose,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    finishMenuOpen: finishedMenuOpen => dispatch(finishMenuOpen(finishedMenuOpen)),
    finishMenuClose: finishedMenuClose => dispatch(finishMenuClose(finishedMenuClose)),
  };
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

    ${'' /* display: ${props => props.menuOpen ? 'grid' : 'none'}; */}
    display: grid;

    width: ${props => props.width + 'px'};
`;

const TabDiv = styled.div`
    width: ${props => props.width + 'px'};
`;

const CloseMenuDiv = styled.div`
  display: ${props => props.menuOpen ? 'grid' : 'none'};
`

function veryClose(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

function hasFinished(startedMenuOpen, startedMenuClose, width) {
  if (startedMenuOpen && veryClose(width, TabConstants.width)) {
    return true;
  } else if (startedMenuClose && veryClose(width, 0)) {
    return true;
  } else {
    return false;
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class TabBar extends React.Component {

  handleFinish() {
    if (this.props.startedMenuOpen) {
      this.props.finishMenuOpen(!this.props.finishedMenuOpen);
    }
    if (this.props.startedMenuClose) {
      this.props.finishMenuClose(!this.props.finishedMenuClose);
    }
  }

  handleTabClick(title) {
    this.props.onClick(title);
  }

  render() {
    return (
      <Animate
        // state={{
        //   width: 260,
        // }}
        start={{
          width: (!this.props.finishedMenuOpen ? 0 : TabConstants.width),
          // width: 0,
          // timing: { duration: 10000, ease: easeExpInOut },
        }}
        show={this.props.startedMenuOpen || this.props.finishedMenuOpen}
        enter={{
          // width: (!this.props.finishedMenuOpen ? [TabConstants.width] : [TabConstants.width]),
          width: [TabConstants.width],
          timing: { duration: 400, ease: easeExpInOut },
        }}
        // enter={{
        //   width: (!this.props.menuOpen ? [0] : [TabConstants.width]),
        //   // width: [0],
        //   timing: { duration: 1000, ease: easeExpInOut },
        // }}
        leave={{
          // width: (this.props.finishedMenuOpen ? [TabConstants.width] : [TabConstants]),
          width: [0],
          // width: [0],
          timing: { duration: 400, ease: easeExpInOut },
        }}
      >
       {({ width }) => {
          return (
           <Div width={width}>
             {console.log('startedMenuOpen: ' + this.props.startedMenuOpen + ' finishedMenuOpen: '  + this.props.finishedMenuOpen)}
             {hasFinished(this.props.startedMenuOpen,
               this.props.startedMenuClose,
               width
             )
             ? this.handleFinish() : ''}

              <CloseMenuDiv menuOpen={this.props.finishedMenuOpen}>
                <MenuIcon width={width} />
              </CloseMenuDiv>
              <TabDiv width={width}>
                <Tab title="Item" onClick={(title) => this.handleTabClick(title)}
                  selectedTab={this.props.selectedTab}
                  width={width}
                />
                <Tab title="Combat" onClick={(title) => this.handleTabClick(title)}
                  selectedTab={this.props.selectedTab}
                  width={width}
                />
                <Tab title="Trading" onClick={(title) => this.handleTabClick(title)}
                  selectedTab={this.props.selectedTab}
                  width={width}
                />
              </TabDiv>
            </Div>
          );
        }}
      </Animate>
    );
  }
}

export default TabBar;
