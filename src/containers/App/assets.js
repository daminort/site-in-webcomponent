import {
  bootstrap,
  goLang,
  loremIpsum,
  simpleHTML,
  wordPress,
} from './mocks';

export const sources = {
  simple: { title: 'Simple HTML', html: simpleHTML },
  lorem: { title: 'Lorem Ipsum', html: loremIpsum },
  goLang: { title: 'GO Lang', html: goLang },
  bootstrap: { title: 'Bootstrap', html: bootstrap },
  wordPress: { title: 'WordPress', html: wordPress },
};

export const defaultContent = simpleHTML;
