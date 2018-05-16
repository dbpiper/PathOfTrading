import Measure from 'react-measure';

import React from 'react';
import Switch from '../Switch';
import styles from './LabeledSwitch.css';


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
    this.setState({
      value: value,
    });
  }

  handleResize(dimensions) {

    this.setState({...this.state,
      switchWidth: dimensions.width,
      switchHeight: dimensions.height,
    });
  }


  render() {
    return (
              <div className={styles.labeledSwitchContainer}

                ref={(divElement) => this.divElement = divElement}
              >

        <Measure
          bounds
          onResize={(contentRect)=> {
            this.setState({...this.state,
              labelWidth: contentRect.bounds.width,
              labelHeight: contentRect.bounds.height,
            });
          }}
        >
          {({ measureRef }) =>
                <label ref={measureRef} className={styles.switchLabel}>
                  {this.props.label}
                </label>
          }
        </Measure>
                  <Switch
                    className={styles.switch}
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
