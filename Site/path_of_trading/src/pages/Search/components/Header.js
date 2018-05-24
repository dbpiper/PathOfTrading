import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HeaderConstants from '../constants/HeaderConstants';
import Constants from 'constants/Constants';
import headingFont from 'shared/styles/headingFont';
import MediaQuery from 'shared/helpers/MediaQuery';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import MenuIcon from './MenuIcon';

const mapStateToProps = state => {
  console.log(state);
  return {
    startedMenuOpen: state.searchPage.menu.startedMenuOpen,
    finishedMenuOpen: state.searchPage.menu.finishedMenuOpen,
    startedMenuClose: state.searchPage.menu.startedMenuClose,
    finishedMenuClose: state.searchPage.menu.finishedMenuClose,
  };
};

const gridRow = (rowNum) => {
    return HeaderConstants.gridRows[rowNum].size +
      HeaderConstants.gridRows[rowNum].unit;
};

const heightMediaQueries = MediaQuery.create([
  {
    heightBased: true,
    property: 'height',
    function: MediaQuery.numberToSize,
    args: {
      sizes: HeaderConstants.height.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        size: args.sizes[index],
        unit: HeaderConstants.height.unit,
      }
    },
  },
]);

const DivTest = styled.div`
    ${headingFont}

    display: block;
    width: ${HeaderConstants.width}${HeaderConstants.widthUnit};
    ${heightMediaQueries}
`;

const gridColumnMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(HeaderConstants.gridColumns.sizes),
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: HeaderConstants.gridColumnUnit,
      };
    },
  },
]);

const Grid = styled.div`
  display: grid;

  height: 100%;
  width: 100%;

  align-items: center;
  ${'' /* justify-content: center; */}

  grid-template-rows: ${gridRow(0)} ${gridRow(1)};

  ${'' /* grid-template-columns: ${gridColumn(0)} ${gridColumn(1)}; */}

  grid-template-areas:
    "menuIcon . title title ."
    ". . search search league";


  ${gridColumnMediaQueries}

`;

const GridArea = styled.span`
  grid-area: ${props => props.area};

  display: flex;

  align-items: center;
  justify-content: center;
`;

const OpenMenuDiv = styled.div`
  display: 'grid';
`
@connect(mapStateToProps)
class Header extends React.Component{

  showMenuIcon() {
    return this.props.finishedMenuClose;
  }

  render() {
    return (
      <DivTest>
        <Grid>
          <GridArea area="menuIcon">
            <OpenMenuDiv showMenuIcon={this.showMenuIcon()}>
              <MenuIcon menuText="Menu" />
            </OpenMenuDiv>
          </GridArea>
          <GridArea area="title">
            {this.props.title}
          </GridArea>
          <GridArea area="search">
            <SearchBox placeholder={Constants.Strings.searchPlaceholder} />
          </GridArea>
          <GridArea area="league">
            <Dropdown placeholder="League"/>
          </GridArea>
        </Grid>
      </DivTest>
    );
  }
}

export default Header;
