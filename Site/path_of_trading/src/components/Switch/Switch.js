import Measure from 'react-measure';
import classNames from 'classnames';

import React from 'react';
import s from './Switch.css';

import SwitchMiddle from '../../public/svg/Switch_Middle.svg';
import SwitchButton from '../../public/svg/Switch_Button.svg';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      }
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
            <div className="frame"
              ref={measureRef}
            >
              <img className="switch switch-background" src={SwitchMiddle} />
              <img className="switch switch-button" src={SwitchButton} />
            </div>
          }
        </Measure>
        // <div className="frame">
        //       <img className="switch switch-background" src={SwitchMiddle} />
        //       <img className="switch switch-button" src={SwitchButton} />
        // </div>
      );
  }
}


export default(Switch)
