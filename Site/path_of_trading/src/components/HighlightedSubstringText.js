import React from 'react';

import HighlightableText from './HighlightableText';

import styled from 'styled-components';
import standardFont from '../styles/standardFont';

import Constants from '../Constants';

const splitText = (item) => {
  let startOfSubstring = item.name.toLowerCase().indexOf(item.substring);
  return [
    {
      type: 'normal',
      text: item.name.substring(0, startOfSubstring),
    },
    {
      type: 'highlighted',
      text: item.name.substring(startOfSubstring, startOfSubstring + item.substring.length),
    },
    {
      type: 'normal',
      text: item.name.substring(startOfSubstring + item.substring.length),
    }
  ];
};

function HighlighedSubstringText(props) {
  return (
    <div>
      {(splitText(props.item)).map(
        (textItem) => (
        <HighlightableText textItem={textItem}/>
      ),
    )}
    </div>
  );
}

export default HighlighedSubstringText
