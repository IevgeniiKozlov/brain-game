import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => (num % 2 === 0);

const getEven = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};


export default () => letPlay(description, getEven);
