#!/usr/bin/env node
import getLetPlay from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const minNum = Math.min(num1, num2);
  const question = `${num1} & ${num2}`;
  let tmp;
  for (let i = 1; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      tmp = i;
    }
  }
  return [question, tmp];
};


export default () => getLetPlay(description, gameData);