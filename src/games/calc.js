#!/usr/bin/env node
import getLetPlay from '../cli.js';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = 'What is the result of the expression?';

const operand = ['+', '-', '*'];

const gameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const index = getRandomInt(0, 2);
  const sign = operand[index];
  const question = `${num1} ${sign} ${num2}`;
  switch (sign) {
    case '+':
      return [question, num1 + num2];
    case '-':
      return [question, num1 - num2];
    case '*':
      return [question, num1 * num2];
    default:
      throw new Error('Error');
  }
};

export default () => getLetPlay(description, gameData);
