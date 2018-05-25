import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemBodyConstants from '../constants/ItemBodyConstants';
import MediaQuery from 'shared/helpers/MediaQuery';
import Label from './Label';
import Range from './Range';
import ColorsField from './ColorsField';
import Autocomplete from './Autocomplete';
import AddButton from './AddButton';

const title = 'Item';

const mapStateToProps = (state, props) => {
  return {
    ...props,
    selectedTab: state.searchPage.tab.selectedTab,
    needToAddMod: state.searchPage.item.needToAddMod,
  };
};

const socketsLinksGridMediaQueries = MediaQuery.create([
  {
    property: 'grid-template-columns',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: Object.values(ItemBodyConstants.socketsLinksGrid.columns.sizes),
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: ItemBodyConstants.socketsLinksGrid.columns.unit,
      };
    },
  },
  {
    property: 'grid-template-rows',
    function: MediaQuery.arrayAndUnitToSizes,
    args: {
      sizes: ItemBodyConstants.socketsLinksGrid.rows.sizes,
    },
    recipeArgsGetter: (args, index) => {
      return {
        sizes: args.sizes[index],
        unit: ItemBodyConstants.socketsLinksGrid.rows.unit,
      };
    },
  }
]);

const Div = styled.div`
  height: ${ItemBodyConstants.height}${ItemBodyConstants.heightUnit};
  width: ${ItemBodyConstants.width}${ItemBodyConstants.widthUnit};

  display: ${props => props.selectedTab !== title ? 'none' : 'flex'};

  max-width: 95%;
  max-height: 95%;

  flex-direction: row;


  justify-content: center;
`;

const ModsFlexDiv = styled.div`
  display: flex;

  flex-direction: column;

  width: 464px;

  padding-right: 50px;
`

const SocketsLinksGrid = styled.div`
  display: grid;

  ${'' /* margin-left: ${ItemBodyConstants.gridLeftMargin}${ItemBodyConstants.gridLeftMarginUnit}; */}

  ${'' /* justify-content: center; */}

  ${socketsLinksGridMediaQueries};

  grid-template-areas:
    "socketsLinksLabel socketsLinksLabel socketsLinksLabel"
    "socketsLabel . socketsRange"
    "colorsLabel . colorsField"
    ". . ."
    "linksLabel . linksRange"
    "linkedColorsLabel . linkedColorsField"


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

const ModsHeader = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    margin-bottom: 20px;
`;

const ModDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const AddButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 20px;
`;

@connect(mapStateToProps)
class ItemBody extends Component {
  constructor(props) {
     super(props);

     this.state = {
       needToAddMod: this.props.needToAddMod,
       // needToRemoveMod: this.props.needToRemoveMod,
     }
   }

   // use new static method to derive state from props
   static getDerivedStateFromProps(nextProps, prevState) {
     if(nextProps.needToAddMod !== prevState.needToAddMod) { // check id was updated
       return {
         needToAddMod: nextProps.needToAddMod,
       };
     }
   }
   addMod() {
     alert('adding mod');

     this.setState({
       needToAddMod: false,
     });
   }

   componentDidMount() {
     if (this.state.needToAddMod) {
       this.addMod();
     }
   }

   componentDidUpdate(_, prevState) {
     if (prevState.needToAddMod === false && this.state.needToAddMod === true) {
       this.addMod();
     }
   }


  render() {
    return (
      <Div selectedTab={this.props.selectedTab}>
          <ModsFlexDiv>
            <ModsHeader>
              <Label value="Mods" heading={true} />
            </ModsHeader>

            <ModDiv>
              <Autocomplete placeholder="Mod" width="400px" canBeRanged />
            </ModDiv>

            <AddButtonDiv>
              <AddButton />
            </AddButtonDiv>
          </ModsFlexDiv>
          <SocketsLinksGrid>

            {/* Column 1 */}
            <HeadingGridArea area="socketsLinksLabel">
              <Label value="Sockets and Links" heading={true} />
            </HeadingGridArea>


            <GridArea area="socketsLabel">
              <Label value="Sockets" />
            </GridArea>

            <GridArea area="colorsLabel">
              <Label value="Colors" />
            </GridArea>
            {/* Space between rows */}
            <GridArea area="linksLabel">
              <Label value="Links" />
            </GridArea>
            <GridArea area="linkedColorsLabel">
              <Label value="Linked Colors" />
            </GridArea>

            {/* Column 2 */}
            {/* The blank space between 1 and 3 */}

            {/* Column 3 */}
            <GridArea area="socketsRange">
              <Range />
            </GridArea>
            <GridArea area="colorsField">
              <ColorsField />
            </GridArea>
            {/* Space between rows */}
            <GridArea area="linksRange">
              <Range />
            </GridArea>
            <GridArea area="linkedColorsField">
              <ColorsField />
            </GridArea>

          </SocketsLinksGrid>
      </Div>
    );
  }
}

export default ItemBody;
