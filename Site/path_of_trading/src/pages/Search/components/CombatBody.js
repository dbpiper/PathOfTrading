import React, { Component } from 'react';
import styled from 'styled-components';

import MediaQuery from 'shared/helpers/MediaQuery';

import Constants from 'constants/Constants';

import Label from './Label';
import Range from './Range';

const Div = styled.div`
  height: ${Constants.Layout.Page.Search.Body.Combat.height}${Constants.Layout.Page.Search.Body.Combat.heightUnit};
  width: ${Constants.Layout.Page.Search.Body.Combat.width}${Constants.Layout.Page.Search.Body.Combat.widthUnit};

  display: ${props => !props.selected ? 'none' : 'block'};
`


const gridMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(Constants.Layout.Page.Search.Body.Combat.gridColumns.sizes),
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: Constants.Layout.Page.Search.Body.Combat.gridColumns.unit,
      };
    },
  },
  {
    property: 'grid-template-rows',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Constants.Layout.Page.Search.Body.Combat.gridRows.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: Constants.Layout.Page.Search.Body.Combat.gridRows.unit,
      };
    },
  }
]);

const Grid = styled.div`
  display: grid;

  margin-left: ${Constants.Layout.Page.Search.Body.Combat.gridLeftMargin}${Constants.Layout.Page.Search.Body.Combat.gridLeftMarginUnit};
  height: 100%;
  width: 100%;

  justify-content: center;

  grid-template-areas:
    "offenseLabel offenseLabel . defenseLabel defenseLabel"
    "damage damageRange . armour armourRange"
    "dps dpsRange . block blockRange"
    "aps apsRange . evasion evasionRange"
    "edps edpsRange . shield shieldRange"
    "criticalStrike criticalStrikeRange . . ."
    "pdps pdpsRange . . .";

    ${gridMediaQueries};

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
      <Div selected={this.props.selected} >
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
              <Label value="Shield" />
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
