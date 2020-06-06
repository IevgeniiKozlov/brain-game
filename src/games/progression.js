import getRandomInt from '../random-integer.js';
import getLetPlay from '../cli.js';


const description = 'What number is missing in the progression?';

const generateProgression = (start, step, iter) => {
  const num = start + (step * iter);
  if (iter === 9) return num;
  return [num, generateProgression(start, step, iter + 1)];
};

const gameData = () => {
  const num = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const progression = generateProgression(num, step, 0).flat(Infinity);
  const index = getRandomInt(0, 10);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};


export default () => getLetPlay(description, gameData);
