import React, { Component } from 'react';
import styled from 'styled-components';

import Constants from 'constants/Constants';

import Label from './Label';
import Range from './Range';

const gridRow = (rowNum) => {
    return Constants.Layout.Page.Search.Body.Combat.gridRows[rowNum] +
      Constants.Layout.Page.Search.Body.Combat.gridRowUnit;
};

const gridColumn = (colNum) => {
    return Constants.Layout.Page.Search.Body.Combat.gridColumns[colNum] +
      Constants.Layout.Page.Search.Body.Combat.gridColumnUnit;
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

  ${'' /* align-items: center; */}
  justify-content: center;

  grid-template-rows: ${gridRow(0)} ${gridRow(1)} ${gridRow(2)} ${gridRow(3)}
  ${gridRow(4)} ${gridRow(5)} ${gridRow(6)};
  grid-template-columns: ${gridColumn(0)} ${gridColumn(1)} ${gridColumn(2)} ${gridColumn(3)} ${gridColumn(4)};

  grid-template-areas:
    "offenseLabel offenseLabel . defenseLabel defenseLabel"
    "damage damageRange . armour armourRange"
    "dps dpsRange . block blockRange"
    "aps apsRange . evasion evasionRange"
    "edps edpsRange . shield shieldRange"
    "criticalStrike criticalStrikeRange . . ."
    "pdps pdpsRange . . ."
`;

const GridArea = styled.span`
  grid-area: ${props => props.area};
  display: flex;

  align-items: center;
  ${'' /* justify-content: center; */}
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
