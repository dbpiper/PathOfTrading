import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { List } from 'immutable';


import ItemBodyConstants from '../constants/ItemBodyConstants';
import MediaQuery from 'shared/helpers/MediaQuery';
import Label from './Label';
import Range from './Range';
import ColorsField from './ColorsField';
import Autocomplete from './Autocomplete';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { addMod, removeMod } from '../actions/item-actions';

const title = 'Item';

const mapStateToProps = (state, props) => {
  return {
    ...props,
    selectedTab: state.searchPage.tab.selectedTab,
    needToAddMod: state.searchPage.item.needToAddMod,
    removedMod: state.searchPage.item.removedMod,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMod: needToAddMod => dispatch(addMod(needToAddMod)),
    removeMod: removedMod => dispatch(removeMod(removedMod)),
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

  padding-right: 15px;
`

const RemoveButtonsFlexDiv = styled.div`
  display: flex;

  flex-direction: column;

  width: 80px;

  padding-left: 0px;
  padding-right: 60px;

  margin-bottom: 8px;
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

    margin-bottom: 75px;
`;

const ModDiv = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;
`;

const AddButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 20px;
`;

const EmptyRemoveButtonHeader = styled.div`
  margin-bottom: 96px;
`;

@connect(mapStateToProps, mapDispatchToProps)
class ItemBody extends Component {
  constructor(props) {
     super(props);

     const firstMod = this.createMod();
     const mods = List().push(firstMod);
     this.state = {
       needToAddMod: this.props.needToAddMod,
       mods,
       removeMod: 0,
     }
   }

   static getDerivedStateFromProps(nextProps, prevState) {
     let needToAddModObj = {};
     let removedModObj = {};
     if(nextProps.needToAddMod !== prevState.needToAddMod) {
       needToAddModObj = {
         needToAddMod: nextProps.needToAddMod,
       };
     }
     if (nextProps.removedMod !== prevState.removedMod) {
       removedModObj = {
          removedMod: nextProps.removedMod,
       };
     }

     return {...needToAddModObj, ...removedModObj};
   }

   static createModElment(id) {
     const divId = uuidv4();
     return (
       <ModDiv key={divId}>
         <Autocomplete placeholder="Mod" width="400px" key={id} canBeRanged />
       </ModDiv>
     );
   }

   static createRemoveButtonElment(modId, id) {
     const divId = uuidv4();
     return (
        <RemoveButtonsFlexDiv key={divId}>
          <RemoveButton modId={modId} key={id} />
        </RemoveButtonsFlexDiv>
     );
   }

   createMod() {
     const id = uuidv4();
     const removeId = uuidv4();
     return {
       mod: {
         element: ItemBody.createModElment(id),
         id,
       },
       removeButton: {
         element: ItemBody.createRemoveButtonElment(id, removeId),
         id: removeId,
       },
     };
   }

   getMods() {
     return this.state.mods.asImmutable().map(mod => mod.mod.element);
   }

   getRemoveButtons() {
     return this.state.mods.asImmutable().map(mod => mod ? mod.removeButton.element : '');
   }

   addMod() {
     const mod = this.createMod();

     this.setState({
       needToAddMod: false,
       mods: this.state.mods.push(mod),
     });

    this.props.addMod(false);
   }

   removeMod(id) {
     this.setState({
       mods: this.state.mods.asImmutable().filter(mod => mod.mod.id !== id),
     });

     if (this.state.mods.size === 0) {
       this.setState({
         mods: List().push(this.createMod()),
       });
     }

    this.props.removeMod(0);
   }

   componentDidMount() {
     if (this.state.needToAddMod) {
       this.addMod();
     }
     if (this.state.removedMod !== 0) {
       this.removeMod(this.state.removedMod);
     }
   }

   componentDidUpdate(_, prevState) {
     if (prevState.needToAddMod === false && this.state.needToAddMod === true) {
       this.addMod();
     }
     if (prevState.removedMod !== this.state.removedMod) {
       this.removeMod(this.state.removedMod);
     }
   }


  render() {
    return (
      <Div selectedTab={this.props.selectedTab}>
          <ModsFlexDiv>
            <ModsHeader>
              <Label value="Mods" heading={true} />
            </ModsHeader>

            {this.getMods()}

            <AddButtonDiv>
              <AddButton />
            </AddButtonDiv>
          </ModsFlexDiv>

          <RemoveButtonsFlexDiv>
            <EmptyRemoveButtonHeader />
            {this.getRemoveButtons()}
          </RemoveButtonsFlexDiv>

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
