import classNames from 'classnames';

import React from 'react';
import styles from './NumericField.css';

class NumericField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={styles.numericFieldContainer}>
        <input type="number"
               className={styles.numericField}
               placeholder={this.props.placeholder}
        />
      </span>
    );
  }
}

export default NumericField
