import React, { useCallback, useState } from 'react';

import { Toolbar } from './Toolbar';
import { SiteContainer } from './SiteContainer';
import { Keywords } from './Keywords';
import { sources, defaultContent } from './assets';
import { insertKeyword } from './utils';
import { Wrapper } from './App.style';

const App = () => {

  const [contentType, setContentType] = useState('simple');
  const [content, setContent] = useState(defaultContent);
  const [keywords, setKeywords] = useState([]);

  const onChangeContentType = useCallback(contentType => {
    setContentType(contentType);
    setContent(sources[contentType].html);
    setKeywords([]);
  }, [setContentType, setContent]);

  const onSelection = useCallback(entry => {
    const { done, result } = insertKeyword(content, entry);
    if (!done) {
      return;
    }

    keywords.push(entry);
    setKeywords([...new Set(keywords)]);
    setContent(result);
  }, [content, keywords, setKeywords, setContent]);

  return (
    <Wrapper>
      <div>
        <Toolbar
          contentType={contentType}
          onChangeContentType={onChangeContentType}
        />
        <div className="workspace">
          <SiteContainer
            content={content}
            onSelection={onSelection}
          />
        </div>
      </div>
      <div>
        <Keywords keywords={keywords} />
      </div>
    </Wrapper>
  );
};

export { App };
