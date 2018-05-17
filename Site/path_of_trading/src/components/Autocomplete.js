import React, {Component} from 'react'
import matchSorter from 'match-sorter'
import Downshift from 'downshift';
import styled, { css } from 'styled-components';
import textbox from '../styles/textbox';
import standardFont from '../styles/standardFont';
import textboxBackground from '../styles/textboxBackground';
import DropdownButton from './DropdownButton';
import Constants from '../Constants';

const borderRadius = () => {
  return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
};


const items = ['Red', 'Black', 'White', 'Blue', 'Green', 'Purple'];

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
  overflow-y: auto;
  overflow-x: hidden;
  border-top-width: 0;
  outline: 0;
  transition: opacity .1s ease;
  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);

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
    ${'' /* cursor: pointer;
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

    padding: ${Constants.Textbox.padding}${Constants.Textbox.paddingUnit}; */}

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

const Textbox = styled.div`
  ${textbox}

  &&& {
    padding: ${Constants.Textbox.padding}${Constants.Textbox.paddingUnit};
    -webkit-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
       -moz-border-radius: ${borderRadius()} 0 0 ${borderRadius()};
            border-radius: ${borderRadius()} 0 0 ${borderRadius()};
  }
`;

const BoxButtonWrapper = styled.div`
  display: flex;
`;

function advancedFilter(theItems, value) {
  return matchSorter(theItems, value, {
    keys: ['name'],
  })
}

class Dropdown extends React.Component {
  itemToString = item => (item ? item.name : '')
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
          }) => (
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <BoxButtonWrapper>
              <Textbox>
                <div>
                  {(() => {
                    if (selectedItem) {
                      return selectedItem;
                    } else {
                      return this.props.placeholder;
                    }
                  })()}
                </div>
              </Textbox>
                <DropdownButton {...getButtonProps()}/>
              </BoxButtonWrapper>
              {!isOpen ? null : (
                <Menu>
                  {items.map((item, index) => (
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
                  ))}

                </Menu>
              )}
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

export default Dropdown;
