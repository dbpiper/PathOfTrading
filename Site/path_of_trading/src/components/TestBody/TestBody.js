import React, { Component } from 'react';

import Label from '../Label';
import Switch from '../Switch';
import Textbox from '../Textbox';
import Range from '../Range';

import styles from './TestBody.css';

class TestBody extends Component {
  render() {
    return (
      <div className={styles.containerGrid}>
        <span className={styles.oneOne}>
          <Label value="Crafted" />
        </span>
        <span className={styles.oneTwo}>
          <Switch label="Crafted" />
        </span>
        <span className={styles.twoOne}>
          <Textbox placeholder="Seller"/>
        </span>
        <span className={styles.threeOne}>
          <Label value="Links" />
        </span>
        <span className={styles.threeTwo}>
          <Range label="Links" />
        </span>
      </div>
    );
  }
}

export default TestBody;
