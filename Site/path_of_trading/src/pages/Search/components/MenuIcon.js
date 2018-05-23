import React from 'react';
import styled from 'styled-components';
import { Animate } from 'react-move';
import { connect } from 'react-redux';

import Fonts from 'constants/Fonts';
import Colors from 'constants/Colors';
import noselect from 'shared/styles/noselect';
import menuIconFont from 'shared/styles/menuIconFont';
import { openMenu } from '../actions/menu-actions';

const mapStateToProps = state => {
  return { menuOpen: state.searchPage.menu.menuOpen };
};

const mapDispatchToProps = dispatch => {
  return {
    openMenu: menuOpen => dispatch(openMenu(menuOpen))
  };
};

const Div = styled.div`
  ${menuIconFont}

  display: grid;

  justify-content: center;

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

@connect(mapStateToProps, mapDispatchToProps)
class MenuIcon extends React.Component {
  render() {
    return (
      <Div className={this.props.className}>
        <ContentDiv onClick={() => this.props.openMenu(!this.props.menuOpen)}
          menuOpen={this.props.menuOpen}
        >
          {!this.props.menuOpen ? 'Menu' : 'Close'}
        </ContentDiv>
      </Div>
    );
  }
}

export default MenuIcon;
