import React from 'react';

import styles from './Label.css';

function Label(props) {
  return (
    <label className={styles.label}>
      {props.value}
    </label>
  );
}

export default Label
