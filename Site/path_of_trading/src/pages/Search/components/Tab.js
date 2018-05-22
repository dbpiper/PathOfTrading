import React from 'react';
import styled from 'styled-components';

import headingFont from 'shared/styles/headingFont';

const Div = styled.div`
    & {
      ${headingFont}

      cursor: pointer;

      width: 125px;
    }
`;

class Tab extends React.Component {
  render() {
    return (
      <Div onClick={() => this.props.onClick(this.props.title)}>
        {this.props.title}
      </Div>
    );
  }
}

export default Tab;
