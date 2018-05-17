import React from 'react';
import styled from 'styled-components';
import standardFont from '../styles/standardFont';
import Constants from '../Constants';

const LabelEle = styled.label`
    & {
      font-weight: ${(props) => props.textItem.type === 'normal' ? 300 : 600 }
    }
`;

class HighlightableText extends React.Component {
  render() {
    return (
      <LabelEle textItem={this.props.textItem}>
        {this.props.textItem.text}
      </LabelEle>
    );
  }
}

export default HighlightableText
