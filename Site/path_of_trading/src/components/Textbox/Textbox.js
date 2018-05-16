import classNames from 'classnames';

import React from 'react';
import s from './Textbox.css';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="textboxContainer">
        <input type="text" className="textbox" placeholder={this.props.placeholder} />
      </span>
    );
  }
}

export default Textbox
