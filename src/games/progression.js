import getRandomInt from '../random-integer.js';
import getLetPlay from '../cli.js';


const description = 'What number is missing in the progression?';

const getProgression = (start, step, iter) => {
  const num = start + (step * iter);
  const lengthProgression = 9;
  if (iter === lengthProgression) return num;
  return [num, generateProgression(start, step, iter + 1)];
};

const generateGameData= () => {
  const num = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const progression = getProgression(num, step, 0).flat(Infinity);
  const index = getRandomInt(0, 10);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};


export default () => getLetPlay(description, generateGameData);
