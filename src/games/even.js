import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => (num % 2 === 0);

const getEven = () => {
  const num = getRandomInt(1, 100);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};


export default () => letPlay(description, getEven);
