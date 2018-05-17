import React, { Component } from 'react';

import styled from 'styled-components';

import Label from './Label';
import Switch from './Switch';
import Textbox from './Textbox';
import Range from './Range';
import ColorsField from './ColorsField';
import Autocomplete from './Autocomplete';
import Dropdown from './Dropdown';

const Grid = styled.div`
  display: grid;

  margin-top: 20px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: center;

  grid-template-rows: 50px 50px 50px 50px;
  grid-template-columns: 230px 186px 400px;

  grid-row-gap: 25px;

  grid-template-areas:
    "oneOne oneTwo ."
    "twoOne twoOne ."
    "threeOne threeTwo ."
    "fourOne fourTwo fourTwo"
    "fiveOne fiveOne ."
    "sixOne sixOne ."
    "sevenOne sevenOne ."
`;

const GridArea = styled.span`
  grid-area: ${props => props.area};
`;


class TestBody extends Component {
  render() {
    return (
      <Grid>
        <GridArea area="oneOne">
          <Label value="Crafted" />
        </GridArea>
        <GridArea area="oneTwo">
          <Switch label="Crafted" />
        </GridArea>
        <GridArea area="twoOne">
          <Textbox placeholder="Seller"/>
        </GridArea>
        <GridArea area="threeOne">
          <Label value="Links" />
        </GridArea>
        <GridArea area="threeTwo">
          <Range />
        </GridArea>
        <GridArea area="fourOne">
          <Label value="Linked Colors" />
        </GridArea>
        <GridArea area="fourTwo">
          <ColorsField
          />
        </GridArea>
        <GridArea area="fiveOne">
          <Autocomplete placeholder="Mod"/>
        </GridArea>
        <GridArea area="sixOne">
          <Textbox placeholder="Mod"/>
        </GridArea>
        <GridArea area="sevenOne">
          <Dropdown placeholder="Mod"/>
        </GridArea>
        {/* <GridArea area="sevenOne">
          <Autocomplete placeholder="Mod"/>
        </GridArea> */}
      </Grid>
    );
  }
}

export default TestBody;
