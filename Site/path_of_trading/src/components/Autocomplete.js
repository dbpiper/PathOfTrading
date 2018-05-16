import React, {Component} from 'react'
// import glamorous, {Div} from 'glamorous'
// import {css} from 'glamor'
import matchSorter from 'match-sorter'
import Downshift from 'downshift';

import styled, { css } from 'styled-components';

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

    ${'' /* ${activeStyle}, */}

    ${(props) => props.isActive === true ? activeStyle : {}}
    ${(props) => props.isSelected === true ? selectedStyle : ''}
  ${'' /* ({isActive, isSelected}) => {
    const styles = []
    if (isActive) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        background: 'rgba(0,0,0,.03)',
      })
    }
    if (isSelected) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        fontWeight: '700',
      })
    }
    return styles
  } */}
`;


// const onAttention = '&:hover, &:focus'

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

const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  ${'' /* cursor: 'pointer', */}
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
              <BoxDiv>
                <div>
                  {selectedItem}
                </div>
                <DropdownButton {...getButtonProps()}/>
              </BoxDiv>
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
