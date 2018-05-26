import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

import HeaderConstants from '../constants/HeaderConstants';
import Constants from 'constants/Constants';
import headingFont from 'shared/styles/headingFont';
import MediaQuery from 'shared/helpers/MediaQuery';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import MenuIcon from './MenuIcon';

const mapStateToProps = state => {
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

const Div = styled.div`
    ${headingFont}

    height: 100%;
    display: block;
    width: ${HeaderConstants.width}${HeaderConstants.widthUnit};
    ${heightMediaQueries}

    position: fixed;
    background:inherit;
    z-index: 1;

    background-size: auto 100%;
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

  margin-top: 50px;

  opacity: ${props => props.opacity};
`

const lower = 0;
const upper = 1;

@connect(mapStateToProps)
class Header extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      startEnd: {
        start: lower,
        end: upper,
      },
    };
  }

  getStartEnd() {
    if (this.props.startedMenuOpen) {
      return {
        start: upper,
        end: lower,
      };
    } else if (this.props.startedMenuClose) {
      return {
        start: lower,
        end: upper,
      };
    } else {
        return this.state.startEnd;
      }
  }

  showMenuIcon() {
    return this.props.finishedMenuClose;
  }

  render() {
    return (
      <Div>
        <Grid>
          <GridArea area="menuIcon">
            <Motion
              defaultStyle={{opacity: this.getStartEnd().start}}
              style={{opacity: spring(this.getStartEnd().end, {stiffness: 16, damping: 10})}}
            >
              {value =>
                <OpenMenuDiv showMenuIcon={this.showMenuIcon()}
                  opacity={value.opacity}
                >
                  <MenuIcon menuText="Menu" />
                </OpenMenuDiv>
              }
            </Motion>
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
      </Div>
    );
  }
}

export default Header;
