import React, { Component } from 'react';
import styled from 'styled-components';

import Constants from 'constants/Constants';

import Label from './Label';
import Range from './Range';

const gridRow = (rowNum) => {
    return Constants.Layout.Page.Search.Body.Combat.gridRows[rowNum] +
      Constants.Layout.Page.Search.Body.Combat.gridRowUnit;
};

const gridColumn = (colNum, screenSize) => {
  switch(screenSize) {
    case Constants.Layout.MediaQuery.PortraitPhone:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsPortraitPhone[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.LandscapePhone:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsLandscapePhone[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.PortraitTablet:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsPortraitTablet[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.LandscapeTablet:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsLanscapeTablet[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.SmallDesktop:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsSmallDesktop[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.MediumDesktop:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsMediumDesktop[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    case Constants.Layout.MediaQuery.LargeDesktop:
      return Constants.Layout.Page.Search.Body.Combat.gridColumnsLargeDesktop[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;

    default:
      return Constants.Layout.Page.Search.Body.Combat.gridColumns[colNum] +
        Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;
  }
};

const Div = styled.div`
  height: ${Constants.Layout.Page.Search.Body.Combat.height}${Constants.Layout.Page.Search.Body.Combat.heightUnit};
  width: ${Constants.Layout.Page.Search.Body.Combat.width}${Constants.Layout.Page.Search.Body.Combat.widthUnit};
`

const Grid = styled.div`
  display: grid;

  margin-left: ${Constants.Layout.Page.Search.Body.Combat.gridLeftMargin}${Constants.Layout.Page.Search.Body.Combat.gridLeftMarginUnit};
  height: 100%;
  width: 100%;

  justify-content: center;

  grid-template-rows: ${gridRow(0)} ${gridRow(1)} ${gridRow(2)} ${gridRow(3)}
  ${gridRow(4)} ${gridRow(5)} ${gridRow(6)};

  grid-template-areas:
    "offenseLabel offenseLabel . defenseLabel defenseLabel"
    "damage damageRange . armour armourRange"
    "dps dpsRange . block blockRange"
    "aps apsRange . evasion evasionRange"
    "edps edpsRange . shield shieldRange"
    "criticalStrike criticalStrikeRange . . ."
    "pdps pdpsRange . . .";




  /* Large Laptops / Medium Desktops */
  @media only screen
    and (min-width: 1201px)
    and (max-width: 1600px)
    {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.MediumDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.MediumDesktop)}
    ${gridColumn(2, Constants.Layout.MediaQuery.MediumDesktop)}
    ${gridColumn(3, Constants.Layout.MediaQuery.MediumDesktop)}
    ${gridColumn(4, Constants.Layout.MediaQuery.MediumDesktop)};
  }

  /* Small Desktop/Laptop */
  @media only screen
    and (min-width: 980px)
    and (max-width: 1200px)
    {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.SmallDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.SmallDesktop)}
    ${gridColumn(2, Constants.Layout.MediaQuery.SmallDesktop)}
    ${gridColumn(3, Constants.Layout.MediaQuery.SmallDesktop)}
    ${gridColumn(4, Constants.Layout.MediaQuery.SmallDesktop)};
  }

  /* Landscape Tablet */
  @media only screen
  and (min-width: 768px)
  and (max-width: 979px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LandscapeTablet)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LandscapeTablet)}
    ${gridColumn(2, Constants.Layout.MediaQuery.LandscapeTablet)}
    ${gridColumn(3, Constants.Layout.MediaQuery.LandscapeTablet)}
    ${gridColumn(4, Constants.Layout.MediaQuery.LandscapeTablet)};
  }

  /*  Portrait Tablet */
  @media only screen
  and (max-width: 767px)
  and (min-width: 481px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.PortraitTablet)}
    ${gridColumn(1, Constants.Layout.MediaQuery.PortraitTablet)}
    ${gridColumn(2, Constants.Layout.MediaQuery.PortraitTablet)}
    ${gridColumn(3, Constants.Layout.MediaQuery.PortraitTablet)}
    ${gridColumn(4, Constants.Layout.MediaQuery.PortraitTablet)};
  }

  /* Landscape phones */
  @media only screen
    and (max-width: 480px)
    and (min-width: 321px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LandscapePhone)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LandscapePhone)}
    ${gridColumn(2, Constants.Layout.MediaQuery.LandscapePhone)}
    ${gridColumn(3, Constants.Layout.MediaQuery.LandscapePhone)}
    ${gridColumn(4, Constants.Layout.MediaQuery.LandscapePhone)};
  }

  /* Portrait phones */
  @media only screen
  and (max-width: 320px) {
    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.PortraitPhone)}
    ${gridColumn(1, Constants.Layout.MediaQuery.PortraitPhone)}
    ${gridColumn(2, Constants.Layout.MediaQuery.PortraitPhone)}
    ${gridColumn(3, Constants.Layout.MediaQuery.PortraitPhone)}
    ${gridColumn(4, Constants.Layout.MediaQuery.PortraitPhone)};
  }

    /* Large desktop */
  @media only screen
  and (min-width: 1601px) {

    grid-template-columns:
    ${gridColumn(0, Constants.Layout.MediaQuery.LargeDesktop)}
    ${gridColumn(1, Constants.Layout.MediaQuery.LargeDesktop)}
    ${gridColumn(2, Constants.Layout.MediaQuery.LargeDesktop)}
    ${gridColumn(3, Constants.Layout.MediaQuery.LargeDesktop)}
    ${gridColumn(4, Constants.Layout.MediaQuery.LargeDesktop)};
  }


`;
const GridArea = styled.span`
  grid-area: ${props => props.area};
  display: flex;

  align-items: center;
`;

const HeadingGridArea = GridArea.extend`

  &&& {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;


class CombatBody extends Component {
  render() {
    return (
      <Div>
          <Grid>
            <HeadingGridArea area="offenseLabel">
              <Label value="Offense" heading={true} />
            </HeadingGridArea>

            <GridArea area="damage">
              <Label value="Damage" />
            </GridArea>
            <GridArea area="dps">
              <Label value="DPS" />
            </GridArea>
            <GridArea area="aps">
              <Label value="APS" />
            </GridArea>
            <GridArea area="edps">
              <Label value="eDPS" />
            </GridArea>
            <GridArea area="criticalStrike">
              <Label value="Critical Strike" />
            </GridArea>
            <GridArea area="pdps">
              <Label value="pDPS" />
            </GridArea>

            <GridArea area="damageRange">
              <Range />
            </GridArea>
            <GridArea area="dpsRange">
              <Range />
            </GridArea>
            <GridArea area="apsRange">
              <Range />
            </GridArea>
            <GridArea area="edpsRange">
              <Range />
            </GridArea>
            <GridArea area="criticalStrikeRange">
              <Range />
            </GridArea>
            <GridArea area="pdpsRange">
              <Range />
            </GridArea>


            <HeadingGridArea area="defenseLabel">
              <Label value="Defense" heading={true} />
            </HeadingGridArea>

            <GridArea area="armour">
              <Label value="Armour" />
            </GridArea>
            <GridArea area="block">
              <Label value="Block" />
            </GridArea>
            <GridArea area="evasion">
              <Label value="Evasion" />
            </GridArea>
            <GridArea area="shield">
              <Label value="shield" />
            </GridArea>

            <GridArea area="armourRange">
              <Range />
            </GridArea>
            <GridArea area="blockRange">
              <Range />
            </GridArea>
            <GridArea area="evasionRange">
              <Range />
            </GridArea>
            <GridArea area="shieldRange">
              <Range />
            </GridArea>
          </Grid>
      </Div>
    );
  }
}

export default CombatBody;
