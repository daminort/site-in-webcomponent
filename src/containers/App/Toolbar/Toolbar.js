import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { sources } from '../assets';

const Toolbar = ({ contentType, onChangeContentType, onContentLoad }) => {

  const [url, setURL] = useState('');

  const onClickLink = useCallback(contentType => () => {
    onChangeContentType(contentType);
  }, [onChangeContentType]);

  const onChangeURL = useCallback(({ target }) => {
    setURL(target.value);
  }, [setURL]);

  const onClickLoad = useCallback(() => {
    fetch(url)
      .then(res => {
        onContentLoad(res);
      }).catch(error => {
        console.error('Failed', error.message);
      });
  }, [url, onContentLoad]);

  const links = Object.keys(sources).map(key => {
    const { title } = sources[key];
    const className = clsx('link', { active: key === contentType });
    return (
      <div
        className={className}
        key={key}
        onClick={onClickLink(key)}
      >
        {title}
      </div>
    );
  });

  const showInputs = false;

  return (
    <div className="toolbar">
      <div className="links">
        <div className="label">Static HTML content:</div>
        {links}
      </div>
      {showInputs && (
        <div className="inputs">
          <div className="label">URL:</div>
          <Input
            value={url}
            onChange={onChangeURL}
          />
          <Button onClick={onClickLoad} type="primary">Load</Button>
        </div>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  contentType: PropTypes.string,
  onChangeContentType: PropTypes.func,
  onContentLoad: PropTypes.func,
};

Toolbar.defaultProps = {
  contentType: '',
  onChangeContentType: () => {},
  onContentLoad: () => {},
};

export default Toolbar;
export { Toolbar };
