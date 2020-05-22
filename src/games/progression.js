#!/usr/bin/env node
import getLetPlay from '../cli.js';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const num = getRandomInt(1, 100);
  const numProgression = getRandomInt(1, 10);
  const arr = [num];
  while (arr.length < 10) {
    const lastIndex = arr.length - 1;
    arr.push(arr[lastIndex] + numProgression);
  }
  return arr;
};
const gameData = () => {
  const progression = generateProgression();
  const index = getRandomInt(0, 10);
  const hidenNumber = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, hidenNumber.toString()];
};


export default () => getLetPlay(description, gameData);
