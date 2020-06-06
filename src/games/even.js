import getRandomInt from '../random-integer.js';
import getLetPlay from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameData = () => {
  const num = getRandomInt(1, 100);
  const question = `${num}`;
  const answer = isEven(num);
  return [question, answer];
};


export default () => getLetPlay(description, gameData);
