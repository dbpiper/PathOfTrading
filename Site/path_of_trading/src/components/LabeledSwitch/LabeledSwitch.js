import React from 'react';
import Switch from '../Switch';
import s from './LabeledSwitch.css';


class LabeledSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleClick(event) {
    // this.setState({value: event.target.value});
    alert("clicked");
  }

  handleResize(dimensions) {
    this.divElement.style.width = dimensions.width + 'px';
    this.divElement.style.height = dimensions.height + 'px';
    // this.divElement.style.background = '#FF0000';
  }

  render() {
    return (
      <div className="labeledSwitch"

        ref={(divElement) => this.divElement = divElement}
      >
        <label className="switchLabel">
          {this.props.label}
        </label>
          <Switch
            value={this.state.value}
            onClick={() => this.handleClick()}
            onResize={this.handleResize.bind(this)}
          />
      </div>
    );
  }
}

export default(LabeledSwitch);
