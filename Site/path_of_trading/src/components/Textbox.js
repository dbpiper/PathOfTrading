import classNames from 'classnames';

import React from 'react';
// import styles from './Textbox.css';

import styled from 'styled-components';


const TextboxContainer = styled.span`
  position: relative;
  display: flex;

  align-items: center;
`;

const TextboxInput = styled.input.attrs({
  type: "text",
})`

  /* Chrome, Firefox, Opera, Safari 10.1+ */
  &::placeholder {
    color: #FEFDFF;

    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: #FEFDFF;

    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: #FEFDFF;

    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }

  &:focus {
    outline: none;
    border: none;
      border-color: none;
      -webkit-box-shadow: none;
              box-shadow: none;
  }

  & {
    border: none;
    border-color: none;
    -webkit-box-shadow: none;
            box-shadow: none;

    height: 45px;

    width: 30%;

    caret-color: #FEFDFF;
    background-color: rgba(188, 212, 222, 0.42); /* #BCD4DE */
    color: #FEFDFF;

    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;

    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    padding: 10px;

      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
         -moz-box-sizing: border-box;    /* Firefox, other Gecko */
              box-sizing: border-box;         /* Opera/IE 8+ */
  }
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
