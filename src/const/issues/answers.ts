/* eslint-disable no-console */
export const answers: {
  [key: string]: {
    string: string;
    script: () => void;
  };
} = {
  'js-1-1': {
    string: 'console.log("イカしてるぜ");\nconsole.log(4 + 7);',
    script: () => {
      console.log('イカしてるぜ');
      console.log(4 + 7);
    },
  },
  'js-1-2': {
    string:
      'const hint = "NEWSはそれぞれの頭文字"\nconsole.log(hint)\n\nconst number = 11\nconsole.log(number % 3)',
    script: () => {
      const hint = 'NEWSはそれぞれの頭文字';
      console.log(hint);
      const number = 11;
      console.log(number % 3);
    },
  },
};
