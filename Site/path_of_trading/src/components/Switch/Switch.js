import Measure from 'react-measure';
import classNames from 'classnames';

import React from 'react';
import s from './Switch.css';

import SwitchMiddle from '../../public/svg/Switch_Middle_59.06x30.81.svg';
import SwitchOn from '../../public/svg/Switch_On_59.06x30.81.svg';
import SwitchOff from '../../public/svg/Switch_Off_59.06x30.81.svg';
import SwitchButton from '../../public/svg/Switch_Button_26.667x26.667.svg';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      },
    }

    this.handleClick = this.handleClick.bind(this);
    this.transition2to1 = this.transition2to1.bind(this);
    this.transition1to0 = this.transition1to0.bind(this);
    this.transition0to2 = this.transition0to2.bind(this);

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
    this.transition('two-to-one-animation', finishFunc, 166.667);
  }

  transition1to0(finishFunc) {
    this.transition('one-to-zero-animation', finishFunc, 333.333);
    // this.transition('', finishFunc, 333.333);
  }

  transition0to2(finishFunc) {
    this.transition('zero-to-two-animation', finishFunc, 166.667);
  }

  handleClick() {

    const finishFunc = () => this.props.onClick(newValue(this.props.value));
    switch(this.props.value) {
      case 2:
        this.transition2to1(finishFunc);
        break;
      case 1:
        this.transition1to0(finishFunc);
        break;
      case 0:
        this.transition0to2(finishFunc);
        break;
    }

  }


  render() {
      const { width, height } = this.state.dimensions;
      return (
        <Measure
          bounds
          onResize={(contentRect)=> {
            this.setState({ dimensions: {
              width: contentRect.bounds.width,
              height: contentRect.bounds.height,
            }});
            this.props.onResize(this.state.dimensions);
          }}
        >
          {({ measureRef }) =>
            <div className="frame noselect"
              ref={measureRef}
              onClick={() => this.handleClick()}

              unselectable="on"
            >
              <img
                className={classNames({
                    "noselect": true,
                    "switch": true,
                    "switch-background": true,
                    "middle": true,
                    "hidden": this.props.value !== 2,
                })}
                unselectable="on"
                src={SwitchMiddle}
                ref={(middleEle) => this.middleEle = middleEle}
              />
              <img
                className={classNames({
                    "noselect": true,
                    "switch": true,
                    "switch-background": true,
                    "on": true,
                    "hidden": this.props.value !== 1,
                })}
                unselectable="on"
                src={SwitchOn}
                ref={(onEle) => this.onEle = onEle}
              />
              <img
                className={classNames({
                    "noselect": true,
                    "switch": true,
                    "switch-background": true,
                    "off": true,
                    "hidden": this.props.value !== 0,
                })}
                unselectable="on"
                src={SwitchOff}
                ref={(offEle) => this.offEle = offEle}
              />
              <img
                className={classNames({
                  "noselect": true,
                  "switch": true,
                  "switch-button": true,
                  "button-2": this.props.value === 2,
                  "button-1": this.props.value === 1,
                  "button-0": this.props.value === 0,
                })}
                unselectable="on"
                src={SwitchButton}
                ref={(buttonEle) => this.buttonEle = buttonEle}
              />
            </div>
          }
        </Measure>
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
    alert('error: switch value outside valid range');
  }
}

export default(Switch)
