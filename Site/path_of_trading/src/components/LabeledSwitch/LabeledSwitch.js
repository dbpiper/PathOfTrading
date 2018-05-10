import React from 'react';
import Switch from '../Switch';
import s from './LabeledSwitch.css';

class LabeledSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="labeledSwitch">
        <label>
          {this.props.label}
          <Switch value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default(LabeledSwitch);
