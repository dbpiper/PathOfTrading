import Measure from 'react-measure';
import classNames from 'classnames';

import React from 'react';
import s from './Switch.css';

import SwitchMiddle from '../../public/svg/Switch_Middle.svg';
import SwitchOn from '../../public/svg/Switch_On.svg';
import SwitchOff from '../../public/svg/Switch_Off.svg';
import SwitchButton from '../../public/svg/Switch_Button.svg';

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
  }

  transition2to1() {
  }

  transition1to0() {

  }

  transition0to2() {

  }

  handleClick() {

    // switch(this.props.value) {
    //   case 2:
    //     this.transition2to1();
    //     break;
    //   case 1:
    //     this.transition1to0();
    //     break;
    //   case 0:
    //     this.transition0to2();
    //     break;
    // }


    this.props.onClick(newValue(this.props.value));
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
            <div className="frame"
              ref={measureRef}
              onClick={() => this.handleClick()}
            >
              <img
                className="switch switch-background middle"
                src={SwitchMiddle}
                ref={(middleEle) => this.middleEle = middleEle}
              />
              <img
                className="switch switch-background hidden"
                src={SwitchOn}
                ref={(onEle) => this.onEle = onEle}
              />
              <img
                className="switch switch-background hidden"
                src={SwitchOff}
                ref={(offEle) => this.offEle = offEle}
              />
              <img
                className={classNames({
                  "switch": true,
                  "switch-button": true,
                  "button-2": this.props.value === 2,
                  "button-1": this.props.value === 1,
                  "button-0": this.props.value === 0,
                })}
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
    alert(value);
    return (value + 1) % 3;
  } else {
    alert(value);
    alert('error: switch value outside valid range');
  }
}

export default(Switch)
