import React from 'react'
import Downshift from 'downshift';
import styled, { css } from 'styled-components';
import jaroWinkler from 'jaro-winkler'

import Colors from 'constants/Colors';
import Constants from 'constants/Constants';
import standardFont from 'shared/styles/standardFont';
import textboxBackground from 'shared/styles/textboxBackground';
import AutocompleteButton from './AutocompleteButton';
import HighlighedSubstringText from './HighlightedSubstringText';
import Textbox from './Textbox';

const suggest = (items, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0)
    return [];
  else {
    let suggestions = items.map(item => {

      const dist = jaroWinkler(item.name, inputValue, { caseSensitive: false });

      const substring = item.name.toLowerCase().includes(inputValue.toLowerCase()) ? inputValue : '';

      return {
        name: item.name,
        distance: dist,
        substring,
      };
    });

    suggestions.sort((a, b) => b.distance - a.distance);


    return suggestions;
  }
};

const activeStyle = css`
    color: ${Colors.dropdownSelectedColor};
    background: ${Colors.dropdownSelectedBackground};
`;

const selectedStyle = css`
    border-left: ${Constants.Dropdown.Item.selectedAccent}${Constants.Dropdown.Item.selectedAccentUnit}
    solid ${Colors.selectedHighlightColor};
    border-top: 0;
    border-bottom: 0;
`;

const activeStyleInner = css`
    color: ${Colors.dropdownSelectedColor};
    background: ${Colors.dropdownSelectedBackground};
`;

const selectedStyleInner = css`
    border-top: ${Constants.Dropdown.Item.selectedBorder}${Constants.Dropdown.Item.selectedBorderUnit}
     solid ${Colors.offBorder}
    border-bottom: ${Constants.Dropdown.Item.selectedBorder}${Constants.Dropdown.Item.selectedBorderUnit}
     solid ${Colors.offBorder}
`;

const Menu = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  max-height: 20rem;
  overflow-y: scroll;
  overflow-x: hidden;
  border-top-width: 0;
  outline: 0;
  transition: opacity .1s ease;
  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
  max-height: 200px; //TODO: make into constant


  ${(props) => Textbox.makeWidthMediaQueries(props)}

  ${standardFont}
  ${textboxBackground}

  padding: 0;

  margin-top: ${Constants.Dropdown.Menu.gap}${Constants.Dropdown.Menu.gapUnit};

  ${(props) => props.isOpen} {
    display: block;
  }
`;

const Item = styled.div`
    ${(props) => props.isActive === true ? activeStyle : {}}
    ${(props) => props.isSelected === true ? selectedStyle : ''}

    cursor: pointer;
`;

const InnerItem = styled.div`
    cursor: pointer;
    display: block;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    text-transform: none;
    box-shadow: none;
    white-space: normal;
    word-wrap: normal;

    ${standardFont}

    padding: ${Constants.Textbox.padding}${Constants.Textbox.paddingUnit};

    ${(props) => props.isActive === true ? activeStyleInner : {}}
    ${(props) => props.isSelected === true ? selectedStyleInner : ''}


    cursor: pointer;
`;


const BoxButtonWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: start;

`;

class AbstractAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    const items = [
        Object.freeze({
          name: 'Red',
          substring: '',
        }),
        Object.freeze({
          name: 'Black',
          substring: '',
          ranged: true,
        }),
        Object.freeze({
          name: 'White',
          substring: '',
        }),
        Object.freeze({
          name: 'Blue',
          substring: '',
        }),
        Object.freeze({
          name: 'Green',
          substring: '',
        }),
        Object.freeze({
          name: 'Purple',
          substring: '',
        }),
        Object.freeze({
          name: 'Roy',
          substring: '',
        }),
        Object.freeze({
          name: 'Alexander',
          substring: '',
        }),
    ];

    this.state = {
      items,
      selectedItem: null,
    };

  }

  itemToString = item => (item ? item.name : '')

  handleChange = item => {
    this.setState({
      selectedItem: item,
    });
  }
  render() {
    const { selectedItem, items } = this.state;
    const makeAutocompleteProps = (getButtonProps) => {
      let buttonProps = {};
      if (!this.props.search) {
        buttonProps =
        (getButtonProps({
          onClick: () => {this.boxEle.focus();}
        }));
      } else {
        buttonProps = {
          onClick: () => {alert('search!');}
        }
      }
      return ({
        ...buttonProps,
        search: this.props.search,
      });
    };
    return (
      <div
      >
        <Downshift
          onChange={this.handleChange}
          itemToString={this.itemToString}
          selectedItem={selectedItem}
          defaultHighlightedIndex={0}
          items={items}
        >
          {({
            getButtonProps,
            getRemoveButtonProps,
            isOpen,
            selectedItem,
            getItemProps,
            highlightedIndex,
            getInputProps,
            inputValue,
          }) => (
            <span>
              <BoxButtonWrapper>
              <Textbox
                {
                  ...getInputProps({
                    placeholder: this.props.placeholder,
                  })
                }
                innerRef={box => this.boxEle = box}
                disabled={!this.props.editable}
                canBeRanged={this.props.canBeRanged}
                isRanged={(!selectedItem ? false : selectedItem.ranged)}
                hasButton
                search={this.props.search}
                width={this.props.width}
              >
              </Textbox>
                <AutocompleteButton {...(makeAutocompleteProps(getButtonProps))} />
              </BoxButtonWrapper>
              {isOpen && (
                <Menu
                  canBeRanged={this.props.canBeRanged}
                  search={this.props.search}
                  width={this.props.width}
                >
                  {(inputValue && !this.props.dropdown ? suggest(items, inputValue) : items).map(
                    (item, index) => (
                      <Item
                        key={index}
                        {
                          ...getItemProps({
                            item,
                            index,
                            isActive: highlightedIndex === index,
                            isSelected: (!selectedItem ? false : selectedItem.name === item.name),
                          })
                        }
                      >
                        <InnerItem
                          key={index}
                          {
                            ...getItemProps({
                              item,
                              index,
                              isActive: highlightedIndex === index,
                              isSelected: (!selectedItem ? false : selectedItem.name === item.name),
                            })
                          }
                        >
                          <HighlighedSubstringText item={item} cursor='pointer' />
                        </InnerItem>
                      </Item>
                    ),
                  )}

                </Menu>
              )}
            </span>
          )}
        </Downshift>
      </div>
    );
  }
}

export default AbstractAutocomplete;
