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
      switchValue: 3,
    }
  }

  handleClick() {
    this.props.value = newValue(this.props.value);



    this.props.onClick();
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
              onClick={() => this.handleClick.bind(this)}
            >
              <img className="switch switch-background middle" src={SwitchMiddle} />
              <img className="switch switch-background on" src={SwitchOn} />
              <img className="switch switch-background off" src={SwitchOff} />
              <img className="switch switch-button" src={SwitchButton} />
            </div>
          }
        </Measure>
      );
  }
}


function newValue(value) {
  if (value >= 0 && value <= 2) {
    return (value + 1) % 3;
  } else {
    alert('error: switch value outside valid range');
  }
}

export default(Switch)
