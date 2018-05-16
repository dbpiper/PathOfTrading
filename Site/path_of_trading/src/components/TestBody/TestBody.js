import React, { Component } from 'react';

import LabeledSwitch from '../LabeledSwitch';
import Textbox from '../Textbox';

import './TestBody.css';

class TestBody extends Component {
  render() {
    return (
      <div className="container-grid">
        <span className="one">
          <LabeledSwitch label="Crafted" />
        </span>
        <span className="two">
          <Textbox placeholder="Seller"/>
        </span>
      </div>
    );
  }
}

export default TestBody;
