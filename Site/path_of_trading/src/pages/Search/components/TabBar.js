import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Motion, spring, presets } from 'react-motion';

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
    ${'' /* height: ${TabConstants.barHeight}; */}
    background-color: ${Colors.inactiveTab}


    align-items: center;

    z-index: 1;

    ${'' /* display: ${props => props.menuOpen ? 'grid' : 'none'}; */}
    display: grid;

    ${'' /* width: ${props => props.width + 'px'}; */}

    width: ${TabConstants.width + TabConstants.widthUnit}

    transform: ${props => 'translateX(' + props.x + 'px)'};

    grid-template-rows: 100px calc(100% - 100px);
    grid-template-columns: 100%;

`;

const TabDiv = styled.div`

    width: ${TabConstants.width + TabConstants.width}

    transform: ${props => 'translateX(' + props.x + 'px)'};

    grid-area: "tabs";

    grid-row: 2;
`;

const CloseMenuDiv = styled.div`
  display: grid;

  grid-area: "menuIcon";

  grid-row: 1;
`

@connect(mapStateToProps, mapDispatchToProps)
class TabBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startEnd: {
        // start: -Number.parseFloat(TabConstants.width),
        start: 0,
        end: 0,
      },
    };
  }

  handleFinish() {
    this.setState({
      startEnd: this.getStartEnd(),
    });
    if (this.props.startedMenuOpen) {
      this.props.finishMenuOpen(!this.props.finishedMenuOpen);
    }
    if (this.props.startedMenuClose) {
      this.props.finishMenuClose(!this.props.finishedMenuClose);
    }
  }

  getStartEnd() {
    if (this.props.startedMenuOpen) {
      return {
        start: -Number.parseFloat(TabConstants.width),
        end: 0,
      };
    } else if (this.props.startedMenuClose) {
      return {
        start: 0,
        end: -Number.parseFloat(TabConstants.width),
      };
    } else {
        return this.state.startEnd;
      }
  }

  handleTabClick(title) {
    this.props.onClick(title);
  }

  componentWillMount() {

  }

  render() {
    return (
      <Motion
        defaultStyle={{x: this.getStartEnd().start}}
        style={{x: spring(this.getStartEnd().end, {...presets.stiff})}}
        onRest={() => this.handleFinish()}
      >
        {value =>
           <Div x={value.x}
             >
              <CloseMenuDiv menuOpen={this.props.finishedMenuOpen}>
                <MenuIcon menuText="Close" />
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
        }
      </Motion>
    );
  }
}

export default TabBar;
