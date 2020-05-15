#!/usr/bin/env node
import getLetPlay from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const gameData = () => {
  const num = getRandomInt(1, 100);
  if (num % 2 === 0) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};


export default () => getLetPlay(description, gameData);
