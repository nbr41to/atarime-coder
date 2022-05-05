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
  'js-1-3': {
    string:
      'let yourName = "octopus"\nconsole.log(yourName)\nyourName = "squid"\nconsole.log(yourName)',
    script: () => {
      let yourName = 'octopus';
      console.log(yourName);
      yourName = 'squid';
      console.log(yourName);
    },
  },
  'js-1-4': {
    string:
      'let direction = "left"\nif (direction === "left") {\n  direction = "west"\n}\nconsole.log(direction)',
    script: () => {
      let direction = 'left';
      if (direction === 'left') {
        direction = 'west';
      }
      console.log(direction);
    },
  },
  'js-1-5': {
    string:
      'const directions = ["north", "east", "west", "south"]\nconsole.log(directions[2])',
    script: () => {
      const directions = ['north', 'east', 'west', 'south'];
      console.log(directions[2]);
    },
  },
  'js-1-6': {
    string:
      'const dice = Math.floor(Math.random() * 3)\nswitch (dice) {\n  case 0:\n    console.log("最高にイカしてるぜ！")\n    break\n  case 1:\n    console.log("ごきげんイカがか？")\n    break\n  case 2:\n    console.log("まぁまぁじゃないイカ")\n    break\n  default:\n    console.log("とんだイカれ野郎だ")\n    break\n}',
    script: () => {
      const dice = Math.floor(Math.random() * 3);
      switch (dice) {
        case 0:
          console.log('最高にイカしてるぜ！');
          break;
        case 1:
          console.log('ごきげんイカがか？');
          break;
        case 2:
          console.log('まぁまぁじゃないイカ');
          break;
        default:
          console.log('とんだイカれ野郎だ');
          break;
      }
    },
  },
};
