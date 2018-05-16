import classNames from 'classnames';

import React from 'react';

// import NumericField from '../NumericField';
import NumericField from '../NumericField';
import styles from './Range.css';

class Range extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={styles.rangeContainer}>
        <NumericField placeholder="Min" />
        <NumericField placeholder="Max" />
      </span>
    );
  }
}

export default Range
