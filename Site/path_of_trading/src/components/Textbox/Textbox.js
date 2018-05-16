import classNames from 'classnames';

import React from 'react';
import styles from './Textbox.css';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={styles.textboxContainer}>
        <input type="text" className={styles.textbox} placeholder={this.props.placeholder} />
      </span>
    );
  }
}

export default Textbox
