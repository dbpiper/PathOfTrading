import React from 'react';
import Switch from '../Switch';
import s from './LabeledSwitch.css';


class LabeledSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleClick(switchValue) {
    // this.setState({value: event.target.value});

    /*
      TODO:
        1. set state in labeled switch to the state value
            of switch (0 - off,1 - on,2 - middle/neither/either)
        2. play transition (button moving) animation
        3. change background image
    */
  }

  handleResize(dimensions) {
    this.divElement.style.height = dimensions.height + 'px';
    // this.divElement.style.background = '#FF0000';
  }

  render() {
    return (
      <div className="labeledSwitch"

        ref={(divElement) => this.divElement = divElement}
      >
        <label for="switch" className="switchLabel">
          {this.props.label}
        </label>
          <Switch
            name="switch"
            value={this.state.value}
            onClick={() => this.handleClick()}
            onResize={this.handleResize.bind(this)}
          />
      </div>
    );
  }
}

export default(LabeledSwitch);
