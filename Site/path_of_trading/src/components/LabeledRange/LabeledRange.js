import classNames from 'classnames';

import React from 'react';

import Range from '../Range';
import styles from './LabeledRange.css';

class LabeledRange extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={styles.labeledRangeContainer}>
        <label className={styles.rangeLabel}>
          {this.props.label}
        </label>
        <Range />
      </span>
    );
  }
}

export default LabeledRange
