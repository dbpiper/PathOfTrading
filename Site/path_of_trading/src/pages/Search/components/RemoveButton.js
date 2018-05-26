import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Colors from 'constants/Colors';
import PlusButtonCenter from 'media/images/svg/Plus_Button_Center_38.898x38.9.svg';
import noselect from 'shared/styles/noselect';
import { removeMod } from '../actions/item-actions';

const mapDispatchToProps = dispatch => {
  return {
    removeMod: removedMod => dispatch(removeMod(removedMod))
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

  transform: scale(0.9) rotate(45deg);

  &:hover {
    background-color: ${Colors.buttonPrimaryLight};
  }
`;

const Img = styled.img`
  ${noselect}
`


@connect(null, mapDispatchToProps)
class RemoveButton extends React.Component {
  constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeMod(this.props.modId);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        <Img src={PlusButtonCenter} />
      </Button>
    );
  }
}

export default RemoveButton;
