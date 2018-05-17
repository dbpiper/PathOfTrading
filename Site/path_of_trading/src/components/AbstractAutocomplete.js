import React from 'react'
import matchSorter from 'match-sorter'
import Downshift from 'downshift';
import styled, { css } from 'styled-components';
import { longestCommonSubstring } from 'string-algorithms';

import textbox from '../styles/textbox';
import standardFont from '../styles/standardFont';
import textboxBackground from '../styles/textboxBackground';
import DropdownButton from './DropdownButton';
import Textbox from './Textbox';

import Constants from '../Constants';

/* Old-school npm packages */
const jaroWinkler = require('jaro-winkler');
const SuffixTrie  = require('common-substrings').trie;


const borderRadius = () => {
  return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
};


const items = [
    {name: 'Red'},
    {name: 'Black'},
    {name: 'White'},
    {name: 'Blue'},
    {name: 'Green'},
    {name: 'Purple'},
    {name: 'Roy'},
    {name: 'Alexander'},
];

const findLongestSubstring = (items: [string], value: string) => {
      let valueAndItems = items.slice();
      valueAndItems.push({name: value});
      const valueIndex = valueAndItems.length - 1;

      const valueAndItemsLower = valueAndItems.map(item => {
        return item.name.toLowerCase();
      });

      console.log(valueAndItemsLower);

      let trie = new SuffixTrie({
        minLength: 2,
        minOccurrence: 2,
        debug: false,
        limit: 100,
        byLength: true,
      });

      trie.build(valueAndItemsLower);

      const substrings = trie.weighByAverage();

      const valueSubstrings = substrings.filter(substringObj => {
        return substringObj.source.includes(valueIndex);
      });

      if (valueSubstrings.length > 0 && valueSubstrings[0].name === value) {
          return valueSubstrings[0].name;
      } else {
        return '';
      }
};

const suggest = (items, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0)
    return [];
  else {
    let suggestions = items.map(item => {

      const dist = jaroWinkler(item.name, inputValue, { caseSensitive: false });

      const longestSubstring = findLongestSubstring([item], inputValue);


      return {
        name: item.name,
        distance: dist,
        longestSubstring: longestSubstring,
      };
    });

    suggestions.sort((a, b) => b.distance - a.distance);


    return suggestions;
  }
};

const activeStyle = css`
    color: ${Constants.Colors.dropdownSelectedColor};
    background: ${Constants.Colors.dropdownSelectedBackground};
`;

const selectedStyle = css`
    border-left: ${Constants.Dropdown.Item.selectedAccent}${Constants.Dropdown.Item.selectedAccentUnit}
    solid ${Constants.Colors.buttonPrimaryLight};
    border-top: 0;
    border-bottom: 0;
`;

const activeStyleInner = css`
    color: ${Constants.Colors.dropdownSelectedColor};
    background: ${Constants.Colors.dropdownSelectedBackground};
`;

const selectedStyleInner = css`
    border-top: ${Constants.Dropdown.Item.selectedBorder}${Constants.Dropdown.Item.selectedBorderUnit}
     solid ${Constants.Colors.offBorder}
    border-bottom: ${Constants.Dropdown.Item.selectedBorder}${Constants.Dropdown.Item.selectedBorderUnit}
     solid ${Constants.Colors.offBorder}
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

  width: ${Constants.Textbox.width}${Constants.Textbox.widthUnit};

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

`;

// const Textbox = styled.div`
//   ${textbox}
//
//   &&& {
//     padding: ${Constants.Textbox.padding}${Constants.Textbox.paddingUnit};
//     -webkit-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
//        -moz-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
//             border-radius: ${borderRadius()} 0 0 ${borderRadius()};
//   }
// `;

const BoxButtonWrapper = styled.div`
  display: flex;
`;

// function advancedFilter(theItems, value) {
//   return matchSorter(theItems, value, {
//     keys: ['name'],
//   })
// }

class Dropdown extends React.Component {
  // itemToString = item => (item ? item.name : '')
  // handleChange = selectedItems => {
  //   console.log({selectedItems})
  // }
  render() {
    return (
      <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   flexDirection: 'column',
        //   textAlign: 'center',
        // }}
      >
        <Downshift
          onChange={this.handleChange}
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
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <BoxButtonWrapper>
              {/* <Textbox */}
              <input type="text"
                {
                  ...getInputProps({
                    placeholder: this.props.placeholder,
                  })
                }
              >
              </input>
              {/* </Textbox> */}
                <DropdownButton {...getButtonProps()}/>
              </BoxButtonWrapper>
               {isOpen && (
            <div
              style={{
                border: '1px solid rgba(34,36,38,.15)',
                maxHeight: 100,
                overflowY: 'scroll',
              }}
            >
              {(inputValue ? suggest(items, inputValue) : items).map(
                (item, index) => (
                  <Item
                    key={item.name}
                    {...getItemProps({
                      'data-test': `downshift-item-${index}`,
                      item,
                      isActive: highlightedIndex === index,
                      isSelected: selectedItem === item.name,
                    })}
                  >
                    {item.name + ' ' + item.longestSubstring}
                  </Item>
                ),
              )}
            </div>
          )}
              {/* {!isOpen ? null : (
                <Menu>
                  {(inputValue ? matchSorter(items, inputValue) : items
                    .map((item, index) => (

                    // items.map((item, index) => (
                      <Item
                        key={index}
                        {
                          ...getItemProps({
                            item,
                            index,
                            isActive: highlightedIndex === index,
                            isSelected: selectedItem === item
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
                              isSelected: selectedItem === item
                            })
                          }
                        >
                          {item}
                        </InnerItem>
                      </Item>
                    ),
                  ))}

                </Menu>
              )} */}
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

export default Dropdown;
