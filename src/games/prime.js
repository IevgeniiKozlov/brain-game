#!/usr/bin/env node
import getLetPlay from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNaturalNum = (num, i) => ((num % i === 0));

const gameData = () => {
  const num = getRandomInt(1, 100);
  const question = `${num}`;
  let count = 0;
  for (let i = 1; i <= num; i += 1) {
    if (isNaturalNum(num, i)) {
      count += 1;
    }
  }
  return (count > 2) ? [question, 'no'] : [question, 'yes'];
};

export default () => getLetPlay(description, gameData);
