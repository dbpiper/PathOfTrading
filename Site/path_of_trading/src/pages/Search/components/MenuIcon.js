import React from 'react';
import styled from 'styled-components';
import { Animate } from 'react-move';
import { connect } from 'react-redux';

import Fonts from 'constants/Fonts';
import Colors from 'constants/Colors';
import noselect from 'shared/styles/noselect';
import menuIconFont from 'shared/styles/menuIconFont';
import {
  startMenuOpen,
  startMenuClose,
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
    startMenuOpen: startedMenuOpen => dispatch(startMenuOpen(startedMenuOpen)),
    startMenuClose: startedMenuClose => dispatch(startMenuClose(startedMenuClose)),
  };
};

const Div = styled.div`
  ${menuIconFont}

  display: grid;

  justify-content: center;

  width: ${props => props.width + 'px'};
  overflow: hidden;

`;

const ContentDiv = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;

  height: 50px;

  border: 2px solid ${Colors.menuIconBorder};

  width: 100px;

  border-radius: 20px;

  cursor: pointer;

  ${noselect};
`;

const ShrinkGrowDiv = styled.div`
  ${'' /* display: block;
  width: ${props => props.width + 'px'};
  overflow: hidden; */}
`

@connect(mapStateToProps, mapDispatchToProps)
class MenuIcon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuText: 'Close',
    };
  }

  handleClick() {
    if (this.props.finishedMenuClose && !this.startedMenuOpen) {
      this.props.startMenuOpen(!this.props.startedMenuOpen);
    }
    if (this.props.finishedMenuOpen && !this.startedMenuClose) {
      this.props.startMenuClose(!this.props.startedMenuClose);
    }
  }

  setText() {
    if (this.state.menuText === 'Menu' && this.props.finishedMenuOpen) {
      this.setState({
        menuText: 'Close',
      });
    } else if (this.state.menuText === 'Close' && this.props.finishedMenuClose) {
      this.setState({
        menuText: 'Menu',
      });
    }
  }

  render() {
    return (
      <Div className={this.props.className}>
        <ShrinkGrowDiv
        >
          <ContentDiv onClick={() => this.handleClick()}
            menuOpen={this.props.finishedMenuOpen}
          >
            {/* {this.setText()} */}
            {this.props.menuText}
          </ContentDiv>
        </ShrinkGrowDiv>
      </Div>
    );
  }
}

export default MenuIcon;
