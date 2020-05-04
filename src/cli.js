#!/usr/bin/env node
import readlineSync from 'readline-sync';

const play = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};
export default play;
