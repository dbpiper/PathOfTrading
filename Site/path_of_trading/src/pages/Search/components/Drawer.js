import React from 'react';
import styled, { css } from 'styled-components';
import { Motion, spring } from 'react-motion';

import Colors from 'constants/Colors';
import DrawerConstants from '../constants/DrawerConstants';
import Arrow from 'media/images/svg/Arrow_19.884x13.259.svg';
import MediaQuery from 'shared/helpers/MediaQuery';
import standardFont from 'shared/styles/standardFont';
import noselect from 'shared/styles/noselect';
import Label from './Label';
import Range from './Range';

const gridMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(DrawerConstants.gridColumns.sizes),
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: DrawerConstants.gridColumns.unit,
      };
    },
  },
  {
    property: 'grid-template-rows',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: DrawerConstants.gridRows.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: DrawerConstants.gridRows.unit,
      };
    },
  }
]);

const Div = styled.div`
  position: fixed;
  display: grid;

  margin-left: ${DrawerConstants.gridLeftMargin}${DrawerConstants.gridLeftMarginUnit};
  height: 225px;
  width: 650px;

  align-content: center;
  justify-content: center;

  ${standardFont};
  ${gridMediaQueries};

  grid-template-areas:
    "arrowIcon arrowIcon arrowIcon arrowIcon arrowIcon"
    "requirementsHeader requirementsHeader requirementsHeader requirementsHeader requirementsHeader"
    "levelLabel levelRange . strengthLabel strengthRange"
    "levelLabel levelRange . dexterityLabel dexterityRange"
    "levelLabel levelRange . intelligenceLabel intelligenceRange";

    background-color: ${Colors.textboxBackground};

    transition: 400ms ease-in-out;
    transform: ${props => props.up ? 'translateY(' + top +'px)'
      : 'translateY(' + bottom + 'px)'
    };
`;

const GridArea = styled.span`
  grid-area: ${props => props.area};
  display: flex;

  align-items: center;
`;

const GridAreaIcon = styled.span`
  grid-area: ${props => props.area};
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  transform: rotate(-180deg);
  transition: 250ms ease-in-out;

  ${props => props.up ? css`
    transform: rotate(0deg);
    margin-top: -10px;
  ` : ''};
`;

const HeadingGridArea = GridArea.extend`

  &&& {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const RotatedImg = styled.div`

  cursor: pointer;
  width: 19.884px
  height: 13.259px;

  ${noselect}
`;

const top = -220;
const bottom = -90;

class Drawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      up: false,
      startEnd: {
        // start: -Number.parseFloat(TabConstants.width),
        start: bottom,
        end: bottom,
      },
    };
  }

  getStart() {
    if (this.state.startedMovingDown) {
      return top;
    } else if (this.state.startedMovingUp) {
      return bottom;
    } else if (this.state.up) {
      return top;
    } else {
      return bottom
    }
  }

  getEnd() {
    if (this.state.startedMovingDown) {
      return bottom;
    } else if (this.state.startedMovingUp) {
      return top;
    } else if (this.state.up) {
      return bottom;
    } else {
      return top;
    }
  }

  handleClick() {
    const newUp = !this.state.up;
    const startedMovingUp = newUp;
    const startedMovingDown = !newUp;
    this.setState({...this.state,
      up: newUp,
      startedMovingUp,
      startedMovingDown,
    });
  }

  handleFinish() {

    if (this.startedMovingUp) {
      this.setState({
        startEnd: {
          start: top,
          end: bottom,
        },
        startedMovingUp: false,
        startedMovingDown: false,
      });
    } else if (this.startedMovingDown) {
      this.setState({
        startEnd: {
          start: bottom,
          end: top,
        },
        startedMovingUp: false,
        startedMovingDown: false,
      });
    } else {
      return this.state.startEnd;
    }
  }

  render() {
    return (
      <Motion
        defaultStyle={{y: 0}}
        style={{y: spring(0)}}
        onRest={() => this.handleFinish()}
      >
        {value =>
          <Div up={this.state.up} y={value.y}>
            {(
              <React.Fragment>
                <GridAreaIcon area="arrowIcon" up={this.state.up}>
                  <RotatedImg>
                    <img src={Arrow} alt="" onClick={() => this.handleClick()}/>
                  </RotatedImg>
                </GridAreaIcon>


                <HeadingGridArea area="requirementsHeader" >
                  <Label value="Requirements" subHeading />
                </HeadingGridArea>

                <GridArea area="levelLabel">
                  <Label value="Level" />
                </GridArea>
                <GridArea area="levelRange">
                  <Range />
                </GridArea>


                <GridArea area="strengthLabel">
                  <Label value="Strength" />
                </GridArea>
                <GridArea area="strengthRange">
                  <Range />
                </GridArea>

                <GridArea area="dexterityLabel">
                  <Label value="Dexterity" />
                </GridArea>
                <GridArea area="dexterityRange">
                  <Range />
                </GridArea>

                <GridArea area="intelligenceLabel">
                  <Label value="Intelligence" />
                </GridArea>
                <GridArea area="intelligenceRange">
                  <Range />
                </GridArea>
              </React.Fragment>
            )}
          </Div>
        }
      </Motion>
    );
  }
}

export default Drawer;
