import React, { Component } from 'react';

import LabeledSwitch from './components/LabeledSwitch';
import Switch from './components/Switch';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <LabeledSwitch label="Crafted" />
      // <Switch onResize={() => {}} />
    );
  }
}

export default App;
