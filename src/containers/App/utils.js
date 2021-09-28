import { orderBy } from 'lodash';
import { THEME } from '../../constants/theme';

const { colors } = THEME;

function createRegExp(text) {
  try {
    const regExp = new RegExp(`(?<=\\>)([^\\<\\>]*?)(${text})([^\\<\\>]*?)(?=\\<)`, 'gm');
    return regExp;

  } catch (error) {
    // nothing
  }

  return null;
}

function getMatchPosition(execResult = []) {
  const [_, before, entry] = execResult;
  const start = execResult.index + before.length;
  const end = start + entry.length;

  return {
    start,
    end,
    entry,
  };
}

export function insertKeyword(content = '', text = '') {
  const emptyResult = {
    done: false,
    result: content,
  };

  if (!content || !text) {
    return emptyResult;
  }

  const regExp = createRegExp(text);
  if (!regExp) {
    return emptyResult;
  }

  const matches = [];

  let execResult = regExp.exec(content);
  while (execResult !== null) {
    const { start, end, entry } = getMatchPosition(execResult);

    matches.push({
      start,
      end,
      entry,
    });

    execResult = regExp.exec(content);
  }

  if (!matches.length) {
    return emptyResult;
  }

  let result = content;
  orderBy(matches, ['start'], ['desc']).forEach(match => {
    const { start, end, entry } = match;
    const before = result.slice(0, start);
    const after = result.slice(end);
    const middle = `<span style="background-color:${colors.keyword};padding:2px;">${entry}</span>`;

    result = `${before}${middle}${after}`;
  });

  return {
    done: true,
    result,
  };
}
