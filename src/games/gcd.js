import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  let tmp;
  for (let i = 1; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      tmp = i;
    }
  }
  return tmp;
};

const generateGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} & ${num2}`;
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

export default () => letPlay(description, generateGameData);
