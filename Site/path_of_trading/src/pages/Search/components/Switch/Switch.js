import classNames from 'classnames';

import React from 'react';
import styles from './Switch.css';

import styled, { css } from 'styled-components';

import noselect from 'shared/styles/noselect';

import SwitchMiddle from 'media/images/svg/Switch_Middle_59.06x30.81.svg';
import SwitchOn from 'media/images/svg/Switch_On_59.06x30.81.svg';
import SwitchOff from 'media/images/svg/Switch_Off_59.06x30.81.svg';
import SwitchButton from 'media/images/svg/Switch_Button_26.667x26.667.svg';

const switchBackground = css`
  position: relative;
  top: 0;
  left: 0;
`;

const switchButton = css`
  position: absolute;
  top: 7%;
`;

const Frame = styled.div`
  width: 59.06px;
  height: 30.81px;
  position: relative;
  top: 0;
  left: 0;

  cursor: pointer;
  ${noselect}
`;


const hide = (hidden) => {
  if (hidden) {
    return 'none';
  }
}

const Background = styled.img.attrs({
  alt: "",
})`
  ${switchBackground}
  display: ${props => hide(props.hidden)};
  ${noselect}
`;

const buttonPos = (value) => {
  if (value === 2) {
    return 27;
  } else if (value === 1) {
    return 52;
  } else {
    return 3;
  }
};

// const slideRightFromMid = keyframes`
//   ${'' /* from {
//     left: ${props => buttonPos(props.value)}%;
//   }
//   to {
//     left: ${props => buttonPos(newValue(props.value))}%;
//   } */}
//
//   from {
//     left: 0%;
//   }
//
//   to {
//     left: 100%;
//   }
// `;


const Button = styled.img.attrs({
  alt: "",
})`
  ${noselect}
  ${switchButton}
  left: ${props => buttonPos(props.value)}%;
  ${'' /* animation: ${slideRightFromMid} 166.667ms linear infinte; */}
`;

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.transition2to1 = this.transition2to1.bind(this);
    this.transition1to0 = this.transition1to0.bind(this);
    this.transition0to2 = this.transition0to2.bind(this);

    this.state = {
      value: 2,
    }

    this.transition = this.transition.bind(this);
  }


  transition(animationClassName, finishFunc, animationTime) {
    const oldClassName = this.buttonEle.className;

    this.buttonEle.className = classNames(
      oldClassName,
      animationClassName
    );

    setTimeout(function() {
      this.buttonEle.className = oldClassName;

      finishFunc();
    }.bind(this), animationTime - 50); // account for logic happening
                                        // -- still racey, but no really good way around
  }

  transition2to1(finishFunc) {
    this.transition([styles.twoToOneAnimation], finishFunc, 166.667);
  }

  transition1to0(finishFunc) {
    this.transition([styles.oneToZeroAnimation], finishFunc, 333.333);
  }

  transition0to2(finishFunc) {
    this.transition([styles.zeroToTwoAnimation], finishFunc, 166.667);
  }

  handleClick() {

    const finishFunc = () => this.setState({value: newValue(this.state.value)});
    switch(this.state.value) {
      case 2:
        this.transition2to1(finishFunc);
        break;
      case 1:
        this.transition1to0(finishFunc);
        break;
      case 0:
        this.transition0to2(finishFunc);
        break;
      default:
        alert("Error: invalid transition state!");
    }

  }


  render() {
      return (
        <Frame onClick={() => this.handleClick()}>
          <Background src={SwitchMiddle} hidden={this.state.value !== 2}/>
          <Background src={SwitchOn} hidden={this.state.value !== 1}/>
          <Background src={SwitchOff} hidden={this.state.value !== 0}/>
          <Button
            value={this.state.value}
            src={SwitchButton}
            innerRef={(buttonEle) => this.buttonEle = buttonEle}
          />
        </Frame>
      );
  }
}


function newValue(value) {
  if (value >= 0 && value <= 2) {
    if (value === 2) {
      return 1;
    } else if (value === 1) {
      return 0;
    } else {
      return 2;
    }
  } else {
    alert('Error: switch value outside valid range');
  }
}

export default Switch;
