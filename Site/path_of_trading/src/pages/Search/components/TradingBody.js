import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Constants from 'constants/Constants';
import MediaQuery from 'shared/helpers/MediaQuery';
import Switch from './Switch';
import Textbox from './Textbox';
import Dropdown from './Dropdown';
import Label from './Label';
import Range from './Range';

const title = 'Trading';

const mapStateToProps = (state, props) => {
  return { ...props, selectedTab: state.searchPage.tab.selectedTab };
};

const heightMediaQueries = MediaQuery.create([
  {
    heightBased: true,
    property: 'height',
    function: MediaQuery.numberToSize,
    args: {
      sizes: Constants.Layout.Page.Search.Body.Trading.height.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        size: args.sizes[index],
        unit: Constants.Layout.Page.Search.Body.Trading.height.unit,
      }
    },
  },
]);

const Div = styled.div`
  width: ${Constants.Layout.Page.Search.Body.Trading.width}${Constants.Layout.Page.Search.Body.Trading.widthUnit};
  ${heightMediaQueries};

  display: ${props => props.selectedTab !== title ? 'none' : 'block'};

  max-width: 95%;
  max-height: 95%;
`;


const gridMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(Constants.Layout.Page.Search.Body.Trading.gridColumns.sizes),
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: Constants.Layout.Page.Search.Body.Trading.gridColumns.unit,
      };
    },
  },
  {
    heightBased: true,
    property: 'grid-template-rows',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Constants.Layout.Page.Search.Body.Trading.gridRows.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: Constants.Layout.Page.Search.Body.Trading.gridRows.unit,
      };
    },
  }
]);

const Grid = styled.div`
  display: grid;

  margin-left: ${Constants.Layout.Page.Search.Body.Trading.gridLeftMargin}${Constants.Layout.Page.Search.Body.Trading.gridLeftMarginUnit};
  height: 100%;
  width: 100%;

  justify-content: center;


  ${gridMediaQueries}:read-write

  grid-template-areas:

    "sellerOnline sellerOnline . craftedLabel craftedSwitch . gemLevelLabel gemLevelRange"
    "seller seller . identifiedLabel identifiedSwitch . mapTierLabel mapTierRange"
    "inLeagueLabel inLeagueSwitch . corruptedLabel corruptedSwitch . qualityLabel qualityRange"
    "stash stash . enchantedLabel enchantedSwitch . quantityLabel quantityRange"
    "hasBuyoutLabel hasBuyoutSwitch . mirroredLabel mirroredSwitch . itemLevelLabel itemLevelRange"
    "priceLabel priceRange . shapedLabel shapedSwitch . normalizeQualityLabel normalizeQualitySwitch"
    "priceCurrencyDropdown priceCurrencyDropdown . elderLabel elderSwitch . . ."
    "exactCurrencyLabel exactCurrencySwitch . abyssJewelLabel abyssJewelSwitch . . ."

`;

const GridArea = styled.span`
  grid-area: ${props => props.area};
  display: flex;

  align-items: center;
`;

// const HeadingGridArea = GridArea.extend`
//
//   &&& {
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//   }
// `;

@connect(mapStateToProps)
class TradingBody extends Component {
  render() {
    return (
      <Div selectedTab={this.props.selectedTab}>
          <Grid>
            {/* Column 1 */}
            <GridArea area="sellerOnline">
              <Dropdown placeholder="Seller Online" />
            </GridArea>
            <GridArea area="seller">
              <Textbox placeholder="Seller" />
            </GridArea>
            <GridArea area="inLeagueLabel">
              <Label value="In League" />
            </GridArea>
            <GridArea area="stash">
              <Textbox placeholder="Stash" />
            </GridArea>
            <GridArea area="hasBuyoutLabel">
              <Label value="Has Buyout" />
            </GridArea>
            <GridArea area="priceLabel">
              <Label value="Price" />
            </GridArea>
            <GridArea area="exactCurrencyLabel">
              <Label value="Exact Currency" />
            </GridArea>

            {/* Column 2 */}
            <GridArea area="priceRange">
              <Range />
            </GridArea>
            <GridArea area="priceCurrencyDropdown">
              <Dropdown placeholder="Currency" />
            </GridArea>

            {/* Column 3 */}
            <GridArea area="inLeagueSwitch">
              <Switch />
            </GridArea>
            <GridArea area="hasBuyoutSwitch">
              <Switch />
            </GridArea>
            <GridArea area="exactCurrencySwitch">
              <Switch />
            </GridArea>

            {/* Column 4 */}
            {/* This is the space between the content */}

            {/* Column 5 */}
            <GridArea area="craftedLabel">
              <Label value="Crafted" />
            </GridArea>
            <GridArea area="identifiedLabel">
              <Label value="Identified" />
            </GridArea>
            <GridArea area="corruptedLabel">
              <Label value="Corrupted" />
            </GridArea>
            <GridArea area="enchantedLabel">
              <Label value="Enchanted" />
            </GridArea>
            <GridArea area="mirroredLabel">
              <Label value="Mirrored" />
            </GridArea>
            <GridArea area="shapedLabel">
              <Label value="Shaped" />
            </GridArea>
            <GridArea area="elderLabel">
              <Label value="Elder" />
            </GridArea>
            <GridArea area="abyssJewelLabel">
              <Label value="Abyss Jewel" />
            </GridArea>

            {/* Column 6 */}
            <GridArea area="craftedSwitch">
              <Switch />
            </GridArea>
            <GridArea area="identifiedSwitch">
              <Switch />
            </GridArea>
            <GridArea area="corruptedSwitch">
              <Switch />
            </GridArea>
            <GridArea area="enchantedSwitch">
              <Switch />
            </GridArea>
            <GridArea area="mirroredSwitch">
              <Switch />
            </GridArea>
            <GridArea area="shapedSwitch">
              <Switch />
            </GridArea>
            <GridArea area="elderSwitch">
              <Switch />
            </GridArea>
            <GridArea area="abyssJewelSwitch">
              <Switch />
            </GridArea>

            {/* Column 7 */}
            {/* This is the space between the content */}

            {/* Column 8 */}
            <GridArea area="gemLevelLabel">
              <Label value="Gem Level" />
            </GridArea>
            <GridArea area="mapTierLabel">
              <Label value="Map Tier" />
            </GridArea>
            <GridArea area="qualityLabel">
              <Label value="Quality" />
            </GridArea>
            <GridArea area="quantityLabel">
              <Label value="Quantity" />
            </GridArea>
            <GridArea area="itemLevelLabel">
              <Label value="Item Level" />
            </GridArea>
            <GridArea area="normalizeQualityLabel">
              <Label value="Normalize Quality" />
            </GridArea>

            {/* Column 9 */}
            <GridArea area="gemLevelRange">
              <Range />
            </GridArea>
            <GridArea area="mapTierRange">
              <Range />
            </GridArea>
            <GridArea area="qualityRange">
              <Range />
            </GridArea>
            <GridArea area="quantityRange">
              <Range />
            </GridArea>
            <GridArea area="itemLevelRange">
              <Range />
            </GridArea>
            <GridArea area="normalizeQualitySwitch">
              <Switch />
            </GridArea>

          </Grid>
      </Div>
    );
  }
}

export default TradingBody;
