import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';

const description = 'What is the result of the expression?';

const mathSigns = ['+', '-', '*'];

const getCalc = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const index = getRandomInt(0, mathSigns.length - 1);
  const sign = mathSigns[index];
  const question = `${num1} ${sign} ${num2}`;
  let answer;
  switch (sign) {
    case '+':
      answer = (num1 + num2);
      break;
    case '-':
      answer = (num1 - num2);
      break;
    case '*':
      answer = (num1 * num2);
      break;
    default:
      throw new Error('Error');
  }
  return [question, answer.toString()];
};

export default () => letPlay(description, getCalc);
