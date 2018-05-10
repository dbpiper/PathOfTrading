import React from 'react';
import s from './Switch.css';

import switchMiddle from '../../../public/svg/Switch_Middle.svg';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <img src={switchMiddle} />
      );
  }
}


export default(Switch);
