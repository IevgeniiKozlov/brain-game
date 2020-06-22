import getRandomInt from '../random-integer.js';
import letPlay from '../cli.js';


const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const getProgression = (start, step, iter) => {
  const num = start + (step * iter);
  if (iter === lengthProgression) return num;
  return [num, getProgression(start, step, iter + 1)];
};

const generateGameData = () => {
  const num = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const progression = getProgression(num, step, 1).flat(Infinity);
  const index = getRandomInt(0, progression.length - 1);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};


export default () => letPlay(description, generateGameData);
