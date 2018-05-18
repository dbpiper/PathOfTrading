import React from 'react';
import styled from 'styled-components';

import headingFont from '../../../shared/styles/headingFont';

import Constants from '../../../constants/Constants';

import Dropdown from './Dropdown';

const gridRow = (rowNum) => {
    return Constants.Layout.Page.Search.Header.gridRows[rowNum] +
      Constants.Layout.Page.Search.Header.gridRowUnit;
};

const gridColumn = (colNum) => {
    return Constants.Layout.Page.Search.Header.gridColumns[colNum] +
      Constants.Layout.Page.Search.Header.gridColumnUnit;
};

const DivTest = styled.div`
    ${headingFont}

    display: block;
    height: 25.0925925926%;
    width: 100%;
`;

<<<<<<< HEAD
const Grid = styled.div`
  display: grid;

  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  grid-template-rows: ${gridRow(0)} ${gridRow(1)};

  grid-template-columns: ${gridColumn(0)} ${gridColumn(1)};

  grid-template-areas:
    "title ."
    "search league"
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
          <SearchBox placeholder="Enter an Item's Name or partial Description" />
        </GridArea>
        <GridArea area="league">
          <Dropdown placeholder="League"/>
        </GridArea>
      </Grid>
    </DivTest>
=======
function Heading(props) {
  return (
    <Div>
      {props.title}

          <Dropdown placeholder="League"/>

    </Div>
>>>>>>> parent of 1367e4c... Fix header layout. Add SearchBox and SearchButton components, and add support for them in AbstractAutocomplete and the components it uses.
  );
}

export default Header;
