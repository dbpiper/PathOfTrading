import Measure from 'react-measure';
import classNames from 'classnames';

import React from 'react';
import styles from './Switch.css';

import SwitchMiddle from '../../public/svg/Switch_Middle_59.06x30.81.svg';
import SwitchOn from '../../public/svg/Switch_On_59.06x30.81.svg';
import SwitchOff from '../../public/svg/Switch_Off_59.06x30.81.svg';
import SwitchButton from '../../public/svg/Switch_Button_26.667x26.667.svg';

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
        <div className={[styles.frame, styles.noselect].join(' ')}
          onClick={() => this.handleClick()}
          unselectable="on"
        >
          <img
            className={classNames({
                [styles.noselect]: true,
                [styles.switch]: true,
                [styles.switchBackground]: true,
                [styles.middle]: true,
                [styles.hidden]: this.state.value !== 2,
            })}
            unselectable="on"
            src={SwitchMiddle}
            ref={(middleEle) => this.middleEle = middleEle}
            alt=""
          />
          <img
            className={classNames({
                [styles.noselect]: true,
                [styles.switch]: true,
                [styles.switchBackground]: true,
                [styles.on]: true,
                [styles.hidden]: this.state.value !== 1,
            })}
            unselectable="on"
            src={SwitchOn}
            ref={(onEle) => this.onEle = onEle}
            alt=""
          />
          <img
            className={classNames({
                [styles.noselect]: true,
                [styles.switch]: true,
                [styles.switchBackground]: true,
                [styles.off]: true,
                [styles.hidden]: this.state.value !== 0,
            })}
            unselectable="on"
            src={SwitchOff}
            ref={(offEle) => this.offEle = offEle}
            alt=""
          />
          <img
            className={classNames({
              [styles.noselect]: true,
              [styles.switch]: true,
              [styles.switchButton]: true,
              [styles.button2]: this.state.value === 2,
              [styles.button1]: this.state.value === 1,
              [styles.button0]: this.state.value === 0,
            })}
            unselectable="on"
            src={SwitchButton}
            ref={(buttonEle) => this.buttonEle = buttonEle}
            alt=""
          />
        </div>
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

export default(Switch)
