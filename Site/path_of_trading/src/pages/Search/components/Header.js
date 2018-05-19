import React from 'react';
import styled from 'styled-components';

import headingFont from 'shared/styles/headingFont';

import Constants from 'constants/Constants';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const gridRow = (rowNum) => {
    return Constants.Layout.Page.Search.Header.gridRows[rowNum] +
      Constants.Layout.Page.Search.Header.gridRowUnit;
};

const gridColumn = (colNum, screenSize) => {
  switch(screenSize) {
    case Constants.Layout.MediaQuery.PortraitPhone:
      return Constants.Layout.Page.Search.Header.gridColumnsPortraitPhone[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.LandscapePhone:
      return Constants.Layout.Page.Search.Header.gridColumnsLandscapePhone[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.PortraitTablet:
      return Constants.Layout.Page.Search.Header.gridColumnsPortraitTablet[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.LandscapeTablet:
      return Constants.Layout.Page.Search.Header.gridColumnsLanscapeTablet[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.SmallDesktop:
      return Constants.Layout.Page.Search.Header.gridColumnsSmallDesktop[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.MediumDesktop:
      return Constants.Layout.Page.Search.Header.gridColumnsMediumDesktop[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    case Constants.Layout.MediaQuery.LargeDesktop:
      return Constants.Layout.Page.Search.Header.gridColumnsLargeDesktop[colNum] +
        Constants.Layout.Page.Search.Header.gridColumnUnit;

    default:
    return '10000px';
      // return Constants.Layout.Page.Search.Header.gridColumns[colNum] +
      //   Constants.Layout.Page.Search.Header.gridColumnUnit;
  }
};

const DivTest = styled.div`
    ${headingFont}

    display: block;
    height: ${Constants.Layout.Page.Search.Header.height}${Constants.Layout.Page.Search.Header.heightUnit};
    width: ${Constants.Layout.Page.Search.Header.width}${Constants.Layout.Page.Search.Header.widthUnit};
`;

const Grid = styled.div`
  display: grid;

  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  grid-template-rows: ${gridRow(0)} ${gridRow(1)};

  ${'' /* grid-template-columns: ${gridColumn(0)} ${gridColumn(1)}; */}

  grid-template-areas:
    "title ."
    "search league";


  /* Large desktop */
  @media only screen
  (min-width: 1601px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LargeDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LargeDesktop)}
  }


  /* Large Laptops / Medium Desktops */
  @media only screen
    and (min-device-width: 1201px)
    and (max-device-width: 1600px)
    {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.MediumDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.MediumDesktop)}
  }

  /* Small Desktop/Laptop */
  @media only screen
    and (min-device-width: 980px)
    and (max-device-width: 1200px)
    {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.SmallDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.SmallDesktop)}
  }

  /* Landscape Tablet */
  @media only screen
  and (min-width: 768px)
  and (max-width: 979px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LandscapeTablet)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LandscapeTablet)}
  }

  /*  Portrait Tablet */
  @media only screen
  and (max-width: 767px)
  and (min-width: 481px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.PortraitTablet)}
    ${gridColumn(1, Constants.Layout.MediaQuery.PortraitTablet)}
  }

  /* Landscape phones */
  @media only screen
    and (max-width: 480px)
    and (min-width: 321px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LandscapePhone)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LandscapePhone)}
  }

  /* Portrait phones */
  @media only screen
  and (max-width: 320px) {
    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.PortraitPhone)}
    ${gridColumn(1, Constants.Layout.MediaQuery.PortraitPhone)}
  }




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
  );
}

export default Header;
