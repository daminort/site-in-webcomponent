import React from 'react';
import * as PropTypes from 'prop-types';

import { Wrapper } from './Keywords.style';

const Keywords = ({ keywords }) => {

  return (
    <Wrapper>
      <div className="title">Selected words</div>
      {keywords.map((word, index) => {
        return (
          <div className="item" key={index}>{word}</div>
        );
      })}
    </Wrapper>
  );
};

Keywords.propTypes = {
  keywords: PropTypes.array,
};

Keywords.defaultProps = {
  keywords: [],
};

export default Keywords;
export { Keywords };
