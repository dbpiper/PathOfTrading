import React from 'react';
import styled from 'styled-components';

import headingFont from 'shared/styles/headingFont';

import MediaQuery from 'shared/helpers/MediaQuery';

import Constants from 'constants/Constants';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const gridRow = (rowNum) => {
    return Constants.Layout.Page.Search.Header.gridRows[rowNum] +
      Constants.Layout.Page.Search.Header.gridRowUnit;
};

const DivTest = styled.div`
    ${headingFont}

    display: block;
    height: ${Constants.Layout.Page.Search.Header.height}${Constants.Layout.Page.Search.Header.heightUnit};
    width: ${Constants.Layout.Page.Search.Header.width}${Constants.Layout.Page.Search.Header.widthUnit};
`;

const gridColumnMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(Constants.Layout.Page.Search.Header.gridColumns.sizes),
      unit: Constants.Layout.Page.Search.Header.gridColumnUnit,
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: args.unit,
      };
    },
  },
]);

const Grid = styled.div`
  display: grid;

  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  grid-template-rows: ${gridRow(0)} ${gridRow(1)};

  ${'' /* grid-template-columns: ${gridColumn(0)} ${gridColumn(1)}; */}

  grid-template-areas:
    "title title ."
    "search search league";


  ${gridColumnMediaQueries}

`;

const GridArea = styled.span`
  grid-area: ${props => props.area};

  display: flex;

  align-items: center;
  justify-content: center;
`;

function Header(props) {
  return (
    <DivTest>
      <Grid>
        <GridArea area="title">
          {props.title}
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

export default Header;
