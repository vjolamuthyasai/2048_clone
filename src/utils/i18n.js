// i18n text
const data = {
  lang: ['en'],
  default: 'en',
  text: {
    title: { en: 'React 2048' },
    home: {
      en: 'Home',
    },
    comments: {
      en: 'Comments',
    },
    ranking: {
      en: 'Ranking',
    },
    chartTitle: {
      en: '2048 Ranking list',
    },
    chartSubTitle: {
      en: 'Come on! (ง •̀_•́)ง',
    },
    score: { en: 'SCORE' },
    best: { en: 'BEST' },
    tipTitle: { en: 'Tips' },
    tipContent: {
      en: 'Use keyboard arrow keys (or `WASD` if you like) control blocks;Click undo button to revert to last step status if you regrets。You score will upload to ranking list after you login at `Comments` panel',
    },
    commentTitle: {
      en: 'Welcome to leave comments',
    },
  },
};

const text = {};
const lang = (() => {
  let lan = navigator.language || navigator.userLanguage;
  lan = lan === 'en-US' ? 'en' : lan;
  lan = ['en'].includes(lan) ? lan : data.default; // Set default language
  return lan;
})();

Object.keys(data.text).map((key) =>
  Object.defineProperty(text, [key], {
    get: () => data.text[key][lang],
  })
);
