import Measure from 'react-measure';

import React from 'react';
import Switch from '../Switch';
import s from './LabeledSwitch.css';


class LabeledSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2, windowDim: {width: 0, height: 0,},};

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      value: this.state.value,
      windowDim: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      rowWidth: 0,
      rowHeight: 0,
      switchWidth: 0,
      switchHeight: 0,
      labelWidth: 0,
      labelHeight: 0,
    });
  }

  handleClick(value) {
    // this.setState({value: event.target.value});

    /*
      TODO:
        1. set state in labeled switch to the state value
            of switch (0 - off,1 - on,2 - middle/neither/either)
        2. play transition (button moving) animation
        3. change background image
    */
    this.setState({
      value: value,
    });
  }

  handleResize(dimensions) {

    this.setState({...this.state,
      switchWidth: dimensions.width,
      switchHeight: dimensions.height,
    });
    // this.divElement.style.background = '#FF0000';

    // this.divElement.style.width =
    //             this.state.labelWidth +
    //             // this.state.windowDim.width*0.1 +
    //             this.state.switchWidth + 'px';



    // if (this.state.labelHeight > this.state.switchHeight) {
    //   this.divElement.style.height = this.state.labelHeight + 'px';
    // } else {
    //   this.divElement.style.height = this.state.switchHeight + 'px';
    // }
  }


  render() {
    return (
              <div className="labeledSwitch"

                ref={(divElement) => this.divElement = divElement}
              >

        <Measure
          bounds
          onResize={(contentRect)=> {
            // this.setState({ dimensions: {
            //   width: contentRect.bounds.width,
            //   height: contentRect.bounds.height,
            // }});
            // this.props.onResize(this.state.dimensions);
            this.setState({...this.state,
              labelWidth: contentRect.bounds.width,
              labelHeight: contentRect.bounds.height,
            });
          }}
        >
          {({ measureRef }) =>
                <label ref={measureRef} className="switchLabel">
                  {this.props.label}
                </label>
          }
        </Measure>
                  <Switch
                    className="switchActual"
                    name="switch"
                    value={this.state.value}
                    unselectable="on"
                    onselectstart="return false;"
                    onClick={this.handleClick.bind(this)}
                    onResize={this.handleResize.bind(this)}
                  />
              </div>
    );
  }
}

export default(LabeledSwitch);
