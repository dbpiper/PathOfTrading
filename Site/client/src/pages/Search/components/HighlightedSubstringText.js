import React from 'react';

import HighlightableText from './HighlightableText';

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

const charCodeSum = (str) => {
  let result = 0;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    result += str.charCodeAt(i);
  }

  if (result <= 0) {
    result = Math.floor(Math.random() * (100000 - 1) + 1);
  }

  return result;
}

function HighlighedSubstringText(props) {
  return (
    <div>
      {(splitText(props.item)).map(
        (textItem) => (
        <HighlightableText key={charCodeSum(textItem)} textItem={textItem} cursor={props.cursor} />
      ),
    )}
    </div>
  );
}

export default HighlighedSubstringText;
