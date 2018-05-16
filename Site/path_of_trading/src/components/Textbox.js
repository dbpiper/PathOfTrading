import classNames from 'classnames';

import React from 'react';
// import styles from './Textbox.css';

import styled from 'styled-components';

import textbox from '../styles/textbox';


const TextboxContainer = styled.span`
  position: relative;
  display: flex;

  align-items: center;
`;

const TextboxInput = styled.input.attrs({
  type: "text",
})`
  ${textbox}
`;


function Textbox(props) {
    return (
      <TextboxContainer>
        <TextboxInput placeholder={props.placeholder} />
      </TextboxContainer>
    );
}

// class Textbox extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <span className={styles.textboxContainer}>
//         <input type="text" className={styles.textbox} placeholder={this.props.placeholder} />
//       </span>
//     );
//   }
// }

export default Textbox
