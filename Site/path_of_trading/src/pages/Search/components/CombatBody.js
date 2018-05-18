import React, { Component } from 'react';
import styled from 'styled-components';

import Label from './Label';
import Range from './Range';

const Div = styled.div`
  width: 100%;
  height: 74.9074%;
  display: block;
`

const Grid = styled.div`
  display: grid;

  ${'' /* margin-top: 20px; */}
  padding-top: 20px;
  padding-bottom: 20px;
  ${'' /* margin-bottom: 20px; */}

  align-items: center;
  justify-content: center;

  grid-template-rows: 50px 50px 50px 50px;
  grid-template-columns: 15.13955% 186px 400px;

  grid-row-gap: 25px;

  grid-template-areas:
`;

const GridArea = styled.span`
  grid-area: ${props => props.area};
`;


class CombatBody extends Component {
  render() {
    return (
      <Div>
        <Grid>
          <GridArea area="oneOne">
            <Label value="Crafted" />
          </GridArea>
        </Grid>
      </Div>
    );
  }
}

export default CombatBody;
