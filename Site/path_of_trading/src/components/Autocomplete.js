import React, {Component} from 'react'
// import glamorous, {Div} from 'glamorous'
// import {css} from 'glamor'
import matchSorter from 'match-sorter'
import Downshift from 'downshift';

import styled, { css } from 'styled-components';

import textbox from '../styles/textbox';

import DropdownButton from './DropdownButton';



const items = ['Red', 'Black', 'White', 'Blue', 'Green', 'Purple'];

const activeStyle = css`
    color: rgba(0,0,0,.95);
    background: rgba(0,0,0,.03);
`;

const selectedStyle = css`
    color: rgba(0,0,0,.95);
    fontWeight: 700;
`;

const Item = styled.div`
    position: relative;
    cursor: pointer;
    display: block;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    color: rgba(0,0,0,.87);
    font-size: 1rem;
    text-transform: none;
    font-weight: 400;
    box-shadow: none;
    padding: .8rem 1.1rem;
    white-space: normal;
    word-wrap: normal;
    color: #fff;

    ${(props) => props.isActive === true ? activeStyle : {}}
    ${(props) => props.isSelected === true ? selectedStyle : ''}
`;

const Menu = styled.div`
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-top-width: 0;
  outline: 0;
  border-radius: 0 0 .28571429rem .28571429rem;
  transition: opacity .1s ease;
  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
  border-color: #96c8da;
  border-right-width: 1;
  border-bottom-width: 1;
  border-left-width: 1;
  border-style: solid;
`;

const Textbox = styled.div`
  ${textbox}

  &&& {
    -webkit-border-radius: 3px 0 0 3px;
       -moz-border-radius: 3px 0 0 3px;
            border-radius: 3px 0 0 3px;
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
              style={{width: 500, margin: 'auto'}}
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
                        {item}
                      </Item>
                  ))}

                </Menu>
              )}
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}

export default Dropdown;
