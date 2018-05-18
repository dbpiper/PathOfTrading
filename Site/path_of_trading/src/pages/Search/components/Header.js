import React from 'react';
import styled from 'styled-components';

import headingFont from '../../../shared/styles/headingFont';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const Div = styled.div`
    & {
      ${headingFont}
    }
`;

const Grid = styled.div`
  display: grid;

  ${'' /* margin-top: 20px; */}

  ${'' /* padding-top: 20px;
  padding-bottom: 20px; */}

  ${'' /* margin-bottom: 20px; */}

  align-items: center;
  justify-content: center;

  grid-template-rows: 135.5px 135.5px;

  ${'' /* grid-template-rows: 50px 50px 50px 50px; */}
  ${'' /* grid-template-columne: 230px 186px 400px; */}

  ${'' /* grid-template-columns: 15.13955% 186px 400px; */}

  ${'' /* grid-row-gap: 25px; */}

  grid-template-columns: 600px 250px;

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

function Heading(props) {
  return (
    <Div>
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
    </Div>
  );
}

export default Heading;
