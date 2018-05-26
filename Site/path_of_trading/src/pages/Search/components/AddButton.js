import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Colors from 'constants/Colors';
import PlusButtonCenter from 'media/images/svg/Plus_Button_Center_38.898x38.9.svg';
import noselect from 'shared/styles/noselect';
import { addMod } from '../actions/item-actions';

const mapDispatchToProps = dispatch => {
  return {
    addMod: needToAddMod => dispatch(addMod(needToAddMod))
  };
};

const Button = styled.button`

  ${'' /* background-color: rgba(0, 0, 0, 0); */}
  background-color: ${Colors.buttonPrimary};
  border: none;
  ${noselect}
  highlight: none;
  outline-width: 0;
  cursor: pointer;
  width: 64.46px;
  height: 64.46px;

  padding-top: 5px;

  border-radius: 1000px;

  ${'' /* box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17); */}

  &:hover {
    transition-duration 250ms;
    background-color: ${Colors.buttonPrimaryLight};
  }

`;

const Img = styled.img`
  ${noselect}
`


@connect(null, mapDispatchToProps)
class AddButton extends React.Component {
  constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addMod(true);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Img src={PlusButtonCenter} />
      </Button>
    );
  }
}

export default AddButton;
