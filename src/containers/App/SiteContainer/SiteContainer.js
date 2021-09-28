import React, { useRef, useCallback } from 'react';
import * as PropTypes from 'prop-types';

import '../../../webComponents/WebPreview';

const SiteContainer = ({ content, onSelection }) => {

  const ref = useRef(null);

  const onTextSelection = useCallback(event => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      onSelection(selectedText);
    }
    window.getSelection().empty();
  }, [onSelection]);

  return (
    <web-preview
      ref={ref}
      content={content}
      onMouseUp={onTextSelection}
    />
  );
};

SiteContainer.propTypes = {
  content: PropTypes.string,
  onSelection: PropTypes.func,
};

SiteContainer.defaultProps = {
  content: '',
  onSelection: () => {},
};

export default SiteContainer;
export { SiteContainer };
