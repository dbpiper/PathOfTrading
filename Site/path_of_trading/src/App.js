import React, { Component } from 'react';

import LabeledSwitch from './components/LabeledSwitch';
import Textbox from './components/Textbox';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LabeledSwitch label="Crafted" />
        <Textbox />
      </div>
    );
  }
}

export default App;
