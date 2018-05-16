import React, { Component } from 'react';

import LabeledSwitch from '../LabeledSwitch';
import Textbox from '../Textbox';
import LabeledRange from '../LabeledRange';

import styles from './TestBody.css';

class TestBody extends Component {
  render() {
    return (
      <div className={styles.containerGrid}>
        <span className={styles.one}>
          <LabeledSwitch label="Crafted" />
        </span>
        <span className={styles.two}>
          <Textbox placeholder="Seller"/>
        </span>
        <span className={styles.three}>
          <LabeledRange label="Links" />
        </span>
      </div>
    );
  }
}

export default TestBody;
